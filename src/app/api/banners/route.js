import { NextRequest, NextResponse } from "next/server";
import fs from 'fs';
import generateUniqueId from "generate-unique-id";

export async function GET(req, { params }) {

    var data = JSON.parse(fs.readFileSync(process.cwd() + '/src/app/api/data.json', 'utf8'));

    const searchParams = req.nextUrl.searchParams;       
    let type = searchParams.get('type');           
    let banners = data[type];
    
    if (!banners?.length) return NextResponse.json({ error: 'No Banners found.' }, { status: 404 });
    return NextResponse.json(banners);
}


export async function POST() {

    var data = JSON.parse(fs.readFileSync(process.cwd() + '/src/app/api/data.json', 'utf8'));

    let id = generateUniqueId({ length: 24 });
    let newBanner = {
        id: id,
        images: [ "no image" ],
        catId: "66c0d705430f507021d32294",
        catName: "New Category Item",
        subCatId: null,
        subCatName: null
    }
    data.banners.push(newBanner);

    try {
        await fs.writeFileSync(process.cwd() + '/src/app/api/data.json', JSON.stringify(data), 'utf8');
        return NextResponse.json(newBanner);
    } catch (error) {
        return NextResponse.json({ error: 'Something went wrong.' }, { status: 400 });
    }
}
