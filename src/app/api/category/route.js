import { NextRequest, NextResponse } from "next/server";
// import fs from 'fs';
import dbConnect from "@/lib/dbConnect";
import { Category } from "@/lib/models";
import mongoose from "mongoose";
import { waitFor } from "@/api/actionUtils";
import { handleImages } from "../serverUtils";

export async function GET(req, { params }) {

    // var data = JSON.parse(fs.readFileSync(process.cwd() + '/src/app/api/data.json', 'utf8'));
    // let categories = data.category;
    // return NextResponse.json(categories);

    await dbConnect();

    const category = await Category.find()   //.populate('children').exec();
    return NextResponse.json({ categoryList: category });


}

export async function DELETE(req) {

    const body = await req.json();
    const id = body.id;
    console.log(id, 'target log id -------------------------------------------------------------');
    
    await dbConnect();

    await Category.deleteOne({ id: id });    
    await waitFor(2000);
    return NextResponse.json({ message: 'Successfully deleted the Item.' });


}


export async function POST(req) {

    await dbConnect();
    
    // const body = await req.json();
    const body = await req.formData();  
    
    const category = {
        name: body.get('name'),
        images: body.getAll('images[]'),
        color: body.get('color'),
    }

    const imageUrlList = await handleImages('category', category.images, category.name);    

    // let fileUrlList = [];
    // for (let i = 0; i < category.images.length; i++) {
    //     const image = category.images[i];
    //     console.log(image);   
    //     const extension = image.name.split('.').pop();
    //     const fileName = `${body.get('name')}_${i+1}.${extension}`;
    
    //     const bufferedImage = await image.arrayBuffer();

    //     const buffer = Buffer.from(bufferedImage);

    //     const folderName = 'category';

    //     const {absolutePath, relativePath} = await handleDirectory(folderName);

    //     await writeFile(`${absolutePath}/${fileName}`, buffer);
    //     const fileUrl = `${relativePath}/${fileName}`;
    //     fileUrlList.push(fileUrl);
    // }
   
    var id = new mongoose.Types.ObjectId();
    const doc = new Category({ 
        _id: id,
        id: id,
        name: category.name,
        images: imageUrlList,
        color: category.color,
        slug: category.name,
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
    //     catName: "New Category Item",
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

