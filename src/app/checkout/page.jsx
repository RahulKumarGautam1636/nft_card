"use client";
import { LinearProgress } from "@mui/material";
import { Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import { useState } from "react";

export default function Checkout() {

    // const dispatch = useDispatch();
    const cart = useSelector(state => state.cart);
    const cartList = Object.values(cart);
    
    const [deliveryType, setDeliveryType] = useState('Home Delivery');
    const cartItemsValueList = cartList.map(item => item.qty * item.price);                           
    const cartSubtotal = cartItemsValueList.reduce((total, num) => total + num, 0).toFixed(2); 
    const deliveryCharge = deliveryType === 'Home Delivery' ? 50 : 0;
    const grandTotal = parseFloat(cartSubtotal) + deliveryCharge;

    return (
        <main className='mt-5 md:mt-12'>
            <div className="container mx-auto px-4 flex flex-col md:flex-row gap-4">
                <div className="w-full">
                    <div className="rounded-lg p-6 border border-gray-300 bg-gray-50 mb-4">
                        <p className="mb-4">Add <span className="text-red-500 font-bold text-xl mx-2">$20.86</span> more to cart and get free shipping!</p>
                        <LinearProgress className="rounded h-[0.5rem] cart-progress bg-pink-100" variant="determinate" value={50} />
                    </div>
                    <div className="rounded-lg border border-gray-300 p-6">
                        {/* <div className="table-responsive overflow-auto">
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
                                            <td className="text-gray-500 whitespace-nowrap">
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
                                            <td className="whitespace-nowrap">
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
                        </div> */}
                        <h2 className="text-xl font-semibold border-b border-gray-300 pb-4">Billing Details</h2>
                        <div className="mt-6">
                            <div className="flex gap-4 mb-4">
                                <div className="flex-1">
                                    <label className="text-black text-[0.9rem] mb-2 block"> First Name</label>
                                    <input className="px-5 py-[0.81rem] bg-slate-100 w-full rounded-md outline-none text-[1rem]" type="text" />
                                </div>
                                <div className="flex-1">
                                    <label className="text-black text-[0.9rem] mb-2 block"> Last Name</label>
                                    <input className="px-5 py-[0.81rem] bg-slate-100 w-full rounded-md outline-none text-[1rem]" type="text" />
                                </div>
                            </div>
                            <div className="flex gap-4 mb-4">
                                <div className="flex-1">
                                    <label className="text-black text-[0.9rem] mb-2 block"> Phone Number</label>
                                    <input className="px-5 py-[0.81rem] bg-slate-100 w-full rounded-md outline-none text-[1rem]" type="text" />
                                </div>
                                <div className="flex-1">
                                    <label className="text-black text-[0.9rem] mb-2 block"> Email address *</label>
                                    <input className="px-5 py-[0.81rem] bg-slate-100 w-full rounded-md outline-none text-[1rem]" type="text" />
                                </div>
                            </div>
                            <div className="flex gap-4 mb-4">
                                <div className="flex-1">
                                    <label className="text-black text-[0.9rem] mb-2 block"> Street Address *</label>
                                    <input className="px-5 py-[0.81rem] bg-slate-100 w-full rounded-md outline-none text-[1rem]" type="text" />
                                </div>
                                <div className="flex-1">
                                    <label className="text-black text-[0.9rem] mb-2 block"> Town / City *</label>
                                    <input className="px-5 py-[0.81rem] bg-slate-100 w-full rounded-md outline-none text-[1rem]" type="text" />
                                </div>
                            </div>
                            <div className="flex gap-4 mb-4">
                                <div className="flex-1">
                                    <label className="text-black text-[0.9rem] mb-2 block"> State *</label>
                                    <input className="px-5 py-[0.81rem] bg-slate-100 w-full rounded-md outline-none text-[1rem]" type="text" />
                                </div>
                                <div className="flex-1">
                                    <label className="text-black text-[0.9rem] mb-2 block"> ZIP Code *</label>
                                    <input className="px-5 py-[0.81rem] bg-slate-100 w-full rounded-md outline-none text-[1rem]" type="text" />
                                </div>
                                <div className="flex-1">
                                    <label className="text-black text-[0.9rem] mb-2 block"> Country</label>
                                    <input className="px-5 py-[0.81rem] bg-slate-100 w-full rounded-md outline-none text-[1rem]" type="text" />
                                </div>
                            </div>
                            <div className="flex items-center mb-4 gap-3 pt-3">
                                <input type="checkbox" checked readOnly />
                                <p>Please add your address correctly.</p>
                            </div>
                            <div className="flex items-center mb-6 gap-3">
                                <input type="checkbox" checked readOnly />
                                <p>Make sure your PIN Code is correct.</p>
                            </div>
                            <div>
                                <textarea className="px-5 py-[0.81rem] bg-slate-100 w-full rounded-md outline-none text-[1rem]" rows={4} type="text" placeholder="Order notes (optional)" ></textarea>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="rounded-lg p-6 border border-gray-300 w-full max-w-[35rem]">
                    <h2 className="text-xl font-semibold border-b border-gray-300 pb-5">Your Order</h2>
                    <div className="pt-8 flex flex-col gap-4">
                        {cartList.map(i => (
                            <div className="flex justify-between gap-5 mb-3" key={i.id}>
                                <h4 className="">{i.name} <span className="text-blue-600 font-semibold">x {i.qty}</span></h4>
                                <p className="font-semibold whitespace-nowrap">₹ {i.price}</p>
                            </div>
                        ))}
                        <div className="flex justify-between border-y border-gray-200 py-3 mb-3">
                            <h4 className="font-semibold">Subtotal</h4>
                            <p className="font-semibold">₹ {cartSubtotal}</p>
                        </div>
                        <div className="flex justify-between">
                            <h4 className="font-semibold">Deliver To</h4>
                            <p className="">Rahul K. Gautam</p>
                        </div>
                        <div className="flex justify-between">
                            <h4 className="font-semibold">Address:</h4>
                            <p className="">Madhya Bangla mallick bazar.</p>
                        </div>
                        <div className="flex justify-between items-start">
                            <h4 className="font-semibold pt-2">Delivery Type</h4>
                            <div>
                                <FormControl>
                                    <RadioGroup aria-labelledby="demo-radio-buttons-group-label" defaultValue="female" name="radio-buttons-group" value={deliveryType} onChange={(e) => setDeliveryType(e.target.value)}>
                                        <FormControlLabel labelPlacement="start" value="Home Delivery" control={<Radio />} label="Home Delivery" />
                                        <FormControlLabel labelPlacement="start" value="Local Pickup" control={<Radio />} label="Local Pickup" />
                                    </RadioGroup>
                                </FormControl>
                            </div>
                        </div>
                        <div className="flex justify-between">
                            <h4 className="font-semibold">Delivery Charge:</h4>
                            <p className="font-semibold">₹ {deliveryCharge}</p>
                        </div>
                        <div className="flex justify-between">
                            <h4 className="font-semibold">Payment Mode:</h4>
                            <p className="font-semibold">Cash on Delivery</p>
                        </div>
                        <div className="flex justify-between items-end mt-6 md:mt-28">
                            <h4 className="font-semibold">TOTAL:</h4>
                            <p className="font-semibold text-3xl text-blue-600">₹ {grandTotal}</p>
                        </div>
                        <div className="flex gap-2">
                            <Button className="bg-pink-600 text-white rounded-lg p-3 hover:bg-pink-500 font-bold flex-1">PLACE ORDER</Button>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )   
}
