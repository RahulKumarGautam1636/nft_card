import { NextRequest, NextResponse } from "next/server";
import fs from 'fs';
import dbConnect from "@/lib/dbConnect";
import { SubCategory } from "@/lib/models";
import mongoose from "mongoose";
import { handleImages } from "../serverUtils";
import { waitFor } from "@/api/actionUtils";


export async function GET(req, { params }) {

    // var data = JSON.parse(fs.readFileSync(process.cwd() + '/src/app/api/data.json', 'utf8'));



    // let categories = data.category;
    // return NextResponse.json(categories);

    await dbConnect();

    const banners = await SubCategory.find().populate('parentCategory').exec();
    return NextResponse.json(banners);


}


export async function POST(req) {

    await dbConnect();

    // const body = await req.json();
    const body = await req.formData();  

    const subCategory = {
        name: body.get('name'),
        parentCategory: body.get('parentCategory'),
        createDate: body.get('createDate'),
        images: body.getAll('images[]'),
    }

    const imageUrlList = await handleImages('subCategory', subCategory.images, subCategory.name);
    console.log(imageUrlList);

    var id = new mongoose.Types.ObjectId;
    
    const doc = new SubCategory({ 
        _id: id,
        id: id,
        name: subCategory.name,
        images: imageUrlList,
        slug: subCategory.name,
        parentCategory: subCategory.parentCategory,
        children: []
    });

    await doc.save();  
    await waitFor(2000);
    return NextResponse.json({ title: 'Successfully created the item.'});


    // var data = JSON.parse(fs.readFileSync(process.cwd() + '/src/app/api/data.json', 'utf8'));

    // let id = generateUniqueId({ length: 24 });
    // let newBanner = {
    //     id: id,
    //     images: [ "no image" ],
    //     catId: "66c0d705430f507021d32294",
    //     catName: "New SubCategory Item",
    //     subCatId: null,
    //     subCatName: null
    // }
    // data.banners.push(newBanner);

    // try {
    //     await fs.writeFileSync(process.cwd() + '/src/app/api/data.json', JSON.stringify(data), 'utf8');
    //     return NextResponse.json(newBanner);
    // } catch (error) {
    //     return NextResponse.json({ error: 'Something went wrong.' }, { status: 400 });
    // }
}

export async function DELETE(req) {

    const body = await req.json();
    const id = body.id;
    console.log(id, 'target log id -------------------------------------------------------------');
    
    await dbConnect();

    await SubCategory.deleteOne({ id: id });    
    await waitFor(2000);
    return NextResponse.json({ message: 'Successfully deleted the Item.' });


}

