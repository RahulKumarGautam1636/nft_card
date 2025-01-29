"use client";
import withAuth from "@/components/withAuth";
import { useEffect, useState } from "react";
import { Tab, Tabs } from "@mui/material";
import AddCategory from "./addCategory";
import CategoryList from "./categoryList";
import SubCategoryList from "./subCategoryList";
// import axios from "axios";
import { getCategories2, getSubCategory } from "@/actions/get";
import { useRouter, useSearchParams } from "next/navigation";


function Categories() {

    const [tab, setTab] = useState({ name: 'Add Category', key: 1 });
    const [categories, setCategories] = useState({ categoryList: []});
    const params = useSearchParams();
    const pane = params.get('pane');
    const router = useRouter();

    const tabs = [{ name: 'Add Category', key: 1 }, { name: 'Category List', key: 2 }, { name: 'Sub Category List', key: 3 }];
    
    useEffect(() => {
        if (pane) {
            let currTab = tabs.find(i => String(i.key) === String(pane));
            if (currTab) setTab(currTab);
        }
    },[pane])

    const getCategories = async () => {
        const res = await getCategories2();
        setCategories(res.data);         
    }

    const [subCategories, setSubCategories] = useState([]);

    const getSubCategories = async () => {
        const res = await getSubCategory();
        setSubCategories(res.data);         
    }

    const [refresh, setRefresh] = useState('init');

    useEffect(() => {
        getCategories();
        getSubCategories();
    },[refresh])


    return (
        <main>
            <div>
                <Tabs value={tab.key} variant="scrollable" scrollButtons="auto" className="px-4 pt-4">
                    {tabs.map(item => (
                        <Tab key={item.key} value={item.key} label={item.name} onClick={() => router.push(`/admin/categories?pane=${item.key}`)} style={{fontSize: '0.975rem', minHeight: '3.55rem', padding: '1rem 1.2rem', minWidth: '5.625rem'}} />
                    ))}
                </Tabs>
                <div className="tabContent">
                    <div className={`tab-item p-4 ${tab.key === 1 ? 'block' : 'hidden'} `}>
                        <AddCategory setRefresh={setRefresh} categories={categories.categoryList} /> 
                    </div>
                    <div className={`tab-item p-4 ${tab.key === 2 ? 'block' : 'hidden'} `}>
                        <CategoryList categories={categories.categoryList} getCategories={getCategories} refresh={refresh} />
                    </div>
                    <div className={`tab-item p-4 ${tab.key === 3 ? 'block' : 'hidden'} `}>
                        <SubCategoryList subCategories={subCategories} getSubCategories={getSubCategories} refresh={refresh} />
                    </div>
                </div>
            </div>
        </main>
    )   
}

export default withAuth(Categories);