"use client";
import withAuth from "@/components/withAuth";
import { useEffect, useState } from "react";
import { Tab, Tabs } from "@mui/material";
import AddCategory from "./addCategory";
import CategoryList from "./categoryList";
import SubCategoryList from "./subCategoryList";
import axios from "axios";


function Categories() {

    const [tab, setTab] = useState('Add Category');

    const tabs = ['Add Category', 'Category List', 'Sub Category List'];
    const [value, setValue] = useState(0);
    const handleChange = (event, newActive) => {
        setValue(newActive);
    }; 

    const [categories, setCategories] = useState({ categoryList: []});

    const getCategories = async () => {
        const res = await axios.get('https://shopify-seven-iota.vercel.app/api/category');
        setCategories(res.data);
        // let category = await getCategory(handleList);
        // setCategories(JSON.parse(category));            
    }

    const [subCategories, setSubCategories] = useState([]);

    const getSubCategories = async () => {
        const res = await axios.get('https://shopify-seven-iota.vercel.app/api/subCategory');
        setSubCategories(res.data);
        // let category = await getSubCategory();
        // setSubCategories(JSON.parse(category));            
    }

    const [refresh, setRefresh] = useState('init');

    useEffect(() => {
        getCategories();
        getSubCategories();
    },[refresh])


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
                        <AddCategory setRefresh={setRefresh} categories={categories.categoryList} /> 
                    </div>
                    <div className={`tab-item p-4 ${value === 1 ? 'block' : 'hidden'} `}>
                        <CategoryList categories={categories.categoryList} getCategories={getCategories} refresh={refresh} />
                    </div>
                    <div className={`tab-item p-4 ${value === 2 ? 'block' : 'hidden'} `}>
                        <SubCategoryList subCategories={subCategories} getSubCategories={getSubCategories} refresh={refresh} />
                    </div>
                </div>
            </div>
        </main>
    )   
}

export default withAuth(Categories);