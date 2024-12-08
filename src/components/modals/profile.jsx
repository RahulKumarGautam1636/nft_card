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
import { useSelector, useDispatch } from "react-redux";
import { Button } from "@mui/material";
import { logOut } from "../utils";


import { useEffect, useState } from "react";
import { NEXT_APP_BASE_URL } from "@/constants";
import axios from "axios";
import { addUser } from "@/lib/slices";
import { register } from "@/api/api";
import Link from "next/link";

export const Profile = () => {

    const [active, setActive] = useState('personal-info');

    // const tabs = [
    //     { name: 'Personal Information', icon: <GrCircleInformation />},
    //     { name: 'Shopping Cart', icon: <PiShoppingCartBold />},
    //     { name: 'My Orders', icon: <LuGift />},
    //     { name: 'My Wishlist', icon: <BiHeart />},
    //     { name: 'My Addresses', icon: <IoMdPin />},
    //     { name: 'Payment Methods', icon: <MdPayment />},
    //     { name: 'Customer Care', icon: <RiCustomerService2Fill />},
    //     { name: 'Sign Out', icon: <FaPowerOff />},
    // ]

    const dispatch = useDispatch();
    const user = useSelector(state => state.user);
    const isLoggedIn = useSelector(state => state.isLoggedIn);

    // Update Address starts ----------------------------------------------------------------------------
    const [regData, setRegData] = useState({
        Name: '',        
        EncCompanyId: 'FFCeIi27FQMTNGpatwiktw==',
        PartyCode: '0',
        PartyId: '0',
        UserId: '0',
        RegMob1: '',
        Email: '', 
        Address: '',
        UserPassword: '',
        UserType: 'Customer',
        Address2: '',
        City: '',
        State: 3,
        StateName: 'West Bengal',
        Pin: '', 

        DOB: '',
        DOBstr: '',
        Age: '',
        AgeMonth: '',
        AgeDay: '',
        IsDOBCalculated: 'N',
        GenderDesc: 'Male',
        Gender: 104,
        Country: 1,
        MemberId: '',

        RegNo: "",                                // Unused fields.
        Aadhaar: "",
        Salutation: "",
        Qualification: "",
        SpecialistId: '',
        AnniversaryDate: "",
        AnniversaryDatestr: "",
        compName: "",
        compAddress: "",
        compState: "",
        compPin: "",
        compPhone1: "",
        compPhone2: "",
        compMail: ""       
    });

    useEffect(() => {
        setRegData(pre => ({
            ...pre,
            Name: user.Name,        
            EncCompanyId: user.EncCompanyId,
            PartyCode: user.PartyCode,
            PartyId: user.PartyId,
            UserId: user.UserId,
            RegMob1: user.RegMob1,
            Email: user.Email, 
            Address: user.Address,
            UserPassword: user.UserPassword,
            UserType: user.UserType,
            Address2: user.Address2,
            City: user.City,
            State: user.State,
            StateName: user.StateName,
            Pin: user.Pin,  
            
            DOB: new Date(user.DOB).toLocaleDateString('en-TT'),
            DOBstr: new Date(user.DOB).toLocaleDateString('en-TT'),
            Age: user.Age,
            AgeMonth: user.AgeMonth,
            AgeDay: user.AgeDay,
            IsDOBCalculated: user.IsDOBCalculated,
            GenderDesc: user.GenderDesc,
            Gender: user.Gender,
            Country: user.Country,
            MemberId: user.MemberId
        }))
    }, [user])

    const handleRegForm = (e) => {
        const { name, value} = e.target;
        setRegData(pre => ({...pre, [name]: value}));
    } 

    const handleRegisterFormSubmit = async (e) => {
        e.preventDefault();
        console.log(regData);        
        if (isLoggedIn) {
            let status = await register(regData);
            if (status) {
                let loginStatus = await refreshUserInfo(regData);
                if (loginStatus) {
                    alert('Successfully updated the Address');
                } else {
                    alert('We could not log you in, Please log in again manually.');
                }
            } 
        }
    }

    const compCode = 'FFCeIi27FQMTNGpatwiktw==';
    
    const refreshUserInfo = async (params) => {
        try {
            // loaderAction(true);
            const res = await axios.get(`${NEXT_APP_BASE_URL}/api/UserAuth?UN=${params.RegMob1}&UP=${params.UserPassword}&CID=${compCode}`);
            // loaderAction(false);
            if (res.data.UserId === 0) {
              return false;
            } else {
              dispatch(addUser(res.data));
              return true;
            }
        } catch (err) {
            alert(err)
        }
    }

    // Registeration ends ----------------------------------------------------------------------------


    return (
        <div className="login-modal min-h-screen md:p-4 md:py-10 bg-gray-200 flex justify-center h-full">
            <div className="container bg-white flex flex-col md:flex-row md:rounded-2xl max-w-[80rem] overflow-hidden shadow-md shadow-gray-400 min-h-[80vh]">
                <div className="h-full w-full md:w-[25rem] bg-gray-100 p-8" style={{background: 'linear-gradient(#3036ff, #6a31c1, #af28c7, #d31e8b)'}}>    {/* style={{backgroundImage: 'url(/profile-bg-2.jpg)', backgroundSize: '100% 100%', padding: '2rem 0rem', border: '1px solid #e4e4e4'}} */}
                    <div className="flex flex-col items-center">
                        <img className="rounded-full max-w-32" src="/images/categories/1.jpg" alt="User" />
                        <h3 className="mt-5 mb-1 text-lg font-semibold text-white">{user.Name}</h3>
                        <p className="font-semibold text-white">{user.RegMob1}</p>
                    </div>
                    <ul className="profile-cta pt-5 border-b border-gray-400">     {/* style={{backdropFilter: 'blur(5px)'}} */}
                       {/* {tabs.map(i => (<li className="p-[0.95rem] border-t border-white flex gap-4 items-center text-white" key={i.name}><span className="text-lg">{i.icon}</span> {i.name}</li>))} */}
                        <li className="p-[0.95rem] border-t border-gray-400 flex gap-4 items-center text-white" onClick={() => setActive('Personal Information')}><span className="text-xl"><GrCircleInformation /></span> Personal Information</li>
                        <li className="p-[0.95rem] border-t border-gray-400 text-white" onClick={() => setActive('shopping-cart')}>
                            <Link prefetch={false} className='flex gap-4 items-center' href='/cart'><span className="text-xl"><PiShoppingCartBold /></span> Shopping Cart</Link>
                        </li>
                        <li className="p-[0.95rem] border-t border-gray-400 text-white" onClick={() => setActive('my-orders')}>
                            <Link prefetch={false} className='flex gap-4 items-center' href='/myOrders'><span className="text-xl"><LuGift /></span> My Orders</Link>
                        </li>
                        <li className="p-[0.95rem] border-t border-gray-400 text-white" onClick={() => setActive('my-wishlist')}>
                            <Link prefetch={false} className='flex gap-4 items-center' href='/wishlist'><span className="text-xl"><BiHeart /></span> My Wishlist</Link>
                        </li>
                        <li className="p-[0.95rem] border-t border-gray-400 flex gap-4 items-center text-white" onClick={() => setActive('my-addresses')}><span className="text-xl"><IoMdPin /></span> My Addresses</li>
                        <li className="p-[0.95rem] border-t border-gray-400 flex gap-4 items-center text-white" onClick={() => setActive('payment-methods')}><span className="text-xl"><MdPayment /></span> Payment Methods</li>
                        <li className="p-[0.95rem] border-t border-gray-400 flex gap-4 items-center text-white" onClick={() => setActive('customer-care')}><span className="text-xl"><RiCustomerService2Fill /></span> Customer Care</li>
                        <li className="p-[0.95rem] border-t border-gray-400 flex gap-4 items-center text-white" onClick={logOut}><span className="text-lg"><FaPowerOff /></span> Sign Out</li>
                        <li className="p-[0.95rem] border-t border-gray-400 text-white" onClick={() => setActive('my-wishlist')}>
                            <Link prefetch={false} className='flex gap-4 items-center' href='/admin'><span className="text-xl"><BiHeart /></span> Admin</Link>
                        </li>
                    </ul> 
                </div>
                <div className="h-full flex-1">
                    {(() => {
                        if (active === 'personal-info') {
                            return (
                                <div className="p-6">
                                    <h2 className="text-xl font-semibold border-b border-gray-300 pb-4">Personal Information</h2>
                                    <div className="mt-6">
                                        <div className="flex gap-4 mb-5">
                                            <div className="flex-1">
                                                <label className="text-black text-[0.9rem] mb-2 block"> First Name</label>
                                                <input name='Name' value={regData.Name} onChange={handleRegForm} className="px-5 py-[0.81rem] bg-slate-100 w-full rounded-md outline-none text-[1rem]" type="text" />
                                            </div>
                                            <div className="flex-1">
                                                <label className="text-black text-[0.9rem] mb-2 block"> Last Name</label>
                                                <input readOnly value={regData.Name} className="px-5 py-[0.81rem] bg-slate-100 w-full rounded-md outline-none text-[1rem]" type="text" />
                                            </div>
                                        </div>
                                        <div className="flex gap-4 mb-5">
                                            <div className="flex-1">
                                                <label className="text-black text-[0.9rem] mb-2 block"> Phone Number</label>
                                                <input readOnly value={regData.RegMob1} className="px-5 py-[0.81rem] bg-slate-100 w-full rounded-md outline-none text-[1rem]" type="text" />
                                            </div>
                                            <div className="flex-1">
                                                <label className="text-black text-[0.9rem] mb-2 block"> Email address <span className="text-red-500">*</span></label>
                                                <input name='Email' value={regData.Email} onChange={handleRegForm} className="px-5 py-[0.81rem] bg-slate-100 w-full rounded-md outline-none text-[1rem]" type="text" />
                                            </div>
                                        </div>
                                        <div className="flex gap-4 mb-5">
                                            <div className="flex-1">
                                                <label className="text-black text-[0.9rem] mb-2 block"> Street Address <span className="text-red-500">*</span></label>
                                                <textarea name='Address' value={regData.Address} onChange={handleRegForm} className="px-5 py-[0.81rem] bg-slate-100 w-full rounded-md outline-none text-[1rem]" rows={4} type="text" placeholder="Order notes (optional)" ></textarea>
                                            </div>
                                            {/* <div className="flex-1">
                                                <label className="text-black text-[0.9rem] mb-2 block"> Town / City <span className="text-red-500">*</span></label>
                                                <input name='City' value={regData.City} onChange={handleRegForm} className="px-5 py-[0.81rem] bg-slate-100 w-full rounded-md outline-none text-[1rem]" type="text" />
                                            </div> */}
                                        </div>
                                        <div className="flex gap-4 mb-5">
                                            <div className="flex-1">
                                                <label className="text-black text-[0.9rem] mb-2 block"> State <span className="text-red-500">*</span></label>
                                                <input readOnly value={regData.StateName} className="px-5 py-[0.81rem] bg-slate-100 w-full rounded-md outline-none text-[1rem]" type="text" />
                                            </div>
                                            <div className="flex-1">
                                                <label className="text-black text-[0.9rem] mb-2 block"> ZIP Code <span className="text-red-500">*</span></label>
                                                <input name='Pin' value={regData.Pin} onChange={handleRegForm} className="px-5 py-[0.81rem] bg-slate-100 w-full rounded-md outline-none text-[1rem]" type="text" />
                                            </div>
                                            <div className="flex-1">
                                                <label className="text-black text-[0.9rem] mb-2 block"> Country</label>
                                                <input readOnly value={'India'} className="px-5 py-[0.81rem] bg-slate-100 w-full rounded-md outline-none text-[1rem]" type="text" />
                                            </div>
                                        </div>
                                        {/* <div>
                                            <textarea className="px-5 py-[0.81rem] bg-slate-100 w-full rounded-md outline-none text-[1rem]" rows={4} type="text" placeholder="Order notes (optional)" ></textarea>
                                        </div> */}
                                        <div className="flex items-center mb-4 gap-3 pt-3 text-[0.95rem]">
                                            <input type="checkbox" checked readOnly />
                                            <p>Please add your address correctly.</p>
                                        </div>
                                        <div className="flex items-center mb-6 gap-3 text-[0.95rem]">
                                            <input type="checkbox" checked readOnly />
                                            <p>Make sure your PIN Code is correct.</p>
                                        </div>
                                        <Button onClick={handleRegisterFormSubmit} className="bg-pink-600 text-white rounded-lg py-3 px-8 hover:bg-pink-500 font-bold block ml-auto">Update Profile</Button>
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