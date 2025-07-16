"use client";
import { LinearProgress } from "@mui/material";
import { TiDelete } from "react-icons/ti";
import { IconButton } from "@mui/material";
import { BiHeart, BiMinus, BiPlus } from "react-icons/bi";
import { RiDiscountPercentLine } from "react-icons/ri";
import { Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, dumpCart, globalLoader, removeFromCart } from "@/lib/slices";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import { FaRegCalendarAlt, FaRegClock } from "react-icons/fa";
import Link from "next/link";
import { useEffect, useState } from "react";
import { getOrders } from "@/actions/get";
import { imgSource } from "@/api/actionUtils";

export default function Cart() {

    const dispatch = useDispatch();
    const user = useSelector(i => i.user);

    const [orders, setOrders] = useState([]);

    const getMyOrders = async () => {
        dispatch(globalLoader(true));
        const res = await getOrders({ userId: user.id });
        dispatch(globalLoader(false));
        if (res.status === 200) {
            setOrders(res.data)         
        } else {
            alert(res.message)
        }
    }
    
    useEffect(() => {
        getMyOrders();
    },[])

    console.log(orders);    

    return (
        <main className='mt-5 md:mt-12'>
            {orders.map((order, index) => (
                <div key={order.id} className={`container mx-auto px-4 flex flex-col md:flex-row gap-4 ${index && 'mt-5 '}`}>
                    <div className="w-full">
                        <div className="rounded-lg border border-gray-300 bg-gray-50 overflow-hidden">
                            <div className="p-6 border-b border-gray-300 bg-slate-100 flex gap-8 items-center flex-wrap">
                                <p className="text-[1.15rem] font-semibold text-gray-500">Order <span className="text-black">#2514</span></p> 
                                <div>
                                    <span className="text-green-600 bg-green-200 border border-green-300 text-[1.1rem] font-medium py-[0.2rem] px-[0.8rem] rounded-md me-4">Paid</span>
                                    <span className="text-orange-600 bg-orange-100 border border-orange-300 text-[1.1rem] font-medium py-[0.2rem] px-[0.8rem] rounded-md">In Transit</span>
                                </div>
                                <p className="text-[1.05rem] font-semibold text-gray-600 flex gap-8 items-center">
                                    <span className="flex gap-2 items-center"><FaRegCalendarAlt className="text-lg"/> {new Date(order.orderDate).toDateString()}</span>
                                    <span className="flex gap-2 items-center"><FaRegClock className="text-lg"/>{new Date(order.orderDate).toLocaleTimeString()}</span>
                                </p> 
                            </div>
                            <div className="table-responsive overflow-auto">
                                <table className="table-type-1 w-full md:min-w-[720px]">
                                    <tbody>
                                        <tr className="text-center hidden md:table-row">
                                            <th colSpan={2}>Product</th>
                                            <th>Price</th>
                                            <th>Quantity</th>
                                            <th>Total</th>
                                            {/* <th>Remove</th> */}
                                        </tr>
                                        {order.products.map(i => (
                                            <tr className="text-gray-700 font-semibold block md:table-row" key={i.id}>
                                                <td className="w-full md:w-24 flex justify-center md:table-cell" style={{paddingRight: 0}}>
                                                    <img className="rounded h-60 md:h-24" src={imgSource(`products`, i.id.images[0])} alt="Product" />
                                                </td>
                                                <td className="flex justify-between gap-12 md:table-cell">
                                                    <strong className="block md:hidden font-bold">Name</strong>
                                                    <div>
                                                        <span className="font-medium text-blue-900 text-end">{i.id.name}</span>
                                                        <div className="block mt-3">
                                                            <span className="font-medium text-gray-600 me-4">MRP: ₹{i.id.oldPrice}</span>
                                                            <span className="text-cyan-100 bg-cyan-700 text-sm font-medium py-[0.35rem] px-[0.8rem] rounded-2xl w-fit">{i.id.discount}% OFF</span>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="whitespace-nowrap flex justify-between md:table-cell">
                                                    <strong className="block md:hidden font-bold">Price</strong>
                                                    <span className="text-gray-500">₹ {i.rate}</span>
                                                </td>
                                                <td className="flex justify-between items-center md:table-cell">
                                                    <strong className="block md:hidden font-bold">Quantity</strong>
                                                    <div className="flex gap-[1.3rem]">
                                                        <div className="text-gray-900 flex items-center gap-[1.3rem]">
                                                            <span>x {i.qty}</span>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="whitespace-nowrap flex justify-between md:table-cell">
                                                    <strong className="block md:hidden font-bold">Total</strong>
                                                    ₹ {i.total}
                                                </td>
                                                {/* <td className="flex justify-between md:table-cell">
                                                    <strong className="block md:hidden font-bold">Action</strong>
                                                    <div className="flex gap-6">
                                                        <BiHeart  className="text-red-600 text-4xl bg-white cursor-pointer" style={{fontSize: '1.95rem'}}/>
                                                        <TiDelete onClick={() => dispatch(removeFromCart(i.id))} className="text-red-600 text-4xl bg-white cursor-pointer" style={{fontSize: '1.95rem'}} />
                                                    </div>
                                                </td> */}
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    <div className="rounded-lg p-6 border border-gray-300 w-full max-w-[35rem] bg-gray-50">
                        <h2 className="text-xl font-semibold border-b border-gray-300 pb-5">Order Details</h2>
                        <div className="pt-8 flex flex-col gap-4">
                            <div className="flex justify-between">
                                <h4 className="font-semibold">Subtotal</h4>
                                <p className="font-semibold">₹{order.orderTotal}</p>
                            </div>
                            <div className="flex justify-between">
                                <h4 className="font-semibold">Deliver To</h4>
                                <p className="">{user.name}</p>
                            </div>
                            <div className="flex justify-between gap-4">
                                <h4 className="font-semibold">Address:</h4>
                                <p className="text-right">{order.shippingAddress.addressLine}, {order.shippingAddress.city}, {order.shippingAddress.pin}, {order.shippingAddress.state}</p>
                            </div>
                            <div className="flex justify-between items-start">
                                <h4 className="font-semibold pt-2">Shipping Details</h4>
                                <div>
                                    <FormControl>
                                        <RadioGroup value={order.delivery?.deliveryType} aria-labelledby="demo-radio-buttons-group-label" defaultValue="female" name="radio-buttons-group">
                                            <FormControlLabel labelPlacement="start" value="Home Delivery" control={<Radio />} label="Home Delivery" />
                                            <FormControlLabel labelPlacement="start" value="Local Pickup" control={<Radio />} label="Local Pickup" />
                                        </RadioGroup>
                                    </FormControl>
                                </div>
                            </div>
                            <div className="flex justify-between">
                                <h4 className="font-semibold">Delivery Charge:</h4>
                                <p className="font-semibold">₹{order.delivery?.charge}</p>
                            </div>
                            <div className="flex justify-between">
                                <h4 className="font-semibold">Payment Mode:</h4>
                                <p className="font-semibold">{order.paymentMethod}</p>
                            </div>
                            <div className="flex justify-between items-end mt-6 md:mt-8">
                                <h4 className="font-semibold">TOTAL:</h4>
                                <p className="font-semibold text-3xl text-blue-600">${order.orderTotal}</p>
                            </div>
                            <div className="flex gap-2">
                                <Link prefetch={false} className="flex-1" href={`#`}>
                                    <Button className="bg-pink-600 text-white rounded-lg p-3 hover:bg-pink-500 font-bold w-full">CANCEL ORDER</Button>
                                </Link>
                                <Link prefetch={false} className="flex-1" href={`#`}>
                                    <Button className="bg-purple-600 text-white rounded-lg p-3 hover:bg-purple-500 font-bold w-full">NEED HELP</Button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </main>
    )   
}
