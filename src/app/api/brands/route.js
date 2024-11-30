import { NextRequest, NextResponse } from "next/server";
// import fs from 'fs';
import dbConnect from "@/lib/dbConnect";
import { Brands } from "@/lib/models";
import mongoose from "mongoose";
import { waitFor } from "@/api/actionUtils";
import { handleImages } from "../serverUtils";

export async function GET(req, { params }) {

    await dbConnect();

    const banners = await Brands.find()   //.populate('children').exec();
    return NextResponse.json(banners);
}

// export async function DELETE(req) {

//     const body = await req.json();
//     const id = body.id;
//     console.log(id, 'target log id -------------------------------------------------------------');
    
//     await dbConnect();

//     await Category.deleteOne({ id: id });    
//     await waitFor(2000);
//     return NextResponse.json({ message: 'Successfully deleted the Item.' });
// }


// export async function POST(req) {

//     await dbConnect();
    
//     const body = await req.formData();  
    
//     const category = {
//         name: body.get('name'),
//         images: body.getAll('images[]'),
//         color: body.get('color'),
//     }

//     const imageUrlList = await handleImages('category', category.images, category.name);
   
//     var id = new mongoose.Types.ObjectId();
//     const doc = new Category({ 
//         _id: id,
//         id: id,
//         name: category.name,
//         images: imageUrlList,
//         color: category.color,
//         slug: category.name,
//         children: []
//     });

//     await doc.save();  
//     await waitFor(2000);
//     return NextResponse.json({ title: 'Successfully created the item.'});
// }

