"use client";
import { LinearProgress } from "@mui/material";
import { TiDelete } from "react-icons/ti";
import { IconButton } from "@mui/material";
import { BiMinus, BiPlus } from "react-icons/bi";
import { RiDiscountPercentLine } from "react-icons/ri";
import { Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, dumpCart, removeFromCart } from "@/lib/slices";

export default function Cart() {

    const dispatch = useDispatch();
    const cart = useSelector(state => state.cart);
    const cartList = Object.values(cart);

    return (
        <main className='mt-12 '>
            <div className="container mx-auto px-4 flex flex-col md:flex-row gap-4">
                <div className="w-full">
                    <div className="rounded-lg p-6 border border-gray-300 bg-gray-50 mb-4">
                        <p className="mb-4">Add <span className="text-red-500 font-bold text-xl mx-2">$20.86</span> more to cart and get free shipping!</p>
                        <LinearProgress className="rounded h-[0.5rem] cart-progress bg-pink-100" variant="determinate" value={50} />
                    </div>
                    <div className="rounded-lg border border-gray-300 bg-gray-50">
                        <div className="table-responsive overflow-auto">
                            <table className="table-type-1 w-full min-w-[720px]">
                                <tbody>
                                    <tr>
                                        <th colSpan={2}>Product</th>
                                        <th>Price</th>
                                        <th>Quantity</th>
                                        <th>Total</th>
                                        <th>Remove</th>
                                    </tr>
                                    {cartList.map(i => (
                                        <tr className="text-gray-700 font-semibold" key={i.id}>
                                            <td className="w-24" style={{paddingRight: 0}}>
                                                <img className="rounded h-24 " src={i.images[0]} alt="Product" />
                                            </td>
                                            <td className="font-medium text-gray-900">
                                                {i.name}
                                            </td>
                                            <td className="text-gray-500 text-nowrap">
                                                ₹ {i.price}
                                            </td>
                                            <td>
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
                                            <td className="text-nowrap">
                                                ₹ {i.price * i.qty}
                                            </td>
                                            <td>
                                                <TiDelete onClick={() => dispatch(removeFromCart(i.id))} className="text-red-600 text-4xl bg-white cursor-pointer" style={{fontSize: '1.95rem'}} />
                                            </td>
                                        </tr>
                                    ))}
                                    <tr>
                                        <td colSpan={6}>
                                            <div className="flex justify-between gap-4 items-center">
                                                <div className="flex gap-2 max-w-[420px] border-8 border-slate-100 bg-slate-100 outline-none text-sm rounded">
                                                    {/* <Email className="text-4xl my-auto text-gray-500" /> */}
                                                    <RiDiscountPercentLine className="text-[3.25rem] my-auto text-purple-800" />
                                                    <input className="p-3 w-full border-0 outline-none text-lg" placeholder="Enter Coupon Code" />
                                                    <Button className="bg-purple-800 text-white whitespace-nowrap rounded-lg py-1 px-10 hover:bg-purple-500">Apply Coupon</Button>
                                                </div>
                                                <Button onClick={() => dispatch(dumpCart())} className="bg-purple-800 text-white whitespace-nowrap rounded-lg py-[0.86rem] px-7 hover:bg-purple-500">Remove All</Button>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <div className="rounded-lg p-6 border border-gray-300 w-full max-w-[35rem]">
                    <h2 className="text-xl font-semibold border-b border-gray-300 pb-5">Cart Totals</h2>
                    <div className="pt-8 flex flex-col gap-4">
                        <div className="flex justify-between">
                            <h4 className="font-semibold">Subtotal</h4>
                            <p className="font-semibold">$29.14</p>
                        </div>
                        <div className="flex justify-between">
                            <h4 className="font-semibold">Deliver To</h4>
                            <p className="">Rahul K. Gautam</p>
                        </div>
                        <div className="flex justify-between">
                            <h4 className="font-semibold">Address:</h4>
                            <p className="">Madhya Bangla mallick bazar.</p>
                        </div>
                        <div className="flex justify-between">
                            <h4 className="font-semibold">Delivery Charge:</h4>
                            <p className="font-semibold">$5.00</p>
                        </div>
                        <div className="flex justify-between">
                            <h4 className="font-semibold">Payment Mode:</h4>
                            <p className="font-semibold">Cash on Delivery</p>
                        </div>
                        <div className="flex justify-between items-end mt-6 md:mt-28">
                            <h4 className="font-semibold">TOTAL:</h4>
                            <p className="font-semibold text-3xl text-blue-600">$34.14</p>
                        </div>
                        <div className="flex gap-2">
                            <Button className="bg-indigo-600 text-white rounded-lg p-3 hover:bg-indigo-500 flex-1">My Orders</Button>
                            <Button className="bg-pink-600 text-white rounded-lg p-3 hover:bg-pink-500 flex-1">Checkout</Button>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )   
}
