"use client";
import withAuth from "@/components/withAuth";
import ProductList from "./productList";
import AddProduct from "./addProduct";
import { useEffect, useState } from "react";
import { Tab, Tabs } from "@mui/material";
import axios from "axios";
import { waitFor } from "@/app/api/utils";
import { useDispatch } from "react-redux";
import { localLoader } from "@/lib/slices";
import { getProducts2 } from "@/actions/get";
import { useRouter, useSearchParams } from "next/navigation";


function Ecommerce() {

    const params = useSearchParams();
    const pane = params.get('pane');
    const router = useRouter();

    useEffect(() => {
        if (pane) {
            let currTab = tabs.find(i => String(i.key) === String(pane));
            if (currTab) setTab(currTab);
        }
    },[pane])

    const tabs = [{ name: 'Add Product', key: 1 }, { name: 'Product List', key: 2 }, { name: 'Product Details', key: 3 }];
    const [tab, setTab] = useState({ name: 'Add Product', key: 1 });

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
                <Tabs value={tab.key} variant="scrollable" scrollButtons="auto" className="px-4 pt-4">
                    {tabs.map(item => (
                        <Tab key={item.key} value={item.key} label={item.name} onClick={() => router.push(`/admin/ecommerce?pane=${item.key}`)} style={{fontSize: '0.975rem', minHeight: '3.55rem', padding: '1rem 1.2rem', minWidth: '5.625rem'}} />
                    ))}
                </Tabs>
                <div className="tabContent">
                    <div className={`tab-item p-4 ${tab.key === 1 ? 'block' : 'hidden'} `}>
                        <AddProduct setRefresh={setRefresh} /> 
                    </div>
                    <div className={`tab-item p-4 ${tab.key === 2 ? 'block' : 'hidden'} `}>
                        <ProductList products={products} setProducts={setProducts} setTab={setTab} />
                    </div>
                </div>
            </div>
        </main>
    )   
}

export default withAuth(Ecommerce);