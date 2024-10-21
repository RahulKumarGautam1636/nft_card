"use client";
import { Badge, ButtonBase, LinearProgress } from "@mui/material";
import { TiDelete } from "react-icons/ti";
import { IconButton } from "@mui/material";
import { BiHeart, BiMinus, BiPlus } from "react-icons/bi";
import { FiMoon } from "react-icons/fi";
import { Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, dumpCart, removeFromCart } from "@/lib/slices";
// import Radio from '@mui/material/Radio';
// import RadioGroup from '@mui/material/RadioGroup';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import FormControl from '@mui/material/FormControl';
import Link from "next/link";
import withAuth from "@/components/withAuth";
import { RiMenu2Fill } from "react-icons/ri";
import { IoChatboxEllipsesOutline, IoSearch } from "react-icons/io5";
import { MdFullscreen, MdGridView, MdOutlineNotifications } from "react-icons/md";
import { FaChevronDown, FaRegUser } from "react-icons/fa6";
// import { useState } from "react";

function Dashboard() {

    const dispatch = useDispatch();
    const cart = useSelector(state => state.cart);
    const user = useSelector(state => state.user);
    const cartList = Object.values(cart);

    const cartItemsValueList = cartList.map(item => item.qty * item.price);                           // Array of all item's price * quantity selected.
    const cartSubtotal = cartItemsValueList.reduce((total, num) => total + num, 0).toFixed(2); 

    return (
        <main className='mt-5 md:mt-12'>
            <nav className="flex gap-5 items-center justify-between p-4 border border-gray-300 mb-4">
                <div className="flex gap-5 items-center flex-1 max-w-[45rem]">
                    <RiMenu2Fill className="text-3xl text-blue-600" />
                    <div className="flex gap-3 items-center flex-1 h-[3.8rem] md:h-full bg-purple-700 rounded-lg pl-2 md:pl-0">
                        <div className="relative flex-1 h-full">
                            <input placeholder="Search Products.." className="h-full px-5 py-4 border border-slate-200 bg-slate-100 outline-none text-lg rounded w-full" />
                            <IoSearch className="absolute top-1/2 right-0 transform -translate-x-1/2 -translate-y-1/2 text-3xl text-gray-600"/>
                        </div>
                    </div>
                </div>
                <div className="flex gap-10 items-center">
                    <Link href={'#'}><ButtonBase className="rounded-full bg-purple-50 min-w-0 p-3 hover:bg-purple-200" style={{border: '1px solid #cbcbcb'}}><FiMoon className="text-2xl text-purple-800"/></ButtonBase></Link>
                    <Badge badgeContent={5} color="warning" className="font-semibold hidden md:block">
                        <Link href={'#'}><ButtonBase className="rounded-full bg-purple-50 min-w-0 p-3 hover:bg-purple-200" style={{border: '1px solid #cbcbcb'}}><MdOutlineNotifications className="text-2xl text-purple-800"/></ButtonBase></Link>
                    </Badge>
                    <Badge badgeContent={5} color="info" className="font-semibold hidden md:block">
                        <Link href={'#'}><ButtonBase className="rounded-full bg-purple-50 min-w-0 p-3 hover:bg-purple-200" style={{border: '1px solid #cbcbcb'}}><IoChatboxEllipsesOutline className="text-2xl text-purple-800"/></ButtonBase></Link>
                    </Badge>
                    <Link href={'#'}><ButtonBase className="rounded-full bg-purple-50 min-w-0 p-3 hover:bg-purple-200" style={{border: '1px solid #cbcbcb'}}><MdFullscreen className="text-2xl text-purple-800"/></ButtonBase></Link>
                    <Link href={'#'}><ButtonBase className="rounded-full bg-purple-50 min-w-0 p-3 hover:bg-purple-200" style={{border: '1px solid #cbcbcb'}}><MdGridView className="text-2xl text-purple-800"/></ButtonBase></Link>
                    <div className="hidden md:block">
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
                    </div>
                </div>
            </nav>
            <div className="container mx-auto px-4 flex flex-col md:flex-row gap-4">
                <div className="w-full">
                    <div className="rounded-lg border border-gray-300 bg-gray-50">
                        <div className="table-responsive overflow-auto">
                            <table className="table-type-1 w-full md:min-w-[720px]">
                                <tbody>
                                    <tr className="text-center hidden md:table-row">
                                        <th colSpan={2}>Product</th>
                                        <th>Price</th>
                                        <th>Quantity</th>
                                        <th>Total</th>
                                        <th>Remove</th>
                                    </tr>
                                    {cartList.map(i => (
                                        <tr className="text-gray-700 font-semibold block md:table-row" key={i.id}>
                                            <td className="w-full md:w-24 flex justify-center md:table-cell" style={{paddingRight: 0}}>
                                                <img className="rounded h-60 md:h-24 " src={i.images[0]} alt="Product" />
                                            </td>
                                            <td className="flex justify-between gap-12 md:table-cell">
                                                <strong className="block md:hidden font-bold">Name</strong>
                                                <span className="font-medium text-gray-900 text-end">{i.name}</span>
                                            </td>
                                            <td className="whitespace-nowrap flex justify-between md:table-cell">
                                                <strong className="block md:hidden font-bold">Price</strong>
                                                <span className="text-gray-500">₹ {i.price}</span>
                                            </td>
                                            <td className="flex justify-between items-center md:table-cell">
                                                <strong className="block md:hidden font-bold">Quantity</strong>
                                                <div className="flex gap-[1.3rem]">
                                                    <div className="text-gray-900 flex items-center gap-[1.3rem]">
                                                        <IconButton onClick={() => dispatch(addToCart({ ...i, qty: i.qty + 1 }))} className="bg-gray-100 text-[2rem] cursor-pointer">
                                                            <BiPlus />
                                                        </IconButton>
                                                        <span>{i.qty}</span>
                                                        <IconButton onClick={() => {if (i.qty !== 1) dispatch(addToCart({ ...i, qty: i.qty - 1 }))}} className="bg-gray-100 text-[2rem] cursor-pointer">
                                                            <BiMinus />
                                                        </IconButton>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="whitespace-nowrap flex justify-between md:table-cell">
                                                <strong className="block md:hidden font-bold">Total</strong>
                                                ₹ {i.price * i.qty}
                                            </td>
                                            <td className="flex justify-between md:table-cell">
                                                <strong className="block md:hidden font-bold">Action</strong>
                                                <div className="flex gap-6">
                                                    <BiHeart  className="text-red-600 text-4xl bg-white cursor-pointer" style={{fontSize: '1.95rem'}}/>
                                                    <TiDelete onClick={() => dispatch(removeFromCart(i.id))} className="text-red-600 text-4xl bg-white cursor-pointer" style={{fontSize: '1.95rem'}} />
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

                <div className="w-full max-w-[35rem]">
                    <div className="rounded-lg p-6 border border-gray-300 bg-gray-50 mb-4">
                        <p className="mb-4">Add <span className="text-red-500 font-bold text-xl mx-2">₹ 75</span> more to cart and get free shipping!</p>
                        <LinearProgress className="rounded h-[0.5rem] cart-progress bg-pink-100" variant="determinate" value={50} />
                    </div>
                    <div className="rounded-lg p-6 border border-gray-300">
                        <h2 className="text-xl font-semibold border-b border-gray-300 pb-5">Cart Totals</h2>
                        <div className="pt-8 flex flex-col gap-4">
                            <div className="flex justify-between">
                                <h4 className="font-semibold">Subtotal</h4>
                                <p className="font-semibold">₹ {cartSubtotal}</p>
                            </div>
                            <div className="flex justify-between">
                                <h4 className="font-semibold">Discount Coupon</h4>
                                <p className="font-semibold">N/A</p>
                            </div>
                            <div className="flex justify-between items-end mt-6 md:mt-28">
                                <h4 className="font-semibold">TOTAL:</h4>
                                <p className="font-semibold text-3xl text-blue-600">₹ {cartSubtotal}</p>
                            </div>
                            <div className="flex gap-2">
                                <Link className="flex-1" href={`/myOrders`}>
                                    <Button className="bg-indigo-600 text-white rounded-lg p-3 hover:bg-indigo-500 w-full">My Orders</Button>
                                </Link>
                                <Link className="flex-1" href={`/checkout`}>
                                    <Button className="bg-pink-600 text-white rounded-lg p-3 hover:bg-pink-500 w-full">Checkout</Button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )   
}

export default withAuth(Dashboard);