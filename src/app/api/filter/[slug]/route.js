import { NextRequest, NextResponse } from "next/server";
import fs from 'fs';

export async function GET(req, props) {
    const params = await props.params;

    var allProducts = JSON.parse(fs.readFileSync(process.cwd() + '/src/app/api/products.json', 'utf8'));

    // let id = params.slug;
    const searchParams = req.nextUrl.searchParams;

    let catType = params.slug;
    let id = searchParams.get('id');
    let minPrice = searchParams.get('minPrice');
    let maxPrice = searchParams.get('maxPrice');
    let location = searchParams.get('location');

    let products = allProducts.products;

    if (location !== 'All') {        
        products = products.filter(i => {                
            let exist = i.location.find(x => x.label === location);
            if (exist) return i;
        })
    }

    products = products.filter(i => i[catType] === id);
    products = products.filter(i => parseFloat(i.price) > parseFloat(minPrice));
    products = products.filter(i => parseFloat(i.price) < parseFloat(maxPrice));

    // if (catId) {
    //     products = products.filter(i => i.catId === catId);
    // } else if (subCatId) {
    //     products = products.filter(i => i.subCatId === subCatId);;
    // } else if (catName) {
    //     products = products.filter(i => i.catName === catName);
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
    return NextResponse.json({ products: products, totalPages: 0, page: 0 } );
}

  