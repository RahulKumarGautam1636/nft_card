'use client';
// import { Button, Checkbox } from "@mui/material";
// import Image from "next/image";
// import { FaLock, FaUser } from "react-icons/fa";
// import { FaPhoneVolume } from "react-icons/fa6";
// import { useDispatch } from "react-redux";
// import { FcGoogle } from "react-icons/fc";
// import { useState } from "react";
// import { MdSecurity } from "react-icons/md";
// import { encrypt, handleNumberInputs } from "../utils";
// import axios from "axios";
// import { NEXT_APP_BASE_URL } from "@/constants";
// import { addUser, loginAction, modalAction } from "@/lib/slices";

import { GrCircleInformation } from "react-icons/gr";
import { IoMdPin } from "react-icons/io";
import { MdPayment } from "react-icons/md";
import { RiCustomerService2Fill } from "react-icons/ri";
import { FaPowerOff } from "react-icons/fa";
import { BiHeart } from "react-icons/bi";
import { LuGift } from "react-icons/lu";
import { PiShoppingCartBold } from "react-icons/pi";
import { useState } from "react";
import { useSelector } from "react-redux";
import { Button } from "@mui/material";
import { logOut } from "../utils";

export const Profile = () => {

    const user = useSelector(state => state.user);

    const tabs = [
        { name: 'Personal Information', icon: <GrCircleInformation /> },
        { name: 'Shopping Cart', icon: <PiShoppingCartBold />},
        { name: 'My Orders', icon: <LuGift />},
        { name: 'My Wishlist', icon: <BiHeart />},
        { name: 'My Addresses', icon: <IoMdPin />},
        { name: 'Payment Methods', icon: <MdPayment />},
        { name: 'Customer Care', icon: <RiCustomerService2Fill />},
        { name: 'Sign Out', icon: <FaPowerOff />},
    ]

    const [active, setActive] = useState('personal-info');

    return (
        <div className="login-modal min-h-screen p-4 md:py-10 bg-gray-200 flex justify-center h-full">
            <div className="container bg-white flex flex-col md:flex-row rounded-2xl max-w-[80rem] overflow-hidden shadow-md shadow-gray-400 min-h-[80vh]">
                <div className="h-full w-full md:w-[25rem] bg-gray-100 p-8" style={{backgroundImage: 'url(/profile-bg-2.jpg)', backgroundSize: '100% 100%', padding: '2rem 0rem', border: '1px solid #e4e4e4'}}>
                    <div className="flex flex-col items-center">
                        <img className="rounded-full max-w-32" src="/images/categories/1.jpg" alt="User" />
                        <h3 className="mt-5 mb-1 text-lg font-semibold">Rahul K Gautam</h3>
                        <p className="text-blue-600 font-semibold">7003290982</p>
                    </div>
                    <ul className="profile-cta pt-5 border-b border-white">
                       {tabs.map(i => (<li style={{backdropFilter: 'blur(5px)'}} className="p-[0.95rem] border-t border-white flex gap-4 items-center" key={i.name}><span className="text-lg">{i.icon}</span> {i.name}</li>))}
                    </ul>
                </div>
                <div className="h-full flex-1">
                    {(() => {
                        if (active === 'personal-info') {
                            return (
                                <div className="p-6">
                                    <h2 className="text-xl font-semibold border-b border-gray-300 pb-4" onClick={logOut}>Billing Details</h2>
                                    <div className="mt-6">
                                        <div className="flex gap-4 mb-4">
                                            <div className="flex-1">
                                                <label className="text-black text-[0.9rem] mb-2 block"> First Name</label>
                                                <input name='Name' value={user.Name} className="px-5 py-[0.81rem] bg-slate-100 w-full rounded-md outline-none text-[1rem]" type="text" />
                                            </div>
                                            <div className="flex-1">
                                                <label className="text-black text-[0.9rem] mb-2 block"> Last Name</label>
                                                <input readOnly value={user.Name} className="px-5 py-[0.81rem] bg-slate-100 w-full rounded-md outline-none text-[1rem]" type="text" />
                                            </div>
                                        </div>
                                        <div className="flex gap-4 mb-4">
                                            <div className="flex-1">
                                                <label className="text-black text-[0.9rem] mb-2 block"> Phone Number</label>
                                                <input readOnly value={user.RegMob1} className="px-5 py-[0.81rem] bg-slate-100 w-full rounded-md outline-none text-[1rem]" type="text" />
                                            </div>
                                            <div className="flex-1">
                                                <label className="text-black text-[0.9rem] mb-2 block"> Email address <span className="text-red-500">*</span></label>
                                                <input name='Email' value={user.Email} className="px-5 py-[0.81rem] bg-slate-100 w-full rounded-md outline-none text-[1rem]" type="text" />
                                            </div>
                                        </div>
                                        <div className="flex gap-4 mb-4">
                                            <div className="flex-1">
                                                <label className="text-black text-[0.9rem] mb-2 block"> Street Address <span className="text-red-500">*</span></label>
                                                <input name='Address' value={user.Address} className="px-5 py-[0.81rem] bg-slate-100 w-full rounded-md outline-none text-[1rem]" type="text" />
                                            </div>
                                            <div className="flex-1">
                                                <label className="text-black text-[0.9rem] mb-2 block"> Town / City <span className="text-red-500">*</span></label>
                                                <input name='City' value={user.City} className="px-5 py-[0.81rem] bg-slate-100 w-full rounded-md outline-none text-[1rem]" type="text" />
                                            </div>
                                        </div>
                                        <div className="flex gap-4 mb-4">
                                            <div className="flex-1">
                                                <label className="text-black text-[0.9rem] mb-2 block"> State <span className="text-red-500">*</span></label>
                                                <input readOnly value={user.StateName} className="px-5 py-[0.81rem] bg-slate-100 w-full rounded-md outline-none text-[1rem]" type="text" />
                                            </div>
                                            <div className="flex-1">
                                                <label className="text-black text-[0.9rem] mb-2 block"> ZIP Code <span className="text-red-500">*</span></label>
                                                <input name='Pin' value={user.Pin} className="px-5 py-[0.81rem] bg-slate-100 w-full rounded-md outline-none text-[1rem]" type="text" />
                                            </div>
                                            <div className="flex-1">
                                                <label className="text-black text-[0.9rem] mb-2 block"> Country</label>
                                                <input readOnly value={'India'} className="px-5 py-[0.81rem] bg-slate-100 w-full rounded-md outline-none text-[1rem]" type="text" />
                                            </div>
                                        </div>
                                        <div>
                                            <textarea className="px-5 py-[0.81rem] bg-slate-100 w-full rounded-md outline-none text-[1rem]" rows={4} type="text" placeholder="Order notes (optional)" ></textarea>
                                        </div>
                                        <div className="flex items-center mb-4 gap-3 pt-3 text-[0.95rem]">
                                            <input type="checkbox" checked readOnly />
                                            <p>Please add your address correctly.</p>
                                        </div>
                                        <div className="flex items-center mb-6 gap-3 text-[0.95rem]">
                                            <input type="checkbox" checked readOnly />
                                            <p>Make sure your PIN Code is correct.</p>
                                        </div>
                                        <Button className="bg-pink-600 text-white rounded-lg py-3 px-8 hover:bg-pink-500 font-bold block ml-auto">Update Address</Button>
                                    </div>
                                </div>
                            )
                        }
                    })()}
                </div>
            </div>
        </div>
    )
}