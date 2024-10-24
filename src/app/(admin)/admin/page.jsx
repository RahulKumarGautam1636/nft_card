"use client";
import { LinearProgress } from "@mui/material";
import { TiDelete } from "react-icons/ti";
import { IconButton } from "@mui/material";
import { BiHeart, BiMinus, BiPlus } from "react-icons/bi";
import { Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "@/lib/slices";
// import Radio from '@mui/material/Radio';
// import RadioGroup from '@mui/material/RadioGroup';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import FormControl from '@mui/material/FormControl';
import Link from "next/link";
import withAuth from "@/components/withAuth";
import { BsCartCheckFill, BsGraphUpArrow } from "react-icons/bs";
import { FaMoneyBill1Wave } from "react-icons/fa6";
import { IoGiftSharp } from "react-icons/io5";
import { FaUsers } from "react-icons/fa6";


function Dashboard() {

    const dispatch = useDispatch();
    const cart = useSelector(state => state.cart);
    const cartList = Object.values(cart);

    const cartItemsValueList = cartList.map(item => item.qty * item.price);                           // Array of all item's price * quantity selected.
    const cartSubtotal = cartItemsValueList.reduce((total, num) => total + num, 0).toFixed(2); 

    return (
        <main className='pt-4 px-4 bg-slate-100 h-full'>
            <h4 className="text-2xl font-semibold mb-4">Add Attrubute</h4>
            <div className="flex gap-4 flex-wrap">
                {/* {[1,2,3,4].map(i => ( */}
                    <div className="rounded-3xl p-6 border border-gray-300 bg-gray-50 mb-4 flex-1 min-w-fit">
                        <div className="flex gap-4">
                            <div className="p-2 rounded-full border border-gray-300 h-[4.2rem] grid place-items-center">
                                <BsCartCheckFill className="h-full w-full text-green-600" />
                            </div>
                            <div>
                                <p className="mb-1">Total Sales</p>
                                <h4 className="text-[1.8rem] font-extrabold">34,945</h4>
                            </div>
                            <div className="ml-auto">
                                <BsGraphUpArrow className="text-[2rem] mb-[0.6rem] text-green-600" /> 
                                <p className="font-bold">1.56%</p>
                            </div>
                        </div>
                        <img src="/graph.png" className="w-full" />
                    </div>
                    <div className="rounded-3xl p-6 border border-gray-300 bg-gray-50 mb-4 flex-1 min-w-fit">
                        <div className="flex gap-4">
                            <div className="p-2 rounded-full border border-gray-300 h-[4.2rem] grid place-items-center">
                                <FaMoneyBill1Wave className="h-full w-full text-blue-600" />
                            </div>
                            <div>
                                <p className="mb-1">Total Income</p>
                                <h4 className="text-[1.8rem] font-extrabold">$37,802</h4>
                            </div>
                            <div className="ml-auto">
                                <BsGraphUpArrow className="text-[2rem] mb-[0.6rem] text-green-600" /> 
                                <p className="font-bold">2.25%</p>
                            </div>
                        </div>
                        <img src="/graph.png" className="w-full" />
                    </div>
                    <div className="rounded-3xl p-6 border border-gray-300 bg-gray-50 mb-4 flex-1 min-w-fit">
                        <div className="flex gap-4">
                            <div className="p-2 rounded-full border border-gray-300 h-[4.2rem] grid place-items-center">
                                <IoGiftSharp className="h-full w-full text-pink-600" />
                            </div>
                            <div>
                                <p className="mb-1">Orders Paid</p>
                                <h4 className="text-[1.8rem] font-extrabold">34,945</h4>
                            </div>
                            <div className="ml-auto">
                                <BsGraphUpArrow className="text-[2rem] mb-[0.6rem] text-green-600" /> 
                                <p className="font-bold">0.00%</p>
                            </div>
                        </div>
                        <img src="/graph.png" className="w-full" />
                    </div>
                    <div className="rounded-3xl p-6 border border-gray-300 bg-gray-50 mb-4 flex-1 min-w-fit">
                        <div className="flex gap-4">
                            <div className="p-2 rounded-full border border-gray-300 h-[4.2rem] grid place-items-center">
                                <FaUsers className="h-full w-full text-yellow-600" />
                            </div>
                            <div>
                                <p className="mb-1">Total Visitor</p>
                                <h4 className="text-[1.8rem] font-extrabold">34,945</h4>
                            </div>
                            <div className="ml-auto">
                                <BsGraphUpArrow className="text-[2rem] mb-[0.6rem] text-green-600" /> 
                                <p className="font-bold">7.05%</p>
                            </div>
                        </div>
                        <img src="/graph.png" className="w-full" />
                    </div>
                {/* ))} */}
            </div>
            <div className="flex flex-col md:flex-row gap-4">
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