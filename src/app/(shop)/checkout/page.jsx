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

    // let product_final = [
    //     {
    //         "_id": "66cf364a7f21a4cf0943b087",
    //         "name": "GESPO Black & Teal Blue Colorblocked Round Neck Half Sleeve Casual T-Shirts",
    //         "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. ",
    //         "images": [
    //             "GESPO_Black_&_T-1.jpg",
    //             "GESPO_Black_&_T-2.webp",
    //             "GESPO_Black_&_T-3.webp"
    //         ],
    //         "brand": "GESPO",
    //         "price": 399,
    //         "oldPrice": 499,
    //         "catName": "Fashion",
    //         "catId": "670f544ce86c762e3cad6c8b",
    //         "subCatId": "673ed528cab231596bf0667d",
    //         "subCat": "Men",
    //         "subCatName": "Men",
    //         "category": {
    //             "_id": "670f544ce86c762e3cad6c8b",
    //             "name": "Fashion",
    //             "slug": "Fashion",
    //             "images": [
    //                 "fhttps://res.cloudinary.com/dkgonwhvj/image/upload/v1731428187/1731428186288_fash.png"
    //             ],
    //             "color": "#ecffec",
    //             "createdAt": "2024-10-16T05:51:08.266Z",
    //             "updatedAt": "2024-11-12T16:16:28.229Z",
    //             "__v": 0,
    //             "id": "670f544ce86c762e3cad6c8b"
    //         },
    //         "countInStock": 150,
    //         "rating": 2,
    //         "isFeatured": false,
    //         "discount": 12,
    //         "productRam": [],
    //         "size": [
    //             "S",
    //             "M",
    //             "L",
    //             "XL"
    //         ],
    //         "productWeight": [],
    //         "location": [
    //             {
    //                 "value": "IN",
    //                 "label": "India",
    //                 "_id": "670a61073f4ee2e36a03e90b",
    //                 "id": "670a61073f4ee2e36a03e90b"
    //             },
    //             {
    //                 "value": "AU",
    //                 "label": "Australia",
    //                 "_id": "670a61073f4ee2e36a03e90c",
    //                 "id": "670a61073f4ee2e36a03e90c"
    //             },
    //             {
    //                 "value": "US",
    //                 "label": "United States",
    //                 "_id": "670a61073f4ee2e36a03e90d",
    //                 "id": "670a61073f4ee2e36a03e90d"
    //             },
    //             {
    //                 "value": "PK",
    //                 "label": "Pakistan",
    //                 "_id": "670a61073f4ee2e36a03e90e",
    //                 "id": "670a61073f4ee2e36a03e90e"
    //             },
    //             {
    //                 "value": "AF",
    //                 "label": "Afghanistan",
    //                 "_id": "670a61073f4ee2e36a03e90f",
    //                 "id": "670a61073f4ee2e36a03e90f"
    //             },
    //             {
    //                 "value": "All",
    //                 "label": "All",
    //                 "_id": "670b50b561347e5c638f8eba",
    //                 "id": "670b50b561347e5c638f8eba"
    //             }
    //         ],
    //         "dateCreated": "2024-08-28T14:38:02.893Z",
    //         "__v": 0,
    //         "id": "66cf364a7f21a4cf0943b087"
    //     },
    //     {
    //         "_id": "66d1df5c88319dc216a20017",
    //         "name": "VNEED Cotton Blend Straight Kurta with Pant | Women Kurta Pant Set | Girls Cotton Kurti and Pant Set | Women Kurta & Palazzo Pant Set (set of 1 ) (SIZE L)",
    //         "description": "This kurta pant set features a stylish straight-cut kurta paired with comfortable pants, offering a chic and effortless look suitable for both casual and semi-formal occasions.",
    //         "images": [
    //             "VNEED_Cotton_Bl-1.jpg",
    //             "VNEED_Cotton_Bl-2.jpg",
    //             "VNEED_Cotton_Bl-3.jpg",
    //             "VNEED_Cotton_Bl-4.jpg"
    //         ],
    //         "brand": "VNEED",
    //         "price": 50000,
    //         "oldPrice": 655,
    //         "catName": "Fashion",
    //         "catId": "670f544ce86c762e3cad6c8b",
    //         "subCatId": "673ed52fcab231596bf06684",
    //         "subCat": "Girls",
    //         "subCatName": "Women",
    //         "category": {
    //             "_id": "670f544ce86c762e3cad6c8b",
    //             "name": "Fashion",
    //             "slug": "Fashion",
    //             "images": [
    //                 "fhttps://res.cloudinary.com/dkgonwhvj/image/upload/v1731428187/1731428186288_fash.png"
    //             ],
    //             "color": "#ecffec",
    //             "createdAt": "2024-10-16T05:51:08.266Z",
    //             "updatedAt": "2024-11-12T16:16:28.229Z",
    //             "__v": 0,
    //             "id": "670f544ce86c762e3cad6c8b"
    //         },
    //         "countInStock": 10,
    //         "rating": 5,
    //         "isFeatured": false,
    //         "discount": 15,
    //         "productRam": [],
    //         "size": [
    //             "S",
    //             "M",
    //             "L",
    //             "m",
    //             "XXL",
    //             "XL"
    //         ],
    //         "productWeight": [],
    //         "location": [
    //             {
    //                 "value": "All",
    //                 "label": "All",
    //                 "_id": "670a61243f4ee2e36a03e971",
    //                 "id": "670a61243f4ee2e36a03e971"
    //             },
    //             {
    //                 "value": "IN",
    //                 "label": "India",
    //                 "_id": "670a61243f4ee2e36a03e972",
    //                 "id": "670a61243f4ee2e36a03e972"
    //             },
    //             {
    //                 "value": "PK",
    //                 "label": "Pakistan",
    //                 "_id": "670a61243f4ee2e36a03e973",
    //                 "id": "670a61243f4ee2e36a03e973"
    //             },
    //             {
    //                 "value": "AF",
    //                 "label": "Afghanistan",
    //                 "_id": "670a61243f4ee2e36a03e974",
    //                 "id": "670a61243f4ee2e36a03e974"
    //             },
    //             {
    //                 "value": "US",
    //                 "label": "United States",
    //                 "_id": "670a61243f4ee2e36a03e975",
    //                 "id": "670a61243f4ee2e36a03e975"
    //             },
    //             {
    //                 "value": "LK",
    //                 "label": "Sri Lanka",
    //                 "_id": "670a61243f4ee2e36a03e976",
    //                 "id": "670a61243f4ee2e36a03e976"
    //             }
    //         ],
    //         "dateCreated": "2024-08-30T15:03:56.294Z",
    //         "__v": 0,
    //         "updatedAt": "2024-09-09T03:54:32.426Z",
    //         "id": "66d1df5c88319dc216a20017"
    //     },
    //     {
    //         "_id": "66d44646aa5c959c5b9fa1c6",
    //         "name": "Altecia The Perfect Pair Women Cotton Co Ord Set-Tie & Dye Tracksuit with Insert Pockets-Women Tie & Dye 2-Piece Co-Ord Set-1PAIR (Size-XL)",
    //         "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    //         "images": [
    //             "Altecia_The_Per-1.jpg",
    //             "Altecia_The_Per-2.jpg",
    //             "Altecia_The_Per-3.jpg",
    //             "Altecia_The_Per-4.jpg"
    //         ],
    //         "brand": "Altecia",
    //         "price": 650,
    //         "oldPrice": 780111,
    //         "catName": "Fashion",
    //         "catId": "670f544ce86c762e3cad6c8b",
    //         "subCatId": "673ed52fcab231596bf06684",
    //         "subCat": "Girls",
    //         "subCatName": "Women",
    //         "category": {
    //             "_id": "670f544ce86c762e3cad6c8b",
    //             "name": "Fashion",
    //             "slug": "Fashion",
    //             "images": [
    //                 "fhttps://res.cloudinary.com/dkgonwhvj/image/upload/v1731428187/1731428186288_fash.png"
    //             ],
    //             "color": "#ecffec",
    //             "createdAt": "2024-10-16T05:51:08.266Z",
    //             "updatedAt": "2024-11-12T16:16:28.229Z",
    //             "__v": 0,
    //             "id": "670f544ce86c762e3cad6c8b"
    //         },
    //         "countInStock": 150,
    //         "rating": 4,
    //         "isFeatured": false,
    //         "discount": 15,
    //         "productRam": [],
    //         "size": [
    //             "S",
    //             "M",
    //             "L",
    //             "XL"
    //         ],
    //         "productWeight": [],
    //         "location": [
    //             {
    //                 "value": "All",
    //                 "label": "All",
    //                 "_id": "670a61413f4ee2e36a03e9a9",
    //                 "id": "670a61413f4ee2e36a03e9a9"
    //             },
    //             {
    //                 "value": "AF",
    //                 "label": "Afghanistan",
    //                 "_id": "670a61413f4ee2e36a03e9aa",
    //                 "id": "670a61413f4ee2e36a03e9aa"
    //             },
    //             {
    //                 "value": "AL",
    //                 "label": "Albania",
    //                 "_id": "670a61413f4ee2e36a03e9ab",
    //                 "id": "670a61413f4ee2e36a03e9ab"
    //             },
    //             {
    //                 "value": "IN",
    //                 "label": "India",
    //                 "_id": "670a61413f4ee2e36a03e9ac",
    //                 "id": "670a61413f4ee2e36a03e9ac"
    //             },
    //             {
    //                 "value": "PK",
    //                 "label": "Pakistan",
    //                 "_id": "670a61413f4ee2e36a03e9ad",
    //                 "id": "670a61413f4ee2e36a03e9ad"
    //             },
    //             {
    //                 "value": "ZA",
    //                 "label": "South Africa",
    //                 "_id": "670a61413f4ee2e36a03e9ae",
    //                 "id": "670a61413f4ee2e36a03e9ae"
    //             },
    //             {
    //                 "value": "BD",
    //                 "label": "Bangladesh",
    //                 "_id": "670a61413f4ee2e36a03e9af",
    //                 "id": "670a61413f4ee2e36a03e9af"
    //             }
    //         ],
    //         "dateCreated": "2024-09-01T10:47:34.389Z",
    //         "__v": 0,
    //         "id": "66d44646aa5c959c5b9fa1c6"
    //     },
    //     {
    //         "_id": "66d491377d46e49d1b58de97",
    //         "name": "Kondom",
    //         "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    //         "images": [
    //             "Kondom-1.jpg"
    //         ],
    //         "brand": "CLOSWIF",
    //         "price": 450,
    //         "oldPrice": 550,
    //         "catName": "Fashion",
    //         "catId": "670f544ce86c762e3cad6c8b",
    //         "subCatId": "673ed528cab231596bf0667d",
    //         "subCat": "Men",
    //         "subCatName": "Men",
    //         "category": {
    //             "_id": "670f544ce86c762e3cad6c8b",
    //             "name": "Fashion",
    //             "slug": "Fashion",
    //             "images": [
    //                 "fhttps://res.cloudinary.com/dkgonwhvj/image/upload/v1731428187/1731428186288_fash.png"
    //             ],
    //             "color": "#ecffec",
    //             "createdAt": "2024-10-16T05:51:08.266Z",
    //             "updatedAt": "2024-11-12T16:16:28.229Z",
    //             "__v": 0,
    //             "id": "670f544ce86c762e3cad6c8b"
    //         },
    //         "countInStock": 450,
    //         "rating": 4,
    //         "isFeatured": false,
    //         "discount": 12,
    //         "productRam": [],
    //         "size": [
    //             "S",
    //             "M",
    //             "L",
    //             "XL"
    //         ],
    //         "productWeight": [],
    //         "location": [
    //             {
    //                 "value": "All",
    //                 "label": "All",
    //                 "_id": "670a61593f4ee2e36a03e9d9",
    //                 "id": "670a61593f4ee2e36a03e9d9"
    //             },
    //             {
    //                 "value": "BD",
    //                 "label": "Bangladesh",
    //                 "_id": "670a61593f4ee2e36a03e9da",
    //                 "id": "670a61593f4ee2e36a03e9da"
    //             },
    //             {
    //                 "value": "IN",
    //                 "label": "India",
    //                 "_id": "670a61593f4ee2e36a03e9db",
    //                 "id": "670a61593f4ee2e36a03e9db"
    //             },
    //             {
    //                 "value": "PK",
    //                 "label": "Pakistan",
    //                 "_id": "670a61593f4ee2e36a03e9dc",
    //                 "id": "670a61593f4ee2e36a03e9dc"
    //             },
    //             {
    //                 "value": "US",
    //                 "label": "United States",
    //                 "_id": "670a61593f4ee2e36a03e9dd",
    //                 "id": "670a61593f4ee2e36a03e9dd"
    //             },
    //             {
    //                 "value": "AU",
    //                 "label": "Australia",
    //                 "_id": "670a61593f4ee2e36a03e9de",
    //                 "id": "670a61593f4ee2e36a03e9de"
    //             }
    //         ],
    //         "dateCreated": "2024-09-01T16:07:19.145Z",
    //         "__v": 0,
    //         "id": "66d491377d46e49d1b58de97"
    //     },
    //     {
    //         "_id": "66d492927d46e49d1b58df07",
    //         "name": "Siril Poly Silk White & Beige Color Saree With Blouse Piece | sarees for Women| saree | sarees",
    //         "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    //         "images": [
    //             "Siril_Poly_Silk-1.webp",
    //             "Siril_Poly_Silk-2.webp",
    //             "Siril_Poly_Silk-3.webp",
    //             "Siril_Poly_Silk-4.webp",
    //             "Siril_Poly_Silk-5.webp"
    //         ],
    //         "brand": "Tazo",
    //         "price": 450,
    //         "oldPrice": 1000,
    //         "catName": "Fashion",
    //         "catId": "670f544ce86c762e3cad6c8b",
    //         "subCatId": "673ed52fcab231596bf06684",
    //         "subCat": "Men",
    //         "subCatName": "Women",
    //         "category": {
    //             "_id": "670f544ce86c762e3cad6c8b",
    //             "name": "Fashion",
    //             "slug": "Fashion",
    //             "images": [
    //                 "fhttps://res.cloudinary.com/dkgonwhvj/image/upload/v1731428187/1731428186288_fash.png"
    //             ],
    //             "color": "#ecffec",
    //             "createdAt": "2024-10-16T05:51:08.266Z",
    //             "updatedAt": "2024-11-12T16:16:28.229Z",
    //             "__v": 0,
    //             "id": "670f544ce86c762e3cad6c8b"
    //         },
    //         "countInStock": 1500,
    //         "rating": 4,
    //         "isFeatured": false,
    //         "discount": 12,
    //         "productRam": [],
    //         "size": [
    //             "M",
    //             "L"
    //         ],
    //         "productWeight": [],
    //         "location": [
    //             {
    //                 "value": "All",
    //                 "label": "All",
    //                 "_id": "670a61623f4ee2e36a03ea0c",
    //                 "id": "670a61623f4ee2e36a03ea0c"
    //             },
    //             {
    //                 "value": "AF",
    //                 "label": "Afghanistan",
    //                 "_id": "670cd4011f039258ce560546",
    //                 "id": "670cd4011f039258ce560546"
    //             },
    //             {
    //                 "value": "IN",
    //                 "label": "India",
    //                 "_id": "670cd4011f039258ce560547",
    //                 "id": "670cd4011f039258ce560547"
    //             },
    //             {
    //                 "value": "BD",
    //                 "label": "Bangladesh",
    //                 "_id": "670cd4011f039258ce560548",
    //                 "id": "670cd4011f039258ce560548"
    //             }
    //         ],
    //         "dateCreated": "2024-09-01T16:13:06.752Z",
    //         "__v": 0,
    //         "id": "66d492927d46e49d1b58df07"
    //     },
    //     {
    //         "_id": "66d595bf247824aacf08cb8a",
    //         "name": "Altecia Tie and Dye Jogger with Baggy Trouser with t-shirt for Women low price up to off new arrival most loved collection trending tops fancy top printed top printed trouser casual wear party wear daily wear night wear top bottom set-1Pair(size -XL)",
    //         "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. ",
    //         "images": [
    //             "Altecia_Tie_and-1.webp",
    //             "Altecia_Tie_and-2.jpg",
    //             "Altecia_Tie_and-3.webp",
    //             "Altecia_Tie_and-4.jpg"
    //         ],
    //         "brand": "Altecia",
    //         "price": 1500,
    //         "oldPrice": 1800,
    //         "catName": "Fashion",
    //         "catId": "670f544ce86c762e3cad6c8b",
    //         "subCatId": "673ed52fcab231596bf06684",
    //         "subCat": "Women",
    //         "subCatName": "Women",
    //         "category": {
    //             "_id": "670f544ce86c762e3cad6c8b",
    //             "name": "Fashion",
    //             "slug": "Fashion",
    //             "images": [
    //                 "fhttps://res.cloudinary.com/dkgonwhvj/image/upload/v1731428187/1731428186288_fash.png"
    //             ],
    //             "color": "#ecffec",
    //             "createdAt": "2024-10-16T05:51:08.266Z",
    //             "updatedAt": "2024-11-12T16:16:28.229Z",
    //             "__v": 0,
    //             "id": "670f544ce86c762e3cad6c8b"
    //         },
    //         "countInStock": 600,
    //         "rating": 4,
    //         "isFeatured": false,
    //         "discount": 12,
    //         "productRam": [],
    //         "size": [
    //             "S",
    //             "M",
    //             "L",
    //             "XXL"
    //         ],
    //         "productWeight": [
    //             "1KG",
    //             "4KG"
    //         ],
    //         "location": [
    //             {
    //                 "value": "All",
    //                 "label": "All",
    //                 "_id": "670a61683f4ee2e36a03ea35",
    //                 "id": "670a61683f4ee2e36a03ea35"
    //             },
    //             {
    //                 "value": "AF",
    //                 "label": "Afghanistan",
    //                 "_id": "670cd3bd1f039258ce560496",
    //                 "id": "670cd3bd1f039258ce560496"
    //             },
    //             {
    //                 "value": "IN",
    //                 "label": "India",
    //                 "_id": "670cd3bd1f039258ce560497",
    //                 "id": "670cd3bd1f039258ce560497"
    //             }
    //         ],
    //         "dateCreated": "2024-09-02T10:38:55.907Z",
    //         "__v": 0,
    //         "id": "66d595bf247824aacf08cb8a"
    //     },
    //     {
    //         "_id": "66df0156d9c220020e25a2a6",
    //         "name": "Siril Georgette Pink Color Saree with Blouse piece",
    //         "description": "The saree is an outfit which women can carry off with great panache. With the right material and drape, it can accentuate the beauty of women of all ages and forms.\n\n",
    //         "images": [
    //             "Siril_Georgette-1.webp",
    //             "Siril_Georgette-2.webp",
    //             "Siril_Georgette-3.webp",
    //             "Siril_Georgette-4.webp"
    //         ],
    //         "brand": "SIRIL",
    //         "price": 500,
    //         "oldPrice": 650,
    //         "catName": "Fashion",
    //         "catId": "670f544ce86c762e3cad6c8b",
    //         "subCatId": "673ed52fcab231596bf06684",
    //         "subCat": "Women",
    //         "subCatName": "Women",
    //         "category": {
    //             "_id": "670f544ce86c762e3cad6c8b",
    //             "name": "Fashion",
    //             "slug": "Fashion",
    //             "images": [
    //                 "fhttps://res.cloudinary.com/dkgonwhvj/image/upload/v1731428187/1731428186288_fash.png"
    //             ],
    //             "color": "#ecffec",
    //             "createdAt": "2024-10-16T05:51:08.266Z",
    //             "updatedAt": "2024-11-12T16:16:28.229Z",
    //             "__v": 0,
    //             "id": "670f544ce86c762e3cad6c8b"
    //         },
    //         "countInStock": 169,
    //         "rating": 5,
    //         "isFeatured": true,
    //         "discount": 12,
    //         "productRam": [],
    //         "size": [],
    //         "productWeight": [],
    //         "location": [
    //             {
    //                 "value": "All",
    //                 "label": "All",
    //                 "_id": "670a616d3f4ee2e36a03ea5e",
    //                 "id": "670a616d3f4ee2e36a03ea5e"
    //             },
    //             {
    //                 "value": "IN",
    //                 "label": "India",
    //                 "_id": "670aa0831a0c5f1ae830f794",
    //                 "id": "670aa0831a0c5f1ae830f794"
    //             },
    //             {
    //                 "value": "PK",
    //                 "label": "Pakistan",
    //                 "_id": "670aa0831a0c5f1ae830f795",
    //                 "id": "670aa0831a0c5f1ae830f795"
    //             },
    //             {
    //                 "value": "BD",
    //                 "label": "Bangladesh",
    //                 "_id": "670aa0831a0c5f1ae830f796",
    //                 "id": "670aa0831a0c5f1ae830f796"
    //             }
    //         ],
    //         "dateCreated": "2024-09-09T14:08:22.354Z",
    //         "__v": 0,
    //         "id": "66df0156d9c220020e25a2a6"
    //     },
    //     {
    //         "_id": "66e1327804413e6a409f9689",
    //         "name": "Aashirvaad Superior Whole Wheat MP Atta 1000kg",
    //         "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    //         "images": [
    //             "Aashirvaad_Supe-1.webp",
    //             "Aashirvaad_Supe-2.webp"
    //         ],
    //         "brand": "AASHIRVAAD",
    //         "price": 2,
    //         "oldPrice": 270,
    //         "catName": "Groceries",
    //         "catId": "670f54a3e86c762e3cad6cb3",
    //         "subCatId": "670f5534e86c762e3cad6d09",
    //         "subCat": "Cooking Essentials",
    //         "subCatName": "Cooking Essentials",
    //         "category": {
    //             "_id": "670f54a3e86c762e3cad6cb3",
    //             "name": "Groceries",
    //             "slug": "Groceries",
    //             "images": [
    //                 "fhttps://res.cloudinary.com/dkgonwhvj/image/upload/v1731428092/1731428090930_gro.png"
    //             ],
    //             "color": "#ffe8f8",
    //             "createdAt": "2024-10-16T05:52:35.762Z",
    //             "updatedAt": "2024-11-12T16:14:54.039Z",
    //             "__v": 0,
    //             "id": "670f54a3e86c762e3cad6cb3"
    //         },
    //         "countInStock": 169,
    //         "rating": 5,
    //         "isFeatured": true,
    //         "discount": 10,
    //         "productRam": [],
    //         "size": [],
    //         "productWeight": [
    //             "4KG"
    //         ],
    //         "location": [
    //             {
    //                 "value": "All",
    //                 "label": "All",
    //                 "_id": "670a617c3f4ee2e36a03eab0",
    //                 "id": "670a617c3f4ee2e36a03eab0"
    //             },
    //             {
    //                 "value": "IN",
    //                 "label": "India",
    //                 "_id": "670a7ed4fa94c7ca12096598",
    //                 "id": "670a7ed4fa94c7ca12096598"
    //             }
    //         ],
    //         "dateCreated": "2024-09-11T06:02:32.029Z",
    //         "__v": 0,
    //         "id": "66e1327804413e6a409f9689"
    //     },
    //     {
    //         "_id": "66e132f304413e6a409f96bd",
    //         "name": "Good Life MP Wheat Chakkki Atta 1 kg",
    //         "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    //         "images": [
    //             "Good_Life_MP_Wh-1.webp",
    //             "Good_Life_MP_Wh-2.webp"
    //         ],
    //         "brand": "Good Life",
    //         "price": 250,
    //         "oldPrice": 330,
    //         "catName": "Groceries",
    //         "catId": "670f54a3e86c762e3cad6cb3",
    //         "subCatId": "670f5534e86c762e3cad6d09",
    //         "subCat": "Cooking Essentials",
    //         "subCatName": "Cooking Essentials",
    //         "category": {
    //             "_id": "670f54a3e86c762e3cad6cb3",
    //             "name": "Groceries",
    //             "slug": "Groceries",
    //             "images": [
    //                 "fhttps://res.cloudinary.com/dkgonwhvj/image/upload/v1731428092/1731428090930_gro.png"
    //             ],
    //             "color": "#ffe8f8",
    //             "createdAt": "2024-10-16T05:52:35.762Z",
    //             "updatedAt": "2024-11-12T16:14:54.039Z",
    //             "__v": 0,
    //             "id": "670f54a3e86c762e3cad6cb3"
    //         },
    //         "countInStock": 10,
    //         "rating": 4,
    //         "isFeatured": false,
    //         "discount": 10,
    //         "productRam": [],
    //         "size": [],
    //         "productWeight": [
    //             "500G",
    //             "1KG"
    //         ],
    //         "location": [
    //             {
    //                 "value": "All",
    //                 "label": "All",
    //                 "_id": "670a61813f4ee2e36a03ead9",
    //                 "id": "670a61813f4ee2e36a03ead9"
    //             }
    //         ],
    //         "dateCreated": "2024-09-11T06:04:35.741Z",
    //         "__v": 0,
    //         "id": "66e132f304413e6a409f96bd"
    //     },
    //     {
    //         "_id": "66e139b767c833713b24751e",
    //         "name": "HP 15s-fr5012TU Standard Laptop (Intel Core i3-1215U/8 GB/512 GB SSD/Intel UHD Graphics/Windows 11 Home/MSO/FHD), 39.6cm (15.6 inch)",
    //         "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    //         "images": [
    //             "HP_15s-fr5012TU-1.webp",
    //             "HP_15s-fr5012TU-2.webp"
    //         ],
    //         "brand": "HP",
    //         "price": 35000,
    //         "oldPrice": 42000,
    //         "catName": "Electronics",
    //         "catId": "670f5463e86c762e3cad6c95",
    //         "subCatId": "673ed55d2ec02680644f2793",
    //         "subCat": "Computers and Accessories",
    //         "subCatName": "Laptops",
    //         "category": {
    //             "_id": "670f5463e86c762e3cad6c95",
    //             "name": "Electronics",
    //             "slug": "Electronics",
    //             "images": [
    //                 "fhttps://res.cloudinary.com/dkgonwhvj/image/upload/v1731428179/1731428178306_ele.png"
    //             ],
    //             "color": "#feefea",
    //             "createdAt": "2024-10-16T05:51:31.207Z",
    //             "updatedAt": "2024-11-12T16:16:20.193Z",
    //             "__v": 0,
    //             "id": "670f5463e86c762e3cad6c95"
    //         },
    //         "countInStock": 1500,
    //         "rating": 5,
    //         "isFeatured": true,
    //         "discount": 15,
    //         "productRam": [
    //             "8GB"
    //         ],
    //         "size": [],
    //         "productWeight": [],
    //         "location": [
    //             {
    //                 "value": "All",
    //                 "label": "All",
    //                 "_id": "670a61d63f4ee2e36a03eca7",
    //                 "id": "670a61d63f4ee2e36a03eca7"
    //             },
    //             {
    //                 "value": "IN",
    //                 "label": "India",
    //                 "_id": "670aa09a1a0c5f1ae830f80c",
    //                 "id": "670aa09a1a0c5f1ae830f80c"
    //             },
    //             {
    //                 "value": "PK",
    //                 "label": "Pakistan",
    //                 "_id": "670aa09a1a0c5f1ae830f80d",
    //                 "id": "670aa09a1a0c5f1ae830f80d"
    //             },
    //             {
    //                 "value": "BD",
    //                 "label": "Bangladesh",
    //                 "_id": "670aa09a1a0c5f1ae830f80e",
    //                 "id": "670aa09a1a0c5f1ae830f80e"
    //             }
    //         ],
    //         "dateCreated": "2024-09-11T06:33:27.831Z",
    //         "__v": 0,
    //         "id": "66e139b767c833713b24751e"
    //     },
    //     {
    //         "_id": "66e13a3b67c833713b24759f",
    //         "name": "Fortune Sunlite Refined Sunflower Oil 1 L",
    //         "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    //         "images": [
    //             "Fortune_Sunlite-1.webp",
    //             "Fortune_Sunlite-2.jpg"
    //         ],
    //         "brand": "Fortune",
    //         "price": 150,
    //         "oldPrice": 170,
    //         "catName": "Groceries",
    //         "catId": "670f54a3e86c762e3cad6cb3",
    //         "subCatId": "670f5534e86c762e3cad6d09",
    //         "subCat": "Cooking Essentials",
    //         "subCatName": "Cooking Essentials",
    //         "category": {
    //             "_id": "670f54a3e86c762e3cad6cb3",
    //             "name": "Groceries",
    //             "slug": "Groceries",
    //             "images": [
    //                 "fhttps://res.cloudinary.com/dkgonwhvj/image/upload/v1731428092/1731428090930_gro.png"
    //             ],
    //             "color": "#ffe8f8",
    //             "createdAt": "2024-10-16T05:52:35.762Z",
    //             "updatedAt": "2024-11-12T16:14:54.039Z",
    //             "__v": 0,
    //             "id": "670f54a3e86c762e3cad6cb3"
    //         },
    //         "countInStock": 400,
    //         "rating": 4,
    //         "isFeatured": false,
    //         "discount": 8,
    //         "productRam": [],
    //         "size": [],
    //         "productWeight": [
    //             "500G",
    //             "1KG"
    //         ],
    //         "location": [
    //             {
    //                 "value": "All",
    //                 "label": "All",
    //                 "_id": "670a61dc3f4ee2e36a03ecd0",
    //                 "id": "670a61dc3f4ee2e36a03ecd0"
    //             },
    //             {
    //                 "value": "IN",
    //                 "label": "India",
    //                 "_id": "670a7f59fa94c7ca12096796",
    //                 "id": "670a7f59fa94c7ca12096796"
    //             }
    //         ],
    //         "dateCreated": "2024-09-11T06:35:39.653Z",
    //         "__v": 0,
    //         "id": "66e13a3b67c833713b24759f"
    //     },
    //     {
    //         "_id": "66e13a9e67c833713b2475d9",
    //         "name": "Good Life Kachi Ghani Mustard Oil 1 L (Pouch)",
    //         "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    //         "images": [
    //             "Good_Life_Kachi-1.webp",
    //             "Good_Life_Kachi-2.webp"
    //         ],
    //         "brand": "Good Life",
    //         "price": 190,
    //         "oldPrice": 210,
    //         "catName": "Groceries",
    //         "catId": "670f54a3e86c762e3cad6cb3",
    //         "subCatId": "670f5534e86c762e3cad6d09",
    //         "subCat": "Cooking Essentials",
    //         "subCatName": "Cooking Essentials",
    //         "category": {
    //             "_id": "670f54a3e86c762e3cad6cb3",
    //             "name": "Groceries",
    //             "slug": "Groceries",
    //             "images": [
    //                 "fhttps://res.cloudinary.com/dkgonwhvj/image/upload/v1731428092/1731428090930_gro.png"
    //             ],
    //             "color": "#ffe8f8",
    //             "createdAt": "2024-10-16T05:52:35.762Z",
    //             "updatedAt": "2024-11-12T16:14:54.039Z",
    //             "__v": 0,
    //             "id": "670f54a3e86c762e3cad6cb3"
    //         },
    //         "countInStock": 4500,
    //         "rating": 5,
    //         "isFeatured": false,
    //         "discount": 9,
    //         "productRam": [],
    //         "size": [],
    //         "productWeight": [
    //             "500G",
    //             "1KG"
    //         ],
    //         "location": [
    //             {
    //                 "value": "All",
    //                 "label": "All",
    //                 "_id": "670a61f43f4ee2e36a03ed0e",
    //                 "id": "670a61f43f4ee2e36a03ed0e"
    //             },
    //             {
    //                 "value": "IN",
    //                 "label": "India",
    //                 "_id": "670a7e79fa94c7ca12096432",
    //                 "id": "670a7e79fa94c7ca12096432"
    //             }
    //         ],
    //         "dateCreated": "2024-09-11T06:37:18.172Z",
    //         "__v": 0,
    //         "id": "66e13a9e67c833713b2475d9"
    //     },
    //     {
    //         "_id": "66e13bcc67c833713b24763a",
    //         "name": "ZAALIQA Girls Black Handbag",
    //         "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    //         "images": [
    //             "ZAALIQA_Girls_B-1.jpg",
    //             "ZAALIQA_Girls_B-2.webp",
    //             "ZAALIQA_Girls_B-3.jpg"
    //         ],
    //         "brand": "ZAALIQA",
    //         "price": 620,
    //         "oldPrice": 750,
    //         "catName": "Bags",
    //         "catId": "670f5477e86c762e3cad6c9f",
    //         "subCatId": "66c0dfa43490222862ae78c1",
    //         "subCat": "Women",
    //         "subCatName": "Women",
    //         "category": {
    //             "_id": "670f5477e86c762e3cad6c9f",
    //             "name": "Bags",
    //             "slug": "Bags",
    //             "images": [
    //                 "fhttps://res.cloudinary.com/dkgonwhvj/image/upload/v1731428171/1731428170107_bag.png"
    //             ],
    //             "color": "#fdf0ff",
    //             "createdAt": "2024-10-16T05:51:51.640Z",
    //             "updatedAt": "2024-11-12T16:16:12.534Z",
    //             "__v": 0,
    //             "id": "670f5477e86c762e3cad6c9f"
    //         },
    //         "countInStock": 1500,
    //         "rating": 5,
    //         "isFeatured": true,
    //         "discount": 11,
    //         "productRam": [],
    //         "size": [],
    //         "productWeight": [],
    //         "location": [
    //             {
    //                 "value": "All",
    //                 "label": "All",
    //                 "_id": "670a61fb3f4ee2e36a03ed3f",
    //                 "id": "670a61fb3f4ee2e36a03ed3f"
    //             },
    //             {
    //                 "value": "IN",
    //                 "label": "India",
    //                 "_id": "670cd6801f039258ce561017",
    //                 "id": "670cd6801f039258ce561017"
    //             }
    //         ],
    //         "dateCreated": "2024-09-11T06:42:20.690Z",
    //         "__v": 0,
    //         "id": "66e13bcc67c833713b24763a"
    //     },
    //     {
    //         "_id": "66e13c6867c833713b24768b",
    //         "name": "KSC \"KHATUSHYAM COLLECTION\" Grey Pu For Women Handheld Bag",
    //         "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    //         "images": [
    //             "KSC_KHATUSHYAM2-1.webp",
    //             "KSC_KHATUSHYAM2-2.webp"
    //         ],
    //         "brand": "KSC",
    //         "price": 460,
    //         "oldPrice": 490,
    //         "catName": "Bags",
    //         "catId": "670f5477e86c762e3cad6c9f",
    //         "subCatId": "66c0dfb13490222862ae78cd",
    //         "subCat": "Girls",
    //         "subCatName": "Girls",
    //         "category": {
    //             "_id": "670f5477e86c762e3cad6c9f",
    //             "name": "Bags",
    //             "slug": "Bags",
    //             "images": [
    //                 "fhttps://res.cloudinary.com/dkgonwhvj/image/upload/v1731428171/1731428170107_bag.png"
    //             ],
    //             "color": "#fdf0ff",
    //             "createdAt": "2024-10-16T05:51:51.640Z",
    //             "updatedAt": "2024-11-12T16:16:12.534Z",
    //             "__v": 0,
    //             "id": "670f5477e86c762e3cad6c9f"
    //         },
    //         "countInStock": 1500,
    //         "rating": 5,
    //         "isFeatured": true,
    //         "discount": 10,
    //         "productRam": [],
    //         "size": [],
    //         "productWeight": [],
    //         "location": [
    //             {
    //                 "value": "All",
    //                 "label": "All",
    //                 "_id": "670a62033f4ee2e36a03ed70",
    //                 "id": "670a62033f4ee2e36a03ed70"
    //             },
    //             {
    //                 "value": "IN",
    //                 "label": "India",
    //                 "_id": "670b45885efc6a71f2adc4fe",
    //                 "id": "670b45885efc6a71f2adc4fe"
    //             }
    //         ],
    //         "dateCreated": "2024-09-11T06:44:56.302Z",
    //         "__v": 0,
    //         "id": "66e13c6867c833713b24768b"
    //     },
    //     {
    //         "_id": "66e13d6267c833713b24772b",
    //         "name": "KSC \"KHATUSHYAM COLLECTION\" Red Pu For Women Handheld Bag",
    //         "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    //         "images": [
    //             "KSC_KHATUSHYAM-1.jpg",
    //             "KSC_KHATUSHYAM-2.webp"
    //         ],
    //         "brand": "KSC ",
    //         "price": 750,
    //         "oldPrice": 520,
    //         "catName": "Bags",
    //         "catId": "670f5477e86c762e3cad6c9f",
    //         "subCatId": "66c0dfa43490222862ae78c1",
    //         "subCat": "Women",
    //         "subCatName": "Women",
    //         "category": {
    //             "_id": "670f5477e86c762e3cad6c9f",
    //             "name": "Bags",
    //             "slug": "Bags",
    //             "images": [
    //                 "fhttps://res.cloudinary.com/dkgonwhvj/image/upload/v1731428171/1731428170107_bag.png"
    //             ],
    //             "color": "#fdf0ff",
    //             "createdAt": "2024-10-16T05:51:51.640Z",
    //             "updatedAt": "2024-11-12T16:16:12.534Z",
    //             "__v": 0,
    //             "id": "670f5477e86c762e3cad6c9f"
    //         },
    //         "countInStock": 1500,
    //         "rating": 5,
    //         "isFeatured": false,
    //         "discount": 9,
    //         "productRam": [],
    //         "size": [],
    //         "productWeight": [],
    //         "location": [
    //             {
    //                 "value": "All",
    //                 "label": "All",
    //                 "_id": "670a62133f4ee2e36a03edd2",
    //                 "id": "670a62133f4ee2e36a03edd2"
    //             },
    //             {
    //                 "value": "IN",
    //                 "label": "India",
    //                 "_id": "670a7f34fa94c7ca1209674c",
    //                 "id": "670a7f34fa94c7ca1209674c"
    //             }
    //         ],
    //         "dateCreated": "2024-09-11T06:49:06.885Z",
    //         "__v": 0,
    //         "id": "66e13d6267c833713b24772b"
    //     },
    //     {
    //         "_id": "66e13dee67c833713b247765",
    //         "name": "LIVE FASHION Black Women PU Sling Bag",
    //         "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    //         "images": [
    //             "LIVE_FASHION_Bl-1.jpg",
    //             "LIVE_FASHION_Bl-2.jpg",
    //             "LIVE_FASHION_Bl-3.jpg"
    //         ],
    //         "brand": "LIVE FAShion",
    //         "price": 650,
    //         "oldPrice": 850,
    //         "catName": "Bags",
    //         "catId": "670f5477e86c762e3cad6c9f",
    //         "subCatId": "",
    //         "subCat": "",
    //         "subCatName": "",
    //         "category": {
    //             "_id": "670f5477e86c762e3cad6c9f",
    //             "name": "Bags",
    //             "slug": "Bags",
    //             "images": [
    //                 "fhttps://res.cloudinary.com/dkgonwhvj/image/upload/v1731428171/1731428170107_bag.png"
    //             ],
    //             "color": "#fdf0ff",
    //             "createdAt": "2024-10-16T05:51:51.640Z",
    //             "updatedAt": "2024-11-12T16:16:12.534Z",
    //             "__v": 0,
    //             "id": "670f5477e86c762e3cad6c9f"
    //         },
    //         "countInStock": 1500,
    //         "rating": 4,
    //         "isFeatured": false,
    //         "discount": 10,
    //         "productRam": [],
    //         "size": [],
    //         "productWeight": [],
    //         "location": [
    //             {
    //                 "value": "All",
    //                 "label": "All",
    //                 "_id": "670a621b3f4ee2e36a03ee03",
    //                 "id": "670a621b3f4ee2e36a03ee03"
    //             },
    //             {
    //                 "value": "IN",
    //                 "label": "India",
    //                 "_id": "670cd8bd1f039258ce5616a8",
    //                 "id": "670cd8bd1f039258ce5616a8"
    //             }
    //         ],
    //         "dateCreated": "2024-09-11T06:51:26.242Z",
    //         "__v": 0,
    //         "id": "66e13dee67c833713b247765"
    //     },
    //     {
    //         "_id": "66e14052d7b24f428474f35a",
    //         "name": "POCO C61, 4GB RAM, 64GB ROM, Ethereal Blue, Smartphone",
    //         "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    //         "images": [
    //             "POCO_C61,_4GB_R-1.webp",
    //             "POCO_C61,_4GB_R-2.jpg"
    //         ],
    //         "brand": "POCO",
    //         "price": 13000,
    //         "oldPrice": 15000,
    //         "catName": "Electronics",
    //         "catId": "670f5463e86c762e3cad6c95",
    //         "subCatId": "673ed5552ec02680644f278d",
    //         "subCat": "Mobiles",
    //         "subCatName": "Mobiles",
    //         "category": {
    //             "_id": "670f5463e86c762e3cad6c95",
    //             "name": "Electronics",
    //             "slug": "Electronics",
    //             "images": [
    //                 "fhttps://res.cloudinary.com/dkgonwhvj/image/upload/v1731428179/1731428178306_ele.png"
    //             ],
    //             "color": "#feefea",
    //             "createdAt": "2024-10-16T05:51:31.207Z",
    //             "updatedAt": "2024-11-12T16:16:20.193Z",
    //             "__v": 0,
    //             "id": "670f5463e86c762e3cad6c95"
    //         },
    //         "countInStock": 1500,
    //         "rating": 5,
    //         "isFeatured": false,
    //         "discount": 10,
    //         "productRam": [],
    //         "size": [],
    //         "productWeight": [],
    //         "location": [
    //             {
    //                 "value": "All",
    //                 "label": "All",
    //                 "_id": "670a62223f4ee2e36a03ee34",
    //                 "id": "670a62223f4ee2e36a03ee34"
    //             },
    //             {
    //                 "value": "IN",
    //                 "label": "India",
    //                 "_id": "670cd88b1f039258ce5615e2",
    //                 "id": "670cd88b1f039258ce5615e2"
    //             },
    //             {
    //                 "value": "AF",
    //                 "label": "Afghanistan",
    //                 "_id": "670cd88b1f039258ce5615e3",
    //                 "id": "670cd88b1f039258ce5615e3"
    //             }
    //         ],
    //         "dateCreated": "2024-09-11T07:01:38.292Z",
    //         "__v": 0,
    //         "id": "66e14052d7b24f428474f35a"
    //     },
    //     {
    //         "_id": "66e140e4d7b24f428474f419",
    //         "name": "Aqualite Black & Grey Slip-Resistance Sliders for Men",
    //         "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    //         "images": [
    //             "Aqualite_Black_-1.webp",
    //             "Aqualite_Black_-2.jpg"
    //         ],
    //         "brand": "Aqualite",
    //         "price": 850,
    //         "oldPrice": 920,
    //         "catName": "Footwear",
    //         "catId": "670f548ce86c762e3cad6ca9",
    //         "subCatId": "673089cf45d0a9534fb3bed5",
    //         "subCat": "Men Footwear",
    //         "subCatName": "Men",
    //         "category": {
    //             "_id": "670f548ce86c762e3cad6ca9",
    //             "name": "Footwear",
    //             "slug": "Footwear",
    //             "images": [
    //                 "fhttps://res.cloudinary.com/dkgonwhvj/image/upload/v1731428102/1731428100981_foot.png"
    //             ],
    //             "color": "#def3ff",
    //             "createdAt": "2024-10-16T05:52:12.292Z",
    //             "updatedAt": "2024-11-12T16:15:02.903Z",
    //             "__v": 0,
    //             "id": "670f548ce86c762e3cad6ca9"
    //         },
    //         "countInStock": 1500,
    //         "rating": 5,
    //         "isFeatured": true,
    //         "discount": 10,
    //         "productRam": [],
    //         "size": [],
    //         "productWeight": [],
    //         "location": [
    //             {
    //                 "value": "All",
    //                 "label": "All",
    //                 "_id": "670a622a3f4ee2e36a03ee65",
    //                 "id": "670a622a3f4ee2e36a03ee65"
    //             },
    //             {
    //                 "value": "IN",
    //                 "label": "India",
    //                 "_id": "670cd8501f039258ce561516",
    //                 "id": "670cd8501f039258ce561516"
    //             },
    //             {
    //                 "value": "PK",
    //                 "label": "Pakistan",
    //                 "_id": "670cd8501f039258ce561517",
    //                 "id": "670cd8501f039258ce561517"
    //             },
    //             {
    //                 "value": "US",
    //                 "label": "United States",
    //                 "_id": "670cd8501f039258ce561518",
    //                 "id": "670cd8501f039258ce561518"
    //             },
    //             {
    //                 "value": "BD",
    //                 "label": "Bangladesh",
    //                 "_id": "670cd8501f039258ce561519",
    //                 "id": "670cd8501f039258ce561519"
    //             },
    //             {
    //                 "value": "NG",
    //                 "label": "Nigeria",
    //                 "_id": "670cd8501f039258ce56151a",
    //                 "id": "670cd8501f039258ce56151a"
    //             }
    //         ],
    //         "dateCreated": "2024-09-11T07:04:04.916Z",
    //         "__v": 0,
    //         "id": "66e140e4d7b24f428474f419"
    //     },
    //     {
    //         "_id": "66e14d36d7b24f428474f81e",
    //         "name": "Fabbmate Casual Sports shoes White Sneakers for Women Girls White Shoes",
    //         "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    //         "images": [
    //             "Fabbmate_Casual-1.jpg",
    //             "Fabbmate_Casual-2.jpg"
    //         ],
    //         "brand": "Fabbmate",
    //         "price": 460,
    //         "oldPrice": 480,
    //         "catName": "Footwear",
    //         "catId": "670f548ce86c762e3cad6ca9",
    //         "subCatId": "67308a0745d0a9534fb3bef9",
    //         "subCat": "Women FootWear",
    //         "subCatName": "Women FootWear",
    //         "category": {
    //             "_id": "670f548ce86c762e3cad6ca9",
    //             "name": "Footwear",
    //             "slug": "Footwear",
    //             "images": [
    //                 "fhttps://res.cloudinary.com/dkgonwhvj/image/upload/v1731428102/1731428100981_foot.png"
    //             ],
    //             "color": "#def3ff",
    //             "createdAt": "2024-10-16T05:52:12.292Z",
    //             "updatedAt": "2024-11-12T16:15:02.903Z",
    //             "__v": 0,
    //             "id": "670f548ce86c762e3cad6ca9"
    //         },
    //         "countInStock": 1400,
    //         "rating": 5,
    //         "isFeatured": true,
    //         "discount": 8,
    //         "productRam": [],
    //         "size": [],
    //         "productWeight": [],
    //         "location": [
    //             {
    //                 "value": "All",
    //                 "label": "All",
    //                 "_id": "670a62343f4ee2e36a03ee96",
    //                 "id": "670a62343f4ee2e36a03ee96"
    //             },
    //             {
    //                 "value": "IN",
    //                 "label": "India",
    //                 "_id": "670cd8201f039258ce561454",
    //                 "id": "670cd8201f039258ce561454"
    //             },
    //             {
    //                 "value": "PK",
    //                 "label": "Pakistan",
    //                 "_id": "670cd8201f039258ce561455",
    //                 "id": "670cd8201f039258ce561455"
    //             },
    //             {
    //                 "value": "BD",
    //                 "label": "Bangladesh",
    //                 "_id": "670cd8201f039258ce561456",
    //                 "id": "670cd8201f039258ce561456"
    //             },
    //             {
    //                 "value": "US",
    //                 "label": "United States",
    //                 "_id": "670cd8201f039258ce561457",
    //                 "id": "670cd8201f039258ce561457"
    //             }
    //         ],
    //         "dateCreated": "2024-09-11T07:56:38.417Z",
    //         "__v": 0,
    //         "id": "66e14d36d7b24f428474f81e"
    //     },
    //     {
    //         "_id": "66e15fbacbb9035ac19bca85",
    //         "name": "Paragon PUK7014L Women Sandals | Casual Everyday Sandals | Stylish, Comfortable & Durable | For Daily & Occasion Wear",
    //         "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    //         "images": [
    //             "Paragon_PUK7014-1.jpg",
    //             "Paragon_PUK7014-2.jpg",
    //             "Paragon_PUK7014-3.jpg",
    //             "Paragon_PUK7014-4.jpg"
    //         ],
    //         "brand": "Paragon",
    //         "price": 320,
    //         "oldPrice": 450,
    //         "catName": "Footwear",
    //         "catId": "670f548ce86c762e3cad6ca9",
    //         "subCatId": "67308a0745d0a9534fb3bef9",
    //         "subCat": "Women FootWear",
    //         "subCatName": "Women FootWear",
    //         "category": {
    //             "_id": "670f548ce86c762e3cad6ca9",
    //             "name": "Footwear",
    //             "slug": "Footwear",
    //             "images": [
    //                 "fhttps://res.cloudinary.com/dkgonwhvj/image/upload/v1731428102/1731428100981_foot.png"
    //             ],
    //             "color": "#def3ff",
    //             "createdAt": "2024-10-16T05:52:12.292Z",
    //             "updatedAt": "2024-11-12T16:15:02.903Z",
    //             "__v": 0,
    //             "id": "670f548ce86c762e3cad6ca9"
    //         },
    //         "countInStock": 1200,
    //         "rating": 4,
    //         "isFeatured": false,
    //         "discount": 11,
    //         "productRam": [],
    //         "size": [],
    //         "productWeight": [],
    //         "location": [
    //             {
    //                 "value": "All",
    //                 "label": "All",
    //                 "_id": "670a623c3f4ee2e36a03eec7",
    //                 "id": "670a623c3f4ee2e36a03eec7"
    //             },
    //             {
    //                 "value": "AF",
    //                 "label": "Afghanistan",
    //                 "_id": "670a623c3f4ee2e36a03eec8",
    //                 "id": "670a623c3f4ee2e36a03eec8"
    //             },
    //             {
    //                 "value": "IN",
    //                 "label": "India",
    //                 "_id": "670cd7b31f039258ce5612f2",
    //                 "id": "670cd7b31f039258ce5612f2"
    //             }
    //         ],
    //         "dateCreated": "2024-09-11T09:15:38.977Z",
    //         "__v": 0,
    //         "id": "66e15fbacbb9035ac19bca85"
    //     },
    //     {
    //         "_id": "66e16de3cbb9035ac19bccf6",
    //         "name": "Aqualite Women Pista Green Casual Shoes",
    //         "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. ",
    //         "images": [
    //             "Aqualite_Women_-1.jpg",
    //             "Aqualite_Women_-2.jpg"
    //         ],
    //         "brand": "Aqualite",
    //         "price": 450,
    //         "oldPrice": 550,
    //         "catName": "Footwear",
    //         "catId": "670f548ce86c762e3cad6ca9",
    //         "subCatId": "67308a0745d0a9534fb3bef9",
    //         "subCat": "Women FootWear",
    //         "subCatName": "Women FootWear",
    //         "category": {
    //             "_id": "670f548ce86c762e3cad6ca9",
    //             "name": "Footwear",
    //             "slug": "Footwear",
    //             "images": [
    //                 "fhttps://res.cloudinary.com/dkgonwhvj/image/upload/v1731428102/1731428100981_foot.png"
    //             ],
    //             "color": "#def3ff",
    //             "createdAt": "2024-10-16T05:52:12.292Z",
    //             "updatedAt": "2024-11-12T16:15:02.903Z",
    //             "__v": 0,
    //             "id": "670f548ce86c762e3cad6ca9"
    //         },
    //         "countInStock": 1400,
    //         "rating": 4,
    //         "isFeatured": false,
    //         "discount": 12,
    //         "productRam": [],
    //         "size": [],
    //         "productWeight": [],
    //         "location": [
    //             {
    //                 "value": "All",
    //                 "label": "All",
    //                 "_id": "670a62773f4ee2e36a03ef41",
    //                 "id": "670a62773f4ee2e36a03ef41"
    //             },
    //             {
    //                 "value": "ID",
    //                 "label": "Indonesia",
    //                 "_id": "670cd7631f039258ce561233",
    //                 "id": "670cd7631f039258ce561233"
    //             },
    //             {
    //                 "value": "IN",
    //                 "label": "India",
    //                 "_id": "670cd7631f039258ce561234",
    //                 "id": "670cd7631f039258ce561234"
    //             }
    //         ],
    //         "dateCreated": "2024-09-11T10:16:03.095Z",
    //         "__v": 0,
    //         "id": "66e16de3cbb9035ac19bccf6"
    //     },
    //     {
    //         "_id": "66e16ee8cbb9035ac19bcd16",
    //         "name": "Paragon Women's Trendy Wedge Heel Sandals with Cushioned Sole and Sturdy Construction for Everyday Use",
    //         "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. ",
    //         "images": [
    //             "Paragon_Women's-1.jpg",
    //             "Paragon_Women's-2.jpg",
    //             "Paragon_Women's-3.webp",
    //             "Paragon_Women's-4.jpg"
    //         ],
    //         "brand": "Paragon",
    //         "price": 450,
    //         "oldPrice": 650,
    //         "catName": "Footwear",
    //         "catId": "670f548ce86c762e3cad6ca9",
    //         "subCatId": "67308a0745d0a9534fb3bef9",
    //         "subCat": "Women FootWear",
    //         "subCatName": "Women FootWear",
    //         "category": {
    //             "_id": "670f548ce86c762e3cad6ca9",
    //             "name": "Footwear",
    //             "slug": "Footwear",
    //             "images": [
    //                 "fhttps://res.cloudinary.com/dkgonwhvj/image/upload/v1731428102/1731428100981_foot.png"
    //             ],
    //             "color": "#def3ff",
    //             "createdAt": "2024-10-16T05:52:12.292Z",
    //             "updatedAt": "2024-11-12T16:15:02.903Z",
    //             "__v": 0,
    //             "id": "670f548ce86c762e3cad6ca9"
    //         },
    //         "countInStock": 1500,
    //         "rating": 4,
    //         "isFeatured": false,
    //         "discount": 10,
    //         "productRam": [],
    //         "size": [],
    //         "productWeight": [],
    //         "location": [
    //             {
    //                 "value": "All",
    //                 "label": "All",
    //                 "_id": "670a627c3f4ee2e36a03ef72",
    //                 "id": "670a627c3f4ee2e36a03ef72"
    //             },
    //             {
    //                 "value": "IN",
    //                 "label": "India",
    //                 "_id": "670cd71c1f039258ce56117e",
    //                 "id": "670cd71c1f039258ce56117e"
    //             }
    //         ],
    //         "dateCreated": "2024-09-11T10:20:24.524Z",
    //         "__v": 0,
    //         "id": "66e16ee8cbb9035ac19bcd16"
    //     },
    //     {
    //         "_id": "66e17196cbb9035ac19bce4d",
    //         "name": "FLORES Stylish Fashion Backpack For Girls and boys",
    //         "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. ",
    //         "images": [
    //             "FLORES_Stylish_-1.jpg",
    //             "FLORES_Stylish_-2.jpg",
    //             "FLORES_Stylish_-3.jpg",
    //             "FLORES_Stylish_-4.jpg"
    //         ],
    //         "brand": "FLORES",
    //         "price": 560,
    //         "oldPrice": 590,
    //         "catName": "Bags",
    //         "catId": "670f5477e86c762e3cad6c9f",
    //         "subCatId": "66c0dfb13490222862ae78cd",
    //         "subCat": "Girls",
    //         "subCatName": "Girls",
    //         "category": {
    //             "_id": "670f5477e86c762e3cad6c9f",
    //             "name": "Bags",
    //             "slug": "Bags",
    //             "images": [
    //                 "fhttps://res.cloudinary.com/dkgonwhvj/image/upload/v1731428171/1731428170107_bag.png"
    //             ],
    //             "color": "#fdf0ff",
    //             "createdAt": "2024-10-16T05:51:51.640Z",
    //             "updatedAt": "2024-11-12T16:16:12.534Z",
    //             "__v": 0,
    //             "id": "670f5477e86c762e3cad6c9f"
    //         },
    //         "countInStock": 450,
    //         "rating": 4,
    //         "isFeatured": false,
    //         "discount": 8,
    //         "productRam": [],
    //         "size": [],
    //         "productWeight": [],
    //         "location": [
    //             {
    //                 "value": "All",
    //                 "label": "All",
    //                 "_id": "670a62843f4ee2e36a03efab",
    //                 "id": "670a62843f4ee2e36a03efab"
    //             }
    //         ],
    //         "dateCreated": "2024-09-11T10:31:50.421Z",
    //         "__v": 0,
    //         "id": "66e17196cbb9035ac19bce4d"
    //     },
    //     {
    //         "_id": "66e17237cbb9035ac19bced8",
    //         "name": "Fytona Medium Laptop Backpack | Light weight For School Collage Office Tuition and Picnic | Waterproof Backpack (Grey, 25 L)",
    //         "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. ",
    //         "images": [
    //             "Fytona_Medium_L-1.jpg",
    //             "Fytona_Medium_L-2.jpg"
    //         ],
    //         "brand": "Fytona",
    //         "price": 480,
    //         "oldPrice": 520,
    //         "catName": "Bags",
    //         "catId": "670f5477e86c762e3cad6c9f",
    //         "subCatId": "66c0dfab3490222862ae78c7",
    //         "subCat": "Boys",
    //         "subCatName": "Boys",
    //         "category": {
    //             "_id": "670f5477e86c762e3cad6c9f",
    //             "name": "Bags",
    //             "slug": "Bags",
    //             "images": [
    //                 "fhttps://res.cloudinary.com/dkgonwhvj/image/upload/v1731428171/1731428170107_bag.png"
    //             ],
    //             "color": "#fdf0ff",
    //             "createdAt": "2024-10-16T05:51:51.640Z",
    //             "updatedAt": "2024-11-12T16:16:12.534Z",
    //             "__v": 0,
    //             "id": "670f5477e86c762e3cad6c9f"
    //         },
    //         "countInStock": 450,
    //         "rating": 5,
    //         "isFeatured": false,
    //         "discount": 12,
    //         "productRam": [],
    //         "size": [],
    //         "productWeight": [],
    //         "location": [
    //             {
    //                 "value": "All",
    //                 "label": "All",
    //                 "_id": "670a628c3f4ee2e36a03efec",
    //                 "id": "670a628c3f4ee2e36a03efec"
    //             },
    //             {
    //                 "value": "IN",
    //                 "label": "India",
    //                 "_id": "670cdb771f039258ce5620dd",
    //                 "id": "670cdb771f039258ce5620dd"
    //             }
    //         ],
    //         "dateCreated": "2024-09-11T10:34:31.443Z",
    //         "__v": 0,
    //         "id": "66e17237cbb9035ac19bced8"
    //     },
    //     {
    //         "_id": "66e293e22c48007bafc155ab",
    //         "name": "DANGAR ENTERPRISE Kundan white Earring for Women and Girls-Terndy Women Pooja And Diwali Special Attractive Earrings Set For Party Occasion-Kundan work studs-Triangle Shape Kundan Stud Earring-1 Pair",
    //         "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    //         "images": [
    //             "DANGAR_ENTERPRI-1.jpg"
    //         ],
    //         "brand": "DANGAR ENTERPRISE",
    //         "price": 280,
    //         "oldPrice": 320,
    //         "catName": "Jewellery",
    //         "catId": "6728977fddcbbe211e109df9",
    //         "subCatId": "",
    //         "subCat": "",
    //         "subCatName": "",
    //         "category": {
    //             "_id": "6728977fddcbbe211e109df9",
    //             "name": "Jewellery",
    //             "slug": "Jewellery",
    //             "images": [
    //                 "fhttps://res.cloudinary.com/dkgonwhvj/image/upload/v1731428061/1731428060565_jw.png"
    //             ],
    //             "color": "#d3ffd9",
    //             "createdAt": "2024-11-04T09:44:31.038Z",
    //             "updatedAt": "2024-11-27T04:38:58.700Z",
    //             "__v": 0,
    //             "id": "6728977fddcbbe211e109df9"
    //         },
    //         "countInStock": 140,
    //         "rating": 4,
    //         "isFeatured": false,
    //         "discount": 10,
    //         "productRam": [],
    //         "size": [],
    //         "productWeight": [],
    //         "location": [
    //             {
    //                 "value": "All",
    //                 "label": "All",
    //                 "_id": "670a62913f4ee2e36a03f01d",
    //                 "id": "670a62913f4ee2e36a03f01d"
    //             },
    //             {
    //                 "value": "PK",
    //                 "label": "Pakistan",
    //                 "_id": "670cdb101f039258ce561f46",
    //                 "id": "670cdb101f039258ce561f46"
    //             },
    //             {
    //                 "value": "IN",
    //                 "label": "India",
    //                 "_id": "670cdb101f039258ce561f47",
    //                 "id": "670cdb101f039258ce561f47"
    //             }
    //         ],
    //         "dateCreated": "2024-09-12T07:10:26.046Z",
    //         "__v": 0,
    //         "id": "66e293e22c48007bafc155ab"
    //     },
    //     {
    //         "_id": "66e50d28ea40d089af7d6bed",
    //         "name": "VNEED Women Embroidered Rayon Kurta Pant Set | Kurta set for Women | Ethnic Kurta Set for Women (set of 1) (5XL)",
    //         "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    //         "images": [
    //             "VNEED_Women_Emb-1.jpg",
    //             "VNEED_Women_Emb-2.jpg",
    //             "VNEED_Women_Emb-3.jpg"
    //         ],
    //         "brand": "VNEED",
    //         "price": 450,
    //         "oldPrice": 490,
    //         "catName": "Fashion",
    //         "catId": "670f544ce86c762e3cad6c8b",
    //         "subCatId": "673ed52fcab231596bf06684",
    //         "subCat": "Girls",
    //         "subCatName": "Women",
    //         "category": {
    //             "_id": "670f544ce86c762e3cad6c8b",
    //             "name": "Fashion",
    //             "slug": "Fashion",
    //             "images": [
    //                 "fhttps://res.cloudinary.com/dkgonwhvj/image/upload/v1731428187/1731428186288_fash.png"
    //             ],
    //             "color": "#ecffec",
    //             "createdAt": "2024-10-16T05:51:08.266Z",
    //             "updatedAt": "2024-11-12T16:16:28.229Z",
    //             "__v": 0,
    //             "id": "670f544ce86c762e3cad6c8b"
    //         },
    //         "countInStock": 1500,
    //         "rating": 4,
    //         "isFeatured": false,
    //         "discount": 14,
    //         "productRam": [],
    //         "size": [
    //             "S",
    //             "M",
    //             "L"
    //         ],
    //         "productWeight": [],
    //         "location": [
    //             {
    //                 "value": "All",
    //                 "label": "All",
    //                 "_id": "670a62963f4ee2e36a03f06e",
    //                 "id": "670a62963f4ee2e36a03f06e"
    //             },
    //             {
    //                 "value": "PK",
    //                 "label": "Pakistan",
    //                 "_id": "670cdae21f039258ce561e76",
    //                 "id": "670cdae21f039258ce561e76"
    //             },
    //             {
    //                 "value": "IN",
    //                 "label": "India",
    //                 "_id": "670cdae21f039258ce561e77",
    //                 "id": "670cdae21f039258ce561e77"
    //             }
    //         ],
    //         "dateCreated": "2024-09-14T04:12:24.553Z",
    //         "__v": 0,
    //         "id": "66e50d28ea40d089af7d6bed"
    //     },
    //     {
    //         "_id": "66e50df7ea40d089af7d6c1d",
    //         "name": "Tecno POP 8 64 GB, 4 GB RAM, Black, Mobile Phone",
    //         "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    //         "images": [
    //             "Tecno_POP_8_64_-1.webp",
    //             "Tecno_POP_8_64_-2.jpg",
    //             "Tecno_POP_8_64_-3.webp"
    //         ],
    //         "brand": "Tecno",
    //         "price": 12300,
    //         "oldPrice": 13500,
    //         "catName": "Electronics",
    //         "catId": "670f5463e86c762e3cad6c95",
    //         "subCatId": "673ed5552ec02680644f278d",
    //         "subCat": "Mobiles",
    //         "subCatName": "Mobiles",
    //         "category": {
    //             "_id": "670f5463e86c762e3cad6c95",
    //             "name": "Electronics",
    //             "slug": "Electronics",
    //             "images": [
    //                 "fhttps://res.cloudinary.com/dkgonwhvj/image/upload/v1731428179/1731428178306_ele.png"
    //             ],
    //             "color": "#feefea",
    //             "createdAt": "2024-10-16T05:51:31.207Z",
    //             "updatedAt": "2024-11-12T16:16:20.193Z",
    //             "__v": 0,
    //             "id": "670f5463e86c762e3cad6c95"
    //         },
    //         "countInStock": 10,
    //         "rating": 4,
    //         "isFeatured": true,
    //         "discount": 12,
    //         "productRam": [
    //             "3GB",
    //             "4GB",
    //             "6GB"
    //         ],
    //         "size": [],
    //         "productWeight": [],
    //         "location": [
    //             {
    //                 "value": "All",
    //                 "label": "All",
    //                 "_id": "670a629b3f4ee2e36a03f0a7",
    //                 "id": "670a629b3f4ee2e36a03f0a7"
    //             },
    //             {
    //                 "value": "IN",
    //                 "label": "India",
    //                 "_id": "670cda971f039258ce561da8",
    //                 "id": "670cda971f039258ce561da8"
    //             }
    //         ],
    //         "dateCreated": "2024-09-14T04:15:51.476Z",
    //         "__v": 0,
    //         "id": "66e50df7ea40d089af7d6c1d"
    //     },
    //     {
    //         "_id": "66e50fbfea40d089af7d6c48",
    //         "name": "Apple iPhone 13 128 GB, Pink",
    //         "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    //         "images": [
    //             "Apple_iPhone_13-1.webp",
    //             "Apple_iPhone_13-2.jpg",
    //             "Apple_iPhone_13-3.jpg"
    //         ],
    //         "brand": "Apple",
    //         "price": 39600,
    //         "oldPrice": 389000,
    //         "catName": "Electronics",
    //         "catId": "670f5463e86c762e3cad6c95",
    //         "subCatId": "673ed5552ec02680644f278d",
    //         "subCat": "Mobiles",
    //         "subCatName": "Mobiles",
    //         "category": {
    //             "_id": "670f5463e86c762e3cad6c95",
    //             "name": "Electronics",
    //             "slug": "Electronics",
    //             "images": [
    //                 "fhttps://res.cloudinary.com/dkgonwhvj/image/upload/v1731428179/1731428178306_ele.png"
    //             ],
    //             "color": "#feefea",
    //             "createdAt": "2024-10-16T05:51:31.207Z",
    //             "updatedAt": "2024-11-12T16:16:20.193Z",
    //             "__v": 0,
    //             "id": "670f5463e86c762e3cad6c95"
    //         },
    //         "countInStock": 150,
    //         "rating": 5,
    //         "isFeatured": true,
    //         "discount": 14,
    //         "productRam": [
    //             "3GB",
    //             "4GB",
    //             "6GB"
    //         ],
    //         "size": [],
    //         "productWeight": [],
    //         "location": [
    //             {
    //                 "value": "All",
    //                 "label": "All",
    //                 "_id": "670a62a13f4ee2e36a03f0d8",
    //                 "id": "670a62a13f4ee2e36a03f0d8"
    //             },
    //             {
    //                 "value": "IN",
    //                 "label": "India",
    //                 "_id": "670cda6b1f039258ce561cdc",
    //                 "id": "670cda6b1f039258ce561cdc"
    //             },
    //             {
    //                 "value": "US",
    //                 "label": "United States",
    //                 "_id": "670cda6b1f039258ce561cdd",
    //                 "id": "670cda6b1f039258ce561cdd"
    //             }
    //         ],
    //         "dateCreated": "2024-09-14T04:23:27.825Z",
    //         "__v": 0,
    //         "id": "66e50fbfea40d089af7d6c48"
    //     },
    //     {
    //         "_id": "66e510aeea40d089af7d6c7a",
    //         "name": "Aqualite's Trendy and Stylish Orange Flip Flops & Slides For Women",
    //         "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    //         "images": [
    //             "Aqualite's_Tren-1.jpg",
    //             "Aqualite's_Tren-2.jpg",
    //             "Aqualite's_Tren-3.jpg"
    //         ],
    //         "brand": "Aqualite",
    //         "price": 480,
    //         "oldPrice": 520,
    //         "catName": "Footwear",
    //         "catId": "670f548ce86c762e3cad6ca9",
    //         "subCatId": "67308a0745d0a9534fb3bef9",
    //         "subCat": "Women FootWear",
    //         "subCatName": "Women FootWear",
    //         "category": {
    //             "_id": "670f548ce86c762e3cad6ca9",
    //             "name": "Footwear",
    //             "slug": "Footwear",
    //             "images": [
    //                 "fhttps://res.cloudinary.com/dkgonwhvj/image/upload/v1731428102/1731428100981_foot.png"
    //             ],
    //             "color": "#def3ff",
    //             "createdAt": "2024-10-16T05:52:12.292Z",
    //             "updatedAt": "2024-11-12T16:15:02.903Z",
    //             "__v": 0,
    //             "id": "670f548ce86c762e3cad6ca9"
    //         },
    //         "countInStock": 1400,
    //         "rating": 5,
    //         "isFeatured": true,
    //         "discount": 12,
    //         "productRam": [],
    //         "size": [],
    //         "productWeight": [],
    //         "location": [
    //             {
    //                 "value": "All",
    //                 "label": "All",
    //                 "_id": "670a62b13f4ee2e36a03f101",
    //                 "id": "670a62b13f4ee2e36a03f101"
    //             },
    //             {
    //                 "value": "IN",
    //                 "label": "India",
    //                 "_id": "670a7ee3fa94c7ca120965d8",
    //                 "id": "670a7ee3fa94c7ca120965d8"
    //             }
    //         ],
    //         "dateCreated": "2024-09-14T04:27:26.448Z",
    //         "__v": 0,
    //         "id": "66e510aeea40d089af7d6c7a"
    //     },
    //     {
    //         "_id": "66e51372ea40d089af7d6d77",
    //         "name": "Paragon PUK7014L Women Sandals | Casual Everyday Sandals | Stylish, Comfortable & Durable | For Daily & Occasion Wear",
    //         "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    //         "images": [
    //             "Paragon_PUK7014-1.jpg",
    //             "Paragon_PUK7014-2.jpg",
    //             "Paragon_PUK7014-3.jpg"
    //         ],
    //         "brand": "Paragon",
    //         "price": 650,
    //         "oldPrice": 690,
    //         "catName": "Footwear",
    //         "catId": "670f548ce86c762e3cad6ca9",
    //         "subCatId": "67308a0745d0a9534fb3bef9",
    //         "subCat": "Women FootWear",
    //         "subCatName": "Women FootWear",
    //         "category": {
    //             "_id": "670f548ce86c762e3cad6ca9",
    //             "name": "Footwear",
    //             "slug": "Footwear",
    //             "images": [
    //                 "fhttps://res.cloudinary.com/dkgonwhvj/image/upload/v1731428102/1731428100981_foot.png"
    //             ],
    //             "color": "#def3ff",
    //             "createdAt": "2024-10-16T05:52:12.292Z",
    //             "updatedAt": "2024-11-12T16:15:02.903Z",
    //             "__v": 0,
    //             "id": "670f548ce86c762e3cad6ca9"
    //         },
    //         "countInStock": 1500,
    //         "rating": 4,
    //         "isFeatured": true,
    //         "discount": 13,
    //         "productRam": [],
    //         "size": [],
    //         "productWeight": [],
    //         "location": [
    //             {
    //                 "value": "All",
    //                 "label": "All",
    //                 "_id": "670a62b63f4ee2e36a03f12a",
    //                 "id": "670a62b63f4ee2e36a03f12a"
    //             },
    //             {
    //                 "value": "AF",
    //                 "label": "Afghanistan",
    //                 "_id": "670cd9e71f039258ce561b48",
    //                 "id": "670cd9e71f039258ce561b48"
    //             },
    //             {
    //                 "value": "IN",
    //                 "label": "India",
    //                 "_id": "670cd9e71f039258ce561b49",
    //                 "id": "670cd9e71f039258ce561b49"
    //             }
    //         ],
    //         "dateCreated": "2024-09-14T04:39:14.497Z",
    //         "__v": 0,
    //         "id": "66e51372ea40d089af7d6d77"
    //     },
    //     {
    //         "_id": "66e5182cea40d089af7d6e4d",
    //         "name": "Aqualite's Trendy and Stylish Pista Flip Flops & Slides For Women",
    //         "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    //         "images": [
    //             "Aqualite's_Tren-1.jpg",
    //             "Aqualite's_Tren-2.jpg"
    //         ],
    //         "brand": "Denill",
    //         "price": 260,
    //         "oldPrice": 320,
    //         "catName": "Footwear",
    //         "catId": "670f548ce86c762e3cad6ca9",
    //         "subCatId": "66c0e00a3490222862ae78f1",
    //         "subCat": "Women FootWear",
    //         "subCatName": "Women FootWear",
    //         "category": {
    //             "_id": "670f548ce86c762e3cad6ca9",
    //             "name": "Footwear",
    //             "slug": "Footwear",
    //             "images": [
    //                 "fhttps://res.cloudinary.com/dkgonwhvj/image/upload/v1731428102/1731428100981_foot.png"
    //             ],
    //             "color": "#def3ff",
    //             "createdAt": "2024-10-16T05:52:12.292Z",
    //             "updatedAt": "2024-11-12T16:15:02.903Z",
    //             "__v": 0,
    //             "id": "670f548ce86c762e3cad6ca9"
    //         },
    //         "countInStock": 165,
    //         "rating": 4,
    //         "isFeatured": true,
    //         "discount": 12,
    //         "productRam": [],
    //         "size": [],
    //         "productWeight": [],
    //         "location": [
    //             {
    //                 "value": "All",
    //                 "label": "All",
    //                 "_id": "670a62bb3f4ee2e36a03f153",
    //                 "id": "670a62bb3f4ee2e36a03f153"
    //             }
    //         ],
    //         "dateCreated": "2024-09-14T04:59:24.006Z",
    //         "__v": 0,
    //         "id": "66e5182cea40d089af7d6e4d"
    //     },
    //     {
    //         "_id": "66e52b5be2e06fb4c9259dd2",
    //         "name": "Good Life Refined Rice Bran Oil 1 L",
    //         "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    //         "images": [
    //             "Good_Life_Refin-1.webp"
    //         ],
    //         "brand": "Good Life",
    //         "price": 190,
    //         "oldPrice": 230,
    //         "catName": "Groceries",
    //         "catId": "670f54a3e86c762e3cad6cb3",
    //         "subCatId": "66c0dfd53490222862ae78df",
    //         "subCat": "Cooking Essentials",
    //         "subCatName": "Cooking Essentials",
    //         "category": {
    //             "_id": "670f54a3e86c762e3cad6cb3",
    //             "name": "Groceries",
    //             "slug": "Groceries",
    //             "images": [
    //                 "fhttps://res.cloudinary.com/dkgonwhvj/image/upload/v1731428092/1731428090930_gro.png"
    //             ],
    //             "color": "#ffe8f8",
    //             "createdAt": "2024-10-16T05:52:35.762Z",
    //             "updatedAt": "2024-11-12T16:14:54.039Z",
    //             "__v": 0,
    //             "id": "670f54a3e86c762e3cad6cb3"
    //         },
    //         "countInStock": 160,
    //         "rating": 4,
    //         "isFeatured": false,
    //         "discount": 8,
    //         "productRam": [],
    //         "size": [],
    //         "productWeight": [
    //             "500G",
    //             "1KG"
    //         ],
    //         "location": [
    //             {
    //                 "value": "All",
    //                 "label": "All",
    //                 "_id": "670a62bf3f4ee2e36a03f17c",
    //                 "id": "670a62bf3f4ee2e36a03f17c"
    //             },
    //             {
    //                 "value": "IN",
    //                 "label": "India",
    //                 "_id": "670cd9791f039258ce5619be",
    //                 "id": "670cd9791f039258ce5619be"
    //             }
    //         ],
    //         "dateCreated": "2024-09-14T06:21:15.971Z",
    //         "__v": 0,
    //         "id": "66e52b5be2e06fb4c9259dd2"
    //     },
    //     {
    //         "_id": "66e52bc5e2e06fb4c9259e04",
    //         "name": "Gemini Refined Sunflower Oil 1 L",
    //         "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    //         "images": [
    //             "Gemini_Refined_-1.webp"
    //         ],
    //         "brand": "Gemini",
    //         "price": 180,
    //         "oldPrice": 210,
    //         "catName": "Groceries",
    //         "catId": "670f54a3e86c762e3cad6cb3",
    //         "subCatId": "670f5534e86c762e3cad6d09",
    //         "subCat": "Cooking Essentials",
    //         "subCatName": "Cooking Essentials",
    //         "category": {
    //             "_id": "670f54a3e86c762e3cad6cb3",
    //             "name": "Groceries",
    //             "slug": "Groceries",
    //             "images": [
    //                 "fhttps://res.cloudinary.com/dkgonwhvj/image/upload/v1731428092/1731428090930_gro.png"
    //             ],
    //             "color": "#ffe8f8",
    //             "createdAt": "2024-10-16T05:52:35.762Z",
    //             "updatedAt": "2024-11-12T16:14:54.039Z",
    //             "__v": 0,
    //             "id": "670f54a3e86c762e3cad6cb3"
    //         },
    //         "countInStock": 1700,
    //         "rating": 4,
    //         "isFeatured": false,
    //         "discount": 12,
    //         "productRam": [],
    //         "size": [],
    //         "productWeight": [
    //             "500G",
    //             "1KG"
    //         ],
    //         "location": [
    //             {
    //                 "value": "All",
    //                 "label": "All",
    //                 "_id": "670a62c53f4ee2e36a03f1a5",
    //                 "id": "670a62c53f4ee2e36a03f1a5"
    //             },
    //             {
    //                 "value": "IN",
    //                 "label": "India",
    //                 "_id": "670a7fc9fa94c7ca120969ee",
    //                 "id": "670a7fc9fa94c7ca120969ee"
    //             }
    //         ],
    //         "dateCreated": "2024-09-14T06:23:01.356Z",
    //         "__v": 0,
    //         "id": "66e52bc5e2e06fb4c9259e04"
    //     },
    //     {
    //         "_id": "66e52c1ce2e06fb4c9259e1e",
    //         "name": "Saffola Gold Pro Healthy Lifestyle RiceBran Based Blended Oil 1 L",
    //         "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    //         "images": [
    //             "Saffola_Gold_Pr-1.webp"
    //         ],
    //         "brand": "Saffola",
    //         "price": 150,
    //         "oldPrice": 180,
    //         "catName": "Groceries",
    //         "catId": "670f54a3e86c762e3cad6cb3",
    //         "subCatId": "66c0dfd53490222862ae78df",
    //         "subCat": "Cooking Essentials",
    //         "subCatName": "Cooking Essentials",
    //         "category": {
    //             "_id": "670f54a3e86c762e3cad6cb3",
    //             "name": "Groceries",
    //             "slug": "Groceries",
    //             "images": [
    //                 "fhttps://res.cloudinary.com/dkgonwhvj/image/upload/v1731428092/1731428090930_gro.png"
    //             ],
    //             "color": "#ffe8f8",
    //             "createdAt": "2024-10-16T05:52:35.762Z",
    //             "updatedAt": "2024-11-12T16:14:54.039Z",
    //             "__v": 0,
    //             "id": "670f54a3e86c762e3cad6cb3"
    //         },
    //         "countInStock": 100,
    //         "rating": 4,
    //         "isFeatured": false,
    //         "discount": 10,
    //         "productRam": [],
    //         "size": [],
    //         "productWeight": [
    //             "500G",
    //             "1KG"
    //         ],
    //         "location": [
    //             {
    //                 "value": "All",
    //                 "label": "All",
    //                 "_id": "670a62ca3f4ee2e36a03f1ce",
    //                 "id": "670a62ca3f4ee2e36a03f1ce"
    //             },
    //             {
    //                 "value": "IN",
    //                 "label": "India",
    //                 "_id": "670a7fb7fa94c7ca120968cb",
    //                 "id": "670a7fb7fa94c7ca120968cb"
    //             }
    //         ],
    //         "dateCreated": "2024-09-14T06:24:28.887Z",
    //         "__v": 0,
    //         "id": "66e52c1ce2e06fb4c9259e1e"
    //     },
    //     {
    //         "_id": "66e52d1ce2e06fb4c9259e9e",
    //         "name": "Surf Excel Matic Front Load Liquid Detergent 2 L",
    //         "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    //         "images": [
    //             "Surf_Excel_Mati-1.webp",
    //             "Surf_Excel_Mati-2.jpg"
    //         ],
    //         "brand": "Surf Excel",
    //         "price": 356,
    //         "oldPrice": 380,
    //         "catName": "Groceries",
    //         "catId": "670f54a3e86c762e3cad6cb3",
    //         "subCatId": "66c0dff73490222862ae78e5",
    //         "subCat": "Home Care",
    //         "subCatName": "Home Care",
    //         "category": {
    //             "_id": "670f54a3e86c762e3cad6cb3",
    //             "name": "Groceries",
    //             "slug": "Groceries",
    //             "images": [
    //                 "fhttps://res.cloudinary.com/dkgonwhvj/image/upload/v1731428092/1731428090930_gro.png"
    //             ],
    //             "color": "#ffe8f8",
    //             "createdAt": "2024-10-16T05:52:35.762Z",
    //             "updatedAt": "2024-11-12T16:14:54.039Z",
    //             "__v": 0,
    //             "id": "670f54a3e86c762e3cad6cb3"
    //         },
    //         "countInStock": 1400,
    //         "rating": 4,
    //         "isFeatured": false,
    //         "discount": 10,
    //         "productRam": [],
    //         "size": [],
    //         "productWeight": [
    //             "500G"
    //         ],
    //         "location": [
    //             {
    //                 "value": "All",
    //                 "label": "All",
    //                 "_id": "670a62d33f4ee2e36a03f220",
    //                 "id": "670a62d33f4ee2e36a03f220"
    //             },
    //             {
    //                 "value": "IN",
    //                 "label": "India",
    //                 "_id": "670a7e9afa94c7ca120964b1",
    //                 "id": "670a7e9afa94c7ca120964b1"
    //             }
    //         ],
    //         "dateCreated": "2024-09-14T06:28:44.902Z",
    //         "__v": 0,
    //         "id": "66e52d1ce2e06fb4c9259e9e"
    //     },
    //     {
    //         "_id": "66e6839f49fb19355a7a0630",
    //         "name": "Muuchstac Ocean Face Wash for Men, Fights Acne & Pimple, Skin Whitening & Brightening, All Skin Types, 100 Ml Each (Pack Of 2)",
    //         "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    //         "images": [
    //             "Muuchstac_Ocean-1.webp",
    //             "Muuchstac_Ocean-2.webp"
    //         ],
    //         "brand": "Muuchstac",
    //         "price": 178,
    //         "oldPrice": 190,
    //         "catName": "Beauty",
    //         "catId": "670f54b8e86c762e3cad6cbd",
    //         "subCatId": "",
    //         "subCat": "",
    //         "subCatName": "",
    //         "category": {
    //             "_id": "670f54b8e86c762e3cad6cbd",
    //             "name": "Beauty",
    //             "slug": "Beauty",
    //             "images": [
    //                 "fhttps://res.cloudinary.com/dkgonwhvj/image/upload/v1731428082/1731428081168_beauty.png"
    //             ],
    //             "color": "#e3fffa",
    //             "createdAt": "2024-10-16T05:52:56.619Z",
    //             "updatedAt": "2024-11-18T11:02:10.300Z",
    //             "__v": 0,
    //             "id": "670f54b8e86c762e3cad6cbd"
    //         },
    //         "countInStock": 160,
    //         "rating": 4,
    //         "isFeatured": false,
    //         "discount": 12,
    //         "productRam": [],
    //         "size": [],
    //         "productWeight": [],
    //         "location": [
    //             {
    //                 "value": "All",
    //                 "label": "All",
    //                 "_id": "670a62d83f4ee2e36a03f249",
    //                 "id": "670a62d83f4ee2e36a03f249"
    //             },
    //             {
    //                 "value": "IN",
    //                 "label": "India",
    //                 "_id": "670cdc711f039258ce5626a1",
    //                 "id": "670cdc711f039258ce5626a1"
    //             }
    //         ],
    //         "dateCreated": "2024-09-15T06:50:07.386Z",
    //         "__v": 0,
    //         "id": "66e6839f49fb19355a7a0630"
    //     },
    //     {
    //         "_id": "66e6841249fb19355a7a064e",
    //         "name": "Vaseline Original Care Lip Therapy 17 g",
    //         "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    //         "images": [
    //             "Vaseline_Origin-1.webp",
    //             "Vaseline_Origin-2.jpg"
    //         ],
    //         "brand": "Vaseline",
    //         "price": 145,
    //         "oldPrice": 165,
    //         "catName": "Beauty",
    //         "catId": "670f54b8e86c762e3cad6cbd",
    //         "subCatId": "",
    //         "subCat": "",
    //         "subCatName": "",
    //         "category": {
    //             "_id": "670f54b8e86c762e3cad6cbd",
    //             "name": "Beauty",
    //             "slug": "Beauty",
    //             "images": [
    //                 "fhttps://res.cloudinary.com/dkgonwhvj/image/upload/v1731428082/1731428081168_beauty.png"
    //             ],
    //             "color": "#e3fffa",
    //             "createdAt": "2024-10-16T05:52:56.619Z",
    //             "updatedAt": "2024-11-18T11:02:10.300Z",
    //             "__v": 0,
    //             "id": "670f54b8e86c762e3cad6cbd"
    //         },
    //         "countInStock": 150,
    //         "rating": 5,
    //         "isFeatured": false,
    //         "discount": 8,
    //         "productRam": [],
    //         "size": [],
    //         "productWeight": [],
    //         "location": [
    //             {
    //                 "value": "All",
    //                 "label": "All",
    //                 "_id": "670a62e13f4ee2e36a03f272",
    //                 "id": "670a62e13f4ee2e36a03f272"
    //             },
    //             {
    //                 "value": "IN",
    //                 "label": "India",
    //                 "_id": "670a7e8afa94c7ca12096471",
    //                 "id": "670a7e8afa94c7ca12096471"
    //             }
    //         ],
    //         "dateCreated": "2024-09-15T06:52:02.859Z",
    //         "__v": 0,
    //         "id": "66e6841249fb19355a7a064e"
    //     },
    //     {
    //         "_id": "66e684ad49fb19355a7a06d9",
    //         "name": "WOW Skin Science Rose Water for Face | Made with Pure Kannauj Rose Extracts | Use It As Toner, Skin Hyderator & Makeup Primer | 100 ml",
    //         "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    //         "images": [
    //             "WOW_Skin_Scienc-1.webp",
    //             "WOW_Skin_Scienc-2.webp"
    //         ],
    //         "brand": "Wow Skin Science",
    //         "price": 150,
    //         "oldPrice": 165,
    //         "catName": "Beauty",
    //         "catId": "670f54b8e86c762e3cad6cbd",
    //         "subCatId": "",
    //         "subCat": "",
    //         "subCatName": "",
    //         "category": {
    //             "_id": "670f54b8e86c762e3cad6cbd",
    //             "name": "Beauty",
    //             "slug": "Beauty",
    //             "images": [
    //                 "fhttps://res.cloudinary.com/dkgonwhvj/image/upload/v1731428082/1731428081168_beauty.png"
    //             ],
    //             "color": "#e3fffa",
    //             "createdAt": "2024-10-16T05:52:56.619Z",
    //             "updatedAt": "2024-11-18T11:02:10.300Z",
    //             "__v": 0,
    //             "id": "670f54b8e86c762e3cad6cbd"
    //         },
    //         "countInStock": 140,
    //         "rating": 5,
    //         "isFeatured": false,
    //         "discount": 12,
    //         "productRam": [],
    //         "size": [],
    //         "productWeight": [],
    //         "location": [
    //             {
    //                 "value": "All",
    //                 "label": "All",
    //                 "_id": "670a62e53f4ee2e36a03f29b",
    //                 "id": "670a62e53f4ee2e36a03f29b"
    //             },
    //             {
    //                 "value": "IN",
    //                 "label": "India",
    //                 "_id": "670a7eaefa94c7ca120964f2",
    //                 "id": "670a7eaefa94c7ca120964f2"
    //             }
    //         ],
    //         "dateCreated": "2024-09-15T06:54:37.303Z",
    //         "__v": 0,
    //         "id": "66e684ad49fb19355a7a06d9"
    //     },
    //     {
    //         "_id": "66e685cf49fb19355a7a0a5f",
    //         "name": "Nisha Creme Hair Color - 3.5 Chocolate Brown 60 gm",
    //         "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    //         "images": [
    //             "Nisha_Creme_Hai-1.jpg",
    //             "Nisha_Creme_Hai-2.jpg"
    //         ],
    //         "brand": "Nisha",
    //         "price": 160,
    //         "oldPrice": 170,
    //         "catName": "Beauty",
    //         "catId": "670f54b8e86c762e3cad6cbd",
    //         "subCatId": "",
    //         "subCat": "",
    //         "subCatName": "",
    //         "category": {
    //             "_id": "670f54b8e86c762e3cad6cbd",
    //             "name": "Beauty",
    //             "slug": "Beauty",
    //             "images": [
    //                 "fhttps://res.cloudinary.com/dkgonwhvj/image/upload/v1731428082/1731428081168_beauty.png"
    //             ],
    //             "color": "#e3fffa",
    //             "createdAt": "2024-10-16T05:52:56.619Z",
    //             "updatedAt": "2024-11-18T11:02:10.300Z",
    //             "__v": 0,
    //             "id": "670f54b8e86c762e3cad6cbd"
    //         },
    //         "countInStock": 160,
    //         "rating": 5,
    //         "isFeatured": false,
    //         "discount": 12,
    //         "productRam": [],
    //         "size": [],
    //         "productWeight": [],
    //         "location": [
    //             {
    //                 "value": "All",
    //                 "label": "All",
    //                 "_id": "670a62ea3f4ee2e36a03f2c4",
    //                 "id": "670a62ea3f4ee2e36a03f2c4"
    //             },
    //             {
    //                 "value": "IN",
    //                 "label": "India",
    //                 "_id": "670cdc0f1f039258ce562421",
    //                 "id": "670cdc0f1f039258ce562421"
    //             }
    //         ],
    //         "dateCreated": "2024-09-15T06:59:27.733Z",
    //         "__v": 0,
    //         "id": "66e685cf49fb19355a7a0a5f"
    //     },
    //     {
    //         "_id": "66e6864549fb19355a7a0a9a",
    //         "name": "Navratna Ayurvedic Cool Oil 200 ml",
    //         "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    //         "images": [
    //             "Navratna_Ayurve-1.webp"
    //         ],
    //         "brand": "Navratna",
    //         "price": 10,
    //         "oldPrice": 145,
    //         "catName": "Groceries",
    //         "catId": "670f54a3e86c762e3cad6cb3",
    //         "subCatId": "",
    //         "subCat": "",
    //         "subCatName": "",
    //         "category": {
    //             "_id": "670f54a3e86c762e3cad6cb3",
    //             "name": "Groceries",
    //             "slug": "Groceries",
    //             "images": [
    //                 "fhttps://res.cloudinary.com/dkgonwhvj/image/upload/v1731428092/1731428090930_gro.png"
    //             ],
    //             "color": "#ffe8f8",
    //             "createdAt": "2024-10-16T05:52:35.762Z",
    //             "updatedAt": "2024-11-12T16:14:54.039Z",
    //             "__v": 0,
    //             "id": "670f54a3e86c762e3cad6cb3"
    //         },
    //         "countInStock": 10,
    //         "rating": 4,
    //         "isFeatured": false,
    //         "discount": 10,
    //         "productRam": [],
    //         "size": [],
    //         "productWeight": [],
    //         "location": [
    //             {
    //                 "value": "All",
    //                 "label": "All",
    //                 "_id": "670a62fb3f4ee2e36a03f325",
    //                 "id": "670a62fb3f4ee2e36a03f325"
    //             },
    //             {
    //                 "value": "IN",
    //                 "label": "India",
    //                 "_id": "670cdbe51f039258ce56234e",
    //                 "id": "670cdbe51f039258ce56234e"
    //             }
    //         ],
    //         "dateCreated": "2024-09-15T07:01:25.456Z",
    //         "__v": 0,
    //         "id": "66e6864549fb19355a7a0a9a"
    //     },
    //     {
    //         "_id": "66e6875c49fb19355a7a0b73",
    //         "name": "The Gianna Ring",
    //         "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    //         "images": [
    //             "The_Gianna_Ring-1.webp"
    //         ],
    //         "brand": "Promise Collection",
    //         "price": 650,
    //         "oldPrice": 780,
    //         "catName": "Jewellery",
    //         "catId": "6728977fddcbbe211e109df9",
    //         "subCatId": "",
    //         "subCat": "",
    //         "subCatName": "",
    //         "category": {
    //             "_id": "6728977fddcbbe211e109df9",
    //             "name": "Jewellery",
    //             "slug": "Jewellery",
    //             "images": [
    //                 "fhttps://res.cloudinary.com/dkgonwhvj/image/upload/v1731428061/1731428060565_jw.png"
    //             ],
    //             "color": "#d3ffd9",
    //             "createdAt": "2024-11-04T09:44:31.038Z",
    //             "updatedAt": "2024-11-27T04:38:58.700Z",
    //             "__v": 0,
    //             "id": "6728977fddcbbe211e109df9"
    //         },
    //         "countInStock": 1500,
    //         "rating": 4,
    //         "isFeatured": false,
    //         "discount": 12,
    //         "productRam": [],
    //         "size": [],
    //         "productWeight": [],
    //         "location": [
    //             {
    //                 "value": "All",
    //                 "label": "All",
    //                 "_id": "670a63033f4ee2e36a03f366",
    //                 "id": "670a63033f4ee2e36a03f366"
    //             },
    //             {
    //                 "value": "IN",
    //                 "label": "India",
    //                 "_id": "670cdbc11f039258ce56227a",
    //                 "id": "670cdbc11f039258ce56227a"
    //             },
    //             {
    //                 "value": "PK",
    //                 "label": "Pakistan",
    //                 "_id": "670cdbc11f039258ce56227b",
    //                 "id": "670cdbc11f039258ce56227b"
    //             }
    //         ],
    //         "dateCreated": "2024-09-15T07:06:04.316Z",
    //         "__v": 0,
    //         "id": "66e6875c49fb19355a7a0b73"
    //     },
    //     {
    //         "_id": "66e688ed49fb19355a7a0bb7",
    //         "name": "NEW GOLDEN LONG JHUMKI EARRING",
    //         "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    //         "images": [
    //             "NEW_GOLDEN_LONG-1.jpg"
    //         ],
    //         "brand": "JSV CAHIRA",
    //         "price": 350,
    //         "oldPrice": 430,
    //         "catName": "Jewellery",
    //         "catId": "670f54e8e86c762e3cad6cd1",
    //         "subCatId": "",
    //         "subCat": "",
    //         "subCatName": "",
    //         "category": null,
    //         "countInStock": 10,
    //         "rating": 5,
    //         "isFeatured": false,
    //         "discount": 12,
    //         "productRam": [],
    //         "size": [],
    //         "productWeight": [],
    //         "location": [
    //             {
    //                 "value": "All",
    //                 "label": "All",
    //                 "_id": "670a63093f4ee2e36a03f38f",
    //                 "id": "670a63093f4ee2e36a03f38f"
    //             },
    //             {
    //                 "value": "IN",
    //                 "label": "India",
    //                 "_id": "670ce0911f039258ce563288",
    //                 "id": "670ce0911f039258ce563288"
    //             }
    //         ],
    //         "dateCreated": "2024-09-15T07:12:45.320Z",
    //         "__v": 0,
    //         "id": "66e688ed49fb19355a7a0bb7"
    //     },
    //     {
    //         "_id": "66e6899b49fb19355a7a0bef",
    //         "name": "VIBRANCE Jewellery Earrings for Women Oxidised Silver Jhumka earrings for Girls and Women",
    //         "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    //         "images": [
    //             "VIBRANCE_Jewell-1.webp",
    //             "VIBRANCE_Jewell-2.webp"
    //         ],
    //         "brand": "VIBRANCE",
    //         "price": 340,
    //         "oldPrice": 370,
    //         "catName": "Jewellery",
    //         "catId": "6728977fddcbbe211e109df9",
    //         "subCatId": "",
    //         "subCat": "",
    //         "subCatName": "",
    //         "category": {
    //             "_id": "6728977fddcbbe211e109df9",
    //             "name": "Jewellery",
    //             "slug": "Jewellery",
    //             "images": [
    //                 "fhttps://res.cloudinary.com/dkgonwhvj/image/upload/v1731428061/1731428060565_jw.png"
    //             ],
    //             "color": "#d3ffd9",
    //             "createdAt": "2024-11-04T09:44:31.038Z",
    //             "updatedAt": "2024-11-27T04:38:58.700Z",
    //             "__v": 0,
    //             "id": "6728977fddcbbe211e109df9"
    //         },
    //         "countInStock": 12,
    //         "rating": 4,
    //         "isFeatured": false,
    //         "discount": 10,
    //         "productRam": [],
    //         "size": [],
    //         "productWeight": [],
    //         "location": [
    //             {
    //                 "value": "All",
    //                 "label": "All",
    //                 "_id": "670a630e3f4ee2e36a03f3b8",
    //                 "id": "670a630e3f4ee2e36a03f3b8"
    //             },
    //             {
    //                 "value": "IN",
    //                 "label": "India",
    //                 "_id": "670ce05f1f039258ce5631ab",
    //                 "id": "670ce05f1f039258ce5631ab"
    //             }
    //         ],
    //         "dateCreated": "2024-09-15T07:15:39.101Z",
    //         "__v": 0,
    //         "id": "66e6899b49fb19355a7a0bef"
    //     },
    //     {
    //         "_id": "66e68a4549fb19355a7a0c1b",
    //         "name": "SIRIMIRI SMER-1011 German Silver Drops & Danglers",
    //         "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    //         "images": [
    //             "SIRIMIRI_SMER-1-1.jpg"
    //         ],
    //         "brand": "SIRIMIRI",
    //         "price": 260,
    //         "oldPrice": 290,
    //         "catName": "Jewellery",
    //         "catId": "6728977fddcbbe211e109df9",
    //         "subCatId": "",
    //         "subCat": "",
    //         "subCatName": "",
    //         "category": {
    //             "_id": "6728977fddcbbe211e109df9",
    //             "name": "Jewellery",
    //             "slug": "Jewellery",
    //             "images": [
    //                 "fhttps://res.cloudinary.com/dkgonwhvj/image/upload/v1731428061/1731428060565_jw.png"
    //             ],
    //             "color": "#d3ffd9",
    //             "createdAt": "2024-11-04T09:44:31.038Z",
    //             "updatedAt": "2024-11-27T04:38:58.700Z",
    //             "__v": 0,
    //             "id": "6728977fddcbbe211e109df9"
    //         },
    //         "countInStock": 100,
    //         "rating": 4,
    //         "isFeatured": false,
    //         "discount": 12,
    //         "productRam": [],
    //         "size": [],
    //         "productWeight": [],
    //         "location": [
    //             {
    //                 "value": "All",
    //                 "label": "All",
    //                 "_id": "670a63133f4ee2e36a03f3e1",
    //                 "id": "670a63133f4ee2e36a03f3e1"
    //             },
    //             {
    //                 "value": "IN",
    //                 "label": "India",
    //                 "_id": "670ce0161f039258ce5630cf",
    //                 "id": "670ce0161f039258ce5630cf"
    //             }
    //         ],
    //         "dateCreated": "2024-09-15T07:18:29.173Z",
    //         "__v": 0,
    //         "id": "66e68a4549fb19355a7a0c1b"
    //     },
    //     {
    //         "_id": "66e68b1049fb19355a7a0c4e",
    //         "name": "Zandu Chyavanprashad With No Added Sugar 900 gm",
    //         "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    //         "images": [
    //             "Zandu_Chyavanpr-1.webp",
    //             "Zandu_Chyavanpr-2.jpg"
    //         ],
    //         "brand": "Zandu",
    //         "price": 480,
    //         "oldPrice": 520,
    //         "catName": "Groceries",
    //         "catId": "670f54a3e86c762e3cad6cb3",
    //         "subCatId": "",
    //         "subCat": "",
    //         "subCatName": "",
    //         "category": {
    //             "_id": "670f54a3e86c762e3cad6cb3",
    //             "name": "Groceries",
    //             "slug": "Groceries",
    //             "images": [
    //                 "fhttps://res.cloudinary.com/dkgonwhvj/image/upload/v1731428092/1731428090930_gro.png"
    //             ],
    //             "color": "#ffe8f8",
    //             "createdAt": "2024-10-16T05:52:35.762Z",
    //             "updatedAt": "2024-11-12T16:14:54.039Z",
    //             "__v": 0,
    //             "id": "670f54a3e86c762e3cad6cb3"
    //         },
    //         "countInStock": 1200,
    //         "rating": 5,
    //         "isFeatured": false,
    //         "discount": 12,
    //         "productRam": [],
    //         "size": [],
    //         "productWeight": [],
    //         "location": [
    //             {
    //                 "value": "All",
    //                 "label": "All",
    //                 "_id": "670a63173f4ee2e36a03f40a",
    //                 "id": "670a63173f4ee2e36a03f40a"
    //             },
    //             {
    //                 "value": "IN",
    //                 "label": "India",
    //                 "_id": "670a7fe6fa94c7ca12096a98",
    //                 "id": "670a7fe6fa94c7ca12096a98"
    //             }
    //         ],
    //         "dateCreated": "2024-09-15T07:21:52.774Z",
    //         "__v": 0,
    //         "id": "66e68b1049fb19355a7a0c4e"
    //     },
    //     {
    //         "_id": "66e68c51e51aa3db51455710",
    //         "name": "Conbre MultipleXR2 Pro {Upgraded} HD Smart WiFi Wireless IP CCTV Security Camera | Night Vision | 2-Way Audio | Support 64 GB Micro SD Card Slot",
    //         "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    //         "images": [
    //             "Conbre_Multiple-1.webp",
    //             "Conbre_Multiple-2.jpg"
    //         ],
    //         "brand": "Conbre",
    //         "price": 1450,
    //         "oldPrice": 1760,
    //         "catName": "Electronics",
    //         "catId": "670f5463e86c762e3cad6c95",
    //         "subCatId": "67415b2cf1e1da2b3de3ba91",
    //         "subCat": "Cameras",
    //         "subCatName": "Cameras",
    //         "category": {
    //             "_id": "670f5463e86c762e3cad6c95",
    //             "name": "Electronics",
    //             "slug": "Electronics",
    //             "images": [
    //                 "fhttps://res.cloudinary.com/dkgonwhvj/image/upload/v1731428179/1731428178306_ele.png"
    //             ],
    //             "color": "#feefea",
    //             "createdAt": "2024-10-16T05:51:31.207Z",
    //             "updatedAt": "2024-11-12T16:16:20.193Z",
    //             "__v": 0,
    //             "id": "670f5463e86c762e3cad6c95"
    //         },
    //         "countInStock": 1200,
    //         "rating": 5,
    //         "isFeatured": false,
    //         "discount": 12,
    //         "productRam": [],
    //         "size": [],
    //         "productWeight": [],
    //         "location": [
    //             {
    //                 "value": "All",
    //                 "label": "All",
    //                 "_id": "670a631b3f4ee2e36a03f433",
    //                 "id": "670a631b3f4ee2e36a03f433"
    //             },
    //             {
    //                 "value": "IN",
    //                 "label": "India",
    //                 "_id": "670cdf9a1f039258ce562f0e",
    //                 "id": "670cdf9a1f039258ce562f0e"
    //             }
    //         ],
    //         "dateCreated": "2024-09-15T07:27:13.034Z",
    //         "__v": 0,
    //         "id": "66e68c51e51aa3db51455710"
    //     },
    //     {
    //         "_id": "66e68d24e51aa3db51455749",
    //         "name": "Sony Alpha ILCE-7M3 Full-Frame 24.2MP Mirrorless Digital SLR Camera Body (4K Full Frame, Real-Time Eye Auto Focus, 4K Vlogging Camera, Tiltable LCD, Low Light Camera), Black",
    //         "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    //         "images": [
    //             "Sony_Alpha_ILCE-1.webp",
    //             "Sony_Alpha_ILCE-2.webp"
    //         ],
    //         "brand": "Sony",
    //         "price": 45000,
    //         "oldPrice": 90000,
    //         "catName": "Electronics",
    //         "catId": "670f5463e86c762e3cad6c95",
    //         "subCatId": "67415b2cf1e1da2b3de3ba91",
    //         "subCat": "Cameras",
    //         "subCatName": "Cameras",
    //         "category": {
    //             "_id": "670f5463e86c762e3cad6c95",
    //             "name": "Electronics",
    //             "slug": "Electronics",
    //             "images": [
    //                 "fhttps://res.cloudinary.com/dkgonwhvj/image/upload/v1731428179/1731428178306_ele.png"
    //             ],
    //             "color": "#feefea",
    //             "createdAt": "2024-10-16T05:51:31.207Z",
    //             "updatedAt": "2024-11-12T16:16:20.193Z",
    //             "__v": 0,
    //             "id": "670f5463e86c762e3cad6c95"
    //         },
    //         "countInStock": 1200,
    //         "rating": 5,
    //         "isFeatured": false,
    //         "discount": 14,
    //         "productRam": [],
    //         "size": [],
    //         "productWeight": [],
    //         "location": [
    //             {
    //                 "value": "All",
    //                 "label": "All",
    //                 "_id": "670a63213f4ee2e36a03f45c",
    //                 "id": "670a63213f4ee2e36a03f45c"
    //             },
    //             {
    //                 "value": "IN",
    //                 "label": "India",
    //                 "_id": "670cdf6b1f039258ce562e34",
    //                 "id": "670cdf6b1f039258ce562e34"
    //             }
    //         ],
    //         "dateCreated": "2024-09-15T07:30:44.015Z",
    //         "__v": 0,
    //         "id": "66e68d24e51aa3db51455749"
    //     },
    //     {
    //         "_id": "66e68e27e51aa3db514558cd",
    //         "name": "boAt Wave Fury Smartwatch with 4.64 cm (1.83 inch) HD Display, Advanced Bluetooth Calling, Functional Crown, 50+ Sports mode, IP67 Dust, Sweat & Splash Resistant (Active Black)",
    //         "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    //         "images": [
    //             "boAt_Wave_Fury_-1.webp",
    //             "boAt_Wave_Fury_-2.webp"
    //         ],
    //         "brand": "boAt",
    //         "price": 1800,
    //         "oldPrice": 2100,
    //         "catName": "Electronics",
    //         "catId": "670f5463e86c762e3cad6c95",
    //         "subCatId": "67415b21f1e1da2b3de3ba8b",
    //         "subCat": "Smart Watch Accessories",
    //         "subCatName": "Smart Watch Accessories",
    //         "category": {
    //             "_id": "670f5463e86c762e3cad6c95",
    //             "name": "Electronics",
    //             "slug": "Electronics",
    //             "images": [
    //                 "fhttps://res.cloudinary.com/dkgonwhvj/image/upload/v1731428179/1731428178306_ele.png"
    //             ],
    //             "color": "#feefea",
    //             "createdAt": "2024-10-16T05:51:31.207Z",
    //             "updatedAt": "2024-11-12T16:16:20.193Z",
    //             "__v": 0,
    //             "id": "670f5463e86c762e3cad6c95"
    //         },
    //         "countInStock": 1200,
    //         "rating": 5,
    //         "isFeatured": true,
    //         "discount": 8,
    //         "productRam": [],
    //         "size": [],
    //         "productWeight": [],
    //         "location": [
    //             {
    //                 "value": "All",
    //                 "label": "All",
    //                 "_id": "670a63343f4ee2e36a03f485",
    //                 "id": "670a63343f4ee2e36a03f485"
    //             },
    //             {
    //                 "value": "IN",
    //                 "label": "India",
    //                 "_id": "670cdf3a1f039258ce562d5b",
    //                 "id": "670cdf3a1f039258ce562d5b"
    //             }
    //         ],
    //         "dateCreated": "2024-09-15T07:35:03.008Z",
    //         "__v": 0,
    //         "id": "66e68e27e51aa3db514558cd"
    //     },
    //     {
    //         "_id": "66e68ecae51aa3db5145595b",
    //         "name": "Morden Smart Watch for Kids Men Women Boys Girls D116 Water Proof Touchscreen Smart Watch Bluetooth 1.44 HD Screen Smart Watch with Daily Activity Tracker, Heart Rate Sensor, Sleep Monitor - Black",
    //         "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    //         "images": [
    //             "Morden_Smart_Wa-1.webp"
    //         ],
    //         "brand": "Morden",
    //         "price": 2500,
    //         "oldPrice": 2700,
    //         "catName": "Electronics",
    //         "catId": "670f5463e86c762e3cad6c95",
    //         "subCatId": "67415b21f1e1da2b3de3ba8b",
    //         "subCat": "Smart Watch Accessories",
    //         "subCatName": "Smart Watch Accessories",
    //         "category": {
    //             "_id": "670f5463e86c762e3cad6c95",
    //             "name": "Electronics",
    //             "slug": "Electronics",
    //             "images": [
    //                 "fhttps://res.cloudinary.com/dkgonwhvj/image/upload/v1731428179/1731428178306_ele.png"
    //             ],
    //             "color": "#feefea",
    //             "createdAt": "2024-10-16T05:51:31.207Z",
    //             "updatedAt": "2024-11-12T16:16:20.193Z",
    //             "__v": 0,
    //             "id": "670f5463e86c762e3cad6c95"
    //         },
    //         "countInStock": 1400,
    //         "rating": 2,
    //         "isFeatured": true,
    //         "discount": 12,
    //         "productRam": [],
    //         "size": [],
    //         "productWeight": [],
    //         "location": [
    //             {
    //                 "value": "All",
    //                 "label": "All",
    //                 "_id": "670a63393f4ee2e36a03f4ae",
    //                 "id": "670a63393f4ee2e36a03f4ae"
    //             },
    //             {
    //                 "value": "IN",
    //                 "label": "India",
    //                 "_id": "670cdf0b1f039258ce562c83",
    //                 "id": "670cdf0b1f039258ce562c83"
    //             }
    //         ],
    //         "dateCreated": "2024-09-15T07:37:46.263Z",
    //         "__v": 0,
    //         "id": "66e68ecae51aa3db5145595b"
    //     },
    //     {
    //         "_id": "66e6ffb410ba0832baba6689",
    //         "name": "Mars HD 2IN1 Nutration For Skin Foundation Golden Beige-F07",
    //         "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    //         "images": [
    //             "Mars_HD_2IN1_Nu-1.webp",
    //             "Mars_HD_2IN1_Nu-2.jpg"
    //         ],
    //         "brand": "Wow Skin Science",
    //         "price": 190,
    //         "oldPrice": 210,
    //         "catName": "Beauty",
    //         "catId": "670f54b8e86c762e3cad6cbd",
    //         "subCatId": "",
    //         "subCat": "",
    //         "subCatName": "",
    //         "category": {
    //             "_id": "670f54b8e86c762e3cad6cbd",
    //             "name": "Beauty",
    //             "slug": "Beauty",
    //             "images": [
    //                 "fhttps://res.cloudinary.com/dkgonwhvj/image/upload/v1731428082/1731428081168_beauty.png"
    //             ],
    //             "color": "#e3fffa",
    //             "createdAt": "2024-10-16T05:52:56.619Z",
    //             "updatedAt": "2024-11-18T11:02:10.300Z",
    //             "__v": 0,
    //             "id": "670f54b8e86c762e3cad6cbd"
    //         },
    //         "countInStock": 150,
    //         "rating": 5,
    //         "isFeatured": false,
    //         "discount": 12,
    //         "productRam": [],
    //         "size": [],
    //         "productWeight": [],
    //         "location": [
    //             {
    //                 "value": "All",
    //                 "label": "All",
    //                 "_id": "670a63b03f4ee2e36a03f4fb",
    //                 "id": "670a63b03f4ee2e36a03f4fb"
    //             },
    //             {
    //                 "value": "IN",
    //                 "label": "India",
    //                 "_id": "670cdecb1f039258ce562bac",
    //                 "id": "670cdecb1f039258ce562bac"
    //             }
    //         ],
    //         "dateCreated": "2024-09-15T15:39:32.052Z",
    //         "__v": 0,
    //         "id": "66e6ffb410ba0832baba6689"
    //     },
    //     {
    //         "_id": "66e7fe39cd09356c5b465f45",
    //         "name": "pink solid casual shirt",
    //         "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
    //         "images": [
    //             "pink_solid_casu-1.webp",
    //             "pink_solid_casu-2.webp"
    //         ],
    //         "brand": "V-Mart",
    //         "price": 459,
    //         "oldPrice": 495,
    //         "catName": "Fashion",
    //         "catId": "670f544ce86c762e3cad6c8b",
    //         "subCatId": "673ed528cab231596bf0667d",
    //         "subCat": "Men",
    //         "subCatName": "Men",
    //         "category": {
    //             "_id": "670f544ce86c762e3cad6c8b",
    //             "name": "Fashion",
    //             "slug": "Fashion",
    //             "images": [
    //                 "fhttps://res.cloudinary.com/dkgonwhvj/image/upload/v1731428187/1731428186288_fash.png"
    //             ],
    //             "color": "#ecffec",
    //             "createdAt": "2024-10-16T05:51:08.266Z",
    //             "updatedAt": "2024-11-12T16:16:28.229Z",
    //             "__v": 0,
    //             "id": "670f544ce86c762e3cad6c8b"
    //         },
    //         "countInStock": 150,
    //         "rating": 4,
    //         "isFeatured": true,
    //         "discount": 10,
    //         "productRam": [],
    //         "size": [
    //             "S",
    //             "M",
    //             "L",
    //             "XL"
    //         ],
    //         "productWeight": [],
    //         "location": [
    //             {
    //                 "value": "All",
    //                 "label": "All",
    //                 "_id": "670a63ca3f4ee2e36a03f52c",
    //                 "id": "670a63ca3f4ee2e36a03f52c"
    //             },
    //             {
    //                 "value": "IN",
    //                 "label": "India",
    //                 "_id": "670cde281f039258ce562ad6",
    //                 "id": "670cde281f039258ce562ad6"
    //             }
    //         ],
    //         "dateCreated": "2024-09-16T09:45:29.901Z",
    //         "__v": 0,
    //         "id": "66e7fe39cd09356c5b465f45"
    //     },
    //     {
    //         "_id": "66e8eafa3decb32ae2a77c6e",
    //         "name": "Jobayed Hossain",
    //         "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    //         "images": [
    //             "Jobayed_Hossain-1.jpg",
    //             "Jobayed_Hossain-2.jpg",
    //             "Jobayed_Hossain-3.jpg",
    //             "Jobayed_Hossain-4.jpg",
    //             "Jobayed_Hossain-5.jpg",
    //             "Jobayed_Hossain-6.jpg"
    //         ],
    //         "brand": "V-Mart",
    //         "price": 460,
    //         "oldPrice": 490,
    //         "catName": "Fashion",
    //         "catId": "670f544ce86c762e3cad6c8b",
    //         "subCatId": "673ed528cab231596bf0667d",
    //         "subCat": "Men",
    //         "subCatName": "Men",
    //         "category": {
    //             "_id": "670f544ce86c762e3cad6c8b",
    //             "name": "Fashion",
    //             "slug": "Fashion",
    //             "images": [
    //                 "fhttps://res.cloudinary.com/dkgonwhvj/image/upload/v1731428187/1731428186288_fash.png"
    //             ],
    //             "color": "#ecffec",
    //             "createdAt": "2024-10-16T05:51:08.266Z",
    //             "updatedAt": "2024-11-12T16:16:28.229Z",
    //             "__v": 0,
    //             "id": "670f544ce86c762e3cad6c8b"
    //         },
    //         "countInStock": 1800,
    //         "rating": 5,
    //         "isFeatured": true,
    //         "discount": 10,
    //         "productRam": [],
    //         "size": [
    //             "S",
    //             "M",
    //             "L",
    //             "XL"
    //         ],
    //         "productWeight": [],
    //         "location": [
    //             {
    //                 "value": "All",
    //                 "label": "All",
    //                 "_id": "670a63d13f4ee2e36a03f56f",
    //                 "id": "670a63d13f4ee2e36a03f56f"
    //             },
    //             {
    //                 "value": "IN",
    //                 "label": "India",
    //                 "_id": "670aa0b31a0c5f1ae830f869",
    //                 "id": "670aa0b31a0c5f1ae830f869"
    //             },
    //             {
    //                 "value": "PK",
    //                 "label": "Pakistan",
    //                 "_id": "670aa0b31a0c5f1ae830f86a",
    //                 "id": "670aa0b31a0c5f1ae830f86a"
    //             }
    //         ],
    //         "dateCreated": "2024-09-17T02:35:38.759Z",
    //         "__v": 0,
    //         "id": "66e8eafa3decb32ae2a77c6e"
    //     },
    //     {
    //         "_id": "66e8ed483decb32ae2a77ca6",
    //         "name": "beatXP Unbound Era 2.01\" Super AMOLED Display Bluetooth Calling Smart Watch, Metal Body, Rotary Crown, 410 * 502px, 1000 Nits, 60Hz Refresh Rate, 100+ Sports Modes (Black)",
    //         "description": "Introducing the beatXP Unbound Era smartwatch - the latest in smartwatch technology. This device has an impressive 2.01-inch Super AMOLED Display with a 60Hz refresh rate and a peak brightness of 1000 Nits. It also features an Always On Display. The EzyPair Technology feature allows for seamless communication via Advanced Bluetooth calling, without requiring a phone.",
    //         "images": [
    //             "beatXP_Unbound_-1.webp",
    //             "beatXP_Unbound_-2.webp"
    //         ],
    //         "brand": "beatXP",
    //         "price": 1200,
    //         "oldPrice": 1250,
    //         "catName": "Electronics",
    //         "catId": "670f5463e86c762e3cad6c95",
    //         "subCatId": "67415b21f1e1da2b3de3ba8b",
    //         "subCat": "Smart Watch Accessories",
    //         "subCatName": "Smart Watch Accessories",
    //         "category": {
    //             "_id": "670f5463e86c762e3cad6c95",
    //             "name": "Electronics",
    //             "slug": "Electronics",
    //             "images": [
    //                 "fhttps://res.cloudinary.com/dkgonwhvj/image/upload/v1731428179/1731428178306_ele.png"
    //             ],
    //             "color": "#feefea",
    //             "createdAt": "2024-10-16T05:51:31.207Z",
    //             "updatedAt": "2024-11-12T16:16:20.193Z",
    //             "__v": 0,
    //             "id": "670f5463e86c762e3cad6c95"
    //         },
    //         "countInStock": 10,
    //         "rating": 5,
    //         "isFeatured": true,
    //         "discount": 10,
    //         "productRam": [],
    //         "size": [],
    //         "productWeight": [],
    //         "location": [
    //             {
    //                 "value": "All",
    //                 "label": "All",
    //                 "_id": "670a63d63f4ee2e36a03f5d0",
    //                 "id": "670a63d63f4ee2e36a03f5d0"
    //             },
    //             {
    //                 "value": "IN",
    //                 "label": "India",
    //                 "_id": "670ce3911f039258ce563a99",
    //                 "id": "670ce3911f039258ce563a99"
    //             }
    //         ],
    //         "dateCreated": "2024-09-17T02:45:28.831Z",
    //         "__v": 0,
    //         "id": "66e8ed483decb32ae2a77ca6"
    //     },
    //     {
    //         "_id": "66e8ee313decb32ae2a77cfc",
    //         "name": "vHP 15-fb0082AX Victus Gaming Laptop(AMD Ryzen5-5600H /8GB/512GB SSD/4 GB Nvidia GeForce RTX 3050 Graphics/Windows 11/MSO/FHD), 39.6 cm (15.6 inch)",
    //         "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    //         "images": [
    //             "vHP_15-fb0082AX-1.jpg",
    //             "vHP_15-fb0082AX-2.jpg"
    //         ],
    //         "brand": "HP",
    //         "price": 25000,
    //         "oldPrice": 28000,
    //         "catName": "Electronics",
    //         "catId": "670f5463e86c762e3cad6c95",
    //         "subCatId": "673ed55d2ec02680644f2793",
    //         "subCat": "Computers and Accessories",
    //         "subCatName": "Laptops",
    //         "category": {
    //             "_id": "670f5463e86c762e3cad6c95",
    //             "name": "Electronics",
    //             "slug": "Electronics",
    //             "images": [
    //                 "fhttps://res.cloudinary.com/dkgonwhvj/image/upload/v1731428179/1731428178306_ele.png"
    //             ],
    //             "color": "#feefea",
    //             "createdAt": "2024-10-16T05:51:31.207Z",
    //             "updatedAt": "2024-11-12T16:16:20.193Z",
    //             "__v": 0,
    //             "id": "670f5463e86c762e3cad6c95"
    //         },
    //         "countInStock": 100,
    //         "rating": 5,
    //         "isFeatured": false,
    //         "discount": 10,
    //         "productRam": [
    //             "6GB",
    //             "8GB",
    //             "10GB"
    //         ],
    //         "size": [],
    //         "productWeight": [],
    //         "location": [
    //             {
    //                 "value": "All",
    //                 "label": "All",
    //                 "_id": "670a63db3f4ee2e36a03f5f9",
    //                 "id": "670a63db3f4ee2e36a03f5f9"
    //             },
    //             {
    //                 "value": "IN",
    //                 "label": "India",
    //                 "_id": "670ce35d1f039258ce5639b3",
    //                 "id": "670ce35d1f039258ce5639b3"
    //             }
    //         ],
    //         "dateCreated": "2024-09-17T02:49:21.389Z",
    //         "__v": 0,
    //         "id": "66e8ee313decb32ae2a77cfc"
    //     },
    //     {
    //         "_id": "66e8ef403decb32ae2a77db4",
    //         "name": "Glowworld Women Blue Printed Cotton Kurta",
    //         "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    //         "images": [
    //             "Glowworld_Women-1.webp",
    //             "Glowworld_Women-2.jpg",
    //             "Glowworld_Women-3.jpg"
    //         ],
    //         "brand": "Glowworld",
    //         "price": 460,
    //         "oldPrice": 480,
    //         "catName": "Fashion",
    //         "catId": "670f544ce86c762e3cad6c8b",
    //         "subCatId": "673ed52fcab231596bf06684",
    //         "subCat": "Women",
    //         "subCatName": "Women",
    //         "category": {
    //             "_id": "670f544ce86c762e3cad6c8b",
    //             "name": "Fashion",
    //             "slug": "Fashion",
    //             "images": [
    //                 "fhttps://res.cloudinary.com/dkgonwhvj/image/upload/v1731428187/1731428186288_fash.png"
    //             ],
    //             "color": "#ecffec",
    //             "createdAt": "2024-10-16T05:51:08.266Z",
    //             "updatedAt": "2024-11-12T16:16:28.229Z",
    //             "__v": 0,
    //             "id": "670f544ce86c762e3cad6c8b"
    //         },
    //         "countInStock": 1500,
    //         "rating": 4,
    //         "isFeatured": true,
    //         "discount": 10,
    //         "productRam": [],
    //         "size": [
    //             "S",
    //             "M",
    //             "L"
    //         ],
    //         "productWeight": [],
    //         "location": [
    //             {
    //                 "value": "All",
    //                 "label": "All",
    //                 "_id": "670a63e03f4ee2e36a03f622",
    //                 "id": "670a63e03f4ee2e36a03f622"
    //             },
    //             {
    //                 "value": "IN",
    //                 "label": "India",
    //                 "_id": "670ce2b11f039258ce5638ce",
    //                 "id": "670ce2b11f039258ce5638ce"
    //             }
    //         ],
    //         "dateCreated": "2024-09-17T02:53:52.237Z",
    //         "__v": 0,
    //         "id": "66e8ef403decb32ae2a77db4"
    //     },
    //     {
    //         "_id": "66e8f0793decb32ae2a77e65",
    //         "name": "Siril Georgette Brown Color Saree with Blouse piece",
    //         "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    //         "images": [
    //             "Siril_Georgette-1.webp",
    //             "Siril_Georgette-2.webp",
    //             "Siril_Georgette-3.webp",
    //             "Siril_Georgette-4.webp"
    //         ],
    //         "brand": "SIRIL",
    //         "price": 450,
    //         "oldPrice": 490,
    //         "catName": "Fashion",
    //         "catId": "670f544ce86c762e3cad6c8b",
    //         "subCatId": "673ed52fcab231596bf06684",
    //         "subCat": "Women",
    //         "subCatName": "Women",
    //         "category": {
    //             "_id": "670f544ce86c762e3cad6c8b",
    //             "name": "Fashion",
    //             "slug": "Fashion",
    //             "images": [
    //                 "fhttps://res.cloudinary.com/dkgonwhvj/image/upload/v1731428187/1731428186288_fash.png"
    //             ],
    //             "color": "#ecffec",
    //             "createdAt": "2024-10-16T05:51:08.266Z",
    //             "updatedAt": "2024-11-12T16:16:28.229Z",
    //             "__v": 0,
    //             "id": "670f544ce86c762e3cad6c8b"
    //         },
    //         "countInStock": 100,
    //         "rating": 5,
    //         "isFeatured": false,
    //         "discount": 10,
    //         "productRam": [],
    //         "size": [
    //             "S",
    //             "M",
    //             "L"
    //         ],
    //         "productWeight": [],
    //         "location": [
    //             {
    //                 "value": "All",
    //                 "label": "All",
    //                 "_id": "670a63e43f4ee2e36a03f64b",
    //                 "id": "670a63e43f4ee2e36a03f64b"
    //             },
    //             {
    //                 "value": "IN",
    //                 "label": "India",
    //                 "_id": "670ce2771f039258ce5637ea",
    //                 "id": "670ce2771f039258ce5637ea"
    //             }
    //         ],
    //         "dateCreated": "2024-09-17T02:59:05.066Z",
    //         "__v": 0,
    //         "id": "66e8f0793decb32ae2a77e65"
    //     },
    //     {
    //         "_id": "66ea3a08c017f4365fafc3e2",
    //         "name": "LIVE FASHION Black Women PU Sling Bag",
    //         "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    //         "images": [
    //             "LIVE_FASHION_Bl-1.jpg",
    //             "LIVE_FASHION_Bl-2.jpg"
    //         ],
    //         "brand": "LIVE FASHION",
    //         "price": 3500,
    //         "oldPrice": 450,
    //         "catName": "Bags",
    //         "catId": "670f5477e86c762e3cad6c9f",
    //         "subCatId": "66c0dfa43490222862ae78c1",
    //         "subCat": "Women",
    //         "subCatName": "Women",
    //         "category": {
    //             "_id": "670f5477e86c762e3cad6c9f",
    //             "name": "Bags",
    //             "slug": "Bags",
    //             "images": [
    //                 "fhttps://res.cloudinary.com/dkgonwhvj/image/upload/v1731428171/1731428170107_bag.png"
    //             ],
    //             "color": "#fdf0ff",
    //             "createdAt": "2024-10-16T05:51:51.640Z",
    //             "updatedAt": "2024-11-12T16:16:12.534Z",
    //             "__v": 0,
    //             "id": "670f5477e86c762e3cad6c9f"
    //         },
    //         "countInStock": 1500,
    //         "rating": 5,
    //         "isFeatured": true,
    //         "discount": 10,
    //         "productRam": [],
    //         "size": [],
    //         "productWeight": [],
    //         "location": [
    //             {
    //                 "value": "All",
    //                 "label": "All",
    //                 "_id": "670a63e93f4ee2e36a03f674",
    //                 "id": "670a63e93f4ee2e36a03f674"
    //             },
    //             {
    //                 "value": "IN",
    //                 "label": "India",
    //                 "_id": "670aa0081a0c5f1ae830f573",
    //                 "id": "670aa0081a0c5f1ae830f573"
    //             },
    //             {
    //                 "value": "PK",
    //                 "label": "Pakistan",
    //                 "_id": "670aa0081a0c5f1ae830f574",
    //                 "id": "670aa0081a0c5f1ae830f574"
    //             },
    //             {
    //                 "value": "BD",
    //                 "label": "Bangladesh",
    //                 "_id": "670aa0081a0c5f1ae830f575",
    //                 "id": "670aa0081a0c5f1ae830f575"
    //             }
    //         ],
    //         "dateCreated": "2024-09-18T02:25:12.268Z",
    //         "__v": 0,
    //         "id": "66ea3a08c017f4365fafc3e2"
    //     },
    //     {
    //         "_id": "66ea3ba5c017f4365fafc472",
    //         "name": "beatXP Vega X 1.43\" Super AMOLED Display, One-Tap BT 5.2 Calling, Metal Body, 60Hz Refresh Rate, WIRELESS CHARGING, AI Voice Assistant Smartwatch (Black)",
    //         "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    //         "images": [
    //             "beatXP_Vega_X_1-1.webp",
    //             "beatXP_Vega_X_1-2.jpg"
    //         ],
    //         "brand": "beatXP",
    //         "price": 1300,
    //         "oldPrice": 1350,
    //         "catName": "Electronics",
    //         "catId": "670f5463e86c762e3cad6c95",
    //         "subCatId": "67415b21f1e1da2b3de3ba8b",
    //         "subCat": "Smart Watch Accessories",
    //         "subCatName": "Smart Watch Accessories",
    //         "category": {
    //             "_id": "670f5463e86c762e3cad6c95",
    //             "name": "Electronics",
    //             "slug": "Electronics",
    //             "images": [
    //                 "fhttps://res.cloudinary.com/dkgonwhvj/image/upload/v1731428179/1731428178306_ele.png"
    //             ],
    //             "color": "#feefea",
    //             "createdAt": "2024-10-16T05:51:31.207Z",
    //             "updatedAt": "2024-11-12T16:16:20.193Z",
    //             "__v": 0,
    //             "id": "670f5463e86c762e3cad6c95"
    //         },
    //         "countInStock": 1500,
    //         "rating": 5,
    //         "isFeatured": false,
    //         "discount": 12,
    //         "productRam": [],
    //         "size": [],
    //         "productWeight": [],
    //         "location": [
    //             {
    //                 "value": "All",
    //                 "label": "All",
    //                 "_id": "670a63ed3f4ee2e36a03f69d",
    //                 "id": "670a63ed3f4ee2e36a03f69d"
    //             },
    //             {
    //                 "value": "IN",
    //                 "label": "India",
    //                 "_id": "670ce1d61f039258ce56361a",
    //                 "id": "670ce1d61f039258ce56361a"
    //             }
    //         ],
    //         "dateCreated": "2024-09-18T02:32:05.013Z",
    //         "__v": 0,
    //         "id": "66ea3ba5c017f4365fafc472"
    //     },
    //     {
    //         "_id": "66ea3f14c017f4365fafc692",
    //         "name": "Apple iPhone 15 256GB Black",
    //         "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    //         "images": [
    //             "Apple_iPhone_15-1.webp",
    //             "Apple_iPhone_15-2.webp",
    //             "Apple_iPhone_15-3.webp"
    //         ],
    //         "brand": "Apple",
    //         "price": 32000,
    //         "oldPrice": 33500,
    //         "catName": "Electronics",
    //         "catId": "670f5463e86c762e3cad6c95",
    //         "subCatId": "673ed5552ec02680644f278d",
    //         "subCat": "Mobiles",
    //         "subCatName": "Mobiles",
    //         "category": {
    //             "_id": "670f5463e86c762e3cad6c95",
    //             "name": "Electronics",
    //             "slug": "Electronics",
    //             "images": [
    //                 "fhttps://res.cloudinary.com/dkgonwhvj/image/upload/v1731428179/1731428178306_ele.png"
    //             ],
    //             "color": "#feefea",
    //             "createdAt": "2024-10-16T05:51:31.207Z",
    //             "updatedAt": "2024-11-12T16:16:20.193Z",
    //             "__v": 0,
    //             "id": "670f5463e86c762e3cad6c95"
    //         },
    //         "countInStock": 1500,
    //         "rating": 5,
    //         "isFeatured": false,
    //         "discount": 8,
    //         "productRam": [
    //             "8GB",
    //             "6GB"
    //         ],
    //         "size": [],
    //         "productWeight": [],
    //         "location": [
    //             {
    //                 "value": "All",
    //                 "label": "All",
    //                 "_id": "670a63f23f4ee2e36a03f6c6",
    //                 "id": "670a63f23f4ee2e36a03f6c6"
    //             },
    //             {
    //                 "value": "IN",
    //                 "label": "India",
    //                 "_id": "670ce1aa1f039258ce563536",
    //                 "id": "670ce1aa1f039258ce563536"
    //             },
    //             {
    //                 "value": "PK",
    //                 "label": "Pakistan",
    //                 "_id": "670ce1aa1f039258ce563537",
    //                 "id": "670ce1aa1f039258ce563537"
    //             }
    //         ],
    //         "dateCreated": "2024-09-18T02:46:44.870Z",
    //         "__v": 0,
    //         "id": "66ea3f14c017f4365fafc692"
    //     },
    //     {
    //         "_id": "670771e115f0a6583af1cbc1",
    //         "name": "Alt Lit Smartwatch with Bluetooth Calling, 1.85 Inch TFT Screen, IPX5 Water Resistance, Heart Rate, SPO2, Upto 7 days battery, Berry Blue",
    //         "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
    //         "images": [
    //             "Alt_Lit_Smartwa-1.webp",
    //             "Alt_Lit_Smartwa-2.webp"
    //         ],
    //         "brand": "ALT",
    //         "price": 2400,
    //         "oldPrice": 2700,
    //         "catName": "Electronics",
    //         "catId": "670f5463e86c762e3cad6c95",
    //         "subCatId": "67415b21f1e1da2b3de3ba8b",
    //         "subCat": "Smart Watch Accessories",
    //         "subCatName": "Smart Watch Accessories",
    //         "category": {
    //             "_id": "670f5463e86c762e3cad6c95",
    //             "name": "Electronics",
    //             "slug": "Electronics",
    //             "images": [
    //                 "fhttps://res.cloudinary.com/dkgonwhvj/image/upload/v1731428179/1731428178306_ele.png"
    //             ],
    //             "color": "#feefea",
    //             "createdAt": "2024-10-16T05:51:31.207Z",
    //             "updatedAt": "2024-11-12T16:16:20.193Z",
    //             "__v": 0,
    //             "id": "670f5463e86c762e3cad6c95"
    //         },
    //         "countInStock": 1500,
    //         "rating": 5,
    //         "isFeatured": true,
    //         "discount": 12,
    //         "productRam": [],
    //         "size": [],
    //         "productWeight": [],
    //         "location": [
    //             {
    //                 "value": "All",
    //                 "label": "All",
    //                 "_id": "670a63f63f4ee2e36a03f6ef",
    //                 "id": "670a63f63f4ee2e36a03f6ef"
    //             },
    //             {
    //                 "value": "IN",
    //                 "label": "India",
    //                 "_id": "670a6f2b150631d6b104798d",
    //                 "id": "670a6f2b150631d6b104798d"
    //             },
    //             {
    //                 "value": "AD",
    //                 "label": "Andorra",
    //                 "_id": "670a6ff4150631d6b104811b",
    //                 "id": "670a6ff4150631d6b104811b"
    //             }
    //         ],
    //         "dateCreated": "2024-10-10T06:19:13.027Z",
    //         "__v": 0,
    //         "id": "670771e115f0a6583af1cbc1"
    //     },
    //     {
    //         "_id": "670a5a647b760ed48b5b6fbe",
    //         "name": "Buy New Trend Women Black Cotton Blend Top | top for women | women top | top for women | women top",
    //         "description": "For girl's seeking a ethnic set that melds classic charm with a contemporary twist, Trilok Fab flared ethnic gown is a perfect choice. It is designed with both comfort and style in mind, this maxi length gown is made to feel luxurious against the skin. The flowing flares allow for ease of movement, ensuring you feel as good as you look throughout the entire event. Despite the occasion that you want to wear it for, this dress leaves a lasting impression of refined elegance wherever you go.",
    //         "images": [
    //             "Buy_New_Trend_W-1.jpg",
    //             "Buy_New_Trend_W-2.jpg",
    //             "Buy_New_Trend_W-3.jpg",
    //             "Buy_New_Trend_W-4.jpg"
    //         ],
    //         "brand": "Trilok Fab",
    //         "price": 1500,
    //         "oldPrice": 2200,
    //         "catName": "Fashion",
    //         "catId": "670f544ce86c762e3cad6c8b",
    //         "subCatId": "673ed52fcab231596bf06684",
    //         "subCat": "Girls",
    //         "subCatName": "Women",
    //         "category": {
    //             "_id": "670f544ce86c762e3cad6c8b",
    //             "name": "Fashion",
    //             "slug": "Fashion",
    //             "images": [
    //                 "fhttps://res.cloudinary.com/dkgonwhvj/image/upload/v1731428187/1731428186288_fash.png"
    //             ],
    //             "color": "#ecffec",
    //             "createdAt": "2024-10-16T05:51:08.266Z",
    //             "updatedAt": "2024-11-12T16:16:28.229Z",
    //             "__v": 0,
    //             "id": "670f544ce86c762e3cad6c8b"
    //         },
    //         "countInStock": 150,
    //         "rating": 5,
    //         "isFeatured": false,
    //         "discount": 10,
    //         "productRam": [],
    //         "size": [
    //             "M",
    //             "L",
    //             "XL"
    //         ],
    //         "productWeight": [],
    //         "location": [
    //             {
    //                 "value": "All",
    //                 "label": "All",
    //                 "_id": "670a5a647b760ed48b5b6fbf",
    //                 "id": "670a5a647b760ed48b5b6fbf"
    //             },
    //             {
    //                 "value": "IN",
    //                 "label": "India",
    //                 "_id": "670a5a647b760ed48b5b6fc0",
    //                 "id": "670a5a647b760ed48b5b6fc0"
    //             },
    //             {
    //                 "value": "AF",
    //                 "label": "Afghanistan",
    //                 "_id": "670a5dd47b760ed48b5b7031",
    //                 "id": "670a5dd47b760ed48b5b7031"
    //             },
    //             {
    //                 "value": "BD",
    //                 "label": "Bangladesh",
    //                 "_id": "670ce0cb1f039258ce56336c",
    //                 "id": "670ce0cb1f039258ce56336c"
    //             },
    //             {
    //                 "value": "NG",
    //                 "label": "Nigeria",
    //                 "_id": "670ce0cb1f039258ce56336d",
    //                 "id": "670ce0cb1f039258ce56336d"
    //             }
    //         ],
    //         "dateCreated": "2024-10-12T11:15:48.297Z",
    //         "__v": 0,
    //         "id": "670a5a647b760ed48b5b6fbe"
    //     },
    //     {
    //         "_id": "670b4d0961347e5c638f893f",
    //         "name": "women red round neck kurta pant set with dupatta",
    //         "description": "Save your time mixing and matching various ethnic pieces and invest in beautiful kurta pant set ethnic sets from Ishin brands that give a well-fitted look in all styles.",
    //         "images": [
    //             "women_red_round-1.webp",
    //             "women_red_round-2.jpg",
    //             "women_red_round-3.jpg",
    //             "women_red_round-4.jpg",
    //             "women_red_round-5.jpg",
    //         ],
    //         "brand": "Ishin",
    //         "price": 1500,
    //         "oldPrice": 1700,
    //         "catName": "Fashion",
    //         "catId": "670f544ce86c762e3cad6c8b",
    //         "subCatId": "673ed52fcab231596bf06684",
    //         "subCat": "Women",
    //         "subCatName": "Women",
    //         "category": {
    //             "_id": "670f544ce86c762e3cad6c8b",
    //             "name": "Fashion",
    //             "slug": "Fashion",
    //             "images": [
    //                 "fhttps://res.cloudinary.com/dkgonwhvj/image/upload/v1731428187/1731428186288_fash.png"
    //             ],
    //             "color": "#ecffec",
    //             "createdAt": "2024-10-16T05:51:08.266Z",
    //             "updatedAt": "2024-11-12T16:16:28.229Z",
    //             "__v": 0,
    //             "id": "670f544ce86c762e3cad6c8b"
    //         },
    //         "countInStock": 1500,
    //         "rating": 5,
    //         "isFeatured": false,
    //         "discount": 12,
    //         "productRam": [],
    //         "size": [
    //             "M",
    //             "L",
    //             "XL",
    //             "XXL"
    //         ],
    //         "productWeight": [],
    //         "location": [
    //             {
    //                 "value": "All",
    //                 "label": "All",
    //                 "_id": "670b4d0961347e5c638f8940",
    //                 "id": "670b4d0961347e5c638f8940"
    //             },
    //             {
    //                 "value": "IN",
    //                 "label": "India",
    //                 "_id": "670b4d0961347e5c638f8941",
    //                 "id": "670b4d0961347e5c638f8941"
    //             },
    //             {
    //                 "value": "US",
    //                 "label": "United States",
    //                 "_id": "670b4d0961347e5c638f8942",
    //                 "id": "670b4d0961347e5c638f8942"
    //             },
    //             {
    //                 "value": "PK",
    //                 "label": "Pakistan",
    //                 "_id": "670b4d0961347e5c638f8943",
    //                 "id": "670b4d0961347e5c638f8943"
    //             },
    //             {
    //                 "value": "BD",
    //                 "label": "Bangladesh",
    //                 "_id": "670b4d0961347e5c638f8944",
    //                 "id": "670b4d0961347e5c638f8944"
    //             }
    //         ],
    //         "dateCreated": "2024-10-13T04:31:05.278Z",
    //         "__v": 0,
    //         "id": "670b4d0961347e5c638f893f"
    //     },
    //     {
    //         "_id": "670b52bc61347e5c638f912a",
    //         "name": "men checkered long sleeve casual shirt",
    //         "description": "Be a head turner by wearing this casual shirt from BUSHIRT and grab it in brown colour.\nShowcase this top in wonderful prints and wear it for different occasions.\nBuy this outstanding collection in a 47 size & get it in fabric made of cotton material.\nBored of the conventional shirt look? Well, these casual shirts in graceful neck designs and long sleeves will give you a whole new dimension!\nLook dapper in casual shirts priced at ₹1199 and benefit 60% .",
    //         "images": [
    //             "men_checkered_l-1.jpg",
    //             "men_checkered_l-2.jpg",
    //             "men_checkered_l-3.jpg",
    //             "men_checkered_l-4.jpg",
    //             "men_checkered_l-5.jpg"
    //         ],
    //         "brand": "BUSHIRT",
    //         "price": 850,
    //         "oldPrice": 1200,
    //         "catName": "Fashion",
    //         "catId": "670f544ce86c762e3cad6c8b",
    //         "subCatId": "673ed528cab231596bf0667d",
    //         "subCat": "Men",
    //         "subCatName": "Men",
    //         "category": {
    //             "_id": "670f544ce86c762e3cad6c8b",
    //             "name": "Fashion",
    //             "slug": "Fashion",
    //             "images": [
    //                 "fhttps://res.cloudinary.com/dkgonwhvj/image/upload/v1731428187/1731428186288_fash.png"
    //             ],
    //             "color": "#ecffec",
    //             "createdAt": "2024-10-16T05:51:08.266Z",
    //             "updatedAt": "2024-11-12T16:16:28.229Z",
    //             "__v": 0,
    //             "id": "670f544ce86c762e3cad6c8b"
    //         },
    //         "countInStock": 1500,
    //         "rating": 5,
    //         "isFeatured": false,
    //         "discount": 10,
    //         "productRam": [],
    //         "size": [
    //             "M",
    //             "L",
    //             "XL",
    //             "XXL"
    //         ],
    //         "productWeight": [],
    //         "location": [
    //             {
    //                 "value": "All",
    //                 "label": "All",
    //                 "_id": "670b52bc61347e5c638f912b",
    //                 "id": "670b52bc61347e5c638f912b"
    //             },
    //             {
    //                 "value": "IN",
    //                 "label": "India",
    //                 "_id": "670b52bc61347e5c638f912c",
    //                 "id": "670b52bc61347e5c638f912c"
    //             },
    //             {
    //                 "value": "PK",
    //                 "label": "Pakistan",
    //                 "_id": "670b52bc61347e5c638f912d",
    //                 "id": "670b52bc61347e5c638f912d"
    //             },
    //             {
    //                 "value": "BD",
    //                 "label": "Bangladesh",
    //                 "_id": "670b52bc61347e5c638f912e",
    //                 "id": "670b52bc61347e5c638f912e"
    //             }
    //         ],
    //         "dateCreated": "2024-10-13T04:55:24.244Z",
    //         "__v": 0,
    //         "id": "670b52bc61347e5c638f912a"
    //     },
    //     {
    //         "_id": "670b88d7acc986ed5b012079",
    //         "name": "Deel Band Women Rayon Embroidered Kurta Pant Dupatta Set",
    //         "description": "Kurta: The kurta is the top piece, which is a long tunic-style garment that can vary in length, sleeve style, and neckline. In this set, it is made from rayon fabric, which is known for its softness, smooth texture, and breathability. Rayon kurta often comes in a variety of prints, patterns, and colors, catering to different tastes and occasions.",
    //         "images": [
    //             "Deel_Band_Women-1.webp",
    //             "Deel_Band_Women-2.jpg"
    //         ],
    //         "brand": "Deel band",
    //         "price": 1500,
    //         "oldPrice": 1800,
    //         "catName": "Fashion",
    //         "catId": "670f544ce86c762e3cad6c8b",
    //         "subCatId": "673ed52fcab231596bf06684",
    //         "subCat": "Women",
    //         "subCatName": "Women",
    //         "category": {
    //             "_id": "670f544ce86c762e3cad6c8b",
    //             "name": "Fashion",
    //             "slug": "Fashion",
    //             "images": [
    //                 "fhttps://res.cloudinary.com/dkgonwhvj/image/upload/v1731428187/1731428186288_fash.png"
    //             ],
    //             "color": "#ecffec",
    //             "createdAt": "2024-10-16T05:51:08.266Z",
    //             "updatedAt": "2024-11-12T16:16:28.229Z",
    //             "__v": 0,
    //             "id": "670f544ce86c762e3cad6c8b"
    //         },
    //         "countInStock": 1200,
    //         "rating": 5,
    //         "isFeatured": false,
    //         "discount": 12,
    //         "productRam": [],
    //         "size": [
    //             "M",
    //             "L",
    //             "XL",
    //             "XXL"
    //         ],
    //         "productWeight": [],
    //         "location": [
    //             {
    //                 "value": "All",
    //                 "label": "All",
    //                 "_id": "670b88d7acc986ed5b01207a",
    //                 "id": "670b88d7acc986ed5b01207a"
    //             },
    //             {
    //                 "value": "IN",
    //                 "label": "India",
    //                 "_id": "670b88d7acc986ed5b01207b",
    //                 "id": "670b88d7acc986ed5b01207b"
    //             },
    //             {
    //                 "value": "KE",
    //                 "label": "Kenya",
    //                 "_id": "670b88d7acc986ed5b01207c",
    //                 "id": "670b88d7acc986ed5b01207c"
    //             }
    //         ],
    //         "dateCreated": "2024-10-13T08:46:15.277Z",
    //         "__v": 0,
    //         "id": "670b88d7acc986ed5b012079"
    //     },
    //     {
    //         "_id": "670bff5ddefdab066b32758b",
    //         "name": "GESPO Peach Solid Mandarin Collar Half Sleeve Casual T-Shirt",
    //         "description": "Rs: Kurta: The kurta is the top piece, which is a long tunic-style garment that can vary in length, sleeve style, and neckline. In this set, it is made from rayon fabric, which is known for its softness, smooth texture, and breathability. Rayon kurta often comes in a variety of prints, patterns, and colors, catering to different tastes and occasio.\n\n",
    //         "images": [
    //             "GESPO_Peach_Sol-1.webp",
    //             "GESPO_Peach_Sol-2.jpg",
    //             "GESPO_Peach_Sol-3.jpg",
    //             "GESPO_Peach_Sol-4.webp"
    //         ],
    //         "brand": "GESPO",
    //         "price": 1500,
    //         "oldPrice": 2000,
    //         "catName": "Fashion",
    //         "catId": "670f544ce86c762e3cad6c8b",
    //         "subCatId": "673ed528cab231596bf0667d",
    //         "subCat": "Men",
    //         "subCatName": "Men",
    //         "category": {
    //             "_id": "670f544ce86c762e3cad6c8b",
    //             "name": "Fashion",
    //             "slug": "Fashion",
    //             "images": [
    //                 "fhttps://res.cloudinary.com/dkgonwhvj/image/upload/v1731428187/1731428186288_fash.png"
    //             ],
    //             "color": "#ecffec",
    //             "createdAt": "2024-10-16T05:51:08.266Z",
    //             "updatedAt": "2024-11-12T16:16:28.229Z",
    //             "__v": 0,
    //             "id": "670f544ce86c762e3cad6c8b"
    //         },
    //         "countInStock": 1500,
    //         "rating": 5,
    //         "isFeatured": true,
    //         "discount": 9,
    //         "productRam": [],
    //         "size": [
    //             "M",
    //             "L",
    //             "XL",
    //             "XXL"
    //         ],
    //         "productWeight": [],
    //         "location": [
    //             {
    //                 "value": "All",
    //                 "label": "All",
    //                 "_id": "670bff5ddefdab066b32758c",
    //                 "id": "670bff5ddefdab066b32758c"
    //             },
    //             {
    //                 "value": "IN",
    //                 "label": "India",
    //                 "_id": "670bff5ddefdab066b32758d",
    //                 "id": "670bff5ddefdab066b32758d"
    //             },
    //             {
    //                 "value": "AF",
    //                 "label": "Afghanistan",
    //                 "_id": "670bff5ddefdab066b32758e",
    //                 "id": "670bff5ddefdab066b32758e"
    //             },
    //             {
    //                 "value": "BD",
    //                 "label": "Bangladesh",
    //                 "_id": "670bff5ddefdab066b32758f",
    //                 "id": "670bff5ddefdab066b32758f"
    //             },
    //             {
    //                 "value": "EC",
    //                 "label": "Ecuador",
    //                 "_id": "6716dcc3faf0ddf988e78dbc",
    //                 "id": "6716dcc3faf0ddf988e78dbc"
    //             }
    //         ],
    //         "dateCreated": "2024-10-13T17:11:57.651Z",
    //         "__v": 0,
    //         "id": "670bff5ddefdab066b32758b"
    //     },
    //     {
    //         "_id": "6734647d6380d4e40d6484f8",
    //         "name": "EYEBOGLER Teal Tshirts/Men tshirt/ tshirt for men/ tshirt/ mens tshirt/ Men's Polo Neck Regular Fit Half Sleeves Colorblocked T-Shirt",
    //         "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    //         "images": [
    //             "EYEBOGLER_Teal_-1.jpg",
    //             "EYEBOGLER_Teal_-2.webp",
    //             "EYEBOGLER_Teal_-3.jpg"
    //         ],
    //         "brand": "EYEBOGLER",
    //         "price": 650,
    //         "oldPrice": 950,
    //         "catName": "Fashion",
    //         "catId": "670f544ce86c762e3cad6c8b",
    //         "subCatId": "673ed528cab231596bf0667d",
    //         "subCat": "Men",
    //         "subCatName": "Men",
    //         "thirdsubCat": "Western Wear",
    //         "thirdsubCatName": "Western Wear",
    //         "thirdsubCatId": "673439736380d4e40d647b34",
    //         "category": {
    //             "_id": "670f544ce86c762e3cad6c8b",
    //             "name": "Fashion",
    //             "slug": "Fashion",
    //             "images": [
    //                 "fhttps://res.cloudinary.com/dkgonwhvj/image/upload/v1731428187/1731428186288_fash.png"
    //             ],
    //             "color": "#ecffec",
    //             "createdAt": "2024-10-16T05:51:08.266Z",
    //             "updatedAt": "2024-11-12T16:16:28.229Z",
    //             "__v": 0,
    //             "id": "670f544ce86c762e3cad6c8b"
    //         },
    //         "countInStock": 1500,
    //         "rating": 5,
    //         "isFeatured": true,
    //         "discount": 10,
    //         "productRam": [],
    //         "size": [
    //             "S",
    //             "M",
    //             "L",
    //             "XL",
    //             "XXL"
    //         ],
    //         "productWeight": [],
    //         "location": [
    //             {
    //                 "value": "All",
    //                 "label": "All",
    //                 "_id": "6734647d6380d4e40d6484f9",
    //                 "id": "6734647d6380d4e40d6484f9"
    //             },
    //             {
    //                 "value": "IN",
    //                 "label": "India",
    //                 "_id": "6734647d6380d4e40d6484fa",
    //                 "id": "6734647d6380d4e40d6484fa"
    //             },
    //             {
    //                 "value": "AF",
    //                 "label": "Afghanistan",
    //                 "_id": "6734647d6380d4e40d6484fb",
    //                 "id": "6734647d6380d4e40d6484fb"
    //             },
    //             {
    //                 "value": "VN",
    //                 "label": "Vietnam",
    //                 "_id": "6734647d6380d4e40d6484fc",
    //                 "id": "6734647d6380d4e40d6484fc"
    //             },
    //             {
    //                 "value": "PH",
    //                 "label": "Philippines",
    //                 "_id": "6734647d6380d4e40d6484fd",
    //                 "id": "6734647d6380d4e40d6484fd"
    //             },
    //             {
    //                 "value": "US",
    //                 "label": "United States",
    //                 "_id": "6734647d6380d4e40d6484fe",
    //                 "id": "6734647d6380d4e40d6484fe"
    //             }
    //         ],
    //         "dateCreated": "2024-11-13T08:34:05.526Z",
    //         "__v": 0,
    //         "id": "6734647d6380d4e40d6484f8"
    //     },
    //     {
    //         "_id": "673464ff6380d4e40d64858f",
    //         "name": "EYEBOGLER Polo Tshirts for Men | T Shirt For Men | Men T Shirt | Men Tshirt | Tshirt for Men | T Shirts | Tshirts | Oversized Tshirt | Men Tshirt | Men's Polo Neck Regular Fit Half Sleeves Colorblocked T-Shirt | Printed Tshirt",
    //         "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    //         "images": [
    //             "EYEBOGLER_Polo_-1.webp",
    //             "EYEBOGLER_Polo_-2.webp",
    //             "EYEBOGLER_Polo_-3.webp"
    //         ],
    //         "brand": "EYEBOGLER",
    //         "price": 785,
    //         "oldPrice": 995,
    //         "catName": "Fashion",
    //         "catId": "670f544ce86c762e3cad6c8b",
    //         "subCatId": "673ed528cab231596bf0667d",
    //         "subCat": "Men",
    //         "subCatName": "Men",
    //         "thirdsubCat": "Western Wear",
    //         "thirdsubCatName": "Western Wear",
    //         "thirdsubCatId": "673439736380d4e40d647b34",
    //         "category": {
    //             "_id": "670f544ce86c762e3cad6c8b",
    //             "name": "Fashion",
    //             "slug": "Fashion",
    //             "images": [
    //                 "fhttps://res.cloudinary.com/dkgonwhvj/image/upload/v1731428187/1731428186288_fash.png"
    //             ],
    //             "color": "#ecffec",
    //             "createdAt": "2024-10-16T05:51:08.266Z",
    //             "updatedAt": "2024-11-12T16:16:28.229Z",
    //             "__v": 0,
    //             "id": "670f544ce86c762e3cad6c8b"
    //         },
    //         "countInStock": 1500,
    //         "rating": 4,
    //         "isFeatured": false,
    //         "discount": 8,
    //         "productRam": [],
    //         "size": [
    //             "S",
    //             "M",
    //             "L"
    //         ],
    //         "productWeight": [],
    //         "location": [
    //             {
    //                 "value": "All",
    //                 "label": "All",
    //                 "_id": "673464ff6380d4e40d648590",
    //                 "id": "673464ff6380d4e40d648590"
    //             },
    //             {
    //                 "value": "AF",
    //                 "label": "Afghanistan",
    //                 "_id": "673464ff6380d4e40d648591",
    //                 "id": "673464ff6380d4e40d648591"
    //             },
    //             {
    //                 "value": "AL",
    //                 "label": "Albania",
    //                 "_id": "673464ff6380d4e40d648592",
    //                 "id": "673464ff6380d4e40d648592"
    //             },
    //             {
    //                 "value": "IN",
    //                 "label": "India",
    //                 "_id": "673464ff6380d4e40d648593",
    //                 "id": "673464ff6380d4e40d648593"
    //             },
    //             {
    //                 "value": "PK",
    //                 "label": "Pakistan",
    //                 "_id": "673464ff6380d4e40d648594",
    //                 "id": "673464ff6380d4e40d648594"
    //             },
    //             {
    //                 "value": "ZA",
    //                 "label": "South Africa",
    //                 "_id": "673464ff6380d4e40d648595",
    //                 "id": "673464ff6380d4e40d648595"
    //             },
    //             {
    //                 "value": "KR",
    //                 "label": "South Korea",
    //                 "_id": "673464ff6380d4e40d648596",
    //                 "id": "673464ff6380d4e40d648596"
    //             }
    //         ],
    //         "dateCreated": "2024-11-13T08:36:15.091Z",
    //         "__v": 0,
    //         "id": "673464ff6380d4e40d64858f"
    //     },
    //     {
    //         "_id": "673467b76380d4e40d648762",
    //         "name": "Men Layerr Regular Fit Spread Collar Cotton Shirt",
    //         "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    //         "images": [
    //             "Men_Layerr_Regu-1.jpg",
    //             "Men_Layerr_Regu-2.jpg",
    //             "Men_Layerr_Regu-3.jpg",
    //             "Men_Layerr_Regu-4.jpg",
    //             "Men_Layerr_Regu-5.jpg"
    //         ],
    //         "brand": "RARE RABBIT",
    //         "price": 950,
    //         "oldPrice": 1200,
    //         "catName": "Fashion",
    //         "catId": "670f544ce86c762e3cad6c8b",
    //         "subCatId": "673ed528cab231596bf0667d",
    //         "subCat": "Men",
    //         "subCatName": "Men",
    //         "thirdsubCat": "Casual Shirts",
    //         "thirdsubCatName": "Casual Shirts",
    //         "thirdsubCatId": "673439806380d4e40d647b3a",
    //         "category": {
    //             "_id": "670f544ce86c762e3cad6c8b",
    //             "name": "Fashion",
    //             "slug": "Fashion",
    //             "images": [
    //                 "fhttps://res.cloudinary.com/dkgonwhvj/image/upload/v1731428187/1731428186288_fash.png"
    //             ],
    //             "color": "#ecffec",
    //             "createdAt": "2024-10-16T05:51:08.266Z",
    //             "updatedAt": "2024-11-12T16:16:28.229Z",
    //             "__v": 0,
    //             "id": "670f544ce86c762e3cad6c8b"
    //         },
    //         "countInStock": 1455,
    //         "rating": 5,
    //         "isFeatured": true,
    //         "discount": 12,
    //         "productRam": [],
    //         "size": [
    //             "S",
    //             "M",
    //             "L",
    //             "XL"
    //         ],
    //         "productWeight": [],
    //         "location": [
    //             {
    //                 "value": "All",
    //                 "label": "All",
    //                 "_id": "673467b76380d4e40d648763",
    //                 "id": "673467b76380d4e40d648763"
    //             },
    //             {
    //                 "value": "IN",
    //                 "label": "India",
    //                 "_id": "673467b76380d4e40d648764",
    //                 "id": "673467b76380d4e40d648764"
    //             },
    //             {
    //                 "value": "PK",
    //                 "label": "Pakistan",
    //                 "_id": "673467b76380d4e40d648765",
    //                 "id": "673467b76380d4e40d648765"
    //             },
    //             {
    //                 "value": "NZ",
    //                 "label": "New Zealand",
    //                 "_id": "673467b76380d4e40d648766",
    //                 "id": "673467b76380d4e40d648766"
    //             },
    //             {
    //                 "value": "AF",
    //                 "label": "Afghanistan",
    //                 "_id": "673467b76380d4e40d648767",
    //                 "id": "673467b76380d4e40d648767"
    //             },
    //             {
    //                 "value": "VN",
    //                 "label": "Vietnam",
    //                 "_id": "673467b76380d4e40d648768",
    //                 "id": "673467b76380d4e40d648768"
    //             }
    //         ],
    //         "dateCreated": "2024-11-13T08:47:51.822Z",
    //         "__v": 0,
    //         "id": "673467b76380d4e40d648762"
    //     },
    //     {
    //         "_id": "67346a136380d4e40d648974",
    //         "name": "Chikankari Woven Kurta",
    //         "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    //         "images": [
    //             "Chikankari_Wove-1.webp",
    //             "Chikankari_Wove-2.jpg",
    //             "Chikankari_Wove-3.jpg",
    //             "Chikankari_Wove-4.jpg",
    //             "Chikankari_Wove-5.jpg",
    //         ],
    //         "brand": "House of Chikankari",
    //         "price": 1200,
    //         "oldPrice": 1350,
    //         "catName": "Fashion",
    //         "catId": "670f544ce86c762e3cad6c8b",
    //         "subCatId": "673ed52fcab231596bf06684",
    //         "subCat": "Women",
    //         "subCatName": "Women",
    //         "thirdsubCat": "Kurtas and Suits",
    //         "thirdsubCatName": "Kurtas and Suits",
    //         "thirdsubCatId": "67343a6b6380d4e40d647b72",
    //         "category": {
    //             "_id": "670f544ce86c762e3cad6c8b",
    //             "name": "Fashion",
    //             "slug": "Fashion",
    //             "images": [
    //                 "fhttps://res.cloudinary.com/dkgonwhvj/image/upload/v1731428187/1731428186288_fash.png"
    //             ],
    //             "color": "#ecffec",
    //             "createdAt": "2024-10-16T05:51:08.266Z",
    //             "updatedAt": "2024-11-12T16:16:28.229Z",
    //             "__v": 0,
    //             "id": "670f544ce86c762e3cad6c8b"
    //         },
    //         "countInStock": 1455,
    //         "rating": 5,
    //         "isFeatured": true,
    //         "discount": 10,
    //         "productRam": [],
    //         "size": [
    //             "S",
    //             "M",
    //             "L"
    //         ],
    //         "productWeight": [],
    //         "location": [
    //             {
    //                 "value": "All",
    //                 "label": "All",
    //                 "_id": "67346a136380d4e40d648975",
    //                 "id": "67346a136380d4e40d648975"
    //             },
    //             {
    //                 "value": "IN",
    //                 "label": "India",
    //                 "_id": "67346a136380d4e40d648976",
    //                 "id": "67346a136380d4e40d648976"
    //             },
    //             {
    //                 "value": "PK",
    //                 "label": "Pakistan",
    //                 "_id": "67346a136380d4e40d648977",
    //                 "id": "67346a136380d4e40d648977"
    //             },
    //             {
    //                 "value": "ZA",
    //                 "label": "South Africa",
    //                 "_id": "67346a136380d4e40d648978",
    //                 "id": "67346a136380d4e40d648978"
    //             }
    //         ],
    //         "dateCreated": "2024-11-13T08:57:55.488Z",
    //         "__v": 0,
    //         "id": "67346a136380d4e40d648974"
    //     },
    //     {
    //         "_id": "67346b3c6380d4e40d648b1f",
    //         "name": "A-Line Kurti With Sharara & Dupatta",
    //         "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    //         "images": [
    //             "A-Line_Kurti_Wi-1.jpg",
    //             "A-Line_Kurti_Wi-2.jpg",
    //             "A-Line_Kurti_Wi-3.jpg",
    //             "A-Line_Kurti_Wi-4.jpg"
    //         ],
    //         "brand": "Sangria",
    //         "price": 1300,
    //         "oldPrice": 1450,
    //         "catName": "Fashion",
    //         "catId": "670f544ce86c762e3cad6c8b",
    //         "subCatId": "673ed52fcab231596bf06684",
    //         "subCat": "Women",
    //         "subCatName": "Women",
    //         "thirdsubCat": "Kurtas and Suits",
    //         "thirdsubCatName": "Kurtas and Suits",
    //         "thirdsubCatId": "67343a6b6380d4e40d647b72",
    //         "category": {
    //             "_id": "670f544ce86c762e3cad6c8b",
    //             "name": "Fashion",
    //             "slug": "Fashion",
    //             "images": [
    //                 "fhttps://res.cloudinary.com/dkgonwhvj/image/upload/v1731428187/1731428186288_fash.png"
    //             ],
    //             "color": "#ecffec",
    //             "createdAt": "2024-10-16T05:51:08.266Z",
    //             "updatedAt": "2024-11-12T16:16:28.229Z",
    //             "__v": 0,
    //             "id": "670f544ce86c762e3cad6c8b"
    //         },
    //         "countInStock": 250,
    //         "rating": 5,
    //         "isFeatured": false,
    //         "discount": 8,
    //         "productRam": [],
    //         "size": [
    //             "S",
    //             "M",
    //             "L"
    //         ],
    //         "productWeight": [],
    //         "location": [
    //             {
    //                 "value": "All",
    //                 "label": "All",
    //                 "_id": "67346b3c6380d4e40d648b20",
    //                 "id": "67346b3c6380d4e40d648b20"
    //             },
    //             {
    //                 "value": "AF",
    //                 "label": "Afghanistan",
    //                 "_id": "67346b3c6380d4e40d648b21",
    //                 "id": "67346b3c6380d4e40d648b21"
    //             },
    //             {
    //                 "value": "IN",
    //                 "label": "India",
    //                 "_id": "67346b3c6380d4e40d648b22",
    //                 "id": "67346b3c6380d4e40d648b22"
    //             },
    //             {
    //                 "value": "KR",
    //                 "label": "South Korea",
    //                 "_id": "67346b3c6380d4e40d648b23",
    //                 "id": "67346b3c6380d4e40d648b23"
    //             },
    //             {
    //                 "value": "NG",
    //                 "label": "Nigeria",
    //                 "_id": "67346b3c6380d4e40d648b24",
    //                 "id": "67346b3c6380d4e40d648b24"
    //             },
    //             {
    //                 "value": "PH",
    //                 "label": "Philippines",
    //                 "_id": "67346b3c6380d4e40d648b25",
    //                 "id": "67346b3c6380d4e40d648b25"
    //             }
    //         ],
    //         "dateCreated": "2024-11-13T09:02:52.829Z",
    //         "__v": 0,
    //         "id": "67346b3c6380d4e40d648b1f"
    //     },
    //     {
    //         "_id": "6741677912b4da68b1670fd0",
    //         "name": "Pro360 MOM Pro Nutritional Powder - Swiss Chocolate 200 g",
    //         "description": " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.\n\n",
    //         "images": [
    //             "Pro360_MOM_Pro_-1.webp"
    //         ],
    //         "brand": "Pro360",
    //         "price": 445,
    //         "oldPrice": 345,
    //         "catName": "Wellness",
    //         "catId": "670fb77905878e94678d8d9a",
    //         "subCatId": "",
    //         "subCat": "",
    //         "subCatName": "",
    //         "category": {
    //             "_id": "670fb77905878e94678d8d9a",
    //             "name": "Wellness",
    //             "slug": "Wellness",
    //             "images": [
    //                 "fhttps://res.cloudinary.com/dkgonwhvj/image/upload/v1731428071/1731428070082_well.png"
    //             ],
    //             "color": "#fff3ff",
    //             "createdAt": "2024-10-16T12:54:17.493Z",
    //             "updatedAt": "2024-11-12T16:14:32.390Z",
    //             "__v": 0,
    //             "id": "670fb77905878e94678d8d9a"
    //         },
    //         "countInStock": 200,
    //         "rating": 4,
    //         "isFeatured": false,
    //         "discount": 34,
    //         "productRam": [],
    //         "size": [],
    //         "productWeight": [],
    //         "location": [
    //             {
    //                 "value": "All",
    //                 "label": "All",
    //                 "_id": "6741677912b4da68b1670fd1",
    //                 "id": "6741677912b4da68b1670fd1"
    //             },
    //             {
    //                 "value": "IN",
    //                 "label": "India",
    //                 "_id": "6741677912b4da68b1670fd2",
    //                 "id": "6741677912b4da68b1670fd2"
    //             },
    //             {
    //                 "value": "PK",
    //                 "label": "Pakistan",
    //                 "_id": "6741677912b4da68b1670fd3",
    //                 "id": "6741677912b4da68b1670fd3"
    //             }
    //         ],
    //         "dateCreated": "2024-11-23T05:26:17.758Z",
    //         "__v": 0,
    //         "id": "6741677912b4da68b1670fd0"
    //     },
    //     {
    //         "_id": "6741686e12b4da68b167150c",
    //         "name": "Good Home Air Freshener - Lavender 50 gm",
    //         "description": " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.\n\n",
    //         "images": [
    //             "Good_Home_Air_F-1.jpg"
    //         ],
    //         "brand": "Good Home",
    //         "price": 78,
    //         "oldPrice": 99,
    //         "catName": "Wellness",
    //         "catId": "670fb77905878e94678d8d9a",
    //         "subCatId": "",
    //         "subCat": "",
    //         "subCatName": "",
    //         "category": {
    //             "_id": "670fb77905878e94678d8d9a",
    //             "name": "Wellness",
    //             "slug": "Wellness",
    //             "images": [
    //                 "fhttps://res.cloudinary.com/dkgonwhvj/image/upload/v1731428071/1731428070082_well.png"
    //             ],
    //             "color": "#fff3ff",
    //             "createdAt": "2024-10-16T12:54:17.493Z",
    //             "updatedAt": "2024-11-12T16:14:32.390Z",
    //             "__v": 0,
    //             "id": "670fb77905878e94678d8d9a"
    //         },
    //         "countInStock": 20,
    //         "rating": 4,
    //         "isFeatured": false,
    //         "discount": 15,
    //         "productRam": [],
    //         "size": [],
    //         "productWeight": [],
    //         "location": [
    //             {
    //                 "value": "All",
    //                 "label": "All",
    //                 "_id": "6741686e12b4da68b167150d",
    //                 "id": "6741686e12b4da68b167150d"
    //             },
    //             {
    //                 "value": "IN",
    //                 "label": "India",
    //                 "_id": "6741686e12b4da68b167150e",
    //                 "id": "6741686e12b4da68b167150e"
    //             },
    //             {
    //                 "value": "PK",
    //                 "label": "Pakistan",
    //                 "_id": "6741686e12b4da68b167150f",
    //                 "id": "6741686e12b4da68b167150f"
    //             },
    //             {
    //                 "value": "AF",
    //                 "label": "Afghanistan",
    //                 "_id": "6741686e12b4da68b1671510",
    //                 "id": "6741686e12b4da68b1671510"
    //             }
    //         ],
    //         "dateCreated": "2024-11-23T05:30:22.064Z",
    //         "__v": 0,
    //         "id": "6741686e12b4da68b167150c"
    //     },
    //     {
    //         "_id": "6741697812b4da68b1671728",
    //         "name": "Protinex Powder - Rich Chocolate Flavour (Jar) 400 gm",
    //         "description": "Rs: Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.\n\n",
    //         "images": [
    //             "Protinex_Powder-1.jpg"
    //         ],
    //         "brand": "Protinex",
    //         "price": 549,
    //         "oldPrice": 649,
    //         "catName": "Wellness",
    //         "catId": "670fb77905878e94678d8d9a",
    //         "subCatId": "",
    //         "subCat": "",
    //         "subCatName": "",
    //         "category": {
    //             "_id": "670fb77905878e94678d8d9a",
    //             "name": "Wellness",
    //             "slug": "Wellness",
    //             "images": [
    //                 "fhttps://res.cloudinary.com/dkgonwhvj/image/upload/v1731428071/1731428070082_well.png"
    //             ],
    //             "color": "#fff3ff",
    //             "createdAt": "2024-10-16T12:54:17.493Z",
    //             "updatedAt": "2024-11-12T16:14:32.390Z",
    //             "__v": 0,
    //             "id": "670fb77905878e94678d8d9a"
    //         },
    //         "countInStock": 250,
    //         "rating": 4,
    //         "isFeatured": false,
    //         "discount": 15,
    //         "productRam": [],
    //         "size": [],
    //         "productWeight": [],
    //         "location": [
    //             {
    //                 "value": "All",
    //                 "label": "All",
    //                 "_id": "6741697812b4da68b1671729",
    //                 "id": "6741697812b4da68b1671729"
    //             },
    //             {
    //                 "value": "IN",
    //                 "label": "India",
    //                 "_id": "6741697812b4da68b167172a",
    //                 "id": "6741697812b4da68b167172a"
    //             },
    //             {
    //                 "value": "PK",
    //                 "label": "Pakistan",
    //                 "_id": "6741697812b4da68b167172b",
    //                 "id": "6741697812b4da68b167172b"
    //             },
    //             {
    //                 "value": "AF",
    //                 "label": "Afghanistan",
    //                 "_id": "6741697812b4da68b167172c",
    //                 "id": "6741697812b4da68b167172c"
    //             }
    //         ],
    //         "dateCreated": "2024-11-23T05:34:48.245Z",
    //         "__v": 0,
    //         "id": "6741697812b4da68b1671728"
    //     },
    //     {
    //         "_id": "67416aa212b4da68b1671ac2",
    //         "name": "SEBAMED CLEANSING BAR 100gm",
    //         "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.\n\n",
    //         "images": [
    //             "SEBAMED_CLEANSI-1.jpg"
    //         ],
    //         "brand": "Sebamed",
    //         "price": 270,
    //         "oldPrice": 310,
    //         "catName": "Wellness",
    //         "catId": "670fb77905878e94678d8d9a",
    //         "subCatId": "",
    //         "subCat": "",
    //         "subCatName": "",
    //         "category": {
    //             "_id": "670fb77905878e94678d8d9a",
    //             "name": "Wellness",
    //             "slug": "Wellness",
    //             "images": [
    //                 "fhttps://res.cloudinary.com/dkgonwhvj/image/upload/v1731428071/1731428070082_well.png"
    //             ],
    //             "color": "#fff3ff",
    //             "createdAt": "2024-10-16T12:54:17.493Z",
    //             "updatedAt": "2024-11-12T16:14:32.390Z",
    //             "__v": 0,
    //             "id": "670fb77905878e94678d8d9a"
    //         },
    //         "countInStock": 250,
    //         "rating": 4,
    //         "isFeatured": false,
    //         "discount": 14,
    //         "productRam": [],
    //         "size": [],
    //         "productWeight": [],
    //         "location": [
    //             {
    //                 "value": "All",
    //                 "label": "All",
    //                 "_id": "67416aa212b4da68b1671ac3",
    //                 "id": "67416aa212b4da68b1671ac3"
    //             },
    //             {
    //                 "value": "IN",
    //                 "label": "India",
    //                 "_id": "67416aa212b4da68b1671ac4",
    //                 "id": "67416aa212b4da68b1671ac4"
    //             },
    //             {
    //                 "value": "PK",
    //                 "label": "Pakistan",
    //                 "_id": "67416aa212b4da68b1671ac5",
    //                 "id": "67416aa212b4da68b1671ac5"
    //             },
    //             {
    //                 "value": "AF",
    //                 "label": "Afghanistan",
    //                 "_id": "67416aa212b4da68b1671ac6",
    //                 "id": "67416aa212b4da68b1671ac6"
    //             }
    //         ],
    //         "dateCreated": "2024-11-23T05:39:46.831Z",
    //         "__v": 0,
    //         "id": "67416aa212b4da68b1671ac2"
    //     },
    //     {
    //         "_id": "6742b5521b10adfb939ed505",
    //         "name": "Dermistry Anti Aging Intense Nourishing Night Repair Cream 50 ml",
    //         "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.\n",
    //         "images": [
    //             "Dermistry_Anti_-1.webp"
    //         ],
    //         "brand": "DERMISTRY",
    //         "price": 281,
    //         "oldPrice": 233,
    //         "catName": "Wellness",
    //         "catId": "670fb77905878e94678d8d9a",
    //         "subCatId": "",
    //         "subCat": "",
    //         "subCatName": "",
    //         "category": {
    //             "_id": "670fb77905878e94678d8d9a",
    //             "name": "Wellness",
    //             "slug": "Wellness",
    //             "images": [
    //                 "fhttps://res.cloudinary.com/dkgonwhvj/image/upload/v1731428071/1731428070082_well.png"
    //             ],
    //             "color": "#fff3ff",
    //             "createdAt": "2024-10-16T12:54:17.493Z",
    //             "updatedAt": "2024-11-12T16:14:32.390Z",
    //             "__v": 0,
    //             "id": "670fb77905878e94678d8d9a"
    //         },
    //         "countInStock": 150,
    //         "rating": 4,
    //         "isFeatured": false,
    //         "discount": 15,
    //         "productRam": [],
    //         "size": [],
    //         "productWeight": [],
    //         "location": [
    //             {
    //                 "value": "All",
    //                 "label": "All",
    //                 "_id": "6742b5521b10adfb939ed506",
    //                 "id": "6742b5521b10adfb939ed506"
    //             },
    //             {
    //                 "value": "IN",
    //                 "label": "India",
    //                 "_id": "6742b5521b10adfb939ed507",
    //                 "id": "6742b5521b10adfb939ed507"
    //             },
    //             {
    //                 "value": "PK",
    //                 "label": "Pakistan",
    //                 "_id": "6742b5521b10adfb939ed508",
    //                 "id": "6742b5521b10adfb939ed508"
    //             },
    //             {
    //                 "value": "AF",
    //                 "label": "Afghanistan",
    //                 "_id": "6742b5521b10adfb939ed509",
    //                 "id": "6742b5521b10adfb939ed509"
    //             }
    //         ],
    //         "dateCreated": "2024-11-24T05:10:42.028Z",
    //         "__v": 0,
    //         "id": "6742b5521b10adfb939ed505"
    //     },
    //     {
    //         "_id": "6742b61f1b10adfb939ede1f",
    //         "name": "Inlife Super Reds Powder 200 g",
    //         "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.\n",
    //         "images": [
    //             "Inlife_Super_Re-1.jpg"
    //         ],
    //         "brand": "Inlife",
    //         "price": 999,
    //         "oldPrice": 879,
    //         "catName": "Wellness",
    //         "catId": "670fb77905878e94678d8d9a",
    //         "subCatId": "",
    //         "subCat": "",
    //         "subCatName": "",
    //         "category": {
    //             "_id": "670fb77905878e94678d8d9a",
    //             "name": "Wellness",
    //             "slug": "Wellness",
    //             "images": [
    //                 "fhttps://res.cloudinary.com/dkgonwhvj/image/upload/v1731428071/1731428070082_well.png"
    //             ],
    //             "color": "#fff3ff",
    //             "createdAt": "2024-10-16T12:54:17.493Z",
    //             "updatedAt": "2024-11-12T16:14:32.390Z",
    //             "__v": 0,
    //             "id": "670fb77905878e94678d8d9a"
    //         },
    //         "countInStock": 150,
    //         "rating": 4,
    //         "isFeatured": false,
    //         "discount": 20,
    //         "productRam": [],
    //         "size": [],
    //         "productWeight": [],
    //         "location": [
    //             {
    //                 "value": "All",
    //                 "label": "All",
    //                 "_id": "6742b61f1b10adfb939ede20",
    //                 "id": "6742b61f1b10adfb939ede20"
    //             },
    //             {
    //                 "value": "IN",
    //                 "label": "India",
    //                 "_id": "6742b61f1b10adfb939ede21",
    //                 "id": "6742b61f1b10adfb939ede21"
    //             },
    //             {
    //                 "value": "PK",
    //                 "label": "Pakistan",
    //                 "_id": "6742b61f1b10adfb939ede22",
    //                 "id": "6742b61f1b10adfb939ede22"
    //             },
    //             {
    //                 "value": "AF",
    //                 "label": "Afghanistan",
    //                 "_id": "6742b61f1b10adfb939ede23",
    //                 "id": "6742b61f1b10adfb939ede23"
    //             }
    //         ],
    //         "dateCreated": "2024-11-24T05:14:07.452Z",
    //         "__v": 0,
    //         "id": "6742b61f1b10adfb939ede1f"
    //     },
    //     {
    //         "_id": "6742b72e1b10adfb939ee557",
    //         "name": "Inlife Super Greens Powder 200 g",
    //         "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.\n",
    //         "images": [
    //             "Inlife_Super_Gr-1.webp"
    //         ],
    //         "brand": "Inlife",
    //         "price": 799,
    //         "oldPrice": 899,
    //         "catName": "Wellness",
    //         "catId": "670fb77905878e94678d8d9a",
    //         "subCatId": "",
    //         "subCat": "",
    //         "subCatName": "",
    //         "category": {
    //             "_id": "670fb77905878e94678d8d9a",
    //             "name": "Wellness",
    //             "slug": "Wellness",
    //             "images": [
    //                 "fhttps://res.cloudinary.com/dkgonwhvj/image/upload/v1731428071/1731428070082_well.png"
    //             ],
    //             "color": "#fff3ff",
    //             "createdAt": "2024-10-16T12:54:17.493Z",
    //             "updatedAt": "2024-11-12T16:14:32.390Z",
    //             "__v": 0,
    //             "id": "670fb77905878e94678d8d9a"
    //         },
    //         "countInStock": 200,
    //         "rating": 4,
    //         "isFeatured": false,
    //         "discount": 12,
    //         "productRam": [],
    //         "size": [],
    //         "productWeight": [],
    //         "location": [
    //             {
    //                 "value": "All",
    //                 "label": "All",
    //                 "_id": "6742b72e1b10adfb939ee558",
    //                 "id": "6742b72e1b10adfb939ee558"
    //             },
    //             {
    //                 "value": "IN",
    //                 "label": "India",
    //                 "_id": "6742b72e1b10adfb939ee559",
    //                 "id": "6742b72e1b10adfb939ee559"
    //             },
    //             {
    //                 "value": "AF",
    //                 "label": "Afghanistan",
    //                 "_id": "6742b72e1b10adfb939ee55a",
    //                 "id": "6742b72e1b10adfb939ee55a"
    //             },
    //             {
    //                 "value": "PK",
    //                 "label": "Pakistan",
    //                 "_id": "6742b72e1b10adfb939ee55b",
    //                 "id": "6742b72e1b10adfb939ee55b"
    //             }
    //         ],
    //         "dateCreated": "2024-11-24T05:18:38.670Z",
    //         "__v": 0,
    //         "id": "6742b72e1b10adfb939ee557"
    //     },
    //     {
    //         "_id": "6742b8921b10adfb939eeb9e",
    //         "name": "Fostelo Women's Meryl Handbag (Maroon) (JM_FSB-1747)",
    //         "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.\n",
    //         "images": [
    //             "Fostelo_Women's-1.jpg"
    //         ],
    //         "brand": "FOSTELO",
    //         "price": 589,
    //         "oldPrice": 455,
    //         "catName": "Bags",
    //         "catId": "670f5477e86c762e3cad6c9f",
    //         "subCatId": "673ed52fcab231596bf06684",
    //         "subCat": "Women",
    //         "subCatName": "Women",
    //         "category": {
    //             "_id": "670f5477e86c762e3cad6c9f",
    //             "name": "Bags",
    //             "slug": "Bags",
    //             "images": [
    //                 "fhttps://res.cloudinary.com/dkgonwhvj/image/upload/v1731428171/1731428170107_bag.png"
    //             ],
    //             "color": "#fdf0ff",
    //             "createdAt": "2024-10-16T05:51:51.640Z",
    //             "updatedAt": "2024-11-12T16:16:12.534Z",
    //             "__v": 0,
    //             "id": "670f5477e86c762e3cad6c9f"
    //         },
    //         "countInStock": 150,
    //         "rating": 4,
    //         "isFeatured": false,
    //         "discount": 15,
    //         "productRam": [],
    //         "size": [],
    //         "productWeight": [],
    //         "location": [
    //             {
    //                 "value": "All",
    //                 "label": "All",
    //                 "_id": "6742b8921b10adfb939eeb9f",
    //                 "id": "6742b8921b10adfb939eeb9f"
    //             },
    //             {
    //                 "value": "IN",
    //                 "label": "India",
    //                 "_id": "6742b8921b10adfb939eeba0",
    //                 "id": "6742b8921b10adfb939eeba0"
    //             },
    //             {
    //                 "value": "PK",
    //                 "label": "Pakistan",
    //                 "_id": "6742b8921b10adfb939eeba1",
    //                 "id": "6742b8921b10adfb939eeba1"
    //             },
    //             {
    //                 "value": "AF",
    //                 "label": "Afghanistan",
    //                 "_id": "6742b8921b10adfb939eeba2",
    //                 "id": "6742b8921b10adfb939eeba2"
    //             }
    //         ],
    //         "dateCreated": "2024-11-24T05:24:34.076Z",
    //         "__v": 0,
    //         "id": "6742b8921b10adfb939eeb9e"
    //     },
    //     {
    //         "_id": "6742b9e71b10adfb939ef25e",
    //         "name": "Kerala Naturals Rose Water 100 ml",
    //         "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.\n",
    //         "images": [
    //             "Kerala_Naturals-1.jpg"
    //         ],
    //         "brand": "Kerala Naturals",
    //         "price": 119,
    //         "oldPrice": 98,
    //         "catName": "Beauty",
    //         "catId": "670f54b8e86c762e3cad6cbd",
    //         "subCatId": "673ed52fcab231596bf06684",
    //         "subCat": "Women",
    //         "subCatName": "Women",
    //         "category": {
    //             "_id": "670f54b8e86c762e3cad6cbd",
    //             "name": "Beauty",
    //             "slug": "Beauty",
    //             "images": [
    //                 "fhttps://res.cloudinary.com/dkgonwhvj/image/upload/v1731428082/1731428081168_beauty.png"
    //             ],
    //             "color": "#e3fffa",
    //             "createdAt": "2024-10-16T05:52:56.619Z",
    //             "updatedAt": "2024-11-18T11:02:10.300Z",
    //             "__v": 0,
    //             "id": "670f54b8e86c762e3cad6cbd"
    //         },
    //         "countInStock": 250,
    //         "rating": 4,
    //         "isFeatured": false,
    //         "discount": 20,
    //         "productRam": [],
    //         "size": [],
    //         "productWeight": [],
    //         "location": [
    //             {
    //                 "value": "All",
    //                 "label": "All",
    //                 "_id": "6742b9e71b10adfb939ef25f",
    //                 "id": "6742b9e71b10adfb939ef25f"
    //             },
    //             {
    //                 "value": "IN",
    //                 "label": "India",
    //                 "_id": "6742b9e71b10adfb939ef260",
    //                 "id": "6742b9e71b10adfb939ef260"
    //             },
    //             {
    //                 "value": "PK",
    //                 "label": "Pakistan",
    //                 "_id": "6742b9e71b10adfb939ef261",
    //                 "id": "6742b9e71b10adfb939ef261"
    //             },
    //             {
    //                 "value": "AF",
    //                 "label": "Afghanistan",
    //                 "_id": "6742b9e71b10adfb939ef262",
    //                 "id": "6742b9e71b10adfb939ef262"
    //             }
    //         ],
    //         "dateCreated": "2024-11-24T05:30:15.100Z",
    //         "__v": 0,
    //         "id": "6742b9e71b10adfb939ef25e"
    //     },
    //     {
    //         "_id": "6742baca1b10adfb939efa95",
    //         "name": "Dr Batra's Natural Cleansing Milk - Echinacea & Chamomile (Pack of 3 x 100 ml)",
    //         "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.\n",
    //         "images": [
    //             "Dr_Batra's_Natu-1.jpg"
    //         ],
    //         "brand": "Dr Batra'S",
    //         "price": 556,
    //         "oldPrice": 456,
    //         "catName": "Beauty",
    //         "catId": "670f54b8e86c762e3cad6cbd",
    //         "subCatId": "673ed52fcab231596bf06684",
    //         "subCat": "Women",
    //         "subCatName": "Women",
    //         "category": {
    //             "_id": "670f54b8e86c762e3cad6cbd",
    //             "name": "Beauty",
    //             "slug": "Beauty",
    //             "images": [
    //                 "fhttps://res.cloudinary.com/dkgonwhvj/image/upload/v1731428082/1731428081168_beauty.png"
    //             ],
    //             "color": "#e3fffa",
    //             "createdAt": "2024-10-16T05:52:56.619Z",
    //             "updatedAt": "2024-11-18T11:02:10.300Z",
    //             "__v": 0,
    //             "id": "670f54b8e86c762e3cad6cbd"
    //         },
    //         "countInStock": 67,
    //         "rating": 4,
    //         "isFeatured": false,
    //         "discount": 20,
    //         "productRam": [],
    //         "size": [],
    //         "productWeight": [],
    //         "location": [
    //             {
    //                 "value": "All",
    //                 "label": "All",
    //                 "_id": "6742baca1b10adfb939efa96",
    //                 "id": "6742baca1b10adfb939efa96"
    //             },
    //             {
    //                 "value": "IN",
    //                 "label": "India",
    //                 "_id": "6742baca1b10adfb939efa97",
    //                 "id": "6742baca1b10adfb939efa97"
    //             },
    //             {
    //                 "value": "PK",
    //                 "label": "Pakistan",
    //                 "_id": "6742baca1b10adfb939efa98",
    //                 "id": "6742baca1b10adfb939efa98"
    //             },
    //             {
    //                 "value": "AF",
    //                 "label": "Afghanistan",
    //                 "_id": "6742baca1b10adfb939efa99",
    //                 "id": "6742baca1b10adfb939efa99"
    //             }
    //         ],
    //         "dateCreated": "2024-11-24T05:34:02.708Z",
    //         "__v": 0,
    //         "id": "6742baca1b10adfb939efa95"
    //     },
    //     {
    //         "_id": "6742bcab1b10adfb939f0448",
    //         "name": "JioBook 11 with Lifetime Office/Android 4G Laptop Mediatek 8788 (JioOS)/Octa-core/4GB RAM/64 eMMC Storage/Thin and Light Laptop (11.6 inch, 990 grams)/Dual band WiFi + SIM/Blue",
    //         "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.\n",
    //         "images": [
    //             "JioBook_11_with-1.webp"
    //         ],
    //         "brand": "JIO",
    //         "price": 18999,
    //         "oldPrice": 15999,
    //         "catName": "Electronics",
    //         "catId": "670f5463e86c762e3cad6c95",
    //         "subCatId": "673ed55d2ec02680644f2793",
    //         "subCat": "Laptops",
    //         "subCatName": "Laptops",
    //         "category": {
    //             "_id": "670f5463e86c762e3cad6c95",
    //             "name": "Electronics",
    //             "slug": "Electronics",
    //             "images": [
    //                 "fhttps://res.cloudinary.com/dkgonwhvj/image/upload/v1731428179/1731428178306_ele.png"
    //             ],
    //             "color": "#feefea",
    //             "createdAt": "2024-10-16T05:51:31.207Z",
    //             "updatedAt": "2024-11-12T16:16:20.193Z",
    //             "__v": 0,
    //             "id": "670f5463e86c762e3cad6c95"
    //         },
    //         "countInStock": 200,
    //         "rating": 4,
    //         "isFeatured": false,
    //         "discount": 12,
    //         "productRam": [
    //             "12GB"
    //         ],
    //         "size": [],
    //         "productWeight": [],
    //         "location": [
    //             {
    //                 "value": "All",
    //                 "label": "All",
    //                 "_id": "6742bcab1b10adfb939f0449",
    //                 "id": "6742bcab1b10adfb939f0449"
    //             },
    //             {
    //                 "value": "IN",
    //                 "label": "India",
    //                 "_id": "6742bcab1b10adfb939f044a",
    //                 "id": "6742bcab1b10adfb939f044a"
    //             },
    //             {
    //                 "value": "PK",
    //                 "label": "Pakistan",
    //                 "_id": "6742bcab1b10adfb939f044b",
    //                 "id": "6742bcab1b10adfb939f044b"
    //             },
    //             {
    //                 "value": "AF",
    //                 "label": "Afghanistan",
    //                 "_id": "6742bcab1b10adfb939f044c",
    //                 "id": "6742bcab1b10adfb939f044c"
    //             }
    //         ],
    //         "dateCreated": "2024-11-24T05:42:03.691Z",
    //         "__v": 0,
    //         "id": "6742bcab1b10adfb939f0448"
    //     },
    //     {
    //         "_id": "6742bd5d1b10adfb939f05d4",
    //         "name": "CHUWI Intel Core i5 10th Gen 1035G1 - (16 GB/512 GB SSD/Windows 11 Home) CoreBook X Grey Laptop",
    //         "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.\n",
    //         "images": [
    //             "CHUWI_Intel_Cor-1.webp"
    //         ],
    //         "brand": "CHUWI",
    //         "price": 24999,
    //         "oldPrice": 25999,
    //         "catName": "Electronics",
    //         "catId": "670f5463e86c762e3cad6c95",
    //         "subCatId": "673ed55d2ec02680644f2793",
    //         "subCat": "Laptops",
    //         "subCatName": "Laptops",
    //         "category": {
    //             "_id": "670f5463e86c762e3cad6c95",
    //             "name": "Electronics",
    //             "slug": "Electronics",
    //             "images": [
    //                 "fhttps://res.cloudinary.com/dkgonwhvj/image/upload/v1731428179/1731428178306_ele.png"
    //             ],
    //             "color": "#feefea",
    //             "createdAt": "2024-10-16T05:51:31.207Z",
    //             "updatedAt": "2024-11-12T16:16:20.193Z",
    //             "__v": 0,
    //             "id": "670f5463e86c762e3cad6c95"
    //         },
    //         "countInStock": 150,
    //         "rating": 4,
    //         "isFeatured": false,
    //         "discount": 15,
    //         "productRam": [
    //             "16GB"
    //         ],
    //         "size": [],
    //         "productWeight": [],
    //         "location": [
    //             {
    //                 "value": "All",
    //                 "label": "All",
    //                 "_id": "6742bd5d1b10adfb939f05d5",
    //                 "id": "6742bd5d1b10adfb939f05d5"
    //             },
    //             {
    //                 "value": "IN",
    //                 "label": "India",
    //                 "_id": "6742bd5d1b10adfb939f05d6",
    //                 "id": "6742bd5d1b10adfb939f05d6"
    //             },
    //             {
    //                 "value": "PK",
    //                 "label": "Pakistan",
    //                 "_id": "6742bd5d1b10adfb939f05d7",
    //                 "id": "6742bd5d1b10adfb939f05d7"
    //             },
    //             {
    //                 "value": "AF",
    //                 "label": "Afghanistan",
    //                 "_id": "6742bd5d1b10adfb939f05d8",
    //                 "id": "6742bd5d1b10adfb939f05d8"
    //             }
    //         ],
    //         "dateCreated": "2024-11-24T05:45:01.818Z",
    //         "__v": 0,
    //         "id": "6742bd5d1b10adfb939f05d4"
    //     },
    //     {
    //         "_id": "6742be4b1b10adfb939f09c5",
    //         "name": "Oppo K12x 5G 128 GB, 6 GB RAM, Breeze Blue, Mobile Phone",
    //         "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.\n",
    //         "images": [
    //             "Oppo_K12x_5G_12-1.jpg"
    //         ],
    //         "brand": "OPPO",
    //         "price": 14999,
    //         "oldPrice": 15888,
    //         "catName": "Electronics",
    //         "catId": "670f5463e86c762e3cad6c95",
    //         "subCatId": "673ed5552ec02680644f278d",
    //         "subCat": "Mobiles",
    //         "subCatName": "Mobiles",
    //         "category": {
    //             "_id": "670f5463e86c762e3cad6c95",
    //             "name": "Electronics",
    //             "slug": "Electronics",
    //             "images": [
    //                 "fhttps://res.cloudinary.com/dkgonwhvj/image/upload/v1731428179/1731428178306_ele.png"
    //             ],
    //             "color": "#feefea",
    //             "createdAt": "2024-10-16T05:51:31.207Z",
    //             "updatedAt": "2024-11-12T16:16:20.193Z",
    //             "__v": 0,
    //             "id": "670f5463e86c762e3cad6c95"
    //         },
    //         "countInStock": 150,
    //         "rating": 4,
    //         "isFeatured": false,
    //         "discount": 20,
    //         "productRam": [
    //             "12GB",
    //             "16GB"
    //         ],
    //         "size": [],
    //         "productWeight": [],
    //         "location": [
    //             {
    //                 "value": "All",
    //                 "label": "All",
    //                 "_id": "6742be4b1b10adfb939f09c6",
    //                 "id": "6742be4b1b10adfb939f09c6"
    //             },
    //             {
    //                 "value": "IN",
    //                 "label": "India",
    //                 "_id": "6742be4b1b10adfb939f09c7",
    //                 "id": "6742be4b1b10adfb939f09c7"
    //             },
    //             {
    //                 "value": "PK",
    //                 "label": "Pakistan",
    //                 "_id": "6742be4b1b10adfb939f09c8",
    //                 "id": "6742be4b1b10adfb939f09c8"
    //             },
    //             {
    //                 "value": "AF",
    //                 "label": "Afghanistan",
    //                 "_id": "6742be4b1b10adfb939f09c9",
    //                 "id": "6742be4b1b10adfb939f09c9"
    //             }
    //         ],
    //         "dateCreated": "2024-11-24T05:48:59.859Z",
    //         "__v": 0,
    //         "id": "6742be4b1b10adfb939f09c5"
    //     },
    //     {
    //         "_id": "6742bf121b10adfb939f0b5d",
    //         "name": "Realme Narzo N65 5G 128 GB, 4 GB RAM, Amber Gold, Mobile Phone",
    //         "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.\n",
    //         "images": [
    //             "Realme_Narzo_N6-1.webp",
    //             "Realme_Narzo_N6-2.webp"
    //         ],
    //         "brand": "Realme",
    //         "price": 12499,
    //         "oldPrice": 11999,
    //         "catName": "Electronics",
    //         "catId": "670f5463e86c762e3cad6c95",
    //         "subCatId": "673ed5552ec02680644f278d",
    //         "subCat": "Mobiles",
    //         "subCatName": "Mobiles",
    //         "category": {
    //             "_id": "670f5463e86c762e3cad6c95",
    //             "name": "Electronics",
    //             "slug": "Electronics",
    //             "images": [
    //                 "fhttps://res.cloudinary.com/dkgonwhvj/image/upload/v1731428179/1731428178306_ele.png"
    //             ],
    //             "color": "#feefea",
    //             "createdAt": "2024-10-16T05:51:31.207Z",
    //             "updatedAt": "2024-11-12T16:16:20.193Z",
    //             "__v": 0,
    //             "id": "670f5463e86c762e3cad6c95"
    //         },
    //         "countInStock": 150,
    //         "rating": 4,
    //         "isFeatured": false,
    //         "discount": 15,
    //         "productRam": [
    //             "12GB",
    //             "16GB"
    //         ],
    //         "size": [],
    //         "productWeight": [],
    //         "location": [
    //             {
    //                 "value": "All",
    //                 "label": "All",
    //                 "_id": "6742bf121b10adfb939f0b5e",
    //                 "id": "6742bf121b10adfb939f0b5e"
    //             },
    //             {
    //                 "value": "IN",
    //                 "label": "India",
    //                 "_id": "6742bf121b10adfb939f0b5f",
    //                 "id": "6742bf121b10adfb939f0b5f"
    //             },
    //             {
    //                 "value": "PK",
    //                 "label": "Pakistan",
    //                 "_id": "6742bf121b10adfb939f0b60",
    //                 "id": "6742bf121b10adfb939f0b60"
    //             },
    //             {
    //                 "value": "AF",
    //                 "label": "Afghanistan",
    //                 "_id": "6742bf121b10adfb939f0b61",
    //                 "id": "6742bf121b10adfb939f0b61"
    //             }
    //         ],
    //         "dateCreated": "2024-11-24T05:52:18.977Z",
    //         "__v": 0,
    //         "id": "6742bf121b10adfb939f0b5d"
    //     }
    // ]

    // let imageCount = product_final.map(i => i.images).reduce((all, current) => [ ...all, ...current ]);
    

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
            {/* <div style={{display: 'grid', gridTemplateColumns: 'repeat(15, 1fr)', gap: '1rem'}}>
                {product_final.map((i, n) => i.images.map((x, y) => {
                    return (
                        <div key={x}>
                            <span>{n+1}</span>
                            <img src={'/images/products/' + x} alt='awesome image' />
                            <span>{i.name.substring(0, 15).split(' ').join('_')}</span>
                        </div>
                    )
                }))}
                <h2 className="text-3xl">{imageCount.length}</h2>
            </div> */}
        </main>
    )   
}
