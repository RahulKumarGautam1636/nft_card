'use client'
import { RiMenu2Fill } from "react-icons/ri";
import { IoBagHandleOutline, IoChatboxEllipsesOutline, IoSearch } from "react-icons/io5";
import { MdFullscreen, MdGridView, MdHeadsetMic, MdLockOutline, MdOutlineLocationOn, MdOutlineNotifications } from "react-icons/md";
import { FaAngleDown, FaChevronDown, FaRegUser } from "react-icons/fa6";
import { AiOutlineCodeSandbox } from "react-icons/ai";
import { LuGift } from "react-icons/lu";
import { GrGallery } from "react-icons/gr";
import { GoDotFill } from "react-icons/go";
import Link from "next/link";
import { BiHeart, BiLayer } from "react-icons/bi";
import { FiHelpCircle, FiMoon } from "react-icons/fi";
import { Badge, ButtonBase, Button, ListItemButton, ListItemText, List } from "@mui/material";
import { useSelector } from "react-redux";

import "../globals.css";
import "../../css/styles.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'react-toastify/dist/ReactToastify.css';
import { useRef, useState } from "react";


export default function AdminLayout({ children }) {

    const user = useSelector(state => state.user);
    const [active, setActive] = useState(false);
    const sidebarRef = useRef(null);

    console.log(sidebarRef.current);

    return (
        <section onClick={() => console.log(sidebarRef.current.style)}>
            <main className=''>
                <div style={{paddingLeft: active ? '0' : '75px'}} className="transition duration-300">
                    <nav className="flex gap-5 items-center justify-between p-4 border border-gray-300 mb-4">
                        <div className="flex gap-5 items-center flex-1 max-w-[45rem]">
                            <RiMenu2Fill onClick={() => setActive(!active)} className="text-3xl text-blue-600 cursor-pointer" />
                            <div className="flex gap-3 items-center flex-1 h-[3.8rem] md:h-full rounded-lg">
                                <div className="relative flex-1 h-full">
                                    <input placeholder="Search Products.." className="h-full px-5 py-4 border border-slate-200 bg-slate-100 outline-none text-lg rounded w-full" />
                                    <IoSearch className="hidden md:block absolute top-1/2 right-0 transform -translate-x-1/2 -translate-y-1/2 text-3xl text-gray-600"/>
                                </div>
                            </div>
                        </div>
                        <div className="flex gap-4 md:gap-10 items-center">
                            <Link href={'#'}><ButtonBase className="rounded-full bg-purple-50 min-w-0 p-3 hover:bg-purple-200" style={{border: '1px solid #cbcbcb'}}><FiMoon className="text-2xl text-purple-800"/></ButtonBase></Link>
                            <Badge badgeContent={5} color="warning" className="font-semibold hidden md:block">
                                <Link href={'#'}><ButtonBase className="rounded-full bg-purple-50 min-w-0 p-3 hover:bg-purple-200" style={{border: '1px solid #cbcbcb'}}><MdOutlineNotifications className="text-2xl text-purple-800"/></ButtonBase></Link>
                            </Badge>
                            <Badge badgeContent={5} color="info" className="font-semibold hidden md:block">
                                <Link href={'#'}><ButtonBase className="rounded-full bg-purple-50 min-w-0 p-3 hover:bg-purple-200" style={{border: '1px solid #cbcbcb'}}><IoChatboxEllipsesOutline className="text-2xl text-purple-800"/></ButtonBase></Link>
                            </Badge>
                            <Link href={'#'}><ButtonBase className="rounded-full bg-purple-50 min-w-0 p-3 hover:bg-purple-200" style={{border: '1px solid #cbcbcb'}}><MdFullscreen className="text-2xl text-purple-800"/></ButtonBase></Link>
                            <Link href={'#'}><ButtonBase className="rounded-full bg-purple-50 min-w-0 p-3 hover:bg-purple-200" style={{border: '1px solid #cbcbcb'}}><MdGridView className="text-2xl text-purple-800"/></ButtonBase></Link>
                            <div className="hidden md:block relative group">
                                <Button className="gap-4 bg-slate-50 p-2" style={{border: '1px solid #d8d8d8'}}>
                                    <div className="p-[0.8rem] rounded-lg bg-pink-600">
                                        <FaRegUser className="text-2xl text-white"/>
                                    </div>
                                    <div className="text-left">
                                        <span className="label text-slate-800 text-sm block mb-1">{user.Name}</span>
                                        <span className="name text-gray-500 text-sm">{user.RegMob1}</span>
                                    </div>
                                    <FaChevronDown />
                                </Button>
                                <List className="min-w-40 absolute bg-white shadow-xl border border-gray-200 rounded-lg z-10 top-full left-0 hidden group-hover:block">
                                    <ListItemButton component="a" href={`#`} className="hover:bg-purple-100">
                                        <ListItemText primary={'ITEM ONE'} />
                                    </ListItemButton>
                                    <ListItemButton component="a" href={`#`} className="hover:bg-purple-100">
                                        <ListItemText primary={'ANOTHER ITEM'} />
                                    </ListItemButton>
                                    <ListItemButton component="a" href={`#`} className="hover:bg-purple-100">
                                        <ListItemText primary={'ANOTHER ITEM'} />
                                    </ListItemButton>
                                    <ListItemButton component="a" href={`#`} className="hover:bg-purple-100">
                                        <ListItemText primary={'ANOTHER ITEM'} />
                                    </ListItemButton>
                                </List>
                            </div>
                        </div>
                    </nav>
                    {children}
                </div>
                <div ref={sidebarRef} style={{transform: active ? 'translateX(-80px)' : 'translateX(0)'}} className='sidebar overflow-auto transition duration-300 p-4 border-r border-gray-300 fixed top-0 bottom-0 left-0 z-[1111] bg-white'>
                                                                                                                {/* min-w-72 */}
                    <div>
                        <h5 className="font-medium text-slate-500 px-4 text-[0.97rem] mb-1">MAIN HOME</h5>
                        <ul className="nav-list">
                            <li className="group">
                                <div className="flex items-center gap-3 p-4">
                                    <MdGridView className="text-2xl text-purple-800"/> 
                                    <span className="font-semibold text-[1.1rem] text-gray-600">Dashboard</span>
                                    <FaAngleDown className="ml-auto"/> 
                                </div>
                                <div className="hidden group-hover:block pl-4">
                                    <ul>
                                        <li className="flex items-center gap-3 px-4 py-3">
                                            <GoDotFill className="text-xl text-gray-500"/> 
                                            <span className="font-semibold text-[1rem] text-gray-600">Home 1</span>
                                        </li>
                                        <li className="flex items-center gap-3 px-4 py-3">
                                            <GoDotFill className="text-xl text-gray-500"/> 
                                            <span className="font-semibold text-[1rem] text-gray-600">Home 1</span>
                                        </li>
                                        <li className="flex items-center gap-3 px-4 py-3">
                                            <GoDotFill className="text-xl text-gray-500"/> 
                                            <span className="font-semibold text-[1rem] text-gray-600">Home 1</span>
                                        </li>
                                        <li className="flex items-center gap-3 px-4 py-3">
                                            <GoDotFill className="text-xl text-gray-500"/> 
                                            <span className="font-semibold text-[1rem] text-gray-600">Home 1</span>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                        </ul>
                    </div>

                    <div className="">
                        <div className="label flex justify-center items-center">
                            <GoDotFill className="text-xl text-gray-500"/>
                            <h5 className="font-medium text-slate-500 px-4 text-[0.97rem] mb-1">ALL PAGES</h5>
                        </div>
                        <ul className="nav-list">
                            <li className="group">
                                <div className="flex items-center gap-3 p-4">
                                    <IoBagHandleOutline className="text-2xl text-purple-800"/> 
                                    <span className="font-semibold text-[1.1rem] text-gray-600">Ecommerce</span>
                                    <FaAngleDown className="ml-auto"/> 
                                </div>
                                <div className="hidden group-hover:block pl-4 pb-3">
                                    <ul>
                                        <li className="flex items-center gap-3 px-4 py-3">
                                            <GoDotFill className="text-xl text-gray-500"/> 
                                            <span className="font-semibold text-[1rem] text-gray-600">Products List</span>
                                        </li>
                                        <li className="flex items-center gap-3 px-4 py-3">
                                            <GoDotFill className="text-xl text-gray-500"/> 
                                            <span className="font-semibold text-[1rem] text-gray-600">Add Product</span>
                                        </li>
                                        <li className="flex items-center gap-3 px-4 py-3">
                                            <GoDotFill className="text-xl text-gray-500"/> 
                                            <span className="font-semibold text-[1rem] text-gray-600">Product Details</span>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li className="group">
                                <div className="flex items-center gap-3 p-4">
                                    <BiLayer className="text-2xl text-purple-800"/> 
                                    <span className="font-semibold text-[1.1rem] text-gray-600">Category</span>
                                    <FaAngleDown className="ml-auto"/>
                                </div>
                                <div className="hidden group-hover:block pl-4 pb-3">
                                    <ul>
                                        <li className="flex items-center gap-3 px-4 py-3">
                                            <GoDotFill className="text-xl text-gray-500"/> 
                                            <span className="font-semibold text-[1rem] text-gray-600">Products List</span>
                                        </li>
                                        <li className="flex items-center gap-3 px-4 py-3">
                                            <GoDotFill className="text-xl text-gray-500"/> 
                                            <span className="font-semibold text-[1rem] text-gray-600">Add Product</span>
                                        </li>
                                        <li className="flex items-center gap-3 px-4 py-3">
                                            <GoDotFill className="text-xl text-gray-500"/> 
                                            <span className="font-semibold text-[1rem] text-gray-600">Product Details</span>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li className="group">
                                <div className="flex items-center gap-3 p-4">
                                    <AiOutlineCodeSandbox className="text-2xl text-purple-800"/> 
                                    <span className="font-semibold text-[1.1rem] text-gray-600">Attributes</span>
                                    <FaAngleDown className="ml-auto"/>
                                </div>
                                <div className="hidden group-hover:block pl-4 pb-3">
                                    <ul>
                                        <li className="flex items-center gap-3 px-4 py-3">
                                            <GoDotFill className="text-xl text-gray-500"/> 
                                            <span className="font-semibold text-[1rem] text-gray-600">Products List</span>
                                        </li>
                                        <li className="flex items-center gap-3 px-4 py-3">
                                            <GoDotFill className="text-xl text-gray-500"/> 
                                            <span className="font-semibold text-[1rem] text-gray-600">Add Product</span>
                                        </li>
                                        <li className="flex items-center gap-3 px-4 py-3">
                                            <GoDotFill className="text-xl text-gray-500"/> 
                                            <span className="font-semibold text-[1rem] text-gray-600">Product Details</span>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li className="group">
                                <div className="flex items-center gap-3 p-4">
                                    <LuGift className="text-2xl text-purple-800"/> 
                                    <span className="font-semibold text-[1.1rem] text-gray-600">Orders</span>
                                    <FaAngleDown className="ml-auto"/>
                                </div>
                                <div className="hidden group-hover:block pl-4 pb-3">
                                    <ul>
                                        <li className="flex items-center gap-3 px-4 py-3">
                                            <GoDotFill className="text-xl text-gray-500"/> 
                                            <span className="font-semibold text-[1rem] text-gray-600">Products List</span>
                                        </li>
                                        <li className="flex items-center gap-3 px-4 py-3">
                                            <GoDotFill className="text-xl text-gray-500"/> 
                                            <span className="font-semibold text-[1rem] text-gray-600">Add Product</span>
                                        </li>
                                        <li className="flex items-center gap-3 px-4 py-3">
                                            <GoDotFill className="text-xl text-gray-500"/> 
                                            <span className="font-semibold text-[1rem] text-gray-600">Product Details</span>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li className="group">
                                <div className="flex items-center gap-3 p-4">
                                    <FaRegUser className="text-2xl text-purple-800"/> 
                                    <span className="font-semibold text-[1.1rem] text-gray-600">Users</span>
                                    <FaAngleDown className="ml-auto"/>
                                </div>
                                <div className="hidden group-hover:block pl-4 pb-3">
                                    <ul>
                                        <li className="flex items-center gap-3 px-4 py-3">
                                            <GoDotFill className="text-xl text-gray-500"/> 
                                            <span className="font-semibold text-[1rem] text-gray-600">Products List</span>
                                        </li>
                                        <li className="flex items-center gap-3 px-4 py-3">
                                            <GoDotFill className="text-xl text-gray-500"/> 
                                            <span className="font-semibold text-[1rem] text-gray-600">Add Product</span>
                                        </li>
                                        <li className="flex items-center gap-3 px-4 py-3">
                                            <GoDotFill className="text-xl text-gray-500"/> 
                                            <span className="font-semibold text-[1rem] text-gray-600">Product Details</span>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li className="group">
                                <div className="flex items-center gap-3 p-4">
                                    <MdOutlineLocationOn className="text-2xl text-purple-800"/> 
                                    <span className="font-semibold text-[1.1rem] text-gray-600">Locations</span>
                                    <FaAngleDown className="ml-auto"/>
                                </div>
                                <div className="hidden group-hover:block pl-4 pb-3">
                                    <ul>
                                        <li className="flex items-center gap-3 px-4 py-3">
                                            <GoDotFill className="text-xl text-gray-500"/> 
                                            <span className="font-semibold text-[1rem] text-gray-600">Products List</span>
                                        </li>
                                        <li className="flex items-center gap-3 px-4 py-3">
                                            <GoDotFill className="text-xl text-gray-500"/> 
                                            <span className="font-semibold text-[1rem] text-gray-600">Add Product</span>
                                        </li>
                                        <li className="flex items-center gap-3 px-4 py-3">
                                            <GoDotFill className="text-xl text-gray-500"/> 
                                            <span className="font-semibold text-[1rem] text-gray-600">Product Details</span>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li className="group">
                                <div className="flex items-center gap-3 p-4">
                                    <GrGallery className="text-2xl text-purple-800"/> 
                                    <span className="font-semibold text-[1.1rem] text-gray-600">Product Gallery</span>
                                    <FaAngleDown className="ml-auto"/>
                                </div>
                                <div className="hidden group-hover:block pl-4 pb-3">
                                    <ul>
                                        <li className="flex items-center gap-3 px-4 py-3">
                                            <GoDotFill className="text-xl text-gray-500"/> 
                                            <span className="font-semibold text-[1rem] text-gray-600">Products List</span>
                                        </li>
                                        <li className="flex items-center gap-3 px-4 py-3">
                                            <GoDotFill className="text-xl text-gray-500"/> 
                                            <span className="font-semibold text-[1rem] text-gray-600">Add Product</span>
                                        </li>
                                        <li className="flex items-center gap-3 px-4 py-3">
                                            <GoDotFill className="text-xl text-gray-500"/> 
                                            <span className="font-semibold text-[1rem] text-gray-600">Product Details</span>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="">
                        <div className="label flex justify-center items-center">
                            <GoDotFill className="text-xl text-gray-500"/>
                            <h5 className="font-medium text-slate-500 px-4 text-[0.97rem] mb-1">SUPPORT</h5>
                        </div>
                        <ul className="nav-list">
                            <li className="flex items-center gap-3 p-4">
                                <FiHelpCircle className="text-2xl text-purple-800"/> 
                                <span className="font-semibold text-[1.1rem] text-gray-600">Help Center</span>
                            </li>
                            <li className="flex items-center gap-3 p-4">
                                <MdHeadsetMic className="text-2xl text-purple-800"/> 
                                <span className="font-semibold text-[1.1rem] text-gray-600">FAQs</span>
                            </li>
                            <li className="flex items-center gap-3 p-4">
                                <MdLockOutline className="text-2xl text-purple-800"/> 
                                <span className="font-semibold text-[1.1rem] text-gray-600 mr-16">Privacy Policy</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </main>
        </section>
    )
}