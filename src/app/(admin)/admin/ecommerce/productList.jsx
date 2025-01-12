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
import { useState } from "react";
// import { products } from "../page";
import { MyLoader } from "@/components/utils";
import { useSelector } from "react-redux";
import { imgSource } from "@/api/actionUtils";


function ProductList({ products, setProducts }) {

    const [age, setAge] = useState(7);
    const isLoading = useSelector(state => state.isLoading);

    const handleChange = (event) => setAge(event.target.value);

    // const [page, setPage] = useState(1);
    const handlePage = (event, value) => {
    //   setPage(value);
        setProducts(pre => ({...pre, page: value}));
    };

    // const [loading, setLoading] = useState(false);

    return (
        <section className='h-full relative'>
            {isLoading.local.productList ? <MyLoader classes='absolute' /> : ''}
            <div className="">
                <div className="rounded-lg border border-gray-300 bg-white shadow-sm p-4 md:p-6">
                    <div className="flex justify-between items-center pb-4">
                        <h4 className="text-[1.35rem] font-semibold flex gap-2 items-center"><GoDotFill className="text-xl text-gray-500"/> Product Overview.</h4>
                        <FormControl className="m-0 min-w-24" size="small">
                            <InputLabel id="demo-select-small-label">View</InputLabel>
                            <Select labelId="demo-select-small-label" id="demo-select-small" value={age} label="Age" onChange={handleChange}>
                                <MenuItem value=""><em>View All</em></MenuItem>
                                <MenuItem value={3}>3 Days</MenuItem>
                                <MenuItem value={7}>7 Days</MenuItem>
                                <MenuItem value={14}>2 Weeks</MenuItem>
                            </Select>
                        </FormControl>
                    </div>
                   
                    <div className="table-responsive overflow-auto">
                        <table className="table-type-1 header-bg w-full min-w-[730px] text-center border-b border-gray-300">
                            <tbody>
                                <tr className="border-b-[3px] border-orange-500">
                                    <th className="text-start" colSpan={2}>Product</th>
                                    <th>Category</th>
                                    <th>Price</th>
                                    <th>Stock</th>
                                    <th>Sale</th>
                                    <th>Revenue</th>
                                </tr>
                                {products.docs.map(i => (
                                    <tr className="text-gray-700 font-semibold" key={i.id}>
                                        <td style={{paddingRight: 0}}>
                                            <img className="rounded h-12" src={imgSource('products', i.images[0])} alt="Product" />
                                        </td>
                                        <td className="text-start max-w-80 overflow-hidden overflow-ellipsis whitespace-nowrap">
                                            <span className="font-medium text-gray-900 text-end">{i.name}</span>
                                        </td>

                                        <td className="whitespace-nowrap">
                                            <span className="text-gray-500">{i.category?.name}</span>
                                        </td>
                                        <td className="whitespace-nowrap">
                                            ₹ 2454.25
                                        </td>
                                        <td>
                                            <span className={`${i.stock ? 'bg-green-100 border border-green-200' : 'bg-red-100 border border-red-200'} ${i.stock ? 'text-green-600' : 'text-red-600'} text-sm font-medium py-[0.25rem] px-[0.7rem] rounded-2xl inline-block`}>{i.stock ? `In Stock (${i.stock})` : 'Out of Stock'}</span>
                                        </td>
                                        <td className="whitespace-nowrap">
                                            ₹ 28,672.36
                                        </td>
                                        <td className="whitespace-nowrap">
                                            ₹ 928.41
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <div className="mt-6">
                        <Stack spacing={2} className="flex-row flex-wrap gap-4 justify-between items-center">
                            <Typography>Showing page: {products.page}</Typography>
                            <Pagination style={{ marginTop: 0 }} count={products.totalPages} color="secondary" page={products.page} onChange={handlePage} />
                        </Stack>
                    </div>
                </div>
            </div>
        </section>
    )   
}

export default ProductList;