"use client";
import withAuth from "@/components/withAuth";
import ProductList from "./brandList";
import AddProduct from "./addBrand";
import { useEffect, useState } from "react";
import { Tab, Tabs } from "@mui/material";
import { waitFor } from "@/app/api/utils";
import { useDispatch } from "react-redux";
import { localLoader } from "@/lib/slices";
import { getProducts2 } from "@/actions/banners";


function Brands() {

    const [tab, setTab] = useState('Add Product');

    const tabs = ['Add Product', 'Product List', 'Product Details'];
    const [value, setValue] = useState(0);
    const handleChange = (event, newActive) => {
        setValue(newActive);
    }; 

    const [refresh, setRefresh] = useState('init');
    const [products, setProducts] = useState({
        docs: [],
        hasNextPage: true,
        hasPrevPage: false,
        limit: 10,
        nextPage: 2,
        page: 1,
        pagingCounter: 1,
        prevPage: null,
        totalDocs: 70,
        totalPages: 7,
    });

    const dispatch = useDispatch();

    const getProducts = async () => {
        dispatch(localLoader({ name: 'productList', status: true}));
        await waitFor(2000);
        // const res = await axios.get(`https://shopify-seven-iota.vercel.app/api/products?page=${products.page}&perPage=${products.limit}&location=All`);
        const res = await getProducts2({ page: products.page, perPage: products.limit, location: 'All' });
        dispatch(localLoader({ name: 'productList', status: false}));
        setProducts(res);            
    }

    useEffect(() => {
        getProducts();
    },[refresh, products.page, products.limit])

    console.log(products);
    
    return (
        <main>
            <div>
                <Tabs value={value} onChange={handleChange} variant="scrollable" scrollButtons="auto" className="px-4 pt-4">
                    {tabs.map((item, index) => (
                        <Tab key={item} label={item} onClick={() => setTab(item)} style={{fontSize: '0.975rem', minHeight: '3.55rem', padding: '1rem 1.2rem', minWidth: '5.625rem'}} />
                    ))}
                </Tabs>
                <div className="tabContent">
                    <div className={`tab-item p-4 ${value === 0 ? 'block' : 'hidden'} `}>
                        <AddProduct /> 
                    </div>
                    <div className={`tab-item p-4 ${value === 1 ? 'block' : 'hidden'} `}>
                        <ProductList products={products} setProducts={setProducts} />
                    </div>
                </div>
            </div>
        </main>
    )   
}

export default withAuth(Brands);