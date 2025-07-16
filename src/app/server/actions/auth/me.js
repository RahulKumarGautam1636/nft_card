'use server'
import dbConnect from "@/lib/dbConnect";
import { User } from "@/lib/models";
import { getUserFromToken } from "../login";
import { parseData } from "@/api/actionUtils";

export async function verifyLogin() { 
    const cookieUser = await getUserFromToken();
    console.log(cookieUser);    
    if (!cookieUser) return parseData({status: 401, message: 'You are not logged in.'})
    await dbConnect();
    let user = await User.findOne({"id": cookieUser._id}).populate('address');
    if (!user) return parseData({status: 404, message: 'Invalid User.'})
    return parseData({status: 200, data: user})
}