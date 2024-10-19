import { NextRequest, NextResponse } from "next/server";
import fs from 'fs';

export async function GET(req, { params }) {

    var allProducts = JSON.parse(fs.readFileSync(process.cwd() + '/src/app/api/products.json', 'utf8'));

    // let id = params.slug;
    const searchParams = req.nextUrl.searchParams;
    // let allQueryStrings = req.nextUrl.search;
    
    let catId = searchParams.get('catId');           
    let subCatId = searchParams.get('subCatId');           
    let catName = searchParams.get('catName');
    let location = searchParams.get('location');
    let perPage = parseInt(searchParams.get('perPage'));                  
    let page = parseInt(searchParams.get('page'));
    let products = allProducts.products;

    if (location !== 'All') {        
        products = products.filter(i => {                
            let exist = i.location.find(x => x.label === location);
            if (exist) return i;
        })
    }

    if (catId) {
        products = products.filter(i => i.catId === catId);
    } else if (subCatId) {
        products = products.filter(i => i.subCatId === subCatId);
        // if (!products.length) return NextResponse.json({ error: 'No Products found.' }, { status: 404 });
        // return NextResponse.json({ products: products });
    } else if (catName) {
        products = products.filter(i => i.catName === catName);
        // if (!products.length) return NextResponse.json({ error: 'No Products found.' }, { status: 404 });
        // return NextResponse.json({ products: products });
    } 

    if (page && perPage) {
        let start = (page - 1) * perPage;
        let end = (start + perPage);
        let totalPages = Math.ceil(products.length / perPage);            
        let productsPerPage = products.slice(start, end);
        if (!productsPerPage.length) return NextResponse.json({ error: 'No Products found.' }, { status: 404 });
        return NextResponse.json({ products: productsPerPage, page: page, totalPages: totalPages});
    } 

    if (!products.length) return NextResponse.json({ error: 'No Products found.' }, { status: 404 });
    return NextResponse.json({ products: products });
}