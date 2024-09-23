"use client";
import { Button, IconButton, List, ListItemButton, ListItemText } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { FaChevronDown, FaChevronLeft } from "react-icons/fa";
import { IoSearch, IoBagHandleOutline } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";
// import { getCategories } from "@/api/api";
import { GrSecure } from "react-icons/gr";
import { PiPhoneCallBold } from "react-icons/pi";
import { TiDelete } from "react-icons/ti";
import { IoMdCart } from "react-icons/io";
import { Modals } from "./modals";
import { useDispatch } from "react-redux";
import { modalAction } from "@/lib/slices";
import { useState } from "react";
import { BiX } from "react-icons/bi";

const Header = ({ categories }) => {

    const dispatch = useDispatch();
    const [active, setActive] = useState(false);

    return (
        <>
            <Modals />
            <p className="text-white bg-purple-700 w-full text-center text-xs py-2 ">Due to the COVID 19 epidemic, orders may be processed with a slight delay</p>
            <div className="border-b border-gray-300 hidden lg:block">
                <div className="container mx-auto flex justify-between text-sm py-2 px-4">
                    <ul className="flex gap-5">
                        <li>
                            <Link href={'#'}>About Us</Link>
                        </li>                        
                        <li>
                            <Link href={'#'}>My Account</Link>
                        </li>                        
                        <li>
                            <Link href={'#'}>Wishlist</Link>
                        </li>                        
                        <li>
                            <Link href={'#'}>Order Tracking</Link>
                        </li>
                    </ul>
                    <div className="flex gap-7">
                        <p className="flex gap-1"><GrSecure className="text-lg" /> 100% Secure delivery without contacting the courier</p>
                        <p className="flex gap-1"><PiPhoneCallBold className="text-lg" /> Call Us: <span className="text-blue-600">+ 0020 500</span></p>
                    </div>
                </div>
            </div>
            <header className="container mx-auto">
                <nav className="text-nowrap py-3 md:py-6 px-4 flex items-center gap-4 justify-between md:mb-3">
                    <Link href={'/'}>
                        <Image src={'/images/logo.jpg'} width={150} height={50} alt="Logo" />
                    </Link>
                    <div className="header-search-box flex gap-4 w-full flex-1">
                        <div className="hidden md:block">
                            <Button className="gap-4 bg-slate-50 pt-[0.6rem] pb-1 ps-4 pe-5" style={{border: '1px solid #e0e0e0'}} onClick={() => dispatch(modalAction({name: 'LOCATION_MODAL', status: true, data: ''}))}>
                                <div className="text-left">
                                    <span className="name block text-gray-500 text-xs mb-1">Your Location</span>
                                    <span className="label text-slate-800 text-sm">All</span>
                                </div>
                                <FaChevronDown />
                            </Button>
                        </div>
                        <div className="hidden md:flex gap-3 items-center flex-1">
                            <FaChevronLeft className="close-search hidden" />
                            <div className="relative flex-1 h-full">
                                <input className="h-full px-3 py-3 border-2 border-slate-200 bg-slate-100 outline-none text-sm rounded w-full" />
                                <IoSearch className="absolute top-1/2 right-0 transform -translate-x-1/2 -translate-y-1/2 text-2xl text-gray-600"/>
                            </div>
                        </div>
                    </div>
                    <div className="header-cta flex gap-3">
                        <Button className="rounded-full bg-purple-50 min-w-0 p-3 hover:bg-purple-200 md:hidden" style={{border: '1px solid #cbcbcb'}}><IoSearch className="text-2xl text-purple-800"/></Button>
                        <div className="group relative">
                            <Button className="rounded-full bg-purple-50 min-w-0 p-3 hover:bg-purple-200" style={{border: '1px solid #cbcbcb'}}>
                                <IoBagHandleOutline className="text-2xl text-purple-800"/>
                            </Button>
                            <div className="minicart min-w-[23rem] absolute bg-white shadow-xl border border-gray-200 rounded-lg z-10 top-full right-0 hidden group-hover:block"> 
                                <div className="p-4">
                                    <ul>
                                        {[1,2,3,4].map(i => (
                                            <li key={i}>
                                                <div className="minicart-card flex gap-3 p-2 relative">
                                                    <div className="h-20 w-20">
                                                        <img className="rounded" src={`/images/categories/${i}.jpg`} alt="Product" />
                                                    </div>
                                                    <div className="text-start border-b border-gray-300 pr-[3.6rem]">
                                                        <h4 className="text-gray-900 mb-1" style={{fontSize: '1rem'}}>All Natural Italian Style</h4>
                                                        <p className="text-gray-500">1 &nbsp;x&nbsp;&nbsp;<span className="text-blue-800" style={{fontSize: '1rem'}}>$7.25</span></p>
                                                    </div>
                                                    <TiDelete className="text-red-600 text-4xl bg-white z-10 absolute top-1/2 right-0 transform -translate-y-1/2 " style={{fontSize: '1.95rem'}} />
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                    <div className="flex justify-between text-lg p-2 my-2">
                                        <h3 className="text-black">Subtotal:</h3>
                                        <h3 className="text-blue-800 font-semibold">$ 230.00</h3>
                                    </div>
                                    <div className="flex gap-2">
                                        <Button className="bg-indigo-600 text-white rounded-lg p-3 hover:bg-indigo-500 flex-1" href="/cart">Visit Cart</Button>
                                        <Button className="bg-pink-600 text-white rounded-lg p-3 hover:bg-pink-500 flex-1">Checkout</Button>
                                    </div>
                                </div>
                                {/* <div className="text-center">
                                    <div className="p-5 pt-8 flex justify-center border-b border-gray-300">
                                        <IoMdCart className="text-[6rem] text-pink-700" />
                                    </div>
                                    <p className="text-gray-700 text-[1rem] py-4 px-16">Your Cart is Empty</p>
                                </div> */}
                            </div>
                        </div>
                        <Button className="bg-purple-600 text-white rounded-lg py-3 px-5 hover:bg-purple-400 hidden md:block">Sign in</Button>
                        <Button onClick={() => setActive(!active)} className="rounded-full bg-purple-50 min-w-0 p-3 hover:bg-purple-200 md:hidden" style={{border: '1px solid #cbcbcb'}}><GiHamburgerMenu className="text-2xl text-purple-800"/></Button>
                    </div>
                </nav>
                <div className="flex justify-between items-start gap-5 px-3">
                    <div className="fixed inset-0 bg-slate-600 z-10 md:relative md:bg-transparent group text-nowrap" style={{display: active ? 'flex' : 'none'}}>         {/* hidden md:flex  */}               
                        <Button className="gap-2 bg-purple-800 hover:bg-purple-700 p-2 rounded-full text-white min-w-fit hidden md:flex">
                            <GiHamburgerMenu />
                            <h4>ALL CATEGORIES</h4>
                            <FaChevronDown />
                        </Button>
                        <ul className={`flex md:hidden md:group-hover:flex relative p-6 flex-col h-full md:h-fit shadow-md border border-gray-200 md:absolute z-10 md:top-full md:left-0 w-full md:py-2 md:px-0 bg-white`}> {/* style={{transform: 'translate(-100%)'}} */}  
                            <li className="flex justify-between items-center md:hidden">
                                <Link href={'/'}>
                                    <Image src={'/images/logo.jpg'} width={150} height={50} alt="Logo" />
                                </Link>
                                <IconButton className="bg-gray-100 text-[2rem]" onClick={() => setActive(false)}>
                                    <BiX />
                                </IconButton>
                            </li>
                            <li className="py-5 md:hidden">
                                <Button className="gap-4 bg-slate-50 pt-[0.6rem] pb-1 ps-4 pe-5 justify-between w-full" style={{border: '1px solid #e0e0e0'}} onClick={() => dispatch(modalAction({name: 'LOCATION_MODAL', status: true, data: ''}))}>
                                    <div className="text-left">
                                        <span className="name block text-gray-500 text-xs mb-1">Your Location</span>
                                        <span className="label text-slate-800 text-sm">All</span>
                                    </div>
                                    <FaChevronDown />
                                </Button>
                            </li>
                            {categories.categoryList.map(i => (
                                <li className="relative group/subGroup" key={i.id}>
                                    <Button className="justify-start w-full rounded-none bg-slate-50 hover:bg-slate-200 text-gray-900 py-3 md:py-2 px-4"  href="#contained-buttons">{i.name}</Button>
                                    {i.children.length ? <ul className="hidden group-hover/subGroup:flex flex-col shadow-md border border-gray-200 absolute z-10 top-0 left-full min-w-full py-2 bg-white">
                                        {i.children.map(x => (
                                            <Button key={x.id} className="justify-start w-full rounded-none bg-slate-50 hover:bg-slate-200 text-gray-900 py-2 px-4"  href="#contained-buttons">{x.name}</Button>
                                        ))}
                                    </ul> : ''}
                                </li>
                            ))}
                            <li className="mt-4 md:hidden">
                                <Button className="bg-pink-600 text-white rounded-lg p-3 hover:bg-pink-500 w-full">Checkout</Button>
                            </li>
                        </ul>
                    </div>
                    <ul className="flex gap-0 md:gap-3 items-center md:flex-wrap text-nowrap bg-white overflow-auto md:overflow-visible border-b-4 border-gray-200 md:border-0">
                        {categories.categoryList.map(i => (
                            <li key={i.id} className="relative group">
                                <Button href={`/filter/catId/${i.id}`} className="bg-white text-[1.05rem] font-medium text-gray-700 rounded-full py-2 px-4">{i.name}</Button>
                                {i.children.length ? <List className="min-w-40 absolute bg-white shadow-xl border border-gray-200 rounded-lg z-10 top-full left-0 hidden group-hover:block">
                                    {i.children.map(x => (
                                        <ListItemButton key={x.id} component="a" href={`/filter/subCatId/${x.id}`} className="hover:bg-purple-100">
                                            <ListItemText primary={x.name} />
                                        </ListItemButton>
                                    ))}
                                </List> : ''}
                            </li>
                        ))}
                    </ul>
                </div>
            </header>
        </>
    )
}

export default Header;