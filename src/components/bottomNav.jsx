'use client';
import { modalAction } from "@/lib/slices";
import Link from "next/link";
import { BiHeart } from "react-icons/bi";
import { FaRegUser } from "react-icons/fa";
import { RiHomeSmileLine } from "react-icons/ri";
import { LuGift } from "react-icons/lu";
import { useDispatch, useSelector } from "react-redux";
import { PiShoppingCartBold } from "react-icons/pi";
// import { useState } from "react" 

export const BottomNav = () => {

    const dispatch = useDispatch();
    const isLoggedIn = useSelector(state => state.isLoggedIn);

    return (
        <div className="fixed bottom-0 left-0 right-0 border-t border-gray-300 bg-white text-[0.9rem] md:hidden z-10">
            <ul className="flex gap-1 items-center">
                <li className="flex-1">
                    <Link prefetch={false} className="flex flex-col gap-[0.5em] items-center pt-[0.7em] pb-[0.2em]" href='/'>
                        <RiHomeSmileLine className="text-[1.7em] text-purple-600" />Home
                    </Link>
                </li>
                <li className="flex-1">
                    <Link prefetch={false} className="flex flex-col gap-[0.5em] items-center pt-[0.7em] pb-[0.2em]" href='/cart'>
                        <PiShoppingCartBold className="text-[1.7em] text-purple-600" /> Cart
                    </Link>
                </li>
                <li className="flex-1">
                    <Link prefetch={false} className="flex flex-col gap-[0.5em] items-center pt-[0.7em] pb-[0.2em]" href='/myOrders'>
                        <LuGift className="text-[1.7em] text-purple-600" /> Orders
                    </Link>
                </li>
                <li className="flex-1">
                    <Link prefetch={false} className="flex flex-col gap-[0.5em] items-center pt-[0.7em] pb-[0.2em]" href='/wishlist'>
                        <BiHeart className="text-[1.7em] text-purple-600" /> Wishlist
                    </Link>
                </li>
                <li className="flex-1" onClick={() => dispatch(modalAction({name: isLoggedIn ? 'PROFILE_MODAL' : 'LOGIN_MODAL', status: true}))}>
                    <Link prefetch={false} className="flex flex-col gap-[0.5em] items-center pt-[0.7em] pb-[0.2em]" href='/'>
                        <FaRegUser className="text-[1.7em] text-purple-600" /> Account
                    </Link>
                </li>
            </ul>
        </div>
    )
}