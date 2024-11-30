"use client";
import { LinearProgress } from "@mui/material";
import { TiDelete } from "react-icons/ti";
import { IconButton } from "@mui/material";
import { BiHeart, BiMinus, BiPlus } from "react-icons/bi";
import { Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "@/lib/slices";
import Link from "next/link";
import withAuth from "@/components/withAuth";
import { useEffect, useState } from "react";
import { Download } from "@mui/icons-material";
import { useFetch } from "@/components/utils";


function AddProduct() {

    const dispatch = useDispatch();
    const cart = useSelector(state => state.cart);
    const cartList = Object.values(cart);

    const cartItemsValueList = cartList.map(item => item.qty * item.price);                           // Array of all item's price * quantity selected.
    const cartSubtotal = cartItemsValueList.reduce((total, num) => total + num, 0).toFixed(2); 
    const brands = useFetch('http://localhost:3000/api/brands')[0];
    const categories = useFetch('http://localhost:3000/api/category')[0];

    const [product, setProduct] = useState({
        name: '',        
        brand: '',
        category: '',
        subCategory: '',
        description: '',
        maxPrice: '', 
        price: '',
        discount: '',
        featured: false,
        popular: false,
        weights: [],
        sizes: [],
        stock: '', 
        date: new Date().toLocaleDateString(),

        images: [],
    });

    useEffect(() => {
        if (!brands.length) return;
        setProduct(pre => ({...pre, brand: brands[0].name}));
    },[brands.length])

    const handleProduct = (e) => {
        const { name, value} = e.target;
        if (name === 'brand') {
            let item = brands.find(i => i.name === value);
            if (!item) return alert('Invalid Brand');
            return setProduct(pre => ({...pre, brand: value}));
        } else if (name === 'category') {
            let item = categories.find(i => i.id === value);
            if (!item) return alert('Invalid Brand');
            return setProduct(pre => ({...pre, category: value}));
        }
        setProduct(pre => ({...pre, [name]: value}));
    } 

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(product);
    }

    return (
        <section className='h-full w-full'>
            <form className="flex flex-col md:flex-row gap-4" onSubmit={handleSubmit}>
                <div className="p-6 rounded-lg shadow-gray-300 bg-white shadow-md flex-1">
                    <h2 className="text-xl font-semibold border-b border-gray-300 pb-4">Add New Product</h2>
                    <div className="mt-6">
                        <div className="flex gap-4 mb-5">
                            <div className="flex-1">
                                <label className="text-black text-[0.9rem] mb-2 block"> Product Name</label>
                                <input name='name' value={product.name} onChange={handleProduct} className="px-5 py-[0.81rem] bg-slate-100 w-full rounded-md outline-none text-[1rem]" type="text" />
                            </div>
                            <div className="flex-1">
                                <label className="text-black text-[0.9rem] mb-2 block"> Brand</label>
                                {/* <input name="brand" value={product.brand} onChange={handleProduct} className="px-5 py-[0.81rem] bg-slate-100 w-full rounded-md outline-none text-[1rem]" type="text" /> */}
                                <select name="brand" value={product.brand} onChange={handleProduct} className="px-5 py-[0.81rem] bg-slate-100 w-full rounded-md outline-none text-[1rem]">
                                    {brands.map((i, n) => (<option key={n} value={i.name}>{i.name}</option>))}
                                </select>
                            </div>
                        </div>
                        <div className="flex gap-4 mb-5">
                            <div className="flex-1">
                                <label className="text-black text-[0.9rem] mb-2 block"> Category</label>
                                {/* <input name="category" value={product.category} onChange={handleProduct} className="px-5 py-[0.81rem] bg-slate-100 w-full rounded-md outline-none text-[1rem]" type="text" /> */}
                                <select name="category" value={product.category} onChange={handleProduct} className="px-5 py-[0.81rem] bg-slate-100 w-full rounded-md outline-none text-[1rem]">
                                    {categories.map((i, n) => (<option key={i.id} value={i.id}>{i.name}</option>))}
                                </select>
                            </div>
                            <div className="flex-1">
                                <label className="text-black text-[0.9rem] mb-2 block"> Sub Category <span className="text-red-500">*</span></label>
                                <input name='subCategory' value={product.subCategory} onChange={handleProduct} className="px-5 py-[0.81rem] bg-slate-100 w-full rounded-md outline-none text-[1rem]" type="text" />
                            </div>
                        </div>
                        <div className="flex gap-4 mb-5">
                            <div className="flex-1">
                                <label className="text-black text-[0.9rem] mb-2 block"> Product Description <span className="text-red-500">*</span></label>
                                <textarea name='description' value={product.description} onChange={handleProduct} className="px-5 py-[0.81rem] bg-slate-100 w-full rounded-md outline-none text-[1rem]" rows={2} type="text" placeholder="Add Short Description" ></textarea>
                            </div>
                        </div>
                        <div className="flex gap-4 mb-5">
                            <div className="flex-1">
                                <label className="text-black text-[0.9rem] mb-2 block"> MAX Price <span className="text-red-500">*</span></label>
                                <input name="maxPrice" value={product.maxPrice} onChange={handleProduct} className="px-5 py-[0.81rem] bg-slate-100 w-full rounded-md outline-none text-[1rem]" type="text" />
                            </div>
                            <div className="flex-1">
                                <label className="text-black text-[0.9rem] mb-2 block"> Price <span className="text-red-500">*</span></label>
                                <input name='price' value={product.price} onChange={handleProduct} className="px-5 py-[0.81rem] bg-slate-100 w-full rounded-md outline-none text-[1rem]" type="text" />
                            </div>
                            <div className="flex-1">
                                <label className="text-black text-[0.9rem] mb-2 block"> Discount</label>
                                <input name="discount" value={product.discount} onChange={handleProduct} className="px-5 py-[0.81rem] bg-slate-100 w-full rounded-md outline-none text-[1rem]" type="text" />
                            </div>
                        </div>
                        <div className="flex items-center mb-4 gap-3 pt-3 text-[0.95rem]">
                            <input type="checkbox" name="featured" checked={product.featured} onChange={handleProduct} />
                            <p>Mark as Featured Product.</p>
                        </div>
                        <div className="flex items-center mb-6 gap-3 text-[0.95rem]">
                            <input type="checkbox" name="popular" checked={product.popular} onChange={handleProduct} />
                            <p>Mark as Popular Product.</p>
                        </div>
                        <Button className="bg-pink-600 text-white text-lg shadow-sm shadow-purple-400 rounded-lg py-3 px-8 hover:bg-pink-500 font-bold block ml-auto">Update Profile</Button>
                    </div>
                </div>
                <div className="p-6 rounded-lg shadow-gray-300 bg-white shadow-md flex-1">
                    <h2 className="text-xl font-semibold border-b border-gray-300 pb-4">Add Product Images</h2>
                    <div className="mt-6">
                        <div className="mb-6 grid gap-4" style={{gridTemplateColumns: 'repeat(auto-fit, minmax(11rem, 1fr))'}}>
                            <div className="h-40 p-5 border border-gray-200 rounded-lg flex justify-center items-center">
                                <img className="max-h-full" src={'/images/categories/4.jpg'} alt="Product" />
                            </div>
                            <div className="h-40 p-5 border border-gray-200 rounded-lg flex justify-center items-center">
                                <img className="max-h-full" src={'/images/categories/4.jpg'} alt="Product" />
                            </div>
                            <div className="h-40 p-5 border border-gray-200 rounded-lg flex justify-center items-center">
                                <img className="max-h-full" src={'/images/categories/4.jpg'} alt="Product" />
                            </div>
                            <div className="h-40 px-5 cursor-pointer border border-dashed border-blue-500 bg-gray-50 rounded-lg flex flex-col gap-3 justify-center items-center text-center">
                                <Download className="text-[4rem] text-pink-600" />
                                <p className="font-medium text-blue-500">Click or Drop your images here</p>
                            </div>
                        </div>

                        <p className="mb-7">You need to add at least 4 images. Pay attention to the quality of the pictures you add, comply with the background color standards. Pictures must be in certain dimensions.</p>
                        <div className="flex gap-4 mb-5">
                            <div className="flex-1">
                                <label className="text-black text-[0.9rem] mb-2 block"> Weights <span className="text-red-500">*</span></label>
                                <input name='weights' value={product.weights} onChange={handleProduct} className="px-5 py-[0.81rem] bg-slate-100 w-full rounded-md outline-none text-[1rem]" type="text" />
                            </div>
                            <div className="flex-1">
                                <label className="text-black text-[0.9rem] mb-2 block"> Sizes</label>
                                <input name="sizes" value={product.sizes} onChange={handleProduct} className="px-5 py-[0.81rem] bg-slate-100 w-full rounded-md outline-none text-[1rem]" type="text" />
                            </div>
                        </div>
                        <div className="flex gap-4 mb-5">
                            <div className="flex-1">
                                <label className="text-black text-[0.9rem] mb-2 block"> Opening Stock <span className="text-red-500">*</span></label>
                                <input name='stock' value={product.stock} onChange={handleProduct} className="px-5 py-[0.81rem] bg-slate-100 w-full rounded-md outline-none text-[1rem]" type="text" />
                            </div>
                            <div className="flex-1">
                                <label className="text-black text-[0.9rem] mb-2 block"> Product Date <span className="text-red-500">*</span></label>
                                <input name='date' value={product.date} onChange={handleProduct} className="px-5 py-[0.81rem] bg-slate-100 w-full rounded-md outline-none text-[1rem]" type="text" />
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