import { NextRequest, NextResponse } from "next/server";
import fs from 'fs';
import { Products } from "@/lib/models";

export async function GET(req, props) {
    const params = await props.params;

    // var allProducts = JSON.parse(fs.readFileSync(process.cwd() + '/src/app/api/products.json', 'utf8'));

    let id = params.slug;
    // const searchParams = req.nextUrl.searchParams;
    // let allQueryStrings = req.nextUrl.search;

    // let catId = searchParams.get('catId');           
    // let subCatId = searchParams.get('subCatId');           
    // let catName = searchParams.get('catName');
    // let location = searchParams.get('location');
    // let perPage = parseInt(searchParams.get('perPage'));                  
    // let page = parseInt(searchParams.get('page'));
    // let products = allProducts.products;

    let products = [];
    if (id === 'featured') {
        // products = products.filter(i => i.isFeatured);
        products = await Products.find({ isFeatured: true }) 
    } else {
        // products = products.find(i => i.id === id);
        products = await Products.findById(id);
        return NextResponse.json(products);
    }

    // if (location !== 'All') {        
    //     products = products.filter(i => {                 // filter by location.
    //         let exist = i.location.find(x => x.label === location);
    //         if (exist) return i;
    //     })
    // }

    // if (page && perPage) {
    //     let start = (page - 1) * perPage;
    //     let end = (start + perPage);
    //     let totalPages = Math.ceil(products.length / perPage);            
    //     let productsPerPage = products.slice(start, end);
    //     if (!productsPerPage.length) return NextResponse.json({ error: 'No Products found.' }, { status: 404 });
    //     return NextResponse.json({ products: productsPerPage, page: page, totalPages: totalPages});
    // } 

    // if (!products.length) return NextResponse.json({ error: 'No Products found.' }, { status: 404 });
    return NextResponse.json(products);
}