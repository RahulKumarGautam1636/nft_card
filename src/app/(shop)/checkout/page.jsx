"use client";
import { LinearProgress } from "@mui/material";
import { Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import { useEffect, useState } from "react";
import { NEXT_APP_BASE_URL } from "@/constants";
import axios from "axios";
import { addUser, globalLoader, modalAction } from "@/lib/slices";
import { useRouter } from "next/navigation";

import { FaMoneyBill1Wave } from "react-icons/fa6";
import { MdPhoneInTalk } from "react-icons/md";
import { IoMdMail } from "react-icons/io";
import { FaLocationPin } from "react-icons/fa6";
import { PiCityBold } from "react-icons/pi";
import { FaMapMarkedAlt } from "react-icons/fa";
import { FaDotCircle } from "react-icons/fa";
import { GiIsland } from "react-icons/gi";
import { Title_1 } from "@/components/utils";
import { postOrders } from "@/actions/post";

export default function Checkout() {

    const dispatch = useDispatch();
    const router = useRouter();
    const cart = useSelector(state => state.cart);
    const user = useSelector(state => state.user);
    const userAddress = user.address || {};
    const isLoggedIn = useSelector(state => state.isLoggedIn);
    const cartList = Object.values(cart);
    
    const [deliveryType, setDeliveryType] = useState('Home Delivery');
    const cartItemsValueList = cartList.map(item => item.qty * item.price);                           
    const cartSubtotal = cartItemsValueList.reduce((total, num) => total + num, 0).toFixed(2); 
    const deliveryCharge = deliveryType === 'Home Delivery' ? 50 : 0;
    const grandTotal = parseFloat(cartSubtotal) + deliveryCharge;

    const [note, setNote] = useState('');

    const order = {
        userId: user.id,
        orderDate: new Date(),
        paymentMethod: 'COD',
        shippingAddress: userAddress.id,
        orderTotal: grandTotal,
        products: cartList.map(i => ({ id: i.id, qty: i.qty, rate: i.price, total: i.qty*i.price })),
        note: note,
        delivery: { type: deliveryType, charge: deliveryCharge }
    }

    console.log(order); 
    
    const placeOrder = async () => {
        if (isLoggedIn) {
            dispatch(globalLoader(true));
            let res = await postOrders(order);
             dispatch(globalLoader(false));
            if (res.status === 200) {
                setTimeout(() => {
                    router.push(`/myOrders`);
                }, 1000);
            } 
        }
    }

    return (
        <main className='mt-5 md:mt-12'>
            <div className="container mx-auto px-4 flex flex-col md:flex-row gap-4">
                <div className="w-full">
                    <div className="rounded-lg p-6 border border-gray-300 bg-gray-50 mb-4">
                        <p className="mb-4">Add <span className="text-red-500 font-bold text-xl mx-2">$20.86</span> more to cart and get free shipping!</p>
                        <LinearProgress className="rounded h-[0.5rem] cart-progress bg-pink-100" variant="determinate" value={50} />
                    </div>
                    <div className="rounded-lg border border-gray-300 p-6">
                        <h2 className="text-xl font-semibold border-b border-gray-300 pb-4">Billing Details</h2>
                        <div className="flex gap-4">
                            <div className="my-6 grid gap-4" style={{gridTemplateColumns: '10.2rem 1fr'}}>
                                <h4 className="font-medium flex gap-3 items-center"><FaMoneyBill1Wave className="text-xl text-[#44558c]" /> Billing To</h4>
                                <p className="text-blue-600 font-medium">{user.name}</p>
                                <h4 className="font-medium flex gap-3 items-center"><MdPhoneInTalk className="text-xl text-[#44558c]" /> Phone Number</h4>
                                <p className="">{user.phone}</p>
                                <h4 className="font-medium flex gap-3 items-center"><IoMdMail className="text-xl text-[#44558c]" /> Email</h4>
                                <p className="">{user.email}</p>
                                <h4 className="font-medium flex gap-3 items-center"><FaLocationPin className="text-xl text-[#44558c]" /> Address</h4>
                                <p className="">{userAddress.addressLine}</p>
                                <h4 className="font-medium flex gap-3 items-center"><PiCityBold className="text-xl text-[#44558c]" /> City</h4>
                                <p className="">{userAddress.city}</p>
                                <h4 className="font-medium flex gap-3 items-center"><FaMapMarkedAlt className="text-xl text-[#44558c]" /> State</h4>
                                <p className="">{userAddress.state}</p>
                                <h4 className="font-medium flex gap-3 items-center"><FaDotCircle className="text-xl text-[#44558c]" /> Pin</h4>
                                <p className="">{userAddress.pin}</p>
                                <h4 className="font-medium flex gap-3 items-center"><GiIsland className="text-xl text-[#44558c]" /> Coutry</h4>
                                <p className="">INDIA</p>
                            </div>
                            <div>
                                {/* <Title_1 heading='Featured Products' subHeading='Do not miss the current offers until the end of March.' /> */}
                            </div>
                        </div>
                        <div>
                            <textarea name="note" value={note} onChange={(e) => setNote(e.target.value)} className="px-5 py-[0.81rem] bg-slate-100 w-full rounded-md outline-none text-[1rem]" rows={4} type="text" placeholder="Order notes (optional)" ></textarea>
                        </div>
                        <div className="flex items-centermb-4 gap-3 pt-3 pb-4 md:py-3 text-[0.95rem]">
                            <input type="checkbox" checked readOnly />
                            <p>Make sure your PIN Code is correct.</p>
                        </div>
                        <Button onClick={() => dispatch(modalAction({name: 'PROFILE_MODAL', status: true}))} className="bg-pink-600 text-white rounded-lg py-3 px-8 hover:bg-pink-500 font-bold block ml-auto">Change Address</Button>
                    </div>
                </div>
                <div className="rounded-lg p-6 border border-gray-300 w-full max-w-[35rem]">
                    <h2 className="text-xl font-semibold border-b border-gray-300 pb-5">Your Order</h2>
                    <div className="pt-8 flex flex-col gap-4">
                        {cartList.map(i => (
                            <div className="flex justify-between gap-5 mb-3" key={i.id}>
                                <h4 className="">{i.name} <span className="text-blue-600 font-semibold">x {i.qty}</span></h4>
                                <p className="font-semibold whitespace-nowrap">₹ {i.price}</p>
                            </div>
                        ))}
                        <div className="flex justify-between border-y border-gray-200 py-3 mb-3">
                            <h4 className="font-semibold">Subtotal</h4>
                            <p className="font-semibold">₹ {cartSubtotal}</p>
                        </div>
                        <div className="flex justify-between gap-12 text-end">
                            <h4 className="font-semibold">Deliver To</h4>
                            <p className="">{user.name} &nbsp;<span className="text-sm font-semibold">({user.phone})</span></p>
                        </div>
                        <div className="flex justify-between gap-12 text-end">
                            <h4 className="font-semibold">Address:</h4>
                            <p className="">{userAddress.addressLine}</p>
                        </div>
                        <div className="flex justify-between items-start">
                            <h4 className="font-semibold pt-2">Delivery Type</h4>
                            <div>
                                <FormControl>
                                    <RadioGroup aria-labelledby="demo-radio-buttons-group-label" defaultValue="female" name="radio-buttons-group" value={deliveryType} onChange={(e) => setDeliveryType(e.target.value)}>
                                        <FormControlLabel labelPlacement="start" value="Home Delivery" control={<Radio />} label="Home Delivery" />
                                        <FormControlLabel labelPlacement="start" value="Local Pickup" control={<Radio />} label="Local Pickup" />
                                    </RadioGroup>
                                </FormControl>
                            </div>
                        </div>
                        <div className="flex justify-between">
                            <h4 className="font-semibold">Delivery Charge:</h4>
                            <p className="font-semibold">₹ {deliveryCharge}</p>
                        </div>
                        <div className="flex justify-between">
                            <h4 className="font-semibold">Payment Mode:</h4>
                            <p className="font-semibold">Cash on Delivery</p>
                        </div>
                        <div className="flex justify-between items-end">
                            <h4 className="font-semibold">TOTAL:</h4>
                            <p className="font-semibold text-3xl text-blue-600">₹ {grandTotal}</p>
                        </div>
                        <div className="flex gap-2">
                            <Button onClick={placeOrder} className="bg-pink-600 text-white rounded-lg p-3 hover:bg-pink-500 font-bold flex-1">PLACE ORDER</Button>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )   
}
