import { NextResponse } from "next/server";
import fs from 'fs';
import { client } from "../utils";
import { isLive, withRemoteDB } from "@/api/api";
import dbConnect from "@/lib/dbConnect";
import { Products } from "@/lib/models";
import mongoose from "mongoose";
import { v2 as cloudinary } from 'cloudinary';

export async function GET(req, { params }) {

    // if (!isLive) {

    //     var allProducts = JSON.parse(fs.readFileSync(process.cwd() + '/src/app/api/products.json', 'utf8'));

    //     // let id = params.slug;
        const searchParams = req.nextUrl.searchParams;
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

    // } else if (withRemoteDB) {
        
        let search = searchParams.get('search');
        let page = searchParams.get('page');  
        let perPage = searchParams.get('perPage');  
        let catName = searchParams.get('catName');
        let location = searchParams.get('location');

        await dbConnect();

        let products = [];
        
        if (search) {
            products = await Products.find({"name": {"$regex": search, "$options": "i"}});
            return NextResponse.json(products);
        } else if (catName) {
            products = await Products.find({"catName": catName});
            return NextResponse.json({ products: products });
        } else {
            const options = {
                page: page || 1,
                limit: perPage || 10,
                collation: {locale: 'en'}
            };
            products = await Products.paginate({}, options)             //.find().populate('category');
            return NextResponse.json({ ...products, products: products.docs });
        }
        

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


export async function POST(req) {

    
    const body = await req.formData();  
    const images = body.getAll('images[]');

    const uploadImages = async (imagesList, folder) => {
        
        cloudinary.config({
            cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
            api_key: process.env.CLOUDINARY_API_KEY,
            api_secret: process.env.CLOUDINARY_API_SECRET,
        })

        let imageURLs = [];

        for (let i = 0; i < imagesList.length; i++) {

            const fileName = (imagesList[i].name).split('.')[0];            // file name without extension. required by cloudinary docs.
            const filePath = `Home/` + folder + fileName;
            const arrayBuffer = await imagesList[i].arrayBuffer();
            const buffer = Buffer.from(arrayBuffer);

            const res = await new Promise((resolve, reject) => {
                cloudinary.uploader.upload_stream({public_id: filePath, use_filename: true, unique_filename: false}, function (error, result) {
                  if (error) {
                    reject(error);
                    return;
                  }
                  resolve(result);
                }).end(buffer);
            });
            imageURLs.push(res.secure_url);
        }
        return imageURLs;
    }

    const imagesUrlList = await uploadImages(images, 'Shopify/');           // format to pass folder name.
    var id = new mongoose.Types.ObjectId();

    const product = new Products({
        _id: id,
        id: id,
        name: body.get('name'),
        description: body.get('description'),
        images: imagesUrlList,
        brand: body.get('brand[name]'),
        price: body.get('price'),
        oldPrice: body.get('maxPrice'),

        catName: body.get('category[name]'),
        catId: body.get('category[id]'),
        category: body.get('category[id]'),

        subCatId: body.get('subCategory[id]'),
        subCat: body.get('subCategory[id]'),
        subCatName: body.get('subCategory[name]'),
        
        countInStock: body.get('countInStock'),

        rating: body.get('rating'),

        isFeatured: body.get('isFeatured'),
        discount: body.get('discount'),
        
        productRam: body.getAll('ram[]'),

        size: body.getAll('sizes[]'),
        productWeight: body.getAll('weights[]'),

        location: body.getAll('locations[]'),

        dateCreated: body.get('dateCreated'),
        updatedAt: body.get('dateCreated'),
    })
    
    await dbConnect();
    await product.save();  


    // const images = [
    //     'https://shopify-seven-iota.vercel.app/images/categories/Electronics.png',
    //     'https://shopify-seven-iota.vercel.app/images/categories/Bags.png',
    // ];
      
    // (async function run() {
      
    //     // Example using a simple for loop
      
    //     for ( const image of images ) {
    //       const result = await cloudinary.uploader.upload(image);
    //       console.log(`Successfully uploaded ${image}`);
    //       console.log(`> Result: ${result.secure_url}`);
    //     }
      
        
        
    //     // const limit = pLimit(2);                             // Example with paralell uploads and concurrency
    //     // const imagesToUpload = images.map((image) => {       // Default Cloudinary upload limit for the free tier is 10
    //     //   return limit(async () => {
    //     //     const result = await cloudinary.uploader.upload(image);
    //     //     console.log(`Successfully uploaded ${image}`);
    //     //     console.log(`> Result: ${result.secure_url}`);
    //     //     return result;
    //     //   })
    //     // });      
    //     // await Promise.all(imagesToUpload);
    // })();


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

    return NextResponse.json({ title: 'Successfully created the item.', product: product});
}