"use client";
import { LinearProgress } from "@mui/material";
import { TiDelete } from "react-icons/ti";
import { IconButton } from "@mui/material";
import { BiHeart, BiMinus, BiPlus } from "react-icons/bi";
import { Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, dumpCart, modalAction, removeFromCart } from "@/lib/slices";
// import Radio from '@mui/material/Radio';
// import RadioGroup from '@mui/material/RadioGroup';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import FormControl from '@mui/material/FormControl';
import Link from "next/link";
import { imgSource } from "@/api/actionUtils";
import { useRouter } from "next/navigation";
// import { useState } from "react";

// export default function Cart() {

//     const dispatch = useDispatch();
//     const cart = useSelector(state => state.cart);
//     const isLoggedIn = useSelector(state => state.isLoggedIn);
//     const cartList = Object.values(cart);
//     const router = useRouter();

//     const cartItemsValueList = cartList.map(item => item.qty * item.price);                           // Array of all item's price * quantity selected.
//     const cartSubtotal = cartItemsValueList.reduce((total, num) => total + num, 0).toFixed(2); 

//     const handleLogin = (e) => {
//         if (isLoggedIn) {
//             // router.push('/checkout'); 
//         } else {
//             dispatch(modalAction({name: 'LOGIN_MODAL', status: true}));
//             e.preventDefault();
//         }
//     }

//     return (
//         <main className='mt-5 md:mt-12'>
//             <div className="container mx-auto px-4 flex flex-col md:flex-row gap-4">
//                 <div className="w-full">
//                     <div className="rounded-lg border border-gray-300 bg-gray-50">
//                         <div className="table-responsive overflow-auto">
//                             {/* <table className="table-type-1 w-full min-w-[720px]">
//                                 <tbody>
//                                     <tr>
//                                         <th colSpan={2}>Product</th>
//                                         <th>Price</th>
//                                         <th>Quantity</th>
//                                         <th>Total</th>
//                                         <th>Remove</th>
//                                     </tr>
//                                     {cartList.map(i => (
//                                         <tr className="text-gray-700 font-semibold" key={i.id}>
//                                             <td className="w-24" style={{paddingRight: 0}}>
//                                                 <img className="rounded h-24 " src={i.images[0]} alt="Product" />
//                                             </td>
//                                             <td className="font-medium text-gray-900">
//                                                 {i.name}
//                                             </td>
//                                             <td className="text-gray-500 whitespace-nowrap">
//                                                 ₹ {i.price}
//                                             </td>
//                                             <td>
//                                                 <div className="flex gap-[1.3rem]">
//                                                     <div className="text-gray-900 flex items-center gap-[1.3rem]">
//                                                         <IconButton onClick={() => dispatch(addToCart({ ...i, qty: i.qty + 1 }))} className="bg-gray-100 text-[2rem] cursor-pointer">
//                                                             <BiPlus />
//                                                         </IconButton>
//                                                         <span>{i.qty}</span>
//                                                         <IconButton onClick={() => {if (i.qty !== 1) dispatch(addToCart({ ...i, qty: i.qty - 1 }))}} className="bg-gray-100 text-[2rem] cursor-pointer">
//                                                             <BiMinus />
//                                                         </IconButton>
//                                                     </div>
//                                                 </div>
//                                             </td>
//                                             <td className="whitespace-nowrap">
//                                                 ₹ {i.price * i.qty}
//                                             </td>
//                                             <td>
//                                                 <TiDelete onClick={() => dispatch(removeFromCart(i.id))} className="text-red-600 text-4xl bg-white cursor-pointer" style={{fontSize: '1.95rem'}} />
//                                             </td>
//                                         </tr>
//                                     ))}
//                                     <tr>
//                                         <td colSpan={6}>
//                                             <div className="flex justify-between gap-4 items-center">
//                                                 <div className="flex gap-2 max-w-[420px] border-8 border-slate-100 bg-slate-100 outline-none text-sm rounded">
//                                                     <RiDiscountPercentLine className="text-[3.25rem] my-auto text-purple-800" />
//                                                     <input className="p-3 w-full border-0 outline-none text-lg" placeholder="Enter Coupon Code" />
//                                                     <Button className="bg-purple-800 text-white whitespace-nowrap rounded-lg py-1 px-10 hover:bg-purple-500">Apply Coupon</Button>
//                                                 </div>
//                                                 <Button onClick={() => dispatch(dumpCart())} className="bg-purple-800 text-white whitespace-nowrap rounded-lg py-[0.86rem] px-7 hover:bg-purple-500">Remove All</Button>
//                                             </div>
//                                         </td>
//                                     </tr>
//                                 </tbody>
//                             </table> */}
//                             <table className="table-type-1 w-full md:min-w-[720px]">
//                                 <tbody>
//                                     <tr className="text-center hidden md:table-row bg-slate-100">
//                                         <th colSpan={2}>Product</th>
//                                         <th>Price</th>
//                                         <th>Quantity</th>
//                                         <th>Total</th>
//                                         <th>Remove</th>
//                                     </tr>
//                                     {cartList.map(i => (
//                                         <tr className="text-gray-700 font-semibold block md:table-row" key={i.id}>
//                                             <td className="w-full md:w-24 flex justify-center md:table-cell" style={{paddingRight: 0}}>
//                                                 <img className="rounded h-60 md:h-24 " src={imgSource(`products`, i.images[0])} alt="Product" />
//                                             </td>
//                                             <td className="flex justify-between gap-12 md:table-cell">
//                                                 <strong className="block md:hidden font-bold">Name</strong>
//                                                 <div>
//                                                     <span className="font-medium text-blue-900 text-end">{i.name}</span>
//                                                     <div className="block mt-3">
//                                                         <span className="font-medium text-gray-600 me-4">MRP: ₹{i.oldPrice}</span>
//                                                         <span className="text-cyan-100 bg-cyan-700 text-sm font-medium py-[0.35rem] px-[0.8rem] rounded-2xl w-fit">{i.discount}% OFF</span>
//                                                     </div>
//                                                 </div>
//                                             </td>
//                                             <td className="whitespace-nowrap flex justify-between md:table-cell">
//                                                 <strong className="block md:hidden font-bold">Price</strong>
//                                                 <span className="text-gray-500">₹ {i.price}</span>
//                                             </td>
//                                             <td className="flex justify-between items-center md:table-cell">
//                                                 <strong className="block md:hidden font-bold">Quantity</strong>
//                                                 <div className="flex gap-[1.3rem]">
//                                                     <div className="text-gray-900 flex items-center gap-[1.3rem]">
//                                                         <IconButton onClick={() => dispatch(addToCart({ ...i, qty: i.qty + 1 }))} className="bg-gray-100 text-[2rem] cursor-pointer">
//                                                             <BiPlus />
//                                                         </IconButton>
//                                                         <span>{i.qty}</span>
//                                                         <IconButton onClick={() => {if (i.qty !== 1) dispatch(addToCart({ ...i, qty: i.qty - 1 }))}} className="bg-gray-100 text-[2rem] cursor-pointer">
//                                                             <BiMinus />
//                                                         </IconButton>
//                                                     </div>
//                                                 </div>
//                                             </td>
//                                             <td className="whitespace-nowrap flex justify-between md:table-cell">
//                                                 <strong className="block md:hidden font-bold">Total</strong>
//                                                 ₹ {i.price * i.qty}
//                                             </td>
//                                             <td className="flex justify-between md:table-cell">
//                                                 <strong className="block md:hidden font-bold">Action</strong>
//                                                 <div className="flex gap-6 justify-center">
//                                                     <BiHeart  className="text-red-600 text-4xl bg-white cursor-pointer" style={{fontSize: '1.95rem'}}/>
//                                                     <TiDelete onClick={() => dispatch(removeFromCart(i.id))} className="text-red-600 text-4xl bg-white cursor-pointer" style={{fontSize: '1.95rem'}} />
//                                                 </div>
//                                             </td>
//                                         </tr>
//                                     ))}
//                                 </tbody>
//                             </table>
//                         </div>
//                     </div>
//                 </div>

//                 <div className="w-full max-w-[35rem]">
//                     <div className="rounded-lg p-6 border border-gray-300 bg-gray-50 mb-4">
//                         <p className="mb-4">Add <span className="text-red-500 font-bold text-xl mx-2">₹ 75</span> more to cart and get free shipping!</p>
//                         <LinearProgress className="rounded h-[0.5rem] cart-progress bg-pink-100" variant="determinate" value={50} />
//                     </div>
//                     <div className="rounded-lg p-6 border border-gray-300">
//                         <h2 className="text-xl font-semibold border-b border-gray-300 pb-5">Cart Totals</h2>
//                         <div className="pt-8 flex flex-col gap-4">
//                             <div className="flex justify-between">
//                                 <h4 className="font-semibold">Subtotal</h4>
//                                 <p className="font-semibold">₹ {cartSubtotal}</p>
//                             </div>
//                             {/* <div className="flex justify-between items-start">
//                                 <h4 className="font-semibold pt-2">Shipping Details</h4>
//                                 <div>
//                                     <FormControl>
//                                         <RadioGroup aria-labelledby="demo-radio-buttons-group-label" defaultValue="female" name="radio-buttons-group" value={deliveryType} onChange={(e) => setDeliveryType(e.target.value)}>
//                                             <FormControlLabel labelPlacement="start" value="home-delivery" control={<Radio />} label="Home Delivery" />
//                                             <FormControlLabel labelPlacement="start" value="local-pickup" control={<Radio />} label="Local Pickup" />
//                                         </RadioGroup>
//                                     </FormControl>
//                                 </div>
//                             </div> */}
//                             <div className="flex justify-between">
//                                 <h4 className="font-semibold">Discount Coupon</h4>
//                                 <p className="font-semibold">N/A</p>
//                             </div>
//                             {/* <div className="flex justify-between">
//                                 <h4 className="font-semibold">Deliver To</h4>
//                                 <p className="">Rahul K. Gautam</p>
//                             </div>
//                             <div className="flex justify-between">
//                                 <h4 className="font-semibold">Address:</h4>
//                                 <p className="">Madhya Bangla mallick bazar.</p>    
//                             </div>
//                             <div className="flex justify-between">
//                                 <h4 className="font-semibold">Payment Mode:</h4>
//                                 <p className="font-semibold">Cash on Delivery</p>
//                             </div> */}
//                             <div className="flex justify-between items-end mt-6 md:mt-28">
//                                 <h4 className="font-semibold">TOTAL:</h4>
//                                 <p className="font-semibold text-3xl text-blue-600">₹ {cartSubtotal}</p>
//                             </div>
//                             <div className="flex gap-2">
//                                 <Link prefetch={false} className="flex-1" href={`/myOrders`}>
//                                     <Button className="bg-indigo-600 text-white rounded-lg p-3 hover:bg-indigo-500 w-full">My Orders</Button>
//                                 </Link>
//                                 <Link prefetch={false} href={'/checkout'} className="flex-1" onClick={handleLogin}>
//                                     <Button className="bg-pink-600 text-white rounded-lg p-3 hover:bg-pink-500 w-full">Checkout</Button>
//                                 </Link>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </main>
//     )   
// }

export default function Cart() {
    return (
      <div id="main-content" className="mt-5 md:mt-12">
        <main className="container mx-auto px-4">
          <div className="grid grid-cols-1 px-4 pt-6 mb-6 xl:grid-cols-2 xl:gap-6">
            <div className="col-span-full mb-4 xl:mb-0">
              <nav className="flex mb-5" aria-label="Breadcrumb">
                <ol className="inline-flex items-center space-x-1 md:space-x-2">
                  <li className="inline-flex items-center">
                    <a href="#" className="inline-flex items-center text-gray-700 hover:text-gray-900">
                      <svg className="w-5 h-5 mr-2.5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                      </svg>
                      Home
                    </a>
                  </li>
                  <li>
                    <div className="flex items-center">
                      <svg className="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                      </svg>
                      <a href="#" className="ml-1 text-sm font-medium text-gray-700 hover:text-gray-900 md:ml-2">
                        E-commerce
                      </a>
                    </div>
                  </li>
                  <li>
                    <div className="flex items-center">
                      <svg className="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="ml-1 text-sm font-medium text-gray-400 md:ml-2" aria-current="page">
                        Billing
                      </span>
                    </div>
                  </li>
                </ol>
              </nav>
              <h1 className="text-xl font-semibold text-gray-900 sm:text-2xl">Billing</h1>
            </div>
            <div className="bg-white shadow-lg shadow-gray-200 rounded-2xl p-4  mb-4 xl:mb-0">
              <a href="" className="flex items-center mb-6 text-2xl font-bold">
                <img src="https://demos.creative-tim.com/soft-ui-flowbite-pro/images/logo.svg" className="mr-4 h-10" alt="Creative Tim Logo" />
                <span>Soft Dashboard</span>
              </a>
              <p className="mb-2 text-base font-normal text-gray-500">Switch your subscription to a different type, such as a monthly plan, annual plan, or student plan. And see a list of subscription plans that Soft UI Flowbite PRO offers.</p>
              <p className="text-sm font-semibold text-gray-900">Next payment of $36 (yearly) occurs on August 13, 2020.</p>
              <div className="mt-6 space-y-4 sm:flex sm:space-y-0 sm:space-x-3">
                <div>
                  <a href="#" className="text-white bg-gradient-to-br from-pink-500 to-voilet-500 font-medium rounded-lg shadow-md shadow-gray-300 hover:scale-[1.02] transition-transform inline-flex justify-center items-center text-sm px-5 py-2.5 text-center w-full sm:w-auto">
                    <svg className="mr-2 -ml-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
                    </svg>
                    Change Plan
                  </a>
                </div>
                <div>
                  <a href="#" className="text-gray-900 bg-white border border-gray-300 hover:bg-gray-100 font-medium inline-flex justify-center items-center rounded-lg text-sm px-5 py-2.5 text-center w-full sm:w-auto hover:scale-[1.02] transition-transform">
                    Cancel Subscription
                  </a>
                </div>
              </div>
            </div>
            <div className="bg-white shadow-lg shadow-gray-200 rounded-2xl p-4 ">
              {/* Card Title */}
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-bold text-gray-900">Order History</h3>
                <div className="flex-shrink-0">
                  <a className="p-2 text-sm font-medium text-gray-900 rounded-2xl hover:bg-gray-100" href="#">
                    View all
                  </a>
                </div>
              </div>
              {/* Table */}
              <div className="flex flex-col">
                <div className="overflow-x-auto rounded-2xl">
                  <div className="inline-block min-w-full align-middle">
                    <div className="overflow-hidden shadow-lg sm:rounded-2xl">
                      <table className="min-w-full divide-y divide-gray-200">
                        <thead>
                          <tr>
                            <th scope="col" className="p-4 text-xs font-medium tracking-wider text-left text-gray-500 uppercase">
                              Transaction
                            </th>
                            <th scope="col" className="p-4 text-xs font-medium tracking-wider text-left text-gray-500 uppercase">
                              Date &amp; Time
                            </th>
                            <th scope="col" className="p-4 text-xs font-medium tracking-wider text-left text-gray-500 uppercase">
                              Amount
                            </th>
                            <th scope="col" className="p-4 text-xs font-medium tracking-wider text-left text-gray-500 uppercase">
                              Status
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="p-4 text-sm font-normal text-gray-900 whitespace-nowrap">
                              Payment from <span className="font-semibold">Mika William</span>
                            </td>
                            <td className="p-4 text-sm font-normal text-gray-500 whitespace-nowrap">Apr 23 ,2021</td>
                            <td className="p-4 text-sm font-semibold text-gray-900 whitespace-nowrap">$2300</td>
                            <td className="p-4 whitespace-nowrap">
                              <span className="bg-gradient-to-br from-green-500 to-green-700 text-xs uppercase font-bold text-white mr-2 px-2.5 py-1 rounded-md">Completed</span>
                            </td>
                          </tr>
                          <tr>
                            <td className="p-4 text-sm font-normal text-gray-900 whitespace-nowrap">
                              Payment refund to <span className="font-semibold">#00910</span>
                            </td>
                            <td className="p-4 text-sm font-normal text-gray-500 whitespace-nowrap">Apr 23 ,2021</td>
                            <td className="p-4 text-sm font-semibold text-gray-900 whitespace-nowrap">-$670</td>
                            <td className="p-4 whitespace-nowrap">
                              <span className="bg-gradient-to-br from-green-500 to-green-700 text-xs uppercase font-bold text-white mr-2 px-2.5 py-1 rounded-md">Completed</span>
                            </td>
                          </tr>
                          <tr>
                            <td className="p-4 pb-0 text-sm font-normal text-gray-900 whitespace-nowrap">
                              Payment failed from <span className="font-semibold">#087651</span>
                            </td>
                            <td className="p-4 pb-0 text-sm font-normal text-gray-500 whitespace-nowrap">Apr 18 ,2021</td>
                            <td className="p-4 pb-0 text-sm font-semibold text-gray-900 whitespace-nowrap">$234</td>
                            <td className="p-4 pb-0 whitespace-nowrap">
                              <span className="bg-gradient-to-br from-red-400 to-red-600 text-xs uppercase font-bold text-white mr-2 px-2.5 py-1 rounded-md">Cancelled</span>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="px-4">
            <div className="bg-white shadow-lg shadow-gray-200 rounded-2xl p-4  mb-6">
              <h3 className="mb-4 text-xl font-bold">General Information</h3>
              <form action="#">
                <div className="grid grid-cols-1 gap-6 mb-6 md:grid-cols-3">
                  <div className="col-span-1">
                    <div className="mb-4">
                      <label htmlFor="first-name" className="block mb-2 text-sm font-medium text-gray-900">
                        First Name
                      </label>
                      <input type="text" name="first-name" id="first-name" className="shadow-lg-sm border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-2 focus:ring-fuchsia-50 focus:border-fuchsia-300 block w-full p-2.5" placeholder="Bonnie" required="" />
                    </div>
                    <div className="mb-4">
                      <label htmlFor="organization" className="block mb-2 text-sm font-medium text-gray-900">
                        Organization
                      </label>
                      <input type="text" name="organization" id="organization" className="shadow-lg-sm border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-2 focus:ring-fuchsia-50 focus:border-fuchsia-300 block w-full p-2.5" placeholder="Company Name" required="" />
                    </div>
                    <div className="mb-4">
                      <label htmlFor="department" className="block mb-2 text-sm font-medium text-gray-900">
                        Department
                      </label>
                      <input type="text" name="department" id="department" className="shadow-lg-sm border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-2 focus:ring-fuchsia-50 focus:border-fuchsia-300 block w-full p-2.5" placeholder="Development" required="" />
                    </div>
                    <div>
                      <label htmlFor="city" className="block mb-2 text-sm font-medium text-gray-900">
                        City
                      </label>
                      <input type="text" name="city" id="city" className="shadow-lg-sm border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-2 focus:ring-fuchsia-50 focus:border-fuchsia-300 block w-full p-2.5" placeholder="e.g. San Francisco" required="" />
                    </div>
                  </div>
                  <div className="col-span-1">
                    <div className="mb-4">
                      <label htmlFor="last-name" className="block mb-2 text-sm font-medium text-gray-900">
                        Last Name
                      </label>
                      <input type="email" name="last-name" id="last-name" className="shadow-lg-sm border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-2 focus:ring-fuchsia-50 focus:border-fuchsia-300 block w-full p-2.5" placeholder="Green" required="" />
                    </div>
                    <div className="mb-4">
                      <label htmlFor="role" className="block mb-2 text-sm font-medium text-gray-900">
                        Role
                      </label>
                      <input type="text" name="role" id="role" className="shadow-lg-sm border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-2 focus:ring-fuchsia-50 focus:border-fuchsia-300 block w-full p-2.5" placeholder="React Developer" required="" />
                    </div>
                    <div className="mb-4">
                      <label htmlFor="country" className="block mb-2 text-sm font-medium text-gray-900">
                        Country
                      </label>
                      <input type="text" name="country" id="country" className="shadow-lg-sm border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-2 focus:ring-fuchsia-50 focus:border-fuchsia-300 block w-full p-2.5" placeholder="United States" required="" />
                    </div>
                    <div>
                      <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">
                        Email
                      </label>
                      <input type="email" name="email" id="email" className="shadow-lg-sm border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-2 focus:ring-fuchsia-50 focus:border-fuchsia-300 block w-full p-2.5" placeholder="example@company.com" required="" />
                    </div>
                  </div>
                  <div className="col-span-1">
                    <label htmlFor="info" className="block mb-2 text-sm font-medium text-gray-900">
                      Info
                    </label>
                    <textarea id="info" name="info" rows={14} className="block p-4 w-full text-gray-900 rounded-lg border border-gray-300 sm:text-sm focus:ring-2 focus:ring-fuchsia-50 focus:border-fuchsia-300" placeholder="Receipt Info (optional)" defaultValue={""} />
                  </div>
                </div>
                <button className="text-white bg-gradient-to-br from-pink-500 to-voilet-500 font-medium rounded-lg shadow-md shadow-gray-300 hover:scale-[1.02] transition-transform text-sm px-5 py-2.5 text-center" type="submit">
                  Update
                </button>
              </form>
            </div>
            <div className="bg-white shadow-lg shadow-gray-200 rounded-2xl p-4 ">
              <h3 className="mb-4 text-xl font-bold">Card Details</h3>
              <form action="#">
                <div className="grid grid-cols-1 gap-6 mb-6 sm:grid-cols-2">
                  <div>
                    <label htmlFor="full-name" className="block mb-2 text-sm font-medium text-gray-900">
                      (Full name as displayed on card)*
                    </label>
                    <input type="text" name="full-name" id="full-name" className="shadow-lg-sm border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-2 focus:ring-fuchsia-50 focus:border-fuchsia-300 block w-full p-2.5" placeholder="Enter your name" required="" />
                  </div>
                  <div>
                    <label htmlFor="last-name" className="block mb-2 text-sm font-medium text-gray-900">
                      Card Number *
                    </label>
                    <input type="number" name="last-name" id="last-name" className="shadow-lg-sm border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-2 focus:ring-fuchsia-50 focus:border-fuchsia-300 block w-full p-2.5" placeholder="xxxx-xxxx-xxxx-xxxx" required="" />
                  </div>
                  <div>
                    <label htmlFor="cvc" className="block mb-2 text-sm font-medium text-gray-900">
                      CVC *
                    </label>
                    <input type="number" name="cvc" id="cvc" className="shadow-lg-sm border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-2 focus:ring-fuchsia-50 focus:border-fuchsia-300 block w-full p-2.5" placeholder="•••" required="" />
                  </div>
                  <div>
                    <label htmlFor="zip-code" className="block mb-2 text-sm font-medium text-gray-900">
                      Postal / ZIP code (optional)
                    </label>
                    <input type="text" name="zip-code" id="zip-code" className="shadow-lg-sm border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-2 focus:ring-fuchsia-50 focus:border-fuchsia-300 block w-full p-2.5" placeholder="e.g. 12345" required="" />
                  </div>
                </div>
                <button className="text-white bg-gradient-to-br from-pink-500 to-voilet-500 font-medium rounded-lg shadow-md shadow-gray-300 hover:scale-[1.02] transition-transform text-sm px-5 py-2.5 text-center" type="submit">
                  Update
                </button>
              </form>
            </div>
          </div>
          <footer className="p-6 my-6 mx-4 bg-white rounded-2xl shadow-lg shadow-gray-200 md:flex md:items-center md:justify-between">
            <ul className="flex flex-wrap items-center mb-6 md:mb-0">
              <li>
                <a href="#" className="mr-4 text-sm font-normal text-gray-500 hover:underline md:mr-6">
                  Terms and conditions
                </a>
              </li>
              <li>
                <a href="#" className="mr-4 text-sm font-normal text-gray-500 hover:underline md:mr-6">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="mr-4 text-sm font-normal text-gray-500 hover:underline md:mr-6">
                  Licensing
                </a>
              </li>
              <li>
                <a href="#" className="mr-4 text-sm font-normal text-gray-500 hover:underline md:mr-6">
                  Cookie Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-sm font-normal text-gray-500 hover:underline">
                  Contact
                </a>
              </li>
            </ul>
            <div className="flex space-x-6 sm:justify-center">
              <a href="#" className="text-gray-500 hover:text-gray-900">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-900">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-900">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-900">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-900">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </footer>
          <p className="my-10 text-sm text-center text-gray-500">
            © 2019-2022 Built with ❤️ by
            <a href="https://creative-tim.com" className="hover:underline" target="_blank">
              Creative Tim
            </a>
            and
            <a href="https://flowbite.com" className="hover:underline" target="_blank">
              Flowbite
            </a>
            . All rights reserved.
          </p>
        </main>
      </div>
    );
}