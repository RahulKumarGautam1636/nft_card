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
import { getBrands, getCategories2, getLocations, getProducts2, getSubCategory } from "@/actions/get";
import { category } from "@/data";
import { ImagePicker2 } from "@/app/api/utils";
import { useSearchParams } from "next/navigation";
import { createProduct } from "@/actions/post";


function AddProduct({ setRefresh }) {

    const params = useSearchParams();
    const editId = params.get('id');

    const dispatch = useDispatch();   

    useEffect(() => {
        if (!editId) return;
        const getProductById = async () => {
            dispatch(globalLoader(true));
            let res = await getProducts2({ id: editId });
            dispatch(globalLoader(false));
            if (res) {
                console.log(res.brand);
                setProduct({
                    id: res.id,
                    name: res.name,        
                    brand: res.brand,
                    category: res.category,
                    subCategory: res.subCatId,
                    description: res.description,
                    maxPrice: res.oldPrice, 
                    price: res.price,
                    discount: res.discount,
                    isFeatured: res.isFeatured,
                    isPopular: res.isPopular || false,
                    weights: res.productWeight,
                    sizes: res.size,
                    countInStock: res.countInStock, 
                    dateCreated: res.dateCreated,
                    rating: res.rating,
                    locations: res.location,
                    ram: res.productRam,
                    images: [],

                    recImg: res.images.map(i => ({ folder: `products`, name: i, delete: false })),
                })
            }
        }
        getProductById();
    },[editId])
    
    const [categories, setCategories] = useState({ categoryList: [] });
    const [subCategories, setSubCategories] = useState([]);
    const [brands, setBrands] = useState([]);
    const [locations, setLocations] = useState([]);

    const initProduct = {
        id: '',
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
        rating: 1
    }

    const [product, setProduct] = useState(initProduct);

    useEffect(() => {
        const getData = async () => {
            dispatch(globalLoader(true));
            const brand = await getBrands();
            const category = await getCategories2();
            const locations = await getLocations();
            setCategories(category.data);          
            setBrands(brand.data);
            setLocations(locations.data);
            dispatch(globalLoader(false));
        }
        getData();
    },[])

    // useEffect(() => {
    //     if (!brands.length) return;
    //     setProduct(pre => ({...pre, brand: brands[0]}));
    // },[brands.length])

    // useEffect(() => {
    //     if (!categories.categoryList.length) return;
    //     setProduct(pre => ({...pre, category: categories.categoryList[0]}));
    // },[categories.categoryList.length])

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
        const newProduct = { 
            ...product, 
            brand: product.brand.id, 
            locations: product.locations.map(i => i.id),
            editMode: editId ? true : false,
            editId: editId || ''
        }
        // const isSuccess = await handleFormDataPost('products', newProduct, dispatch);
        dispatch(globalLoader(true));       
        const isSuccess = await createProduct('products', newProduct);
        dispatch(globalLoader(false));
        if (isSuccess) {
            setRefresh(Math.random() * 10000);
            setProduct(initProduct);
        }
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

    const mapArrToObj = (objList, strList) => {
        let a = [];
        strList.forEach(i => {
            let currLoc = objList.find(x => x.id === i);
            a.push(currLoc);
        });
        return a;
    }

    const handleMultiSelect = (e) => {
        const { name, value } = e.target;
        if (name === 'locations') {
            setProduct(pre => ({...pre, locations: mapArrToObj(locations, value)}));
            return;
        }        
        setProduct(pre => ({...pre, [name]: typeof value === 'string' ? value.split(',') : value}))
    }
    
    const isChecked = (id) => product.locations.find(i => i.id === id);    

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
                                <select name="brand" value={product.brand.id} required onChange={handleProduct} className="px-5 py-[0.81rem] bg-slate-100 w-full rounded-md outline-none text-[1rem]">
                                    {brands.map((i, n) => (<option key={i.id} value={i.id}>{i.name}</option>))}
                                </select>
                            </div>
                        </div>
                        <div className="flex gap-4 mb-5">
                            <div className="flex-1">
                                <label className="text-black text-[0.9rem] mb-2 block"> Category</label>
                                <select name="category" value={product.category.id} required onChange={handleProduct} className="px-5 py-[0.81rem] bg-slate-100 w-full rounded-md outline-none text-[1rem]">
                                    {categories.categoryList.map((i, n) => (<option key={i.id} value={i.id}>{i.name}</option>))}
                                </select>
                            </div>
                            <div className="flex-1">
                                <label className="text-black text-[0.9rem] mb-2 block"> Sub Category <span className="text-red-500">*</span></label>
                                <select name="subCategory" value={product.subCategory?.id} onChange={handleProduct} className="px-5 py-[0.81rem] bg-slate-100 w-full rounded-md outline-none text-[1rem]">
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
                            <ImagePicker2 name="productImage" multiSelect={true} setImages={setProduct} imgCount={product.images.length} recImg={product.recImg} />
                        </div>

                        <p className="mb-7">You need to add at least 4 images. Pay attention to the quality of the pictures you add, comply with the background color standards. Pictures must be in certain dimensions.</p>
                        <div className="flex gap-4 mb-5">
                            <div className="flex-1">
                                <label className="text-black text-[0.9rem] mb-2 block"> Weights <span className="text-red-500">*</span></label>
                                <Select className="custom-multi-select" name="weights"
                                    labelId="demo-multiple-checkbox-label"
                                    id="demo-multiple-checkbox"
                                    multiple
                                    value={product.weights}
                                    onChange={handleMultiSelect}
                                    input={<OutlinedInput className="ps-5 py-[0.81rem] bg-slate-100 w-full rounded-md outline-none" />}
                                    renderValue={(selected) => selected.join(', ')}
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
                                <Select className="custom-multi-select" name="ram"
                                    labelId="demo-multiple-checkbox-label"
                                    id="demo-multiple-checkbox"
                                    multiple
                                    value={product.ram}
                                    onChange={handleMultiSelect}
                                    input={<OutlinedInput className="ps-5 py-[0.81rem] bg-slate-100 w-full rounded-md outline-none" />}
                                    renderValue={(selected) => selected.join(', ')}
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
                                <Select className="custom-multi-select" name="sizes"
                                    labelId="demo-multiple-checkbox-label"
                                    id="demo-multiple-checkbox"
                                    multiple
                                    value={product.sizes}
                                    onChange={handleMultiSelect}
                                    input={<OutlinedInput className="ps-5 py-[0.81rem] bg-slate-100 w-full rounded-md outline-none" />}
                                    renderValue={(selected) => selected.join(', ')}
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
                                <Select className="custom-multi-select" required name="locations"
                                    labelId="demo-multiple-checkbox-label"
                                    id="demo-multiple-checkbox"
                                    multiple
                                    value={product.locations.map(i => i.id)}
                                    onChange={handleMultiSelect}
                                    input={<OutlinedInput className="ps-5 py-[0.81rem] bg-slate-100 w-full rounded-md outline-none" />}
                                    renderValue={(selected) => {
                                        // console.log(selected);
                                        // let render = selected.map(i => i.label).join(', ');
                                        let names = mapArrToObj(locations, selected).map(i => i?.label).join(', ');
                                        return names;
                                    }}
                                    >
                                    {locations.map((item) => (
                                        <MenuItem key={item.id} value={item.id}>
                                            <Checkbox checked={isChecked(item.id) ? true : false} />
                                            <ListItemText primary={item.label} />
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