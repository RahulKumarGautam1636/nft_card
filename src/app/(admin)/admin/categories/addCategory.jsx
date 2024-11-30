"use client";
import { FiTrendingDown, FiTrendingUp } from "react-icons/fi";
import Typography from '@mui/material/Typography';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { GoDotFill } from "react-icons/go";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useActionState, useEffect, useState } from "react";
import { products } from "../page";
import { Button, CircularProgress } from "@mui/material";
import { Download } from "@mui/icons-material";
import axios from "axios";
import { ImagePicker, ImagePicker2 } from "@/app/api/utils";
import { createCategory, createSubCategory } from "@/api/actions";
import { useDispatch, useSelector } from "react-redux";
import { handleFormDataPost, MyLoader } from "@/components/utils";
import { loader } from "@/lib/slices";
// import { useFormState, useFormStatus } from 'react-dom';


function AddCategory({ setRefresh, categories }) {

    const isLoading = useSelector(state => state.isLoading);
    const dispatch = useDispatch();
    const [category, setCategory] = useState({
        name: '',
        color: '',
        createDate: '',
        images: []  
    });

    const handleCategory = (e) => {
        const { name, value} = e.target;
        setCategory(pre => ({...pre, [name]: value}));
    } 

    const makeRequest = async (params) => {
        console.log(params);

    }

    const handleCategoryForm = async (e) => {
        e.preventDefault();
        console.log(category)
        const isSuccess = await handleFormDataPost('category', category, dispatch);
        if (isSuccess) {
            setRefresh(Math.random() * 10000);
            setCategory({ name: '', color: '', createDate: '', images: [] });
        }
    } 

    // -------------------------------------------------------------------------------------------------------------------------------------------------

    const [subCategory, setSubCategory] = useState({
        name: '',
        parentCategory: '',
        createDate: '',
        images: []  
    });

    useEffect(() => {
        if (!categories.length) return;
        setSubCategory(pre => ({...pre, parentCategory: categories[0].id}));
    },[categories.length])

    const handleSubCategory = (e) => {
        const { name, value} = e.target;
        if (name === 'parentCategory') {
            let item = categories.find(i => i.id === value);
            if (!item) return alert('Invalid Category');
            return setSubCategory(pre => ({...pre, parentCategory: value}));
        }
        setSubCategory(pre => ({...pre, [name]: value}));
    } 

    const handleSubCategoryForm = async (e) => {
        e.preventDefault();
        console.log(subCategory);
        const isSuccess = await handleFormDataPost('subCategory', subCategory, dispatch);
        if (isSuccess) {
            setRefresh(Math.random() * 10000);
            setSubCategory({ name: '', parentCategory: '', createDate: '', images: [] });
        }
    } 

    // const [category, categoryAction, categoryPending] = useActionState(createCategory, { message: '', status: '' });
    // const [subCategory, subCategoryAction, subCategoryPending] = useActionState(createSubCategory, { message: '', status: '' });
    // const [resetPicker, setResetPicker] = useState('asdfs')

    // useEffect(() => {
    //     if (category.status === 200) {
    //         setRefresh(Math.random() * 10000);
    //         // setResetPicker();
    //     }
    // }, [category.status])

    // console.log(category.payload?.get("categoryImage"));

    return (
        <section className='h-full relative'>
            {/* {isLoading ? <MyLoader /> : ''}  */}
            <div className="flex flex-col md:flex-row gap-4">
                <div className="p-6 rounded-lg shadow-gray-300 bg-white shadow-md flex-1">
                    <h2 className="text-xl font-semibold border-b border-gray-300 pb-4">Add New Category</h2>
                    {/* <form className="mt-6" action={categoryAction}>
                        <div className="flex gap-4 mb-5">
                            <div className="flex-1">
                                <label className="text-black text-[0.9rem] mb-2 block"> Category Name</label>
                                <input name='name' defaultValue={(category.payload?.get("name") || "")} className="px-5 py-[0.81rem] bg-slate-100 w-full rounded-md outline-none text-[1rem]" type="text" />
                            </div>
                            <div className="flex-1">
                                <label className="text-black text-[0.9rem] mb-2 block"> Color</label>
                                <input name='color' defaultValue={(category.payload?.get("color") || "")} className="px-5 py-[0.81rem] bg-slate-100 w-full rounded-md outline-none text-[1rem]" type="text" />
                            </div>
                        </div>
                        <div className="flex gap-4 mb-5">
                            <div className="flex-1">
                                <label className="text-black text-[0.9rem] mb-2 block"> Creation Date</label>
                                <input name="createDate" defaultValue={(category.payload?.get("createDate") || "")} className="px-5 py-[0.81rem] bg-slate-100 w-full rounded-md outline-none text-[1rem]" type="date" />
                            </div>
                        </div>
                        <ImagePicker label="Add Images" name="categoryImage" multiSelect={true} pickerValue={category.payload?.get("categoryImage")}/>
                        {category?.message && <p className="text-orange-600 mt-5">{category.message}</p>}
                        <Button type="submit" className="bg-pink-600 text-white text-lg shadow-sm shadow-purple-400 rounded-lg py-3 px-8 hover:bg-pink-500 font-bold block ml-auto mt-[2.2rem]">{categoryPending ? 'Creating...' : 'Create Category'}</Button>
                    </form> */}

                    <form className="mt-6" onSubmit={handleCategoryForm}>
                        <div className="flex gap-4 mb-5">
                            <div className="flex-1">
                                <label className="text-black text-[0.9rem] mb-2 block"> Category Name</label>
                                <input name='name' value={category.name} onChange={handleCategory} className="px-5 py-[0.81rem] bg-slate-100 w-full rounded-md outline-none text-[1rem]" type="text" />
                            </div>
                            <div className="flex-1">
                                <label className="text-black text-[0.9rem] mb-2 block"> Color</label>
                                <input name='color' value={category.color} onChange={handleCategory} className="px-5 py-[0.81rem] bg-slate-100 w-full rounded-md outline-none text-[1rem]" type="text" />
                            </div>
                        </div>
                        <div className="flex gap-4 mb-5">
                            <div className="flex-1">
                                <label className="text-black text-[0.9rem] mb-2 block"> Creation Date</label>
                                <input name="createDate" value={category.createDate} onChange={handleCategory} className="px-5 py-[0.81rem] bg-slate-100 w-full rounded-md outline-none text-[1rem]" type="date" />
                            </div>
                        </div>
                        <ImagePicker2 label="Add Images" name="categoryImage" multiSelect={true} setImages={setCategory} imgCount={category.images.length} />
                        {category?.message && <p className="text-orange-600 mt-5">{category.message}</p>}
                        <Button type="submit" className="w-full items-center gap-4 bg-pink-600 text-white text-lg shadow-sm shadow-purple-400 rounded-lg py-3 px-8 hover:bg-pink-500 font-bold mt-[2.2rem]">{isLoading.local.category ? <><CircularProgress className="text-white" size="1.2rem" /> Creating... </> : 'Create Category'}</Button>
                    </form>
                </div>


                <div className="p-6 rounded-lg shadow-gray-300 bg-white shadow-md flex-1">
                    <h2 className="text-xl font-semibold border-b border-gray-300 pb-4">Add Sub Category</h2>
                    {/* <form className="mt-6" action={subCategoryAction}>
                        <div className="flex gap-4 mb-5">
                            <div className="flex-1">
                                <label className="text-black text-[0.9rem] mb-2 block"> Sub Category Name <span className="text-red-500">*</span></label>
                                <input name='name' className="px-5 py-[0.81rem] bg-slate-100 w-full rounded-md outline-none text-[1rem]" type="text" />
                            </div>
                            <div className="flex-1">
                                <label className="text-black text-[0.9rem] mb-2 block"> Color</label>
                                <input name='color' className="px-5 py-[0.81rem] bg-slate-100 w-full rounded-md outline-none text-[1rem]" type="text" />
                            </div>
                        </div>  
                        <div className="flex gap-4 mb-5">
                            <div className="flex-1">
                                <label className="text-black text-[0.9rem] mb-2 block"> Parent Category <span className="text-red-500">*</span></label>
                                <input name="parentCategory" className="px-5 py-[0.81rem] bg-slate-100 w-full rounded-md outline-none text-[1rem]" type="text" />
                            </div>
                            <div className="flex-1">
                                <label className="text-black text-[0.9rem] mb-2 block"> Creation Date <span className="text-red-500">*</span></label>
                                <input name='createDate' className="px-5 py-[0.81rem] bg-slate-100 w-full rounded-md outline-none text-[1rem]" type="text" />
                            </div>
                        </div>
                        <ImagePicker label="Add Images" name="subCategory_image" pickerValue={''} />
                        {subCategory?.message && <p className="text-orange-600 mt-5">{subCategory.message}</p>}
                        <div className="flex flex-wrap gap-4 text-nowrap mt-[2.2rem]">
                            <Button type="submit" className="bg-blue-600 min-w-fit text-white rounded-lg px-4 py-3 hover:bg-indigo-500 flex-1 text-lg shadow-sm shadow-purple-400">{subCategoryPending ? 'Creating...' : 'Add Sub Category'}</Button>
                            <Button className="bg-pink-600 min-w-fit text-white rounded-lg px-4 py-3 hover:bg-indigo-500 flex-1 text-lg shadow-sm shadow-purple-400">Save for Later</Button>
                        </div>
                    </form> */}

                    <form className="mt-6" onSubmit={handleSubCategoryForm}>
                        <div className="flex gap-4 mb-5">
                            <div className="flex-1">
                                <label className="text-black text-[0.9rem] mb-2 block"> Sub Category Name <span className="text-red-500">*</span></label>
                                <input name='name' value={subCategory.name} onChange={handleSubCategory} className="px-5 py-[0.81rem] bg-slate-100 w-full rounded-md outline-none text-[1rem]" type="text" />
                            </div>
                            <div className="flex-1">
                                <label className="text-black text-[0.9rem] mb-2 block"> Parent Category <span className="text-red-500">*</span></label>
                                {/* <input name="parentCategory" value={subCategory.parentCategory} onChange={handleSubCategory} className="px-5 py-[0.81rem] bg-slate-100 w-full rounded-md outline-none text-[1rem]" type="text" /> */}
                                <select name="parentCategory" onChange={handleSubCategory} className="px-5 py-[0.81rem] bg-slate-100 w-full rounded-md outline-none text-[1rem]">
                                    {categories.map(i => (<option key={i.name} value={i.id}>{i.name}</option>))}
                                </select>
                            </div>
                        </div>
                        <div className="flex gap-4 mb-5">
                            
                            <div className="flex-1">
                                <label className="text-black text-[0.9rem] mb-2 block"> Creation Date <span className="text-red-500">*</span></label>
                                <input name='createDate' value={subCategory.createDate} onChange={handleSubCategory} type='date' className="px-5 py-[0.81rem] bg-slate-100 w-full rounded-md outline-none text-[1rem]" />
                            </div>
                        </div>
                        <ImagePicker2 label="Add Images" name="subCategoryImage" multiSelect={true} setImages={setSubCategory} imgCount={subCategory.images.length} />
                        {subCategory?.message && <p className="text-orange-600 mt-5">{subCategory.message}</p>}
                        <div className="flex flex-wrap gap-4 text-nowrap mt-[2.2rem]">
                            <Button type="submit" className="bg-blue-600 min-w-fit text-white rounded-lg px-4 py-3 hover:bg-indigo-500 flex-1 text-lg shadow-sm shadow-purple-400 gap-4">{isLoading.local.subCategory ? <><CircularProgress className="text-white" size="1.2rem" /> Creating... </> : 'Create Sub Category'}</Button>
                            <Button className="bg-pink-600 min-w-fit text-white rounded-lg px-4 py-3 hover:bg-indigo-500 flex-1 text-lg shadow-sm shadow-purple-400">Save for Later</Button>
                            {/* <Button className="bg-gray-300 min-w-fit text-gray-600 rounded-lg px-4 py-3 hover:bg-indigo-200 flex-1 text-lg shadow-sm shadow-purple-400">Shedule</Button> */}
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )   
}

export default AddCategory;