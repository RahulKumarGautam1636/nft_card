import { NextRequest, NextResponse } from "next/server";
import { client } from "../utils";
import dbConnect from "@/lib/dbConnect";
import { HomeBanners } from "@/lib/models";
import mongoose from "mongoose";

export async function GET(req, { params }) {

  if (req.method === 'GET') {
    
    await dbConnect();
  
    switch (req.method) {
      case 'GET':
        // const posts = await db.collection('products').find({}).toArray();

        // const banners = await HomeBanners.find({});
        // return NextResponse.json(banners);

        var id = new mongoose.Types.ObjectId();

        // const user = await HomeBanners.create({        // able to save multiple records as array.
        //   _id: id, 
        //   id: id, 
        //   images: ['/example-image-address'] 
        // });

        const doc = new HomeBanners({ 
          _id: id, 
          id: id, 
          images: ['/example-image-address'],
        });
        await doc.save();

        return NextResponse.json({ title: 'Successfully created the item.'});
        break;
      case 'POST':
        const newPost = req.body;
        const result = await db.collection('products').insertOne(newPost);
        NextResponse.json(result.ops[0]);
        break;
    }
  }
}



// export async function GET(req, { params }) {

//   if (req.method === 'GET') {
    
//     await client.connect();
//     const db = client.db();
  
//     switch (req.method) {
//       case 'GET':
//         const posts = await db.collection('products').find({}).toArray();
//         return NextResponse.json(posts);
//         break;
//       case 'POST':
//         const newPost = req.body;
//         const result = await db.collection('products').insertOne(newPost);
//         NextResponse.json(result.ops[0]);
//         break;
//     }
    
//     await client.close();
//   }
// }


