import { NextResponse } from "next/server";
// import generateUniqueId from "generate-unique-id";
import { Banners, HomeBanner, HomeBottomBanners, HomeSideBanners, User } from "@/lib/models";
import dbConnect from "@/lib/dbConnect";
import axios from "axios";
import mongoose from "mongoose";
import jwt from "jsonwebtoken";

export async function GET(req, { params }) {

    const { searchParams } = new URL(req.url);
    const code = searchParams.get("code");          

    if (!code) return NextResponse.json({ error: "No code returned from Google" });
    
     // Exchange code for access token
    const tokenRes = await axios.post("https://oauth2.googleapis.com/token", {
            code,
            client_id: process.env.GOOGLE_CLIENT_ID,
            client_secret: process.env.GOOGLE_CLIENT_SECRET,
            redirect_uri: process.env.NODE_ENV === "production" ? process.env.GOOGLE_REDIRECT_URI : process.env.NEXT_PUBLIC_GOOGLE_REDIRECT_URI,
            grant_type: "authorization_code",
        },
        {
            headers: {
                "Content-Type": "application/json",
            },
        }
    );

    const { access_token } = tokenRes.data;

    const userRes = await axios.get(
        "https://www.googleapis.com/oauth2/v2/userinfo", 
        {
            headers: {
                Authorization: `Bearer ${access_token}`,
            },
        }
    );

    const googleUser = userRes.data;

    await dbConnect();

    let user = await User.findOne({googleId: googleUser.id}).populate('address');
    var id = new mongoose.Types.ObjectId();
    if (!user) {
        user = await User.create({
            _id: id,
            id: googleUser.id,
            googleId: googleUser.id,
            email: googleUser.email,
            name: googleUser.name,
            // avatar: googleUser.picture,
        });
        await user.save(); 
    }

    const token = jwt.sign(
        { _id: user.id, email: user.email },
        process.env.JWT_SECRET,
        { expiresIn: "7d" }
    );

    const response = NextResponse.redirect(new URL("/", req.url));
    response.cookies.set("token", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        path: "/",
    });

    return response;
}


export async function POST(req) {
  const { code } = await req.json();

  try {
    // Exchange code → tokens
    const tokenRes = await axios.post("https://oauth2.googleapis.com/token", null, {
        params: {
          client_id: process.env.GOOGLE_CLIENT_ID,
          client_secret: process.env.GOOGLE_CLIENT_SECRET,
          code,
          grant_type: "authorization_code",
          redirect_uri: "postmessage",
        },
      }
    );

    const { id_token } = tokenRes.data;
    const googleUser = jwt.decode(id_token);
    if (!googleUser.email) NextResponse.json({ success: false, error: 'Invalid User Id.' });
    await dbConnect();

    let user = await User.findOne({'email': googleUser.email}).populate('address');  // googleUser.id is not available so we must use email  
    if (!user) {
        var id = new mongoose.Types.ObjectId();
        user = await User.create({
            _id: id,
            id: id,
            // googleId: googleUser.id,
            email: googleUser.email,
            name: googleUser.name,
            avatar: googleUser.picture,
        });
        await user.save(); 
    }

    const token = jwt.sign(
        { _id: user.id, email: user.email },
        process.env.JWT_SECRET,
        { expiresIn: "7d" }
    );

    const res = NextResponse.json({ success: true, data: user });

    res.cookies.set("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
    });

    return res;
  } catch (error) {
    console.error(error);
    return NextResponse.json({ success: false, error: error.message });
  }
}
