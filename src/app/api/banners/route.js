import { NextRequest, NextResponse } from "next/server";
import fs from 'fs';
import generateUniqueId from "generate-unique-id";
import { Banners, HomeBanner, HomeBottomBanners, HomeSideBanners } from "@/lib/models";
import dbConnect from "@/lib/dbConnect";
import mongoose from "mongoose";

export async function GET(req, { params }) {

    // var data = JSON.parse(fs.readFileSync(process.cwd() + '/src/app/api/data.json', 'utf8'));
    const searchParams = req.nextUrl.searchParams;       
    let type = searchParams.get('type');           
    // let banners = data[type];
    // return NextResponse.json(banners);

    await dbConnect();

    let banners = [];

    if (type === 'banners') {
        banners = await Banners.find({});
    } else if (type === 'homeBanner') {
        banners = await HomeBanner.find({});
    } else if (type === 'homeBottomBanners') {
        banners = await HomeBottomBanners.find({});
    } else if (type === 'homeSideBanners') {
        banners = await HomeSideBanners.find({});
    }
    // else if (type === 'homeBanners') {
    //     banners = await HomeBanner.find({});
    // }
    return NextResponse.json(banners);
}


export async function POST() {

    await dbConnect();

    var id = new mongoose.Types.ObjectId();
    
    const doc = new Banners({ 
        _id: id,
        id: id,
        images: [ 'banner 1', 'banner 2' ],
        catId: 'categoryId',
        catName: 'category Name',
        subCatId: 'sub Category id',
        subCatName: 'sub Category name'
    });

    await doc.save();  
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
