import { NextResponse } from "next/server";
import fs from 'fs';
import { client } from "../utils";
import { isLive, withDB } from "@/api/api";
import dbConnect from "@/lib/dbConnect";
import { Products } from "@/lib/models";
import mongoose from "mongoose";

export async function GET(req, { params }) {

    // if (!isLive) {

    //     var allProducts = JSON.parse(fs.readFileSync(process.cwd() + '/src/app/api/products.json', 'utf8'));

    //     // let id = params.slug;
    //     const searchParams = req.nextUrl.searchParams;
    //     // let allQueryStrings = req.nextUrl.search;
        
    //     let catId = searchParams.get('catId');           
    //     let subCatId = searchParams.get('subCatId');           
    //     let catName = searchParams.get('catName');
    //     let location = searchParams.get('location');
    //     let search = searchParams.get('search');
    //     let perPage = parseInt(searchParams.get('perPage'));                  
    //     let page = parseInt(searchParams.get('page'));
    //     let products = allProducts.products;

    //     if (location && location !== 'All') {        
    //         products = products.filter(i => {                
    //             let exist = i.location.find(x => x.label === location);
    //             if (exist) return i;
    //         })
    //     }

    //     if (catId) {
    //         products = products.filter(i => i.catId === catId);
    //     } else if (subCatId) {
    //         products = products.filter(i => i.subCatId === subCatId);
    //     } else if (catName) {
    //         products = products.filter(i => i.catName === catName);
    //     } else if (search) {
    //         products = products.filter(i => (i.name).toLowerCase().includes(search.toLowerCase()));
    //     }
        
    //     if (page && perPage) {
    //         let start = (page - 1) * perPage;
    //         let end = (start + perPage);
    //         let totalPages = Math.ceil(products.length / perPage);            
    //         let productsPerPage = products.slice(start, end);
    //         return NextResponse.json({ products: productsPerPage, page: page, totalPages: totalPages});
    //     } 

    //     return NextResponse.json({ products: products });

    // } else if (withDB) {

        const searchParams = req.nextUrl.searchParams;
        
        let page = searchParams.get('page');  
        let perPage = searchParams.get('perPage');  

        await dbConnect();

        const options = {
            page: page || 1,
            limit: perPage || 10,
            collation: {locale: 'en'}
        };
        const products = await Products.paginate({}, options) //.find().populate('category');
        return NextResponse.json(products);

        // let products;
    
        // switch (req.method) {
        // case 'GET':
        //     if (catId) {
        //         products = await db.collection('products').findOne({catId: catId});
        //     } else if (subCatId) {
        //         products = await db.collection('products').findOne({subCatId: subCatId});
        //     } else if (catName) {
        //         products = await db.collection('products').findOne({catName: catName});
        //     } else if (search) {
        //         products = await db.collection('products').find({$text: {$search: search}}).toArray;
        //         return NextResponse.json(products);
        //     }
        //     return NextResponse.json(products);
        //     break;
        // case 'POST':
        //     const newPost = req.body;
        //     const result = await db.collection('products').insertOne(newPost);
        //     return NextResponse.json(result.ops[0]);
        //     break;
        // }
        
        // await client.close();
    // }
}


export async function POST() {

    await dbConnect();

    var id = new mongoose.Types.ObjectId();
    
    const doc = new Products({ 
        _id: id,
        id: id,

        name: "My New Product Name",
        description: "This kurta pant set features a stylish straight-cut kurta paired with comfortable pants, offering a chic and effortless look suitable for both casual and semi-formal occasions.",
        images: [
            "http://res.cloudinary.com/dy2p0n2xc/image/upload/v1729060377/1729060369509_glowworld-women-blue-printed-cotton-kurta-product-images-rvb5rj3wer-0-202205161816.jpg",
            "http://res.cloudinary.com/dy2p0n2xc/image/upload/v1729060379/1729060369574_glowworld-women-blue-printed-cotton-kurta-product-images-rvb5rj3wer-1-202205161817.jpg",
            "http://res.cloudinary.com/dy2p0n2xc/image/upload/v1729060382/1729060369600_glowworld-women-blue-printed-cotton-kurta-product-images-rvb5rj3wer-2-202205161817.jpg",
            "http://res.cloudinary.com/dy2p0n2xc/image/upload/v1729060384/1729060369924_glowworld-women-blue-printed-cotton-kurta-product-images-rvb5rj3wer-3-202205161817.jpg"
        ],
        brand: "VNEED",
        price: 455,
        oldPrice: 655,
        catName: "Fashion",
        catId: "670f544ce86c762e3cad6c8b",
        subCatId: "670f5502e86c762e3cad6ce5",
        subCat: "Girls",
        subCatName: "Girls",
        category: {},
        countInStock: 10,
        rating: 5,
        isFeatured: false,
        discount: 15,
        productRam: [],
        size: ["S", "M", "L", "XL"],
        productWeight: [],
        location: [],
        dateCreated: "2024-08-30T15:03:56.294Z",
        updatedAt: "2024-09-09T03:54:32.426Z",
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