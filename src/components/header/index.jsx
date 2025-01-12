import Link from "next/link";
import { GrSecure } from "react-icons/gr";
import { PiPhoneCallBold } from "react-icons/pi";
import { Modals } from "../modals";
import { NavMenu, SideBarCategories } from "./Navbar";
import { ExampleLoader, HeaderActions, HeaderSearch, NavLoader, ShopSidebar, TopNav } from "./components";
import { Suspense } from "react";
import { getCategories } from "@/api/api";

export async function Header() {

    const categories = await getCategories('layout');

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
                        <SideBarCategories categories={categories} />
                    </ShopSidebar>
                    <Suspense fallback={<NavLoader />}>
                        <NavMenu categories={categories} />
                    </Suspense>
                </div>
            </header>
        </>
    )
}

export default Header;


