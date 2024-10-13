"use client";
import { LinearProgress } from "@mui/material";
import { Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import { useEffect, useState } from "react";
import { NEXT_APP_BASE_URL } from "@/constants";
import axios from "axios";
import { addUser, modalAction } from "@/lib/slices";

import { FaMoneyBill1Wave } from "react-icons/fa6";
import { MdPhoneInTalk } from "react-icons/md";
import { IoMdMail } from "react-icons/io";
import { FaLocationPin } from "react-icons/fa6";
import { PiCityBold } from "react-icons/pi";
import { FaMapMarkedAlt } from "react-icons/fa";
import { FaDotCircle } from "react-icons/fa";
import { GiIsland } from "react-icons/gi";

export default function Checkout() {

    const dispatch = useDispatch();
    const cart = useSelector(state => state.cart);
    const user = useSelector(state => state.user);
    const isLoggedIn = useSelector(state => state.isLoggedIn);
    const cartList = Object.values(cart);
    
    const [deliveryType, setDeliveryType] = useState('Home Delivery');
    const cartItemsValueList = cartList.map(item => item.qty * item.price);                           
    const cartSubtotal = cartItemsValueList.reduce((total, num) => total + num, 0).toFixed(2); 
    const deliveryCharge = deliveryType === 'Home Delivery' ? 50 : 0;
    const grandTotal = parseFloat(cartSubtotal) + deliveryCharge;

    // Update Address starts ----------------------------------------------------------------------------
    // const [statesList, setStatesList] = useState([{Description: 'West Bengal', CodeId: 3}]); 
    const [regData, setRegData] = useState({
        Name: '',        
        EncCompanyId: 'FFCeIi27FQMTNGpatwiktw==',
        PartyCode: '0',
        PartyId: '0',
        UserId: '0',
        RegMob1: '',
        Email: '', 
        Address: '',
        UserPassword: '',
        UserType: 'Customer',
        Address2: '',
        City: '',
        State: 3,
        StateName: 'West Bengal',
        Pin: '', 

        DOB: '',
        DOBstr: '',
        Age: '',
        AgeMonth: '',
        AgeDay: '',
        IsDOBCalculated: 'N',
        GenderDesc: 'Male',
        Gender: 104,
        Country: 1,
        MemberId: '',

        RegNo: "",                                // Unused fields.
        Aadhaar: "",
        Salutation: "",
        Qualification: "",
        SpecialistId: '',
        AnniversaryDate: "",
        AnniversaryDatestr: "",
        compName: "",
        compAddress: "",
        compState: "",
        compPin: "",
        compPhone1: "",
        compPhone2: "",
        compMail: ""       
    });

    useEffect(() => {
        setRegData(pre => ({
            ...pre,
            Name: user.Name,        
            EncCompanyId: user.EncCompanyId,
            PartyCode: user.PartyCode,
            PartyId: user.PartyId,
            UserId: user.UserId,
            RegMob1: user.RegMob1,
            Email: user.Email, 
            Address: user.Address,
            UserPassword: user.UserPassword,
            UserType: user.UserType,
            Address2: user.Address2,
            City: user.City,
            State: user.State,
            StateName: user.StateName,
            Pin: user.Pin,  
            
            DOB: new Date(user.DOB).toLocaleDateString('en-TT'),
            DOBstr: new Date(user.DOB).toLocaleDateString('en-TT'),
            Age: user.Age,
            AgeMonth: user.AgeMonth,
            AgeDay: user.AgeDay,
            IsDOBCalculated: user.IsDOBCalculated,
            GenderDesc: user.GenderDesc,
            Gender: user.Gender,
            Country: user.Country,
            MemberId: user.MemberId
        }))
    }, [user])

    const handleRegForm = (e) => {
        const { name, value} = e.target;
        setRegData(pre => ({...pre, [name]: value}));
    } 

    const handleRegisterFormSubmit = async (e) => {
        e.preventDefault();
        console.log(regData);        
        if (isLoggedIn) {
            let status = await makeRegisterationRequest(regData);
            if (status) {
                let loginStatus = await refreshUserInfo(regData);
                if (loginStatus) {
                    alert('Successfully updated the Address');
                } else {
                    alert('We could not log you in, Please log in again manually.');
                }
            } 

        }
    }

    const makeRegisterationRequest = async (params) => {
        console.log(params);
        try {
            // loaderAction(true);
            const res = await axios.post(`${NEXT_APP_BASE_URL}/api/UserReg`, params);
            // loaderAction(false);
            console.log(res.data);
            if (res.data[0] === 'Y') { 
                return true;
            }      
        } catch (err) {
            console.log(err);
            return false;
        }
        return true;
    } 

    const compCode = 'FFCeIi27FQMTNGpatwiktw==';
    
    const refreshUserInfo = async (params) => {
        try {
            // loaderAction(true);
            const res = await axios.get(`${NEXT_APP_BASE_URL}/api/UserAuth?UN=${params.RegMob1}&UP=${params.UserPassword}&CID=${compCode}`);
            // loaderAction(false);
            if (res.data.UserId === 0) {
              return false;
            } else {
              dispatch(addUser(res.data));
              return true;
            }
        } catch (err) {
            alert(err)
        }
    }

    // Registeration ends ----------------------------------------------------------------------------

    return (
        <main className='mt-5 md:mt-12'>
            <div className="container mx-auto px-4 flex flex-col md:flex-row gap-4">
                <div className="w-full">
                    <div className="rounded-lg p-6 border border-gray-300 bg-gray-50 mb-4">
                        <p className="mb-4">Add <span className="text-red-500 font-bold text-xl mx-2">$20.86</span> more to cart and get free shipping!</p>
                        <LinearProgress className="rounded h-[0.5rem] cart-progress bg-pink-100" variant="determinate" value={50} />
                    </div>
                    <div className="rounded-lg border border-gray-300 p-6">
                        <h2 className="text-xl font-semibold border-b border-gray-300 pb-4">Billing Details</h2>
                        {/* <div className="mt-6">
                            <div className="flex gap-4 mb-4">
                                <div className="flex-1">
                                    <label className="text-black text-[0.9rem] mb-2 block"> First Name</label>
                                    <input name='Name' value={regData.Name} onChange={handleRegForm} className="px-5 py-[0.81rem] bg-slate-100 w-full rounded-md outline-none text-[1rem]" type="text" />
                                </div>
                                <div className="flex-1">
                                    <label className="text-black text-[0.9rem] mb-2 block"> Last Name</label>
                                    <input readOnly value={regData.Name} className="px-5 py-[0.81rem] bg-slate-100 w-full rounded-md outline-none text-[1rem]" type="text" />
                                </div>
                            </div>
                            <div className="flex gap-4 mb-4">
                                <div className="flex-1">
                                    <label className="text-black text-[0.9rem] mb-2 block"> Phone Number</label>
                                    <input readOnly value={regData.RegMob1} className="px-5 py-[0.81rem] bg-slate-100 w-full rounded-md outline-none text-[1rem]" type="text" />
                                </div>
                                <div className="flex-1">
                                    <label className="text-black text-[0.9rem] mb-2 block"> Email address <span className="text-red-500">*</span></label>
                                    <input name='Email' value={regData.Email} onChange={handleRegForm} className="px-5 py-[0.81rem] bg-slate-100 w-full rounded-md outline-none text-[1rem]" type="text" />
                                </div>
                            </div>
                            <div className="flex gap-4 mb-4">
                                <div className="flex-1">
                                    <label className="text-black text-[0.9rem] mb-2 block"> Street Address <span className="text-red-500">*</span></label>
                                    <input name='Address' value={regData.Address} onChange={handleRegForm} className="px-5 py-[0.81rem] bg-slate-100 w-full rounded-md outline-none text-[1rem]" type="text" />
                                </div>
                                <div className="flex-1">
                                    <label className="text-black text-[0.9rem] mb-2 block"> Town / City <span className="text-red-500">*</span></label>
                                    <input name='City' value={regData.City} onChange={handleRegForm} className="px-5 py-[0.81rem] bg-slate-100 w-full rounded-md outline-none text-[1rem]" type="text" />
                                </div>
                            </div>
                            <div className="flex gap-4 mb-4">
                                <div className="flex-1">
                                    <label className="text-black text-[0.9rem] mb-2 block"> State <span className="text-red-500">*</span></label>
                                    <input readOnly value={regData.StateName} className="px-5 py-[0.81rem] bg-slate-100 w-full rounded-md outline-none text-[1rem]" type="text" />
                                </div>
                                <div className="flex-1">
                                    <label className="text-black text-[0.9rem] mb-2 block"> ZIP Code <span className="text-red-500">*</span></label>
                                    <input name='Pin' value={regData.Pin} onChange={handleRegForm} className="px-5 py-[0.81rem] bg-slate-100 w-full rounded-md outline-none text-[1rem]" type="text" />
                                </div>
                                <div className="flex-1">
                                    <label className="text-black text-[0.9rem] mb-2 block"> Country</label>
                                    <input readOnly value={'India'} className="px-5 py-[0.81rem] bg-slate-100 w-full rounded-md outline-none text-[1rem]" type="text" />
                                </div>
                            </div>
                            <div>
                                <textarea className="px-5 py-[0.81rem] bg-slate-100 w-full rounded-md outline-none text-[1rem]" rows={4} type="text" placeholder="Order notes (optional)" ></textarea>
                            </div>
                            <div className="flex items-center mb-4 gap-3 pt-3 text-[0.95rem]">
                                <input type="checkbox" checked readOnly />
                                <p>Please add your address correctly.</p>
                            </div>
                            <div className="flex items-center mb-6 gap-3 text-[0.95rem]">
                                <input type="checkbox" checked readOnly />
                                <p>Make sure your PIN Code is correct.</p>
                            </div>
                            <Button onClick={handleRegisterFormSubmit} className="bg-pink-600 text-white rounded-lg py-3 px-8 hover:bg-pink-500 font-bold block ml-auto">Update Address</Button>
                        </div> */}
                        <div className="my-6 grid gap-4" style={{gridTemplateColumns: '10.2rem 1fr'}}>
                            <h4 className="font-medium flex gap-3 items-center"><FaMoneyBill1Wave className="text-xl text-[#44558c]" /> Billing To</h4>
                            <p className="text-blue-600 font-medium">{user.Name}</p>
                            <h4 className="font-medium flex gap-3 items-center"><MdPhoneInTalk className="text-xl text-[#44558c]" /> Phone Number</h4>
                            <p className="">{user.RegMob1}</p>
                            <h4 className="font-medium flex gap-3 items-center"><IoMdMail className="text-xl text-[#44558c]" /> Email</h4>
                            <p className="">1636rahul@gmail.com</p>
                            <h4 className="font-medium flex gap-3 items-center"><FaLocationPin className="text-xl text-[#44558c]" /> Address</h4>
                            <p className="">{user.Address}</p>
                            <h4 className="font-medium flex gap-3 items-center"><PiCityBold className="text-xl text-[#44558c]" /> City</h4>
                            <p className="">{user.City}</p>
                            <h4 className="font-medium flex gap-3 items-center"><FaMapMarkedAlt className="text-xl text-[#44558c]" /> State</h4>
                            <p className="">{user.StateName}</p>
                            <h4 className="font-medium flex gap-3 items-center"><FaDotCircle className="text-xl text-[#44558c]" /> Pin</h4>
                            <p className="">{user.Pin}</p>
                            <h4 className="font-medium flex gap-3 items-center"><GiIsland className="text-xl text-[#44558c]" /> Coutry</h4>
                            <p className="">INDIA</p>
                        </div>
                        <div>
                            <textarea className="px-5 py-[0.81rem] bg-slate-100 w-full rounded-md outline-none text-[1rem]" rows={4} type="text" placeholder="Order notes (optional)" ></textarea>
                        </div>
                        <div className="flex items-centermb-4 gap-3 pt-3 pb-4 md:py-3 text-[0.95rem]">
                            <input type="checkbox" checked readOnly />
                            <p>Make sure your PIN Code is correct.</p>
                        </div>
                        <Button onClick={() => dispatch(modalAction({name: 'PROFILE_MODAL', status: true}))} className="bg-pink-600 text-white rounded-lg py-3 px-8 hover:bg-pink-500 font-bold block ml-auto">Change Address</Button>
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
                        <div className="flex justify-between gap-12 text-end">
                            <h4 className="font-semibold">Deliver To</h4>
                            <p className="">{user.Name} &nbsp;<span className="text-sm font-semibold">({user.RegMob1})</span></p>
                        </div>
                        <div className="flex justify-between gap-12 text-end">
                            <h4 className="font-semibold">Address:</h4>
                            <p className="">{user.Address}</p>
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
