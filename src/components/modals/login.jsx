'use client';
import { Button, Checkbox } from "@mui/material";
import Image from "next/image";
import { FaLock, FaRegUser } from "react-icons/fa";
import { FaPhoneVolume } from "react-icons/fa6";
import { useDispatch } from "react-redux";
import { FcGoogle } from "react-icons/fc";
import { useState } from "react";

export const Login = () => {

    const dispatch = useDispatch();

    const [tab, setTab] = useState('login');

    return (
        <div className="login-modal min-h-screen p-4 md:py-10 bg-gray-400 flex justify-center h-full">
            <div className="container bg-white flex flex-col md:flex-row rounded-2xl h-fit shadow-2xl max-w-[80rem] overflow-hidden">
                <div className="flex-1 p-12 bg-purple-500">
                    <h2 className="text-3xl md:text-4xl text-center text-white font-semibold">WELCOME TO</h2>
                    <Image src={'/images/logo.jpg'} className="rounded-md mx-auto mt-10" width={150} height={50} alt="Logo" />
                </div>
                <div className="flex-1 p-7 md:p-12 flex flex-col items-center">
                    <div className="max-w-[35rem] w-full">
                        <h2 className="text-3xl md:text-4xl font-semibold mb-10 text-center">PLEASE LOGIN</h2>
                        {tab === 'login' ? 
                        <>
                            <div>
                                <label className="font-medium text-gray-700 text-lg mb-4 flex items-center gap-4"><FaPhoneVolume className="text-purple-700" /> Phone Number</label>
                                <input className="text-lg px-5 py-[0.9rem] bg-gray-100 w-full mb-7 border border-gray-300 rounded-lg outline-none" type="text" placeholder="Enter your name." />
                            </div>
                            <div>
                                <label className="font-medium text-gray-700 text-lg mb-4 flex items-center gap-4"><FaLock className="text-purple-700" /> Your Password</label>
                                <input className="text-lg px-5 py-[0.9rem] bg-gray-100 w-full mb-12 border border-gray-300 rounded-lg outline-none" type="text" placeholder="Enter your password." />
                            </div>
                            <div className="flex items-center mb-6 gap-3">
                                {/* <Checkbox className='py-[0.35rem]' checked={true} onChange={(e) => {}} inputProps={{ 'aria-label': 'controlled' }} /> */}
                                <input type="checkbox" checked />
                                <p>By Signing Up, I Agree with Terms & Conditions.</p>
                            </div>
                       
                            {/* <p className="mb-6 text-sm">Don't have an Account please <span className="text-blue-500">Register.</span></p> */}
                            <div className="flex gap-4 mb-5">
                                <Button onClick={() => setTab('register')} className="bg-gray-300 text-gray-600 rounded-lg py-[0.85rem] hover:bg-indigo-200 flex-1 text-xl shadow-sm shadow-purple-400">REGISTER</Button>
                                <Button onClick={() => setTab('login')} className="bg-pink-600 text-white rounded-lg py-[0.85rem] hover:bg-indigo-500 flex-1 text-xl shadow-sm shadow-purple-400">LOGIN</Button>
                            </div>
                        </>
                        :
                        <>
                            <div className="flex gap-4 mb-7">
                                <div>
                                    <label className="font-medium text-gray-700 text-lg mb-4 flex items-center gap-4"><FaRegUser className="text-purple-700" /> Your Name</label>
                                    <input className="text-lg px-5 py-[0.9rem] bg-gray-100 w-full border border-gray-300 rounded-lg outline-none" type="text" placeholder="Enter your name." />
                                </div>
                                <div>
                                    <label className="font-medium text-gray-700 text-lg mb-4 flex items-center gap-4"><FaPhoneVolume className="text-purple-700" /> Phone Number</label>
                                    <input className="text-lg px-5 py-[0.9rem] bg-gray-100 w-full border border-gray-300 rounded-lg outline-none" type="text" placeholder="Enter phone Number." />
                                </div>
                            </div>
                            <div>
                                <label className="font-medium text-gray-700 text-lg mb-4 flex items-center gap-4"><FaLock className="text-purple-700" /> Your Password</label>
                                <input className="text-lg px-5 py-[0.9rem] bg-gray-100 w-full border mb-12 border-gray-300 rounded-lg outline-none" type="text" placeholder="Enter your password." />
                            </div>
                            <div className="flex items-center mb-4 gap-3">
                                <input type="checkbox" checked readOnly />
                                <p>By Signing Up, I Agree with Terms & Conditions.</p>
                            </div>
                            <p className="mb-6 text-sm">Already have an Account please <span className="text-blue-500">Login..</span></p>
                            <div className="flex gap-4 mb-5">
                                <Button onClick={() => setTab('register')} className="bg-pink-600 text-white rounded-lg py-[0.85rem] hover:bg-indigo-500 flex-1 text-xl shadow-sm shadow-purple-400">REGISTER</Button>
                                <Button onClick={() => setTab('login')} className="bg-gray-300 text-gray-600 rounded-lg py-[0.85rem] hover:bg-indigo-200 flex-1 text-xl shadow-sm shadow-purple-400">LOGIN</Button>
                            </div>
                        </>
                        }
                        <h2 className="text-lg font-medium mt-14 mb-10 text-center">Or continue with Social Account</h2>
                        <Button variant="outlined" className="rounded-lg py-[0.8rem] gap-3 w-full text-lg shadow-sm shadow-purple-400"><FcGoogle className="text-3xl" /> Sign In with Google</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}