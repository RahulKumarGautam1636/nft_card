"use client";
import { Checkbox, FormControl, LinearProgress, ListItemText, MenuItem, OutlinedInput, Select } from "@mui/material";
import { TiDelete } from "react-icons/ti";
import { IconButton } from "@mui/material";
import { BiHeart, BiMinus, BiPlus } from "react-icons/bi";
import { Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, globalLoader, removeFromCart } from "@/lib/slices";
import Link from "next/link";
import withAuth from "@/components/withAuth";
import { useEffect, useState } from "react";
import { Download, Hotel } from "@mui/icons-material";
import { handleFormDataPost, useFetch } from "@/components/utils";
import { getBrands, getCategories2, getSubCategory } from "@/actions/banners";
import { category } from "@/data";
import { ImagePicker2 } from "@/app/api/utils";


function AddProduct({ setRefresh }) {

    const dispatch = useDispatch();
    // const cart = useSelector(state => state.cart);
    // const cartList = Object.values(cart);

    // const cartItemsValueList = cartList.map(item => item.qty * item.price);                           // Array of all item's price * quantity selected.
    // const cartSubtotal = cartItemsValueList.reduce((total, num) => total + num, 0).toFixed(2); 
    
    const [categories, setCategories] = useState({ categoryList: [] });
    const [subCategories, setSubCategories] = useState([]);
    const [brands, setBrands] = useState([]);

    const initProduct = {
        name: '',        
        brand: { id: '', name: '' },
        category: { id: '', name: '' },
        subCategory: { id: '', name: '' },
        description: '',
        maxPrice: '', 
        price: '',
        discount: '',
        isFeatured: false,
        isPopular: false,
        weights: [],
        sizes: [],
        countInStock: 0, 
        dateCreated: new Date().toLocaleDateString('en-TT'),

        locations: [],
        ram: [],

        images: [],
    }

    const [product, setProduct] = useState(initProduct);

    useEffect(() => {
        const getData = async () => {
            dispatch(globalLoader(true));
            const brand = await getBrands();
            const category = await getCategories2();
            setCategories(category.data);          
            setBrands(brand.data);
            dispatch(globalLoader(false));
        }
        getData();
    },[])

    useEffect(() => {
        if (!brands.length) return;
        setProduct(pre => ({...pre, brand: brands[0]}));
    },[brands.length])

    useEffect(() => {
        if (!categories.categoryList.length) return;
        setProduct(pre => ({...pre, category: categories.categoryList[0]}));
    },[categories.categoryList.length])

    useEffect(() => {
        const getSubCats = async () => {
            if (!product.category.id) return;
            const subCats = await getSubCategory({ parentId: product.category.id });
            setSubCategories(subCats.data);
            if (subCats.data.length) {
                setProduct(pre => ({...pre, subCategory: subCats.data[0]}));
            } else {
                setProduct(pre => ({...pre, subCategory: { id: '', name: '' }}));
            }
        }
        getSubCats();
    },[product.category.id])

    const handleProduct = (e) => {
        const { name, value} = e.target;
        if (name === 'brand') {
            let brand = brands.find(i => i.id === value);
            if (!brand) return alert('Invalid Brand');
            return setProduct(pre => ({...pre, brand: brand}));
        } else if (name === 'category') {
            let category = categories.categoryList.find(i => i.id === value);
            if (!category) return alert('Invalid category');
            return setProduct(pre => ({...pre, category: category}));
        } else if (name === 'subCategory') {
            let subCategory = subCategories.find(i => i.id === value);
            if (!subCategory) return alert('Invalid category');
            return setProduct(pre => ({...pre, subCategory: subCategory}));
        }
        setProduct(pre => ({...pre, [name]: value}));
    } 

    const handleSubmit = async (e) => {
        e.preventDefault();
        // const newProduct = { ...product, brand: product.brand.id, category: product.category.id, subCategory: product.subCategory.id }
        console.log(product);
        const isSuccess = await handleFormDataPost('products', product, dispatch);
        // if (isSuccess) {
        //     setRefresh(Math.random() * 10000);
        //     setProduct(initProduct);
        // }
    }

    // const ITEM_HEIGHT = 48;              // dropdown popup styles.
    // const ITEM_PADDING_TOP = 8;
    // const MenuProps = {
    //     PaperProps: {
    //         style: {
    //         maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
    //         width: 250,
    //         },
    //     },
    // };

    const weights = ['50gm', '100gm', '500gm', '1kg', '5kg'];
    const ram = ['2gb', '4gb', '6gb', '8gb'];
    const sizes = ['S', 'M', 'L', 'XL', 'XXL'];
    const locations = ['All', 'Kolkata', 'Delhi', 'Mumbai', 'Uttar Pradesh'];

    const handleMultiSelect = (e) => {
        const { name, value } = e.target;
        setProduct(pre => ({...pre, [name]: typeof value === 'string' ? value.split(',') : value}))
    }

    console.log(product);

    return (
        <section className='h-full w-full'>
            <form className="flex flex-col md:flex-row gap-4" onSubmit={handleSubmit}>
                <div className="p-6 rounded-lg shadow-gray-300 bg-white shadow-md flex-1">
                    <h2 className="text-xl font-semibold border-b border-gray-300 pb-4">Add New Product</h2>
                    <div className="mt-6">
                        <div className="flex gap-4 mb-5">
                            <div className="flex-1">
                                <label className="text-black text-[0.9rem] mb-2 block"> Product Name</label>
                                <input required name='name' value={product.name} onChange={handleProduct} className="px-5 py-[0.81rem] bg-slate-100 w-full rounded-md outline-none text-[1rem]" type="text" />
                            </div>
                            <div className="flex-1">
                                <label className="text-black text-[0.9rem] mb-2 block"> Brand</label>
                                {/* <input required name="brand" value={product.brand} onChange={handleProduct} className="px-5 py-[0.81rem] bg-slate-100 w-full rounded-md outline-none text-[1rem]" type="text" /> */}
                                <select name="brand" value={product.brand.id} required onChange={handleProduct} className="px-5 py-[0.81rem] bg-slate-100 w-full rounded-md outline-none text-[1rem]">
                                    {brands.map((i, n) => (<option key={i.id} value={i.id}>{i.name}</option>))}
                                </select>
                            </div>
                        </div>
                        <div className="flex gap-4 mb-5">
                            <div className="flex-1">
                                <label className="text-black text-[0.9rem] mb-2 block"> Category</label>
                                {/* <input required name="category" value={product.category} onChange={handleProduct} className="px-5 py-[0.81rem] bg-slate-100 w-full rounded-md outline-none text-[1rem]" type="text" /> */}
                                <select name="category" value={product.category.id} required onChange={handleProduct} className="px-5 py-[0.81rem] bg-slate-100 w-full rounded-md outline-none text-[1rem]">
                                    {categories.categoryList.map((i, n) => (<option key={i.id} value={i.id}>{i.name}</option>))}
                                </select>
                            </div>
                            <div className="flex-1">
                                <label className="text-black text-[0.9rem] mb-2 block"> Sub Category <span className="text-red-500">*</span></label>
                                {/* <input required name='subCategory' value={product.subCategory} onChange={handleProduct} className="px-5 py-[0.81rem] bg-slate-100 w-full rounded-md outline-none text-[1rem]" type="text" /> */}
                                <select name="subCategory" value={product.subCategory.name} required onChange={handleProduct} className="px-5 py-[0.81rem] bg-slate-100 w-full rounded-md outline-none text-[1rem]">
                                    {subCategories.map(i => (<option key={i.id} value={i.id}>{i.name}</option>))}
                                </select>
                            </div>
                        </div>
                        <div className="flex gap-4 mb-5">
                            <div className="flex-1">
                                <label className="text-black text-[0.9rem] mb-2 block"> Product Description <span className="text-red-500">*</span></label>
                                <textarea name='description' required value={product.description} onChange={handleProduct} className="px-5 py-[0.81rem] bg-slate-100 w-full rounded-md outline-none text-[1rem]" rows={2} type="text" placeholder="Add Short Description" ></textarea>
                            </div>
                        </div>
                        <div className="flex gap-4 mb-5">
                            <div className="flex-1">
                                <label className="text-black text-[0.9rem] mb-2 block"> MAX Price <span className="text-red-500">*</span></label>
                                <input required name="maxPrice" value={product.maxPrice} onChange={handleProduct} className="px-5 py-[0.81rem] bg-slate-100 w-full rounded-md outline-none text-[1rem]" type="text" />
                            </div>
                            <div className="flex-1">
                                <label className="text-black text-[0.9rem] mb-2 block"> Price <span className="text-red-500">*</span></label>
                                <input required name='price' value={product.price} onChange={handleProduct} className="px-5 py-[0.81rem] bg-slate-100 w-full rounded-md outline-none text-[1rem]" type="text" />
                            </div>
                            <div className="flex-1">
                                <label className="text-black text-[0.9rem] mb-2 block"> Discount</label>
                                <input required name="discount" value={product.discount} onChange={handleProduct} className="px-5 py-[0.81rem] bg-slate-100 w-full rounded-md outline-none text-[1rem]" type="text" />
                            </div>
                        </div>
                        <div className="flex items-center mb-4 gap-3 pt-3 text-[0.95rem]">
                            <input type="checkbox" name="isFeatured" checked={product.isFeatured} onChange={(e) => setProduct(pre => ({...pre, isFeatured: e.target.checked}))} />
                            <p>Mark as Featured Product.</p>
                        </div>
                        <div className="flex items-center mb-6 gap-3 text-[0.95rem]">
                            <input type="checkbox" name="isPopular" checked={product.isPopular} onChange={(e) => setProduct(pre => ({...pre, isPopular: e.target.checked}))} />
                            <p>Mark as Popular Product.</p>
                        </div>
                        <Button className="bg-pink-600 text-white text-lg shadow-sm shadow-purple-400 rounded-lg py-3 px-8 hover:bg-pink-500 font-bold block ml-auto">Update Profile</Button>
                    </div>
                </div>
                <div className="p-6 rounded-lg shadow-gray-300 bg-white shadow-md flex-1">
                    <h2 className="text-xl font-semibold border-b border-gray-300 pb-4">Add Product Images</h2>
                    <div className="mt-6">
                        <div className="mb-6 grid gap-4" style={{gridTemplateColumns: 'repeat(auto-fit, minmax(11rem, 1fr))'}}>
                            {/* <div className="h-40 p-5 border border-gray-200 rounded-lg flex justify-center items-center">
                                <img className="max-h-full" src={'/images/avatar.jpg'} alt="Product" />
                            </div>
                            <div className="h-40 px-5 cursor-pointer border border-dashed border-blue-500 bg-gray-50 rounded-lg flex flex-col gap-3 justify-center items-center text-center">
                                <Download className="text-[4rem] text-pink-600" />
                                <p className="font-medium text-blue-500">Click or Drop your images here</p>
                            </div> */}
                            <ImagePicker2 name="productImage" multiSelect={true} setImages={setProduct} imgCount={product.images.length} />
                        </div>

                        <p className="mb-7">You need to add at least 4 images. Pay attention to the quality of the pictures you add, comply with the background color standards. Pictures must be in certain dimensions.</p>
                        <div className="flex gap-4 mb-5">
                            <div className="flex-1">
                                <label className="text-black text-[0.9rem] mb-2 block"> Weights <span className="text-red-500">*</span></label>
                                {/* <input required name='weight' value={product.weight} onChange={handleProduct} className="px-5 py-[0.81rem] bg-slate-100 w-full rounded-md outline-none text-[1rem]" type="text" /> */}                               
                                <Select className="custom-multi-select" required name="weights"
                                    labelId="demo-multiple-checkbox-label"
                                    id="demo-multiple-checkbox"
                                    multiple
                                    value={product.weights}
                                    onChange={handleMultiSelect}
                                    input={<OutlinedInput className="ps-5 py-[0.81rem] bg-slate-100 w-full rounded-md outline-none" />}
                                    renderValue={(selected) => selected.join(', ')}
                                    // MenuProps={MenuProps}
                                    >
                                    {weights.map((name) => (
                                        <MenuItem key={name} value={name}>
                                            <Checkbox checked={product.weights.includes(name)} />
                                            <ListItemText primary={name} />
                                        </MenuItem>
                                    ))}
                                </Select>
                            </div>
                            <div className="flex-1">
                                <label className="text-black text-[0.9rem] mb-2 block"> Product Ram <span className="text-red-500">*</span></label>
                                {/* <input required name='weight' value={product.ram} onChange={handleProduct} className="px-5 py-[0.81rem] bg-slate-100 w-full rounded-md outline-none text-[1rem]" type="text" /> */}
                                <Select className="custom-multi-select" required name="ram"
                                    labelId="demo-multiple-checkbox-label"
                                    id="demo-multiple-checkbox"
                                    multiple
                                    value={product.ram}
                                    onChange={handleMultiSelect}
                                    input={<OutlinedInput className="ps-5 py-[0.81rem] bg-slate-100 w-full rounded-md outline-none" />}
                                    renderValue={(selected) => selected.join(', ')}
                                    // MenuProps={MenuProps}
                                    >
                                    {ram.map((name) => (
                                        <MenuItem key={name} value={name}>
                                            <Checkbox checked={product.ram.includes(name)} />
                                            <ListItemText primary={name} />
                                        </MenuItem>
                                    ))}
                                </Select>
                            </div>
                            <div className="flex-1">
                                <label className="text-black text-[0.9rem] mb-2 block"> Sizes</label>
                                {/* <input required name="sizes" value={product.sizes} onChange={handleProduct} className="px-5 py-[0.81rem] bg-slate-100 w-full rounded-md outline-none text-[1rem]" type="text" /> */}
                                <Select className="custom-multi-select" required name="sizes"
                                    labelId="demo-multiple-checkbox-label"
                                    id="demo-multiple-checkbox"
                                    multiple
                                    value={product.sizes}
                                    onChange={handleMultiSelect}
                                    input={<OutlinedInput className="ps-5 py-[0.81rem] bg-slate-100 w-full rounded-md outline-none" />}
                                    renderValue={(selected) => selected.join(', ')}
                                    // MenuProps={MenuProps}
                                    >
                                    {sizes.map((name) => (
                                        <MenuItem key={name} value={name}>
                                            <Checkbox checked={product.sizes.includes(name)} />
                                            <ListItemText primary={name} />
                                        </MenuItem>
                                    ))}
                                </Select>
                            </div>
                        </div>
                        <div className="flex gap-4 mb-5">
                            <div className="flex-1">
                                <label className="text-black text-[0.9rem] mb-2 block"> Opening Stock <span className="text-red-500">*</span></label>
                                <input required name='countInStock' value={product.countInStock} onChange={handleProduct} className="px-5 py-[0.81rem] bg-slate-100 w-full rounded-md outline-none text-[1rem]" type="text" />
                            </div>
                            <div className="flex-1">
                                <label className="text-black text-[0.9rem] mb-2 block"> Locations <span className="text-red-500">*</span></label>
                                {/* <input required name='countInStock' value={product.location} onChange={handleProduct} className="px-5 py-[0.81rem] bg-slate-100 w-full rounded-md outline-none text-[1rem]" type="text" /> */}
                                <Select className="custom-multi-select" required name="locations"
                                    labelId="demo-multiple-checkbox-label"
                                    id="demo-multiple-checkbox"
                                    multiple
                                    value={product.locations}
                                    onChange={handleMultiSelect}
                                    input={<OutlinedInput className="ps-5 py-[0.81rem] bg-slate-100 w-full rounded-md outline-none" />}
                                    renderValue={(selected) => selected.join(', ')}
                                    // MenuProps={MenuProps}
                                    >
                                    {locations.map((name) => (
                                        <MenuItem key={name} value={name}>
                                            <Checkbox checked={product.locations.includes(name)} />
                                            <ListItemText primary={name} />
                                        </MenuItem>
                                    ))}
                                </Select>
                            </div>
                            <div className="flex-1">
                                <label className="text-black text-[0.9rem] mb-2 block"> Product Date <span className="text-red-500">*</span></label>
                                <input required name='dateCreated' value={product.dateCreated} onChange={handleProduct} className="px-5 py-[0.81rem] bg-slate-100 w-full rounded-md outline-none text-[1rem]" type="text" />
                            </div>
                        </div>
                        <div className="flex flex-wrap gap-4 text-nowrap mt-[5.4rem]">
                            <Button className="bg-blue-600 min-w-fit text-white rounded-lg px-4 py-3 hover:bg-indigo-500 flex-1 text-lg shadow-sm shadow-purple-400" type="submit">Add Product</Button>
                            <Button className="bg-pink-600 min-w-fit text-white rounded-lg px-4 py-3 hover:bg-indigo-500 flex-1 text-lg shadow-sm shadow-purple-400">Save for Later</Button>
                            <Button className="bg-gray-300 min-w-fit text-gray-600 rounded-lg px-4 py-3 hover:bg-indigo-200 flex-1 text-lg shadow-sm shadow-purple-400">Shedule</Button>
                        </div>
                    </div>
                </div>
            </form>
        </section>
    )   
}

export default AddProduct;