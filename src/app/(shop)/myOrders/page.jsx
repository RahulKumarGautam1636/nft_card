"use client";
import { LinearProgress } from "@mui/material";
import { TiDelete } from "react-icons/ti";
import { IconButton } from "@mui/material";
import { BiHeart, BiMinus, BiPlus } from "react-icons/bi";
import { RiDiscountPercentLine } from "react-icons/ri";
import { Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, dumpCart, removeFromCart } from "@/lib/slices";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import { FaRegCalendarAlt, FaRegClock } from "react-icons/fa";
import Link from "next/link";

export default function Cart() {

    const dispatch = useDispatch();
    const cart = useSelector(state => state.cart);
    // const cartList = Object.values(cart);

    const cartList = [
        {
            "_id": "66d595bf247824aacf08cb8a",
            "name": "Altecia Tie and Dye Jogger with Baggy Trouser",
            "images": ['/images/categories/unused/1.jpg'],
            "brand": "Altecia",
            "price": 1600,
            "oldPrice": 1800,
            "catName": "Fashion",
            "catId": "66c0d6d9430f507021d32280",
            "subCatId": "66c0dfa43490222862ae78c1",
            "subCat": "Women",
            "subCatName": "Women",
            "category": "66c0d6d9430f507021d32280",
            "countInStock": 600,
            "rating": 4,
            "isFeatured": false,
            "discount": 12,
            "productRam": [],
            "size": [
                "S",
                "M",
                "L"
            ],
            "productWeight": [],
            "location": "All",
            "dateCreated": "2024-09-02T10:38:55.907Z",
            "__v": 0,
            "id": "66d595bf247824aacf08cb8a",
            "qty": 1
        },
        {
            "_id": "66e13bcc67c833713b24763a",
            "name": "ZAALIQA Girls Black Handbag",
            "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
            "images": ['/images/categories/unused/2.jpg'],
            "brand": "ZAALIQA",
            "price": 620,
            "oldPrice": 750,
            "catName": "Bags",
            "catId": "66c0d82c430f507021d322d5",
            "subCatId": "66c0dfa43490222862ae78c1",
            "subCat": "Women",
            "subCatName": "Women",
            "category": "66c0d82c430f507021d322d5",
            "countInStock": 1500,
            "rating": 5,
            "isFeatured": true,
            "discount": 11,
            "productRam": [],
            "size": [],
            "productWeight": [],
            "location": "All",
            "dateCreated": "2024-09-11T06:42:20.690Z",
            "__v": 0,
            "id": "66e13bcc67c833713b24763a",
            "qty": 1
        },
        {
            "_id": "66e13c6867c833713b24768b",
            "name": "KSC \"KHATUSHYAM COLLECTION\" Grey Pu For Women Handheld Bag",
            "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
            "images": ['/images/categories/unused/4.jpg'],
            "brand": "KSC",
            "price": 460,
            "oldPrice": 490,
            "catName": "Bags",
            "catId": "66c0d82c430f507021d322d5",
            "subCatId": "66c0dfb13490222862ae78cd",
            "subCat": "Girls",
            "subCatName": "Girls",
            "category": "66c0d82c430f507021d322d5",
            "countInStock": 1500,
            "rating": 5,
            "isFeatured": true,
            "discount": 10,
            "productRam": [],
            "size": [],
            "productWeight": [],
            "location": "All",
            "dateCreated": "2024-09-11T06:44:56.302Z",
            "__v": 0,
            "id": "66e13c6867c833713b24768b",
            "qty": 1
        }
    ]

    return (
        <main className='mt-5 md:mt-12'>
            <div className="container mx-auto px-4 flex flex-col md:flex-row gap-4">
                <div className="w-full">
                    <div className="rounded-lg border border-gray-300 bg-gray-50">
                        <div className="p-6 border-b border-gray-300 bg-slate-200 flex gap-8 items-center flex-wrap">
                            <p className="text-[1.15rem] font-semibold text-gray-500">Order <span className="text-black">#2514</span></p> 
                            <div>
                                <span className="text-green-600 bg-green-200 border border-green-200 text-[1.1rem] font-medium py-[0.2rem] px-[0.8rem] rounded-md me-4">Paid</span>
                                <span className="text-orange-600 bg-orange-100 border border-orange-200 text-[1.1rem] font-medium py-[0.2rem] px-[0.8rem] rounded-md">In Transit</span>
                            </div>
                            <p className="text-[1.05rem] font-semibold text-gray-600 flex gap-8 items-center">
                                <span className="flex gap-2 items-center"><FaRegCalendarAlt className="text-lg"/> 20 March, 2021</span>
                                <span className="flex gap-2 items-center"><FaRegClock className="text-lg"/>10:20 PM</span>
                            </p> 
                        </div>
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
                <div className="rounded-lg p-6 border border-gray-300 w-full max-w-[35rem] bg-gray-50">
                    <h2 className="text-xl font-semibold border-b border-gray-300 pb-5">Order Details</h2>
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
                        <div className="flex justify-between items-start">
                            <h4 className="font-semibold pt-2">Shipping Details</h4>
                            <div>
                                <FormControl>
                                    <RadioGroup aria-labelledby="demo-radio-buttons-group-label" defaultValue="female" name="radio-buttons-group">
                                        <FormControlLabel labelPlacement="start" value="female" control={<Radio />} label="Home Delivery" />
                                        <FormControlLabel labelPlacement="start" value="male" control={<Radio />} label="Local Pickup" />
                                    </RadioGroup>
                                </FormControl>
                            </div>
                        </div>
                        <div className="flex justify-between">
                            <h4 className="font-semibold">Delivery Charge:</h4>
                            <p className="font-semibold">$5.00</p>
                        </div>
                        <div className="flex justify-between">
                            <h4 className="font-semibold">Payment Mode:</h4>
                            <p className="font-semibold">Cash on Delivery</p>
                        </div>
                        <div className="flex justify-between items-end mt-6 md:mt-8">
                            <h4 className="font-semibold">TOTAL:</h4>
                            <p className="font-semibold text-3xl text-blue-600">$34.14</p>
                        </div>
                        <div className="flex gap-2">
                            <Link prefetch={false} className="flex-1" href={`#`}>
                                <Button className="bg-pink-600 text-white rounded-lg p-3 hover:bg-pink-500 font-bold w-full">CANCEL ORDER</Button>
                            </Link>
                            <Link prefetch={false} className="flex-1" href={`#`}>
                                <Button className="bg-purple-600 text-white rounded-lg p-3 hover:bg-purple-500 font-bold w-full">NEED HELP</Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )   
}
