// "use client"
// import { Badge, Button, IconButton, List, ListItem, ListItemButton, ListItemText } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
// import { FaChevronDown, FaChevronLeft, FaRegUser } from "react-icons/fa";
// import { IoSearch, IoBagHandleOutline } from "react-icons/io5";
// import { GiHamburgerMenu } from "react-icons/gi";
// import { getCategories } from "@/api/api";
import { GrSecure } from "react-icons/gr";
import { PiPhoneCallBold } from "react-icons/pi";
// import { TiDelete } from "react-icons/ti";
// import { TbWorldSearch } from "react-icons/tb";
import { Modals } from "../modals";
// import { useDispatch, useSelector } from "react-redux";
// import { addUser, loginAction, modalAction, removeFromCart } from "@/lib/slices";
// import { useEffect, useRef, useState } from "react";
// import { BiX, BiHeart } from "react-icons/bi";
// import { getCategories, login, searchProducts } from "@/api/api";
// import { ProductCard_2 } from "../cards";
// import { IoMdCart } from "react-icons/io";
// import { LuGift } from "react-icons/lu";
import { Navbar, NavMenu, SideBarCategories } from "./Navbar";
import { ExampleLoader, HeaderActions, HeaderSearch, NavLoader, ShopSidebar, TopNav } from "./components";
import { Suspense } from "react";
// import { NEXT_APP_BASE_URL } from "@/constants";
// import axios from "axios";

const Header = () => {

    // const dispatch = useDispatch();
    // const [active, setActive] = useState(false);
    // const [searchOpen, setSearchOpen] = useState(false);
    // const [productsData, setProductsData] = useState({ products: [] });
    // const [searchKey, setSearchKey] = useState('');
    // const searchBoxRef = useRef();
    // const cart = useSelector(state => state.cart);
    // const isLoggedIn = useSelector(state => state.isLoggedIn);
    // const user = useSelector(state => state.user);
    // const wishlist = useSelector(state => state.wishlist);
    // const location = useSelector(state => state.siteData.locations.current);
    // const cartList = Object.values(cart);
    // const wishlistList = Object.values(wishlist);


    // useEffect(() => {
    //     const getSearchProducts = async (key) => {
    //         const res = await searchProducts(key);
    //         if (res) {
    //             setProductsData({ products: res });
    //         }
    //     }
    //     const timer = setTimeout(() => {
    //         if (searchKey.length < 2) return;
    //         getSearchProducts(searchKey);  
    //     }, 500);
    //     return () => clearTimeout(timer);
    // }, [searchKey])

    // useEffect(() => {
    //     const onBodyClick = (event) => {
    //       if (searchBoxRef.current && searchBoxRef.current.contains(event.target)) return;               
    //       setSearchOpen(false);                                                                                                                                                                          
    //       setProductsData({ products: [] });                                                                                                   
    //     }                                                                                                                       
    //     document.body.addEventListener('click', onBodyClick, { capture: true });                                                
    //     return () => document.body.removeEventListener('click', onBodyClick, { capture: true });                                
    // }, [])    

    return (
        <>
            <Modals />
            <p className="text-white bg-purple-700 w-full text-center text-xs py-2 ">Due to the COVID 19 epidemic, orders may be processed with a slight delay</p>
            <div className="border-b border-gray-300 hidden lg:block ">
                <div className="container mx-auto flex justify-between text-sm py-2 px-4">
                    <ul className="flex gap-5">
                        <li>
                            <Link prefetch={false} href={'#'}>About Us</Link>
                        </li>                        
                        <li>
                            <Link prefetch={false} href={'#'}>My Account</Link>
                        </li>                        
                        <li>
                            <Link prefetch={false} href={'#'}>Wishlist</Link>
                        </li>                        
                        <li>
                            <Link prefetch={false} href={'#'}>Order Tracking</Link>
                        </li>
                    </ul>
                    <div className="flex gap-7">
                        <p className="flex gap-1"><GrSecure className="text-lg" /> 100% Secure delivery without contacting the courier</p>
                        <p className="flex gap-1"><PiPhoneCallBold className="text-lg" /> Call Us: <span className="text-blue-600">+ 0020 500</span></p>
                    </div>
                </div>
            </div>
            <header className="container mx-auto">
                <TopNav />
                <div className="flex justify-between items-center gap-5 px-3 ">
                    <ShopSidebar>
                        <SideBarCategories />
                    </ShopSidebar>
                    <Suspense fallback={<NavLoader />}>
                        <NavMenu />
                    </Suspense>
                </div>
            </header>
        </>
    )
}

export default Header;


