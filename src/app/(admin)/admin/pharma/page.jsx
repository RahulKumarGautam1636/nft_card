"use client";
// import { FiTrendingDown, FiTrendingUp } from "react-icons/fi";
import Typography from '@mui/material/Typography';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { GoDotFill } from "react-icons/go";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useEffect, useState } from "react";
import { MyLoader } from "@/components/utils";
import { useSelector } from "react-redux";
import axios from 'axios';
import { FaRegEye } from "react-icons/fa6";
import { FaRegTrashAlt } from "react-icons/fa";
import { waitFor } from '@/app/api/utils';


function ProductList() {

    const [age, setAge] = useState(7);
    const [isLoading, setLoading] = useState(false);

    const [appns, setAppns] = useState({ docs: [], page: 1, totalPages: '', limit: 20 });

    useEffect(() => {
        getAppns();
    }, [appns.page, appns.limit])

    const getAppns = async () => {
        setLoading(true);
        try {
            const res = await axios.get(`https://shopify-seven-iota.vercel.app/api/pharma?query=appn&page=${appns.page}&perPage=${appns.limit}`);
            setAppns(res.data);
        } catch (error) {
            alert('Something went wrong. Failed to fetch !');
        }
        setLoading(false);
    }

    const deleteAppn = async (id) => {
        setLoading(true);
        const res = await axios.delete('https://shopify-seven-iota.vercel.app/api/pharma', { data: { id: id } });
        if (res.status === 200) {
            await waitFor(1500);
            getAppns();
        } else {
            alert('Something went wrong.');
        }
        setLoading(false);
    }
    
    const handleChange = (event) => setAge(event.target.value);
    // const [page, setPage] = useState(1);
    const handlePage = (event, value) => {
    //   setPage(value);
        setAppns(pre => ({...pre, page: value}));
    };

    // const [loading, setLoading] = useState(false);

    return (
        <section className='h-full relative'>
            {isLoading ? <MyLoader classes='absolute' /> : ''}
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
                                    <th className="text-start" colSpan={2}>Name</th>
                                    <th className="text-start">Doctor</th>
                                    <th>Date</th>
                                    <th>Time</th>
                                    <th>Company ID</th>
                                    <th>Action</th>
                                </tr>
                                {appns.docs.map((i, n) => {
                                    let slNo = (appns.page - 1) * appns.limit + (n + 1);
                                    return (
                                        <tr className="text-gray-700 font-semibold" key={n}>
                                            <td style={{paddingRight: 0}}>
                                                <span className="text-blue-800">{slNo}.</span>
                                            </td>
                                            <td className="text-start max-w-80 overflow-hidden overflow-ellipsis whitespace-nowrap">
                                                <span className="font-medium text-gray-900 text-end">{i.Name}</span>
                                            </td>
                                            <td className="whitespace-nowrap text-start">
                                                <span className="text-gray-500">{i.Doctor.Name}</span>
                                            </td>
                                            <td className="whitespace-nowrap">
                                                {i.AppointDate}
                                            </td>
                                            <td className="whitespace-nowrap">
                                                {i.AppTime}
                                            </td>
                                            <td className="whitespace-nowrap">
                                                {i.EncCompanyId}
                                            </td>
                                            <td className="whitespace-nowrap">
                                                <div className="flex gap-6 justify-center">
                                                    <FaRegEye className="text-blue-600 text-xl bg-white cursor-pointer"/>
                                                    <FaRegTrashAlt onClick={() => deleteAppn(i._id)} className="text-red-600 text-xl bg-white cursor-pointer"/>
                                                </div>
                                            </td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </table>
                    </div>
                    <div className="mt-6">
                        <Stack spacing={2} className="flex-row flex-wrap gap-4 justify-between items-center">
                            <Typography>Showing page: {appns.page}</Typography>
                            <Pagination style={{ marginTop: 0 }} count={appns.totalPages} color="secondary" page={appns.page} onChange={handlePage} />
                        </Stack>
                    </div>
                </div>
            </div>
        </section>
    )   
}

export default ProductList;