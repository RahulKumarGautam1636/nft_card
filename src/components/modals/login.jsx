'use client';
import { Button, Checkbox } from "@mui/material";
import Image from "next/image";
import { FaLock, FaUser } from "react-icons/fa";
import { FaPhoneVolume } from "react-icons/fa6";
import { useDispatch } from "react-redux";
import { FcGoogle } from "react-icons/fc";
import { useState } from "react";
import { MdSecurity } from "react-icons/md";
import { encrypt, handleNumberInputs } from "../utils";
import axios from "axios";
import { NEXT_APP_BASE_URL } from "@/constants";
import { addUser, loginAction, modalAction } from "@/lib/slices";
import { getOtp, login, register } from "@/api/api";

export const Login = () => {
    
    const dispatch = useDispatch();
    const [tab, setTab] = useState('login');
    const [loginData, setLoginData] = useState({phone: '', password: ''});
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
    });
    const [statesList, setStatesList] = useState([{Description: 'West Bengal', CodeId: 3}]); 
    const [otp, setOTP] = useState({isOpen: false, recievedValue: 'null', enteredValue: '', sent: false, verified: false, read_only: false});
    const [loginError, setLoginError] = useState({status: false, message: ''});
    const [allFields, setAllFields] = useState(false);

    const handleLoginForm = (e) => {
        const { name, value} = e.target;
        setLoginData(pre => ({...pre, [name]: value}));
    }

    const handleRegForm = (e) => {
        const { name, value} = e.target;
        setRegData(pre => ({...pre, [name]: value}));
    } 

    const handleRegisterFormSubmit = async (e) => {
        e.preventDefault();
        console.log(regData);        
        if (!isLoggedIn && otp.verified) {
            if (regData.RegMob1.length < 10) return alert('phone number is invalid, please try again.');
            if (regData.UserPassword.length < 4) return alert('Minimum length for password is 4.');
            let status = await makeRegisterationRequest(regData);
            if (status) {
                let loginStatus = await refreshUserInfo(regData);
                if (loginStatus) {
                    dispatch(loginAction(true));
                    dispatch(modalAction({name: 'LOGIN_MODAL', status: false}))
                } else {
                    alert('We could not log you in, Please log in again manually.');
                }
            } 
        }
    } 

    const handleNext = async () => {
        if (!isLoggedIn && !otp.sent) {
            if (regData.RegMob1.length < 10) return alert('phone number is invalid, please try again.');
            if (regData.UserPassword.length < 4) return alert('Minimum length for password is 4.');
            const userExist = await checkExistingUser();
            if (userExist) return;
            console.log('sending OTP');
            const receivedOtp = await getOtp();
            setOTP({...otp, isOpen: true, sent: true, recievedValue: receivedOtp});
        } else if (otp.sent) {
            if (otp.recievedValue !== otp.enteredValue) return alert('Wrong OTP.');
            console.log('otp matched');
            setOTP({...otp, isOpen: false, verified: true, read_only: true});
            // setAllFields(true);

            let status = await register(regData);
            if (status) {
                let loginStatus = await refreshUserInfo(regData);
                if (loginStatus) {
                    dispatch(loginAction(true));
                    dispatch(modalAction({name: 'LOGIN_MODAL', status: false}));                  
                } else {
                    alert('We could not log you in, Please log in again manually.');
                }
            } 
            console.log(regData);
        }
    }
    
    const refreshUserInfo = async (params) => {
        try {
            // loaderAction(true);
            const res = await axios.get(`${NEXT_APP_BASE_URL}/api/UserAuth?UN=${params.RegMob1}&UP=${params.UserPassword}&CID=${compCode}`);
            // loaderAction(false);
            if (res.data.UserId === 0) {
              return false;
            } else {
              localStorage.setItem("userLogin", JSON.stringify({ phone: params.RegMob1, password: params.UserPassword, compCode: compCode }));
              dispatch(addUser(res.data));
              dispatch(loginAction(true));
              return true;
            }
        } catch (err) {
            alert(err)
        }
    }

    const handleLoginFormSubmit = (e) => {
        e.preventDefault();
        if (loginData.phone.length < 10) return alert('Please enter a valid phone number.');
        if (loginData.phone.length < 4) return alert('Minimum length for password is 4.');
        console.log(loginData);        
        makeLoginRequest(loginData);
    }

    const makeLoginRequest = async (params) => {
        // loaderAction(true);
        const res = await login(params.phone, params.password, compCode);
        // const res = await axios.get(`${NEXT_APP_BASE_URL}/api/UserAuth?UN=${params.phone}&UP=${params.password}&CID=${compCode}`);
        // loaderAction(false);
        if (res.data.Remarks === 'INVALID') {
          setLoginError({status: true, message: 'The username or password is incorrect.'});
        } else if (res.data.Remarks === 'NOTINCOMPANY') {
            setLoginError({status: true, message: 'The username or password is incorrect.'});
        } else {           
            dispatch(addUser(res.data));
            dispatch(loginAction(true));
            dispatch(modalAction({name: 'LOGIN_MODAL', status: false}));
            localStorage.setItem("userLogin", JSON.stringify({ phone: params.phone, password: params.password, compCode: compCode }));
        }
    }   

    const checkExistingUser = async () => {
        if (regData.RegMob1.length > 9) {
        //   loaderAction(true);
          const res = await axios.get(`${NEXT_APP_BASE_URL}/api/UserReg?UN=${regData.RegMob1}`);
        //   loaderAction(false);
          if (res.data === 'Y') {
            setLoginError({status: true, message: 'This number is already registered.'});
            setLoginData(preValue => {
              return { ...preValue, phone: regData.RegMob1 }
            })
            setRegData(preValue => {
              return { ...preValue, RegMob1: '' }
            })
            setTab('login');
            return true;
          } else {
            setLoginError({status: false, message: ''});
            return false;
          }
        }
    }

    const isLoggedIn = false;
    const compCode = 'FFCeIi27FQMTNGpatwiktw==';


    return (
        <div className="login-modal min-h-screen md:p-4 md:py-10 bg-gray-200 flex justify-center h-full">
            <div className="container bg-white flex flex-col md:flex-row  md:rounded-2xl h-fit max-w-[80rem] overflow-hidden shadow-md shadow-gray-400">
                <div className="flex-1 px-2 py-8 md:px-8 md:py-12 bg-purple-500">
                    {/* <h2 className="text-3xl md:text-4xl text-center text-white font-semibold">WELCOME TO</h2> */}
                    <Image src={'/images/logo.jpg'} className="rounded-md mx-auto mt-0 md:mt-10" width={150} height={50} alt="Logo" />
                    <img src={'/online-shop.png'} className="mx-auto max-h-[24rem] md:max-h-[32rem]" alt="Logo" />
                </div>
                <div className="flex-1 p-7 md:p-12 flex flex-col items-center">
                    <div className="max-w-[35rem] w-full">
                        <h2 className="text-3xl md:text-4xl font-semibold mb-10 text-center">PLEASE LOGIN</h2>
                        {tab === 'login' ? 
                        <>
                            <div>
                                <label className="font-medium text-gray-700 text-lg mb-4 flex items-center gap-4"><FaPhoneVolume className="text-purple-700" /> Phone Number</label>
                                <input onChange={handleLoginForm} required name='phone' value={loginData.phone} autoComplete='true' maxLength={10} className="text-lg px-5 py-[0.9rem] bg-gray-100 w-full mb-7 border border-gray-300 rounded-lg outline-none" type="text" placeholder="Enter your name." />
                            </div>
                            <div>
                                <label className="font-medium text-gray-700 text-lg mb-4 flex items-center gap-4"><FaLock className="text-purple-700" /> Your Password</label>
                                <input onChange={handleLoginForm} required name='password' value={loginData.password} autoComplete='true' className="text-lg px-5 py-[0.9rem] bg-gray-100 w-full mb-12 border border-gray-300 rounded-lg outline-none" type="text" placeholder="Enter your password." />
                            </div>
                            <div className="flex items-center mb-6 gap-3">
                                <input type="checkbox" checked />
                                <p>Forgot Password ?</p>
                            </div>
                            {/* {loginError.status && <p className="text-danger">{loginError.message}</p>} */}
                            {loginError.status && <p className="mb-6 text-red-600">{loginError.message}</p>}
                            <div className="flex gap-4 mb-5">
                                <Button onClick={() => setTab('register')} className="bg-gray-300 text-gray-600 rounded-lg py-[0.85rem] hover:bg-indigo-200 flex-1 text-xl shadow-sm shadow-purple-400">REGISTER</Button>
                                <Button onClick={handleLoginFormSubmit} className="bg-pink-600 text-white rounded-lg py-[0.85rem] hover:bg-indigo-500 flex-1 text-xl shadow-sm shadow-purple-400">LOGIN</Button>
                            </div>
                        </>
                        :
                        <>
                            <div className="flex gap-4 mb-7">
                                <div>
                                    <label className="font-medium text-gray-700 text-lg mb-4 flex items-center gap-4"><FaUser className="text-purple-700" /> Your Name</label>
                                    <input name='Name' value={regData.Name} required onChange={handleRegForm} className="text-lg px-5 py-[0.9rem] bg-gray-100 w-full border border-gray-300 rounded-lg outline-none" type="text" placeholder="Enter your name." />
                                </div>
                                <div>
                                    <label className="font-medium text-gray-700 text-lg mb-4 flex items-center gap-4"><FaPhoneVolume className="text-purple-700" /> Phone Number</label>
                                    <input name='RegMob1' readOnly={isLoggedIn || otp.read_only ? true : false} value={regData.RegMob1} required onChange={(e) => handleNumberInputs(e, setRegData)} maxLength='10' className="text-lg px-5 py-[0.9rem] bg-gray-100 w-full border border-gray-300 rounded-lg outline-none" type="text" placeholder="Enter phone Number." />
                                </div>
                            </div>
                            {/* {!otp.sent && <Button onClick={handleNext} className="mb-32 bg-pink-600 text-white rounded-lg py-[0.85rem] hover:bg-indigo-500 block ml-auto min-w-[48.4%] text-xl shadow-sm shadow-purple-400">NEXT</Button>} */}

                            {/* {allFields && <> */}
                                <div>
                                    <label className="font-medium text-gray-700 text-lg mb-4 flex items-center gap-4"><FaLock className="text-purple-700" /> Your Password</label>
                                    <input name='UserPassword' value={regData.UserPassword} required onChange={handleRegForm} className="text-lg px-5 py-[0.9rem] bg-gray-100 w-full border mb-6 border-gray-300 rounded-lg outline-none" type="text" placeholder="Enter your password." />
                                </div>
                                {otp.isOpen && <div className="flex gap-2 border-8 border-gray-100 bg-gray-100 text-sm rounded mb-7 outline outline-1 outline-gray-300">
                                    <MdSecurity className="text-[3.25rem] my-auto text-purple-800" />
                                    <input name='otp' value={otp.enteredValue} required onChange={(e) => setOTP({...otp, enteredValue: e.target.value})} className="p-3 w-full border-0 outline-none text-lg" placeholder="Enter OTP" />
                                    <Button onClick={handleNext} className="bg-purple-800 text-white whitespace-nowrap rounded-lg py-1 px-10 hover:bg-purple-500">Submit OTP</Button>
                                </div>}
                                <div className="flex items-center mb-4 gap-3">
                                    <input type="checkbox" checked readOnly />
                                    <p>By Signing Up, I Agree with Terms & Conditions.</p>
                                </div>
                                <p className="text-sm">Already have an Account please <span className="text-blue-500">Login..</span></p>
                            {/* </>
                            } */}
                            {loginError.status && <p className="text-red-600 mt-6">{loginError.message}</p>}
                            <div className="flex gap-4 mb-5 mt-6">
                                <Button onClick={() => setTab('login')} className="bg-gray-300 text-gray-600 rounded-lg py-[0.85rem] hover:bg-indigo-200 flex-1 text-xl shadow-sm shadow-purple-400">LOGIN</Button>
                                <Button onClick={handleNext} className={`bg-pink-600 text-white rounded-lg py-[0.85rem] hover:bg-indigo-500 flex-1 text-xl shadow-sm shadow-purple-400 ${otp.sent && 'opacity-40 pointer-events-none'}`}>REGISTER</Button>
                            </div>
                        </>
                        }
                        <h2 className="text-lg font-medium mt-14 mb-10 text-center">Or continue with Social Account</h2>
                        <Button variant="outlined" className="rounded-lg py-[0.8rem] gap-3 w-full text-lg shadow-sm shadow-purple-400"><FcGoogle className="text-3xl" /> Sign In with Google</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}