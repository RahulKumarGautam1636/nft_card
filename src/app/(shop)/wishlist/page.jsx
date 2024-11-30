"use client";
import { LinearProgress } from "@mui/material";
import { TiDelete } from "react-icons/ti";
import { IconButton } from "@mui/material";
import { BiHeart, BiMinus, BiPlus } from "react-icons/bi";
import { Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { addToWishlist, dumpWishlist, removeFromWishlist } from "@/lib/slices";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';

export default function Wishlist() {

    const dispatch = useDispatch();
    const wishlist = useSelector(state => state.wishlist);
    const wishlistList = Object.values(wishlist);

    return (
        <main className='mt-5 md:mt-12'>
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
                                    {wishlistList.map(i => (
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
                                                        <IconButton onClick={() => dispatch(addToWishlist({ ...i, qty: i.qty + 1 }))} className="bg-gray-100 text-[2rem] cursor-pointer">
                                                            <BiPlus />
                                                        </IconButton>
                                                        <span>{i.qty}</span>
                                                        <IconButton onClick={() => {if (i.qty !== 1) dispatch(addToWishlist({ ...i, qty: i.qty - 1 }))}} className="bg-gray-100 text-[2rem] cursor-pointer">
                                                            <BiMinus />
                                                        </IconButton>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="whitespace-nowrap">
                                                ₹ {i.price * i.qty}
                                            </td>
                                            <td>
                                                <TiDelete onClick={() => dispatch(removeFromWishlist(i.id))} className="text-red-600 text-4xl bg-white cursor-pointer" style={{fontSize: '1.95rem'}} />
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                            <table className="table-type-1 w-full md:min-w-[720px]">
                                <tbody>
                                    <tr className="text-center hidden md:table-row">
                                        <th colSpan={2}>Product</th>
                                        <th>Price</th>
                                        <th>Quantity</th>
                                        <th>Total</th>
                                        <th>Remove</th>
                                    </tr>
                                    {wishlistList.map(i => (
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
                                                        <IconButton onClick={() => dispatch(addToWishlist({ ...i, qty: i.qty + 1 }))} className="bg-gray-100 text-[2rem] cursor-pointer">
                                                            <BiPlus />
                                                        </IconButton>
                                                        <span>{i.qty}</span>
                                                        <IconButton onClick={() => {if (i.qty !== 1) dispatch(addToWishlist({ ...i, qty: i.qty - 1 }))}} className="bg-gray-100 text-[2rem] cursor-pointer">
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
                                                    <TiDelete onClick={() => dispatch(removeFromWishlist(i.id))} className="text-red-600 text-4xl bg-white cursor-pointer" style={{fontSize: '1.95rem'}} />
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
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
                        <div className="flex justify-between items-start">
                            <h4 className="font-semibold pt-2">Shipping Details</h4>
                            <div>
                                <FormControl>
                                    {/* <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel> */}
                                    <RadioGroup aria-labelledby="demo-radio-buttons-group-label" defaultValue="female" name="radio-buttons-group">
                                        <FormControlLabel labelPlacement="start" value="female" control={<Radio />} label="Home Delivery" />
                                        <FormControlLabel labelPlacement="start" value="male" control={<Radio />} label="Local Pickup" />
                                    </RadioGroup>
                                </FormControl>
                            </div>
                        </div>
                        <div className="flex justify-between">
                            <h4 className="font-semibold">Delivery Charge</h4>
                            <p className="font-semibold">$ 50</p>
                        </div>
                        {/* <div className="flex justify-between">
                            <h4 className="font-semibold">Deliver To</h4>
                            <p className="">Rahul K. Gautam</p>
                        </div>
                        <div className="flex justify-between">
                            <h4 className="font-semibold">Address:</h4>
                            <p className="">Madhya Bangla mallick bazar.</p>    
                        </div>
                        <div className="flex justify-between">
                            <h4 className="font-semibold">Payment Mode:</h4>
                            <p className="font-semibold">Cash on Delivery</p>
                        </div> */}
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
