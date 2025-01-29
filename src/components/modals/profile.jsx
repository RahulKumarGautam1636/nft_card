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
import { IoMdAdd, IoMdPin } from "react-icons/io";
import { MdAddCircleOutline, MdPayment, MdQuiz } from "react-icons/md";
import { RiCustomerService2Fill } from "react-icons/ri";
import { FaCheckCircle, FaPowerOff, FaRegCircle } from "react-icons/fa";
import { BiHeart } from "react-icons/bi";
import { LuGift } from "react-icons/lu";
import { PiShoppingCartBold } from "react-icons/pi";
import { useSelector, useDispatch } from "react-redux";
import { Button } from "@mui/material";
import { logOut } from "../utils";


import { useEffect, useState } from "react";
import { NEXT_APP_BASE_URL } from "@/constants";
import axios from "axios";
import { addUser, modalAction } from "@/lib/slices";
import { register } from "@/api/api";
import Link from "next/link";
import { createQuestion, createUser } from "@/actions/post";
import { Download } from "@mui/icons-material";
import { FaRegCircleXmark } from "react-icons/fa6";

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

    // Profile Update starts ----------------------------------------------------------------------------
    const [regData, setRegData] = useState({
        name: '',
        phone: '',
        email: '',
        password: ''      
    });

    useEffect(() => {
        setRegData({
            id: user.id,
            name: user.name,
            phone: user.phone,
            email: user.email,
            password: user.password 
        })
    }, [user])

    const handleRegForm = (e) => {
        const { name, value} = e.target;
        setRegData(pre => ({...pre, [name]: value}));
    } 

    const handleRegisterFormSubmit = async (e) => {
        e.preventDefault();
        console.log(regData);        
        if (isLoggedIn) {
            let res = await createUser(regData);
            if (res.status === 200) {
                dispatch(addUser(res.data));
            } 
        }
    }

    // Profile Update ends ----------------------------------------------------------------------------
    // Quiz section starts ----------------------------------------------------------------------------

    const [question, setQuestion] = useState({ title: '', answer: '', explain: '' });
    const [options, setOptions] = useState({});
    let optionsList = Object.values(options);

    const handleQuestion = (e) => {
        let { name, value } = e.target;
        setQuestion(pre => ({...pre, [name]: value}))
    }

    const questionSubmit = async (e) => {
        e.preventDefault();
        console.log(question);
        console.log(options);
        if (!question.answer) return alert('Please Select the correct option as answer to your question.');
        let blankAnswers = optionsList.filter(i => i.content === '');
        if (blankAnswers.length) return alert('Options cannot be blank, please remove blank options.');
        const res = await createQuestion({ ...question, options: options });    
        console.log(res)
        // if (res.status === 200) {
        
        // }
    }
    
    const handleOptions = (e) => {
        let { name, value } = e.target;
        setOptions(pre => ({ ...pre, [name]: { key: name, content: value }}));
    }

    const deleteOption = (i) => {
        setOptions(pre => {
            delete pre[i.key]
            return { ...pre };
        })
    }

    

    // Quiz section starts ----------------------------------------------------------------------------

    return (
        <div className="login-modal min-h-screen md:p-4 md:py-10 bg-gray-200 flex justify-center h-full">
            <div className="w-full bg-white flex flex-col md:flex-row md:rounded-2xl max-w-[80rem] overflow-hidden shadow-md shadow-gray-400 min-h-[80vh]">
                <div className="h-full w-full md:w-[25rem] bg-gray-100 p-8" style={{background: 'linear-gradient(#3036ff, #6a31c1, #af28c7, #d31e8b)'}}>    {/* style={{backgroundImage: 'url(/profile-bg-2.jpg)', backgroundSize: '100% 100%', padding: '2rem 0rem', border: '1px solid #e4e4e4'}} */}
                    <div className="flex flex-col items-center">
                        <img className="rounded-full max-w-32" src="/images/avatar.jpg" alt="User" />
                        <h3 className="mt-5 mb-1 text-lg font-semibold text-white">{user.name}</h3>
                        <p className="font-semibold text-white">{user.phone}</p>
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
                        <li className="p-[0.95rem] border-t border-gray-400 text-white" onClick={() => dispatch(modalAction({name: 'PROFILE_MODAL', status: false, data: ''}))}>
                            <Link prefetch={false} className='flex gap-4 items-center' href='/quiz'><span className="text-xl"><MdQuiz /></span> Quiz</Link>
                        </li>
                        <li className="p-[0.95rem] border-t border-gray-400 flex gap-4 items-center text-white" onClick={() => setActive('create-quiz')}><span className="text-xl"><RiCustomerService2Fill /></span> Create Quiz</li>
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
                                                <input name='name' value={regData.name} onChange={handleRegForm} className="px-5 py-[0.81rem] bg-slate-100 w-full rounded-md outline-none text-[1rem]" type="text" />
                                            </div>
                                            <div className="flex-1">
                                                <label className="text-black text-[0.9rem] mb-2 block"> Phone Number</label>
                                                <input name="phone" value={regData.phone} className="px-5 py-[0.81rem] bg-slate-100 w-full rounded-md outline-none text-[1rem]" type="text" />
                                            </div>
                                        </div>
                                        <div className="flex gap-4 mb-5">
                                            <div className="flex-1">
                                                <label className="text-black text-[0.9rem] mb-2 block"> Email address <span className="text-red-500">*</span></label>
                                                <input name='email' value={regData.email} onChange={handleRegForm} className="px-5 py-[0.81rem] bg-slate-100 w-full rounded-md outline-none text-[1rem]" type="text" />
                                            </div>
                                            <div className="flex-1">
                                                <label className="text-black text-[0.9rem] mb-2 block"> Password</label>
                                                <input name="password" value={regData.password} onChange={handleRegForm} className="px-5 py-[0.81rem] bg-slate-100 w-full rounded-md outline-none text-[1rem]" type="text" />
                                            </div>
                                        </div>
                                        <Button onClick={handleRegisterFormSubmit} className="bg-pink-600 text-white rounded-lg py-3 px-8 hover:bg-pink-500 font-bold block ml-auto">Update Profile</Button>
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
                                        <Button onClick={() => {}} className="bg-pink-600 text-white rounded-lg py-3 px-8 hover:bg-pink-500 font-bold block ml-auto">Update Address</Button>
                                    </div>
                                </div>
                            )
                        } else if (active === 'create-quiz') {
                            return (
                                <div className="p-6">

                                    <h2 className="text-xl font-semibold border-b border-gray-300 pb-4">Create a Quiz</h2>
                                    <div className="mt-6">
                                        <div className="flex gap-4 mb-5">
                                            <div className="flex-1">
                                                <label className="text-black text-[0.9rem] mb-2 block"> Quiz Heading</label>
                                                <input name='name' value={regData.name} onChange={handleRegForm} className="px-5 py-[0.81rem] bg-slate-100 w-full rounded-md outline-none text-[1rem]" type="text" />
                                            </div>
                                        </div>
                                        <div className="flex gap-4 mb-5">
                                            <div className="flex-1">
                                                <label className="text-black text-[0.9rem] mb-2 block"> Quiz Description</label>
                                                <textarea name='explain' value={question.explain} onChange={handleQuestion} className="px-5 py-[0.81rem] bg-slate-100 w-full rounded-md outline-none text-[1rem]" rows={4} type="text" placeholder="Desctription of the Quiz (optional)" ></textarea>
                                            </div>
                                        </div>
                                        <div className="flex gap-4 mb-5">
                                            <div className="flex-1">
                                                <label className="text-black text-[0.9rem] mb-2 block"> Author / Creator <span className="text-red-500">*</span></label>
                                                <input name='email' readOnly value={user.name} className="px-5 py-[0.81rem] bg-slate-100 w-full rounded-md outline-none text-[1rem]" type="text" />
                                            </div>
                                        </div>
                                        <Button onClick={() => {}} className="bg-pink-600 text-white rounded-lg py-3 px-8 hover:bg-pink-500 font-bold block ml-auto">Create Quiz</Button>
                                    </div>
                                    <h2 className="text-xl font-semibold border-b border-gray-300 pb-4">Add Quiz Question</h2>
                                    <div className="mt-6">
                                        <div className="flex gap-4 mb-5">
                                            <div className="flex-1">
                                                <label className="text-black text-[0.9rem] mb-2 block"> Write Your Question <span className="text-red-500">*</span></label>
                                                <textarea name='title' value={question.title} onChange={handleQuestion} className="px-5 py-[0.81rem] bg-slate-100 w-full rounded-md outline-none text-[1rem]" rows={4} type="text" placeholder="Write Your Question"></textarea>
                                            </div>
                                        </div>
                                        <div className="flex flex-col gap-4 mb-5">
                                            {optionsList.map(i => {
                                                return (
                                                    <div className="flex-1 relative" key={i.key}>
                                                        <div className="flex gap-2 absolute top-1/2 right-4 -translate-y-1/2 text-2xl">
                                                            {i.key === question.answer ? 
                                                                <FaCheckCircle className="text-green-600" onClick={() => setQuestion(pre => ({...pre, answer: '' }))} /> : 
                                                                <FaRegCircle className="text-blue-600" onClick={() => setQuestion(pre => ({...pre, answer: i.key }))} />
                                                            }                                                                                                                     
                                                            <FaRegCircleXmark className="text-pink-600" onClick={() => deleteOption(i)}/>
                                                        </div>
                                                        <input name={i.key} value={options[i.key]?.content} onChange={handleOptions} className="px-5 py-4 bg-slate-100 w-full rounded-md outline-none text-[1rem]" type="text" placeholder={`Option ${i.key}`} />
                                                    </div>
                                                )
                                            })}
                                            {optionsList.length <= 3 && <label onClick={() => setOptions(pre => ({...pre, [optionsList.length+1]: { key: optionsList.length+1, content: '' }}))} className="h-[3.7rem] cursor-pointer border border-dashed border-blue-500 bg-gray-50 rounded-lg flex gap-3 justify-center items-center text-center">
                                                <IoMdAdd className="text-[1.6rem] text-pink-600" />
                                                <p className="font-medium text-blue-500 text-[1.15rem]">ADD OPTION</p>
                                            </label>}
                                            <div className="flex-1">
                                                <label className="text-black text-[0.9rem] mb-2 block"> Explain The Answer <span className="text-red-500">*</span></label>
                                                <textarea name='explain' value={question.explain} onChange={handleQuestion} className="px-5 py-[0.81rem] bg-slate-100 w-full rounded-md outline-none text-[1rem]" rows={4} type="text" placeholder="Explain The Answer (optional)" ></textarea>
                                            </div>
                                        </div>
                                        <Button onClick={questionSubmit} className="bg-pink-600 text-white rounded-lg py-3 px-8 hover:bg-pink-500 font-bold block ml-auto">ADD QUESTION</Button>
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