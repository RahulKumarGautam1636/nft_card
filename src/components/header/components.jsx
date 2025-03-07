"use client";
import { Badge, Button, IconButton, List, ListItem, ListItemButton, ListItemText } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { FaChevronDown, FaChevronLeft, FaRegUser } from "react-icons/fa";
import { IoSearch, IoBagHandleOutline } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";
import { GrSecure } from "react-icons/gr";
import { PiPhoneCallBold } from "react-icons/pi";
import { TiDelete } from "react-icons/ti";
import { TbWorldSearch } from "react-icons/tb";
import { Modals } from "../modals";
import { useDispatch, useSelector } from "react-redux";
import { addUser, loginAction, modalAction, removeFromCart } from "@/lib/slices";
import { useEffect, useRef, useState } from "react";
import { BiX, BiHeart } from "react-icons/bi";
import { getCategories, login, searchProducts } from "@/api/api";
import { ProductCard_2 } from "../cards";
import { IoMdCart } from "react-icons/io";
import { LuGift } from "react-icons/lu";
import { imgSource } from "@/api/actionUtils";


export function HeaderSearch({ searchOpen, setSearchOpen }) {

    const [productsData, setProductsData] = useState({ products: [] });
    const [searchKey, setSearchKey] = useState('');
    const searchBoxRef = useRef();
    const location = useSelector(state => state.siteData.locations.current);
    const dispatch = useDispatch();

    useEffect(() => {
        const getSearchProducts = async (key) => {
            const res = await searchProducts(key);
            if (res) {
                setProductsData({ products: res });
            }
        }
        const timer = setTimeout(() => {
            if (searchKey.length < 2) return;
            getSearchProducts(searchKey);  
        }, 500);
        return () => clearTimeout(timer);
    }, [searchKey])

    useEffect(() => {
        const onBodyClick = (event) => {
            if (searchBoxRef.current && searchBoxRef.current.contains(event.target)) return;               
            setSearchOpen(false);                                                                                                                                                                          
            setProductsData({ products: [] });                                                                                                   
        }                                                                                                                       
        document.body.addEventListener('click', onBodyClick, { capture: true });                                                
        return () => document.body.removeEventListener('click', onBodyClick, { capture: true });                                
    }, [])  

    return (
        <div className="header-search-box flex gap-4 w-full flex-1 mx-auto justify-center">
            <div className="hidden md:block">
                <Button className="gap-4 bg-slate-50 pt-[0.6rem] pb-1 ps-4 pe-5" style={{border: '1px solid #e0e0e0'}} onClick={() => dispatch(modalAction({name: 'LOCATION_MODAL', status: true}))}>
                    <div className="text-left">
                        <span className="name block text-gray-500 text-xs mb-1">Your Location</span>
                        <span className="label text-slate-800 text-sm">{location.name}</span>
                    </div>
                    <FaChevronDown />
                </Button>
            </div>
            <div ref={searchBoxRef} className={`main-search-box fixed inset-0 bg-gray-50 z-10 md:relative w-full p-4 md:p-0 transition-opacity duration-400 md:opacity-100 ${searchOpen ? 'opacity-100' : 'opacity-0 pointer-events-none md:pointer-events-auto'}`}>
                <div className="flex gap-3 items-center flex-1 h-[3.8rem] md:h-full bg-purple-700 rounded-lg pl-2 md:pl-0">
                    <FaChevronLeft className="close-search text-white text-[1.7rem] md:hidden" onClick={() => setSearchOpen(false)} />
                    <div className="relative flex-1 h-full">
                        <input value={searchKey} onChange={(e) => setSearchKey(e.target.value)} onClick={() => setSearchOpen(true)} placeholder="Search Products.." className="h-full px-5 py-3 border-2 border-slate-200 bg-slate-100 outline-none text-lg rounded w-full" />
                        <IoSearch className="absolute top-1/2 right-0 transform -translate-x-1/2 -translate-y-1/2 text-4xl text-gray-600"/>
                    </div>
                </div>
                {searchOpen ? <div className="relative md:absolute md:top-full md:left-0 md:right-0 z-10">
                    <div className="minicart w-full bg-white mt-4 shadow-xl border border-gray-200 rounded-lg py-4 px-5 md:p-6"> 
                        <div className="flex justify-between pt-1 pb-3">
                            <h3 className="text-black">Products Found: {productsData.products.length}</h3>
                            <h3 className="text-blue-800 font-semibold" onClick={() => setSearchOpen(false)}>Close</h3>
                        </div>
                        <div className="max-h-[77vh] md:max-h-[57vh] overflow-auto">
                            {productsData.products.length ? 
                            <ul>
                                {productsData.products.map(i => (
                                    <li key={i.id}>
                                        <ProductCard_2 data={i} />
                                    </li>
                                ))}
                            </ul>
                            :
                            <div className="text-center">
                                <div className="p-5 pt-8 flex justify-center border-b border-gray-300">
                                    <TbWorldSearch className="text-[6rem] text-pink-700" />
                                </div>
                                <p className="text-gray-700 text-[1rem] pt-4 px-16">No Results Found</p>
                            </div>}
                        </div>
                    </div>
                </div> : ''}
            </div>
        </div>
    )
}


export function HeaderActions({ searchOpen, setSearchOpen }) {

    const dispatch = useDispatch();
    const cart = useSelector(state => state.cart);
    const isLoggedIn = useSelector(state => state.isLoggedIn);
    const user = useSelector(state => state.user);
    const wishlist = useSelector(state => state.wishlist);
    const sidebarActive = useSelector(i => i.modals.SHOP_SIDEBAR.status);
    // const location = useSelector(state => state.siteData.locations.current);
    const cartList = Object.values(cart);
    const wishlistList = Object.values(wishlist);

    return (
        <div className="header-cta flex gap-4 md:gap-7 items-center">
            <Badge badgeContent={wishlistList.length} color="warning" className="font-semibold hidden md:block">
                <Link prefetch={false} href={'/wishlist'}><Button className="rounded-full bg-purple-50 min-w-0 p-3 hover:bg-purple-200" style={{border: '1px solid #cbcbcb'}}><BiHeart className="text-2xl text-purple-800"/></Button></Link>
            </Badge>
            <Button onClick={() => setSearchOpen(true)} className="rounded-full bg-purple-50 min-w-0 p-3 hover:bg-purple-200 md:hidden" style={{border: '1px solid #cbcbcb'}}><IoSearch className="text-2xl text-purple-800"/></Button>
            <div className="group relative">
                <Badge badgeContent={cartList.length} color="info" className="font-semibold">
                    <Button className="rounded-full bg-purple-50 min-w-0 p-3 hover:bg-purple-200" style={{border: '1px solid #cbcbcb'}}>
                        <IoBagHandleOutline className="text-2xl text-purple-800"/>
                    </Button>
                </Badge>
                <div className="minicart w-[23rem] absolute bg-white shadow-xl border border-gray-200 rounded-lg z-10 top-full right-0 hidden group-hover:block"> 
                    {cartList.length ? 
                        <div className="p-4">
                            <ul>
                                {cartList.map(i => (
                                    <li key={i.id} className="overflow-hidden relative">
                                        <div className="minicart-card inline-flex gap-3 py-2">
                                            <div className="h-20 w-20">
                                                <img className="rounded h-full w-full" src={imgSource('products', i.images[0])} alt="Product" />
                                            </div>
                                            <div className="text-start border-b border-gray-300">
                                                <h4 className="text-blue-700 mb-1 whitespace-nowrap overflow-ellipsis font-semibold" style={{fontSize: '0.95rem'}}>{i.name}</h4>
                                                <p className="text-gray-500">1 &nbsp;x&nbsp;&nbsp;<span className="text-gray-900" style={{fontSize: '0.95rem'}}>₹ {i.price}</span></p>
                                                <span className="text-cyan-700 text-[0.9rem] font-medium">{i.discount}% OFF</span>
                                            </div>
                                            <TiDelete onClick={() => dispatch(removeFromCart(i.id))} className="text-red-600 text-4xl bg-white z-10 absolute top-1/2 right-0 transform -translate-y-1/2 cursor-pointer" style={{fontSize: '1.95rem'}} />
                                        </div>
                                    </li>
                                ))}
                            </ul>
                            <div className="flex justify-between text-lg p-2 my-2">
                                <h3 className="text-black">Subtotal:</h3>
                                <h3 className="text-blue-800 font-semibold">$ 230.00</h3>
                            </div>
                            <div className="flex gap-2">
                                <Link prefetch={false} className="flex-1" href="/cart">
                                    <Button className="bg-indigo-600 text-white rounded-lg p-3 hover:bg-indigo-500 w-full">Visit Cart</Button>
                                </Link>
                                <Link prefetch={false} className="flex-1" href="/checkout">
                                    <Button className="bg-pink-600 text-white rounded-lg p-3 hover:bg-pink-500 w-full">Checkout</Button>
                                </Link>
                            </div>
                        </div> :
                        <div className="text-center">
                            <div className="p-5 pt-8 flex justify-center border-b border-gray-300">
                                <IoMdCart className="text-[6rem] text-pink-700" />
                            </div>
                            <p className="text-gray-700 text-[1rem] py-4 px-16">Your Cart is Empty</p>
                        </div>
                    }
                </div>
            </div>
            {isLoggedIn ?
                <>
                    <Link prefetch={false} href={'/myOrders'} className="hidden md:block"><Button className="rounded-full bg-purple-50 min-w-0 p-3 hover:bg-purple-200" style={{border: '1px solid #cbcbcb'}}><LuGift className="text-2xl text-purple-800"/></Button></Link>
                    <div className="hidden md:block relative group">
                        <Button className="gap-4 bg-slate-50 p-2" style={{border: '1px solid #d8d8d8'}}>
                            <div className="p-[0.8rem] rounded-lg bg-pink-600">
                                <FaRegUser className="text-2xl text-white"/>
                            </div>
                            <div className="text-left">
                                <span className="label text-sm block mb-1 text-blue-800">{user.name}</span>
                                <span className="name text-gray-500 text-sm">{user.phone}</span>
                            </div>
                            <FaChevronDown />
                        </Button>
                        <List className="min-w-40 absolute bg-white shadow-xl border border-gray-200 rounded-lg z-10 top-full left-0 hidden group-hover:block">
                            <ListItemButton onClick={() => dispatch(modalAction({name: 'PROFILE_MODAL', status: true}))} component="button" className="hover:bg-purple-100 w-full">
                                <ListItemText primary={'Profile'} />
                            </ListItemButton>
                            <Link prefetch={false} href={`/admin`}>
                                <ListItemButton component="button" className="hover:bg-purple-100 w-full">
                                    <ListItemText primary={'Admin'} />
                                </ListItemButton>
                            </Link>
                        </List>
                    </div>
                </>
                :
                <Button onClick={() => dispatch(modalAction({name: 'LOGIN_MODAL', status: true}))} className="bg-purple-600 text-white rounded-lg py-3 px-5 hover:bg-purple-400 hidden md:block">Sign in</Button>
            }
            <Button onClick={() => dispatch(modalAction({name: 'SHOP_SIDEBAR', status: !sidebarActive}))} className="rounded-full bg-purple-50 min-w-0 p-3 hover:bg-purple-200 md:hidden" style={{border: '1px solid #cbcbcb'}}><GiHamburgerMenu className="text-2xl text-purple-800"/></Button>
        </div>
    )
}


export const LocationBox = () => {

    const dispatch = useDispatch();

    return (
        <Button className="gap-4 bg-slate-50 pt-[0.6rem] pb-1 ps-4 pe-5 justify-between w-full" style={{border: '1px solid #e0e0e0'}} onClick={() => dispatch(modalAction({name: 'LOCATION_MODAL', status: true}))}>
            <div className="text-left">
                <span className="name block text-gray-500 text-xs mb-1">Your Location</span>
                <span className="label text-slate-800 text-sm">All</span>
            </div>
            <FaChevronDown />
        </Button>
    )
}

export const ExampleLoader = () => {
    return (
        <div role="status" className="max-w-sm p-4 border border-gray-200 rounded shadow md:p-6 dark:border-gray-700">
            <div className="flex items-center justify-center h-48 mb-4 bg-gray-300 rounded dark:bg-gray-700">
                <svg className="w-10 h-10 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 20">
                    <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM10.5 6a1.5 1.5 0 1 1 0 2.999A1.5 1.5 0 0 1 10.5 6Zm2.221 10.515a1 1 0 0 1-.858.485h-8a1 1 0 0 1-.9-1.43L5.6 10.039a.978.978 0 0 1 .936-.57 1 1 0 0 1 .9.632l1.181 2.981.541-1a.945.945 0 0 1 .883-.522 1 1 0 0 1 .879.529l1.832 3.438a1 1 0 0 1-.031.988Z"/>
                    <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z"/>
                </svg>
            </div>
            <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
            <div className="flex items-center mt-4">
            <svg className="w-10 h-10 me-3 text-gray-200 dark:text-gray-700" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z"/>
                </svg>
                <div>
                    <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-32 mb-2"></div>
                    <div className="w-48 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
                </div>
            </div>
            <span className="sr-only">Loading...</span>
        </div>
    )
}

export const NavLoader = () => {
    return (
        <div className="flex gap-4 p-4 animate-pulse">
            <div className="h-10 px-[4.75rem] bg-gray-200 rounded-full dark:bg-gray-400 me-auto">&nbsp;</div>
            <div className="h-10 px-[4.75rem] bg-gray-200 rounded-full dark:bg-gray-400">&nbsp;</div>
            <div className="h-10 px-[4.75rem] bg-gray-200 rounded-full dark:bg-gray-400">&nbsp;</div>
            <div className="h-10 px-[4.75rem] bg-gray-200 rounded-full dark:bg-gray-400">&nbsp;</div>
            <div className="h-10 px-[4.75rem] bg-gray-200 rounded-full dark:bg-gray-400">&nbsp;</div>
            <div className="h-10 px-[4.75rem] bg-gray-200 rounded-full dark:bg-gray-400">&nbsp;</div>
            <div className="h-10 px-[4.75rem] bg-gray-200 rounded-full dark:bg-gray-400">&nbsp;</div>
            <div className="h-10 px-[4.75rem] bg-gray-200 rounded-full dark:bg-gray-400">&nbsp;</div>
            <div className="h-10 px-[4.75rem] bg-gray-200 rounded-full dark:bg-gray-400">&nbsp;</div>
        </div>
    )
}

export const ShopSidebar = ({ children }) => {

    const dispatch = useDispatch();
    const sidebarActive = useSelector(i => i.modals.SHOP_SIDEBAR.status);
    
    return (
        <div className={`fixed inset-0 bg-opacity-30 z-10 md:relative md:bg-transparent group whitespace-nowrap flex transition-colors md:pointer-events-auto duration-300 ${sidebarActive ? 'bg-slate-600' : 'pointer-events-none'}`}>         
            <div className={`absolute inset-0`} onClick={() => dispatch(modalAction({name: 'SHOP_SIDEBAR', status: false}))}></div>          
            <Button className="gap-2 bg-purple-800 hover:bg-purple-700 py-[0.7rem] px-4 rounded-full text-white min-w-fit hidden md:flex">
                <GiHamburgerMenu />
                <h4>ALL CATEGORIES</h4>
                <FaChevronDown />
            </Button>
            <ul className={`flex md:hidden md:group-hover:flex relative p-6 flex-col max-w-[80%] md:max-w-full h-full md:h-fit shadow-md border border-gray-200 md:absolute z-10 md:top-full transition-all ease-in-out duration-500 ${sidebarActive ? 'left-0' : 'left-[-105%]'} md:left-0 w-full md:py-2 md:px-0 bg-white`} > {/* style={{left: active ? 0 : '-100%'}} */}  
                <li className="flex justify-between items-center md:hidden">
                    <Link prefetch={false} href={'/'}>
                        <Image src={'/images/logo.jpg'} className="" width={150} height={50} alt="Logo" />
                    </Link>
                    <IconButton className="bg-gray-100 text-[2rem]" onClick={() => dispatch(modalAction({name: 'SHOP_SIDEBAR', status: false}))}>    
                        <BiX />
                    </IconButton>
                </li>
                <li className="py-5 md:hidden">
                    <LocationBox />
                </li>
                {children}
                <li className="mt-4 md:hidden">
                    <Button className="bg-pink-600 text-white rounded-lg p-3 hover:bg-pink-500 w-full">Checkout</Button>
                </li>
            </ul>
        </div>
    )
}

export const TopNav = () => {
    const [searchOpen, setSearchOpen] = useState(false);
    return (
        <nav className="whitespace-nowrap py-3 md:py-6 px-4 flex items-center gap-3 md:gap-12 justify-between md:mb-3">
            <Link prefetch={false} className="main-logo" href={'/'}>
                <Image src={'/images/logo.jpg'} className="" width={150} height={50} alt="Logo" />
            </Link>
            <HeaderSearch searchOpen={searchOpen} setSearchOpen={setSearchOpen} />
            <HeaderActions searchOpen={searchOpen} setSearchOpen={setSearchOpen} />
        </nav>
    )
}


export const ClientWrapper = ({ children }) => {

    const [active, setActive] = useState(false);

    return (
        <>
            {children}
        </>
    )
}