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
import { useEffect, useState } from "react";
import { products } from "../page";
import { Button, CircularProgress } from "@mui/material";
import { Download } from "@mui/icons-material";
import { FaRegEye } from "react-icons/fa6";
import { FaRegEdit, FaRegTrashAlt } from "react-icons/fa";
import axios from "axios";
import { useSelector } from "react-redux";
import { MyLoader } from "@/components/utils";
import { deleteEntity } from "@/actions/banners";
// import { getCategory } from "@/api/actions";


function CategoryList({ refresh, categories, getCategories }) {

    const [age, setAge] = useState(7);
    const [loading, setLoading] = useState(false);

    const handleChange = (event) => setAge(event.target.value);

    const [page, setPage] = useState(1);
    const handlePage = (event, value) => {
      setPage(value);
    };

    // const [list, setList] = useState([]);

    // const getCategories = async () => {
    //     const res = await axios.get('http://localhost:3000/api/category');
    //     setList(res.data);
    //     // let category = await getCategory(handleList);
    //     // setList(JSON.parse(category));            
    // }

    // useEffect(() => {
    //     getCategories();
    // },[refresh])

    const deleteItem = async (id) => {
        setLoading(true);
        // const res = await axios.delete(`https://shopify-seven-iota.vercel.app/api/category`, { data: { id: id } });
        const res = await deleteEntity({ name: 'category', id: id });
        setLoading(false);
        if (res.status === 200) {
            getCategories();
        }
    }

    return (
        <section className='h-full relative'>
            {loading ? <MyLoader classes='absolute' /> : ''}
            <div className="">
                <div className="rounded-lg border border-gray-300 bg-white shadow-sm p-4 md:p-6">
                    <div className="flex justify-between items-center pb-4">
                        <h4 className="text-[1.35rem] font-semibold flex gap-2 items-center"><GoDotFill className="text-xl text-gray-500"/> Categories Overview.</h4>
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
                                    <th className="text-start">Image</th>
                                    <th className="text-start">Name</th>
                                    <th>Color</th>
                                    <th>Quantity</th>
                                    <th>Sale</th>
                                    <th>Start Date</th>
                                    <th>Action</th>
                                </tr>
                                {categories.map(i => (
                                    <tr className="text-gray-700 font-semibold" key={i.id}>
                                        <td style={{paddingRight: 0}}>
                                            <img className="rounded h-12" src={`/images/categories/${i.images[0]}`} alt="Product" />
                                        </td>
                                        <td className="text-start">
                                            <span className="font-medium text-gray-900 text-end">{i.name}</span>
                                        </td>
                                        <td>
                                            <span className={`${i.color ? 'bg-green-100 border border-green-200' : 'bg-red-100 border border-red-200'} ${i.color ? 'text-green-600' : 'text-red-600'} text-sm font-medium py-[0.25rem] px-[0.7rem] rounded-2xl inline-block`}>{i.color ? `In Stock` : 'Out of Stock'}</span>
                                        </td>
                                        <td className="whitespace-nowrap">
                                            ₹ 28,672.36
                                        </td>
                                        <td className="whitespace-nowrap">
                                            ₹ 928.41
                                        </td>
                                        <td className="whitespace-nowrap">
                                            12/04/2024
                                        </td>
                                        <td className="whitespace-nowrap">
                                            <div className="flex gap-6 justify-center">
                                                <FaRegEye className="text-blue-600 text-xl bg-white cursor-pointer"/>
                                                <FaRegEdit className="text-green-700 text-xl bg-white cursor-pointer"/>
                                                {/* {loading ? <CircularProgress size="1.2rem" /> : <FaRegTrashAlt onClick={() => deleteItem(i.id)} className="text-red-600 text-xl bg-white cursor-pointer"/>} */}
                                                <FaRegTrashAlt onClick={() => deleteItem(i.id)} className="text-red-600 text-xl bg-white cursor-pointer"/>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <div className="mt-6">
                        <Stack spacing={2} className="flex-row flex-wrap gap-4 justify-between items-center">
                            <Typography>Showing page: {page}</Typography>
                            <Pagination style={{ marginTop: 0 }} count={10} color="secondary" page={page} onChange={handlePage} />
                        </Stack>
                    </div>
                </div>
            </div>
        </section>
    )   
}

export default CategoryList;