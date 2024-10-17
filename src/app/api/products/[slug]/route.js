import { NextRequest, NextResponse } from "next/server";
import fs from 'fs';

export async function GET(req, { params }) {

    var allProducts = JSON.parse(fs.readFileSync(process.cwd() + '/src/app/api/products.json', 'utf8'));

    if (req.method === 'GET') {
        let id = params.slug;
        const searchParams = req.nextUrl.searchParams;
        let catId = searchParams.get('catId');           
        let subCatId = searchParams.get('subCatId');           
        let catName = searchParams.get('catName');
        let location = searchParams.get('location');
        console.log(id, catId, 'the dynamin query value');
        let products = allProducts.products;

        if (location !== 'All') {        
            products = products.filter(i => {                 // filter by location.
                let exist = i.location.find(x => x.label === location);
                if (exist) return i;
            })
        }

        if (catId) {
            products = products.filter(i => i.catId === catId);
        } else if (subCatId) {
            products = products.filter(i => i.subCatId === subCatId);
        } else if (catName) {
            products = products.filter(i => i.catName === catName);
        } else {
            products = products.find(i => i.id === slug);
        }
        if (!products) return res.status(404).send('Product not found');
        return NextResponse.json(products);
        // return NextResponse.json({status: 'success'});
    }
}

// var allProducts = JSON.parse(fs.readFileSync('products.json', 'utf8'));

// app.get('/products/:id', (req, res) => {
//     let id = req.params.id; 
//     let catId = req.query.catId;           
//     let subCatId = req.query.subCatId;           
//     let catName = req.query.catName;
//     let products = allProducts.products;

//     if (catId) {
//         products = products.filter(i => i.catId === catId);
//     } else if (subCatId) {
//         products = products.filter(i => i.subCatId === subCatId);
//     } else if (catName) {
//         products = products.filter(i => i.catName === catName);
//     } else {
//         products = products.find(i => i.id === id);
//     }
//     if (!products) return res.status(404).send('Product not found');
//     res.json(products);
// })



// app.get('/productPerPage', (req, res) => {
//     let perPage = parseInt(req.query.perPage);                      // use req.params.id for '/product/:id' route.
//     let page = parseInt(req.query.page);
//     let location = req.query.location;
//     let products = allProducts.products;
    
//     if (location !== 'All') {        
//         products = products.filter(i => {                 // filter by location.
//             let exist = i.location.find(x => x.label === location);
//             if (exist) return i;
//         })
//     }

//     let start = (page - 1) * perPage;
//     let end = (start + perPage);
//     let totalPages = Math.ceil(products.length / perPage);
    
//     var productsPerPage = products.slice(start, end);
//     res.json({ products: productsPerPage, page: page, totalPages: totalPages});
// })


// app.get('/featured', (req, res) => {
//     let location = req.query.location;
//     let products = allProducts.products;

//     if (location !== 'All') {        
//         products = products.filter(i => {                 // filter by location.
//             let exist = i.location.find(x => x.label === location);
//             if (exist) return i;
//         })
//     }

//     var featured = products.filter(i => i.isFeatured);
//     res.json(featured);
// })