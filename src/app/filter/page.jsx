'use client';
import { FormControlLabel, Slide, Slider } from '@mui/material';
import Checkbox from '@mui/material/Checkbox';
import { useState } from 'react';
import { FaListUl } from "react-icons/fa";
import { BsFillGridFill, BsGrid3X3GapFill  } from "react-icons/bs";

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { ProductCard } from '@/components/cards';

const Filter = () => {

    const allCategories = [
        {
            id: "66c0df9d3490222862ae78bb",
            name: "Men",
            images: [],
            slug: "Men",
            children: []
        },
        {
            id: "66c0dfa43490222862ae78c1",
            name: "Women",
            images: [],
            slug: "Women",
            children: []
        },
        {
            id: "66c0dfab3490222862ae78c7",
            name: "Boys",
            images: [],
            slug: "Boys",
            children: []
        },
        {
            id: "66c0dfb13490222862ae78cd",
            name: "Girls",
            images: [],
            slug: "Girls",
            children: []
        },
        {
            id: "66c0dfb73490222862ae78d3",
            name: "Mobiles",
            images: [],
            slug: "Mobiles",
            children: []
        },
        {
            id: "66c18d6319e2c0f542b72fd8",
            name: "Tv",
            images: [],
            slug: "Tv",
            children: []
        },
        {
            id: "66cf36e97f21a4cf0943b0d5",
            name: "Computers and Accessories",
            images: [],
            slug: "Computers and Accessories",
            children: []
        },
        {
            id: "66c0dfd53490222862ae78df",
            name: "Cooking Essentials",
            images: [],
            slug: "Cooking Essentials",
            children: []
        },
        {
            id: "66c0dff73490222862ae78e5",
            name: "Home Care",
            images: [],
            slug: "Home Care",
            children: []
        },
        {
            id: "66c0e0033490222862ae78eb",
            name: "Men Footwear",
            images: [],
            slug: "Men Footwear",
            children: []
        },
        {
            id: "66c0e00a3490222862ae78f1",
            name: "Women FootWear",
            images: [],
            slug: "Women FootWear",
            children: []
        }
    ]

    const productData = {
        "products": [
            {
                "_id": "66c5d098914f11ac87bb2fff",
                "name": "Siril Poly Silk Grey & Off-White Color Saree With Blouse Piece | sarees for Women| saree | sarees",
                "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
                "images": [
                    "https://res.cloudinary.com/da26rdzwp/image/upload/v1725963054/1725963048885_siril-poly-silk-grey-off-white-color-saree-with-blouse-piece-product-images-rvcpwdyagl-1-202304220521.webp",
                    "https://res.cloudinary.com/da26rdzwp/image/upload/v1725963056/1725963048890_siril-poly-silk-grey-off-white-color-saree-with-blouse-piece-product-images-rvcpwdyagl-2-202304220521.webp",
                    "https://res.cloudinary.com/da26rdzwp/image/upload/v1725963059/1725963048899_siril-poly-silk-grey-off-white-color-saree-with-blouse-piece-product-images-rvcpwdyagl-3-202304220521.webp",
                    "https://res.cloudinary.com/da26rdzwp/image/upload/v1725963061/1725963048906_siril-poly-silk-grey-off-white-color-saree-with-blouse-piece-product-images-rvcpwdyagl-4-202304220521.webp"
                ],
                "brand": "SIRIL",
                "price": 499,
                "oldPrice": 599,
                "catName": "Fashion",
                "catId": "66c0d6d9430f507021d32280",
                "subCatId": "66c0dfa43490222862ae78c1",
                "subCat": "Women",
                "subCatName": "Women",
                "category": {
                    "_id": "66c0d6d9430f507021d32280",
                    "name": "Fashion",
                    "slug": "Fashion",
                    "images": [
                        "https://res.cloudinary.com/da26rdzwp/image/upload/v1725960852/1725960851153_fash.png"
                    ],
                    "color": "#ecffec",
                    "createdAt": "2024-08-17T16:59:05.656Z",
                    "updatedAt": "2024-09-10T09:34:13.338Z",
                    "__v": 0,
                    "id": "66c0d6d9430f507021d32280"
                },
                "countInStock": 160,
                "rating": 5,
                "isFeatured": true,
                "discount": 15,
                "productRam": [],
                "size": [
                    "S",
                    "M",
                    "L",
                    "XL",
                    "XXL"
                ],
                "productWeight": [],
                "location": "All",
                "dateCreated": "2024-08-21T11:33:44.034Z",
                "__v": 0,
                "id": "66c5d098914f11ac87bb2fff"
            },
            {
                "_id": "66c5d17b914f11ac87bb3093",
                "name": "GoSriKi Women's Pink Ethnic Motifs Printed Kurta with Trouser & Dupatta",
                "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
                "images": [
                    "https://res.cloudinary.com/da26rdzwp/image/upload/v1725962966/1725962964808_gosriki-women-s-pink-ethnic-motifs-printed-kurta-with-trouser-dupatta-product-images-rvpkyh5qdr-0-202310141511.webp",
                    "https://res.cloudinary.com/da26rdzwp/image/upload/v1725962968/1725962964812_gosriki-women-s-pink-ethnic-motifs-printed-kurta-with-trouser-dupatta-product-images-rvpkyh5qdr-1-202310141511.jpg",
                    "https://res.cloudinary.com/da26rdzwp/image/upload/v1725962970/1725962964819_gosriki-women-s-pink-ethnic-motifs-printed-kurta-with-trouser-dupatta-product-images-rvpkyh5qdr-2-202310141511.jpg",
                    "https://res.cloudinary.com/da26rdzwp/image/upload/v1725962972/1725962964832_gosriki-women-s-pink-ethnic-motifs-printed-kurta-with-trouser-dupatta-product-images-rvpkyh5qdr-3-202310141511.jpg",
                    "https://res.cloudinary.com/da26rdzwp/image/upload/v1725962974/1725962964847_gosriki-women-s-pink-ethnic-motifs-printed-kurta-with-trouser-dupatta-product-images-rvpkyh5qdr-4-202310141511.jpg",
                    "https://res.cloudinary.com/da26rdzwp/image/upload/v1725962976/1725962964856_gosriki-women-s-pink-ethnic-motifs-printed-kurta-with-trouser-dupatta-product-images-rvpkyh5qdr-5-202310141511.jpg"
                ],
                "brand": "GoSriKi",
                "price": 300,
                "oldPrice": 450,
                "catName": "Fashion",
                "catId": "66c0d6d9430f507021d32280",
                "subCatId": "66c0dfa43490222862ae78c1",
                "subCat": "Women",
                "subCatName": "Women",
                "category": {
                    "_id": "66c0d6d9430f507021d32280",
                    "name": "Fashion",
                    "slug": "Fashion",
                    "images": [
                        "https://res.cloudinary.com/da26rdzwp/image/upload/v1725960852/1725960851153_fash.png"
                    ],
                    "color": "#ecffec",
                    "createdAt": "2024-08-17T16:59:05.656Z",
                    "updatedAt": "2024-09-10T09:34:13.338Z",
                    "__v": 0,
                    "id": "66c0d6d9430f507021d32280"
                },
                "countInStock": 160,
                "rating": 5,
                "isFeatured": true,
                "discount": 12,
                "productRam": [],
                "size": [
                    "S",
                    "M",
                    "L",
                    "XL",
                    "XXL"
                ],
                "productWeight": [],
                "location": "All",
                "dateCreated": "2024-08-21T11:37:31.011Z",
                "__v": 0,
                "id": "66c5d17b914f11ac87bb3093"
            },
            {
                "_id": "66c9bd333f7ab681cec21f00",
                "name": "Women Embroidered Straight Kurta with Salwar",
                "description": "Every day is different, so should be your look! Avaasa brings a designer collection of women’s Indian wear and ethnic clothes, including floral print kurtas, block print kurtis, colourful shrugs, churidar leggings and more in a range of hues.\n",
                "images": [
                    "https://res.cloudinary.com/da26rdzwp/image/upload/v1725962758/1725962757616_women-embroidered-straight-kurta-with-salwar-model2-443043544_burgandy-2-202407281625.webp",
                    "https://res.cloudinary.com/da26rdzwp/image/upload/v1725962760/1725962757617_women-embroidered-straight-kurta-with-salwar-model3-443043544_burgandy-3-202407281625.webp",
                    "https://res.cloudinary.com/da26rdzwp/image/upload/v1725962762/1725962757617_women-embroidered-straight-kurta-with-salwar-model4-443043544_burgandy-4-202407281625.jpg",
                    "https://res.cloudinary.com/da26rdzwp/image/upload/v1725962764/1725962757620_women-embroidered-straight-kurta-with-salwar-model-443043544_burgandy-0-202407281625.jpg"
                ],
                "brand": "AVAASA SET",
                "price": 450,
                "oldPrice": 620,
                "catName": "Fashion",
                "catId": "66c0d6d9430f507021d32280",
                "subCatId": "66c0dfa43490222862ae78c1",
                "subCat": "Women",
                "subCatName": "Women",
                "category": {
                    "_id": "66c0d6d9430f507021d32280",
                    "name": "Fashion",
                    "slug": "Fashion",
                    "images": [
                        "https://res.cloudinary.com/da26rdzwp/image/upload/v1725960852/1725960851153_fash.png"
                    ],
                    "color": "#ecffec",
                    "createdAt": "2024-08-17T16:59:05.656Z",
                    "updatedAt": "2024-09-10T09:34:13.338Z",
                    "__v": 0,
                    "id": "66c0d6d9430f507021d32280"
                },
                "countInStock": 10,
                "rating": 5,
                "isFeatured": false,
                "discount": 14,
                "productRam": [],
                "size": [
                    "S",
                    "M",
                    "L",
                    "XL",
                    "XXL"
                ],
                "productWeight": [],
                "location": "All",
                "dateCreated": "2024-08-24T11:00:03.559Z",
                "__v": 0,
                "id": "66c9bd333f7ab681cec21f00"
            },
            {
                "_id": "66cf30857f21a4cf0943ae69",
                "name": "FULPARI Girls Lehenga Choli Ethnic Wear Embroidered Lehenga Choli and Dupatta Set ( Light Blue )",
                "description": "Shop from a wide range of beautifully crafted Lehenga Choli from FULPARI on Jiomart. Pair this piece with heels or flats and matching jewellery for a stunning look. Choose FULPARI for elegance, quality, and style that transcends time. Don't miss the chance to add a touch of tradition and glamour to your wardrobe. Whether you're preparing for a special occasion, a wedding, or a festive celebration, FULPARI has the perfect outfit for you\n\n",
                "images": [
                    "https://res.cloudinary.com/da26rdzwp/image/upload/v1725962568/1725962565074_fulpari-girls-lehenga-choli-ethnic-wear-embroidered-lehenga-choli-and-dupatta-set-light-blue-product-images-rvwirmik1p-0-202310262116.jpg",
                    "https://res.cloudinary.com/da26rdzwp/image/upload/v1725962571/1725962565399_fulpari-girls-lehenga-choli-ethnic-wear-embroidered-lehenga-choli-and-dupatta-set-light-blue-product-images-rvwirmik1p-1-202310262116.jpg"
                ],
                "brand": "FULPARI",
                "price": 850,
                "oldPrice": 999,
                "catName": "Fashion",
                "catId": "66c0d6d9430f507021d32280",
                "subCatId": "66c0dfb13490222862ae78cd",
                "subCat": "Girls",
                "subCatName": "Girls",
                "category": {
                    "_id": "66c0d6d9430f507021d32280",
                    "name": "Fashion",
                    "slug": "Fashion",
                    "images": [
                        "https://res.cloudinary.com/da26rdzwp/image/upload/v1725960852/1725960851153_fash.png"
                    ],
                    "color": "#ecffec",
                    "createdAt": "2024-08-17T16:59:05.656Z",
                    "updatedAt": "2024-09-10T09:34:13.338Z",
                    "__v": 0,
                    "id": "66c0d6d9430f507021d32280"
                },
                "countInStock": 150,
                "rating": 4,
                "isFeatured": false,
                "discount": 15,
                "productRam": [],
                "size": [
                    "S",
                    "M",
                    "L",
                    "XL"
                ],
                "productWeight": [],
                "location": "All",
                "dateCreated": "2024-08-28T14:13:25.731Z",
                "__v": 0,
                "id": "66cf30857f21a4cf0943ae69"
            },
            {
                "_id": "66cf311d7f21a4cf0943aeaa",
                "name": "ELQPRI Girls Lehenga Choli Ethnic Wear Embroidered Lehenga, Choli and Dupatta Set (Red, Pack of 1)(9 - 10 Years)",
                "description": "Nice well-made lehenga choli, exclusively for you, lightweight & breathable, party wear & home washable with exclusive designs and durable materials that feels light and comfortable. free-moving material which adjust according to your body and creates an astoundingly easy-going experience. made with the sense of the latest fashion trends. made for long-term wear.\n\n",
                "images": [
                    "https://res.cloudinary.com/da26rdzwp/image/upload/v1725961610/1725961608496_elqpri-girls-lehenga-choli-ethnic-wear-embroidered-lehenga-choli-and-dupatta-set-red-pack-of-1-9-10-years-product-images-rvck5u956f-0-202309191835.webp",
                    "https://res.cloudinary.com/da26rdzwp/image/upload/v1725961611/1725961608500_elqpri-girls-lehenga-choli-ethnic-wear-embroidered-lehenga-choli-and-dupatta-set-red-pack-of-1-9-10-years-product-images-rvck5u956f-1-202309191835.webp"
                ],
                "brand": "ELQPRI",
                "price": 899,
                "oldPrice": 999,
                "catName": "Fashion",
                "catId": "66c0d6d9430f507021d32280",
                "subCatId": "66c0dfb13490222862ae78cd",
                "subCat": "Girls",
                "subCatName": "Girls",
                "category": {
                    "_id": "66c0d6d9430f507021d32280",
                    "name": "Fashion",
                    "slug": "Fashion",
                    "images": [
                        "https://res.cloudinary.com/da26rdzwp/image/upload/v1725960852/1725960851153_fash.png"
                    ],
                    "color": "#ecffec",
                    "createdAt": "2024-08-17T16:59:05.656Z",
                    "updatedAt": "2024-09-10T09:34:13.338Z",
                    "__v": 0,
                    "id": "66c0d6d9430f507021d32280"
                },
                "countInStock": 450,
                "rating": 5,
                "isFeatured": false,
                "discount": 14,
                "productRam": [],
                "size": [
                    "S",
                    "M",
                    "L",
                    "XL"
                ],
                "productWeight": [],
                "location": "All",
                "dateCreated": "2024-08-28T14:15:57.836Z",
                "__v": 0,
                "id": "66cf311d7f21a4cf0943aeaa"
            },
            {
                "_id": "66cf32a77f21a4cf0943af73",
                "name": "NFC CREATION Boys Dupion Silk Embroidery Kurta and Pyjama Set",
                "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. ",
                "images": [
                    "https://res.cloudinary.com/da26rdzwp/image/upload/v1725962312/1725962310686_nfc-creation-boys-dupion-silk-embroidery-kurta-and-pyjama-set-product-images-rvph9ago7a-0-202302130733.jpg",
                    "https://res.cloudinary.com/da26rdzwp/image/upload/v1725962314/1725962310703_nfc-creation-boys-dupion-silk-embroidery-kurta-and-pyjama-set-product-images-rvph9ago7a-1-202302130733.jpg",
                    "https://res.cloudinary.com/da26rdzwp/image/upload/v1725962317/1725962310712_nfc-creation-boys-dupion-silk-embroidery-kurta-and-pyjama-set-product-images-rvph9ago7a-3-202302130733.jpg"
                ],
                "brand": "NFC CREATION",
                "price": 455,
                "oldPrice": 520,
                "catName": "Fashion",
                "catId": "66c0d6d9430f507021d32280",
                "subCatId": "66c0dfab3490222862ae78c7",
                "subCat": "Boys",
                "subCatName": "Boys",
                "category": {
                    "_id": "66c0d6d9430f507021d32280",
                    "name": "Fashion",
                    "slug": "Fashion",
                    "images": [
                        "https://res.cloudinary.com/da26rdzwp/image/upload/v1725960852/1725960851153_fash.png"
                    ],
                    "color": "#ecffec",
                    "createdAt": "2024-08-17T16:59:05.656Z",
                    "updatedAt": "2024-09-10T09:34:13.338Z",
                    "__v": 0,
                    "id": "66c0d6d9430f507021d32280"
                },
                "countInStock": 550,
                "rating": 4,
                "isFeatured": false,
                "discount": 14,
                "productRam": [],
                "size": [
                    "S",
                    "M"
                ],
                "productWeight": [],
                "location": "All",
                "dateCreated": "2024-08-28T14:22:31.547Z",
                "__v": 0,
                "id": "66cf32a77f21a4cf0943af73"
            },
            {
                "_id": "66cf364a7f21a4cf0943b087",
                "name": "GESPO Black & Teal Blue Colorblocked Round Neck Half Sleeve Casual T-Shirt",
                "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. ",
                "images": [
                    "https://res.cloudinary.com/da26rdzwp/image/upload/v1725962228/1725962226823_gespo-black-teal-blue-colorblocked-round-neck-half-sleeve-casual-t-shirt-product-images-rvwmlodbas-0-202304131033.jpg",
                    "https://res.cloudinary.com/da26rdzwp/image/upload/v1725962230/1725962226831_gespo-black-teal-blue-colorblocked-round-neck-half-sleeve-casual-t-shirt-product-images-rvwmlodbas-1-202304131033.webp",
                    "https://res.cloudinary.com/da26rdzwp/image/upload/v1725962232/1725962226835_gespo-black-teal-blue-colorblocked-round-neck-half-sleeve-casual-t-shirt-product-images-rvwmlodbas-2-202304131033.webp"
                ],
                "brand": "GESPO",
                "price": 399,
                "oldPrice": 499,
                "catName": "Fashion",
                "catId": "66c0d6d9430f507021d32280",
                "subCatId": "66c0df9d3490222862ae78bb",
                "subCat": "Men",
                "subCatName": "Men",
                "category": {
                    "_id": "66c0d6d9430f507021d32280",
                    "name": "Fashion",
                    "slug": "Fashion",
                    "images": [
                        "https://res.cloudinary.com/da26rdzwp/image/upload/v1725960852/1725960851153_fash.png"
                    ],
                    "color": "#ecffec",
                    "createdAt": "2024-08-17T16:59:05.656Z",
                    "updatedAt": "2024-09-10T09:34:13.338Z",
                    "__v": 0,
                    "id": "66c0d6d9430f507021d32280"
                },
                "countInStock": 150,
                "rating": 5,
                "isFeatured": false,
                "discount": 12,
                "productRam": [],
                "size": [
                    "S",
                    "M",
                    "L",
                    "XL"
                ],
                "productWeight": [],
                "location": "All",
                "dateCreated": "2024-08-28T14:38:02.893Z",
                "__v": 0,
                "id": "66cf364a7f21a4cf0943b087"
            },
            {
                "_id": "66cf3ed37f21a4cf0943b329",
                "name": "Open-Front Shrug with Shawl Lapel",
                "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. ",
                "images": [
                    "https://res.cloudinary.com/da26rdzwp/image/upload/v1725962137/1725962134602_open-front-shrug-with-shawl-lapel-model3-443002599_maroon-3-202301170133.jpg",
                    "https://res.cloudinary.com/da26rdzwp/image/upload/v1725962139/1725962134603_open-front-shrug-with-shawl-lapel-model4-443002599_maroon-4-202301170134.jpg",
                    "https://res.cloudinary.com/da26rdzwp/image/upload/v1725962144/1725962134611_open-front-shrug-with-shawl-lapel-model-443002599_maroon-0-202301170134.jpg"
                ],
                "brand": "FIG",
                "price": 499,
                "oldPrice": 599,
                "catName": "Fashion",
                "catId": "66c0d6d9430f507021d32280",
                "subCatId": "66c0dfa43490222862ae78c1",
                "subCat": "Women",
                "subCatName": "Women",
                "category": {
                    "_id": "66c0d6d9430f507021d32280",
                    "name": "Fashion",
                    "slug": "Fashion",
                    "images": [
                        "https://res.cloudinary.com/da26rdzwp/image/upload/v1725960852/1725960851153_fash.png"
                    ],
                    "color": "#ecffec",
                    "createdAt": "2024-08-17T16:59:05.656Z",
                    "updatedAt": "2024-09-10T09:34:13.338Z",
                    "__v": 0,
                    "id": "66c0d6d9430f507021d32280"
                },
                "countInStock": 150,
                "rating": 5,
                "isFeatured": true,
                "discount": 10,
                "productRam": [],
                "size": [
                    "S",
                    "M",
                    "L",
                    "XL"
                ],
                "productWeight": [],
                "location": "All",
                "dateCreated": "2024-08-28T15:14:27.617Z",
                "__v": 0,
                "id": "66cf3ed37f21a4cf0943b329"
            },
            {
                "_id": "66cf3fc97f21a4cf0943b37a",
                "name": "Fabflee Party Printed Women's Top | Women Tops | Crepe Top | Tops For Women | Tops For Women",
                "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. ",
                "images": [
                    "https://res.cloudinary.com/da26rdzwp/image/upload/v1725962046/1725962044454_fabflee-party-printed-women-s-top-women-tops-crepe-top-tops-for-women-tops-for-women-product-images-rvwdnv1ypj-0-202311010723.webp",
                    "https://res.cloudinary.com/da26rdzwp/image/upload/v1725962048/1725962044459_fabflee-party-printed-women-s-top-women-tops-crepe-top-tops-for-women-tops-for-women-product-images-rvwdnv1ypj-1-202311010723.webp",
                    "https://res.cloudinary.com/da26rdzwp/image/upload/v1725962050/1725962044477_fabflee-party-printed-women-s-top-women-tops-crepe-top-tops-for-women-tops-for-women-product-images-rvwdnv1ypj-2-202311010723.webp",
                    "https://res.cloudinary.com/da26rdzwp/image/upload/v1725962052/1725962044481_fabflee-party-printed-women-s-top-women-tops-crepe-top-tops-for-women-tops-for-women-product-images-rvwdnv1ypj-3-202311010723.webp"
                ],
                "brand": "Fabflee",
                "price": 299,
                "oldPrice": 399,
                "catName": "Fashion",
                "catId": "66c0d6d9430f507021d32280",
                "subCatId": "66c0dfa43490222862ae78c1",
                "subCat": "Women",
                "subCatName": "Women",
                "category": {
                    "_id": "66c0d6d9430f507021d32280",
                    "name": "Fashion",
                    "slug": "Fashion",
                    "images": [
                        "https://res.cloudinary.com/da26rdzwp/image/upload/v1725960852/1725960851153_fash.png"
                    ],
                    "color": "#ecffec",
                    "createdAt": "2024-08-17T16:59:05.656Z",
                    "updatedAt": "2024-09-10T09:34:13.338Z",
                    "__v": 0,
                    "id": "66c0d6d9430f507021d32280"
                },
                "countInStock": 300,
                "rating": 5,
                "isFeatured": false,
                "discount": 15,
                "productRam": [],
                "size": [
                    "S",
                    "M",
                    "L",
                    "XL"
                ],
                "productWeight": [],
                "location": "All",
                "dateCreated": "2024-08-28T15:18:33.700Z",
                "__v": 0,
                "id": "66cf3fc97f21a4cf0943b37a"
            },
            {
                "_id": "66d1df5c88319dc216a20017",
                "name": "VNEED Cotton Blend Straight Kurta with Pant | Women Kurta Pant Set | Girls Cotton Kurti and Pant Set | Women Kurta & Palazzo Pant Set (set of 1 ) (SIZE L)",
                "description": "This kurta pant set features a stylish straight-cut kurta paired with comfortable pants, offering a chic and effortless look suitable for both casual and semi-formal occasions.",
                "images": [
                    "https://res.cloudinary.com/da26rdzwp/image/upload/v1725961956/1725961954706_need-printed-cotton-straight-kurtis-for-women-fancy-kurti-for-girls-regular-office-college-wear-kurta-for-ladies-kurti-pant-set-of-1-size-l-product-images-rvyi2nw7q6-0-202408011909.jpg",
                    "https://res.cloudinary.com/da26rdzwp/image/upload/v1725961958/1725961954709_need-printed-cotton-straight-kurtis-for-women-fancy-kurti-for-girls-regular-office-college-wear-kurta-for-ladies-kurti-pant-set-of-1-size-l-product-images-rvyi2nw7q6-1-202408011909.jpg",
                    "https://res.cloudinary.com/da26rdzwp/image/upload/v1725961960/1725961954711_need-printed-cotton-straight-kurtis-for-women-fancy-kurti-for-girls-regular-office-college-wear-kurta-for-ladies-kurti-pant-set-of-1-size-l-product-images-rvyi2nw7q6-2-202408011910.jpg",
                    "https://res.cloudinary.com/da26rdzwp/image/upload/v1725961970/1725961954721_need-printed-cotton-straight-kurtis-for-women-fancy-kurti-for-girls-regular-office-college-wear-kurta-for-ladies-kurti-pant-set-of-1-size-l-product-images-rvyi2nw7q6-3-202408011910_1.jpg"
                ],
                "brand": "VNEED",
                "price": 455,
                "oldPrice": 655,
                "catName": "Fashion",
                "catId": "66c0d6d9430f507021d32280",
                "subCatId": "66c0dfb13490222862ae78cd",
                "subCat": "Girls",
                "subCatName": "Girls",
                "category": {
                    "_id": "66c0d6d9430f507021d32280",
                    "name": "Fashion",
                    "slug": "Fashion",
                    "images": [
                        "https://res.cloudinary.com/da26rdzwp/image/upload/v1725960852/1725960851153_fash.png"
                    ],
                    "color": "#ecffec",
                    "createdAt": "2024-08-17T16:59:05.656Z",
                    "updatedAt": "2024-09-10T09:34:13.338Z",
                    "__v": 0,
                    "id": "66c0d6d9430f507021d32280"
                },
                "countInStock": 10,
                "rating": 5,
                "isFeatured": false,
                "discount": 15,
                "productRam": [],
                "size": [
                    "S",
                    "M",
                    "L"
                ],
                "productWeight": [],
                "location": "All",
                "dateCreated": "2024-08-30T15:03:56.294Z",
                "__v": 0,
                "updatedAt": "2024-09-09T03:54:32.426Z",
                "id": "66d1df5c88319dc216a20017"
            },
            {
                "_id": "66d1dff588319dc216a20038",
                "name": "Modestouze Attires Women's Mukaish Worked Ethnic Jacket With Top and Pant Set",
                "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. ",
                "images": [
                    "https://res.cloudinary.com/da26rdzwp/image/upload/v1725961836/1725961835095_modestouze-attires-women-s-mukaish-worked-ethnic-jacket-with-top-and-pant-set-product-images-rvziicqwq6-0-202403231855.jpg",
                    "https://res.cloudinary.com/da26rdzwp/image/upload/v1725961838/1725961835097_modestouze-attires-women-s-mukaish-worked-ethnic-jacket-with-top-and-pant-set-product-images-rvziicqwq6-1-202403231855.jpg",
                    "https://res.cloudinary.com/da26rdzwp/image/upload/v1725961841/1725961835104_modestouze-attires-women-s-mukaish-worked-ethnic-jacket-with-top-and-pant-set-product-images-rvziicqwq6-2-202403231855.jpg",
                    "https://res.cloudinary.com/da26rdzwp/image/upload/v1725961843/1725961835108_modestouze-attires-women-s-mukaish-worked-ethnic-jacket-with-top-and-pant-set-product-images-rvziicqwq6-3-202403231855.jpg"
                ],
                "brand": "MODESTOUZE ATTIRES",
                "price": 850,
                "oldPrice": 999,
                "catName": "Fashion",
                "catId": "66c0d6d9430f507021d32280",
                "subCatId": "66c0dfb13490222862ae78cd",
                "subCat": "Girls",
                "subCatName": "Girls",
                "category": {
                    "_id": "66c0d6d9430f507021d32280",
                    "name": "Fashion",
                    "slug": "Fashion",
                    "images": [
                        "https://res.cloudinary.com/da26rdzwp/image/upload/v1725960852/1725960851153_fash.png"
                    ],
                    "color": "#ecffec",
                    "createdAt": "2024-08-17T16:59:05.656Z",
                    "updatedAt": "2024-09-10T09:34:13.338Z",
                    "__v": 0,
                    "id": "66c0d6d9430f507021d32280"
                },
                "countInStock": 450,
                "rating": 4,
                "isFeatured": false,
                "discount": 10,
                "productRam": [],
                "size": [
                    "S",
                    "M",
                    "L",
                    "XL"
                ],
                "productWeight": [],
                "location": "All",
                "dateCreated": "2024-08-30T15:06:29.169Z",
                "__v": 0,
                "id": "66d1dff588319dc216a20038"
            },
            {
                "_id": "66d44646aa5c959c5b9fa1c6",
                "name": "Altecia The Perfect Pair Women Cotton Co Ord Set-Tie & Dye Tracksuit with Insert Pockets-Women Tie & Dye 2-Piece Co-Ord Set-1PAIR (Size-XL)",
                "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
                "images": [
                    "https://res.cloudinary.com/da26rdzwp/image/upload/v1725961699/1725961697898_altecia-the-perfect-pair-women-cotton-co-ord-set-tie-dye-tracksuit-with-insert-pockets-women-tie-dye-2-piece-co-ord-set-1pair-size-xl-product-images-rvifrbqagu-0-202408030114.webp",
                    "https://res.cloudinary.com/da26rdzwp/image/upload/v1725961702/1725961697906_altecia-the-perfect-pair-women-cotton-co-ord-set-tie-dye-tracksuit-with-insert-pockets-women-tie-dye-2-piece-co-ord-set-1pair-size-xl-product-images-rvifrbqagu-1-202408030114.jpg",
                    "https://res.cloudinary.com/da26rdzwp/image/upload/v1725961704/1725961697931_altecia-the-perfect-pair-women-cotton-co-ord-set-tie-dye-tracksuit-with-insert-pockets-women-tie-dye-2-piece-co-ord-set-1pair-size-xl-product-images-rvifrbqagu-2-202408030114.webp",
                    "https://res.cloudinary.com/da26rdzwp/image/upload/v1725961707/1725961697961_altecia-the-perfect-pair-women-cotton-co-ord-set-tie-dye-tracksuit-with-insert-pockets-women-tie-dye-2-piece-co-ord-set-1pair-size-xl-product-images-rvifrbqagu-3-202408030114.jpg"
                ],
                "brand": "Altecia",
                "price": 650,
                "oldPrice": 780,
                "catName": "Fashion",
                "catId": "66c0d6d9430f507021d32280",
                "subCatId": "66c0dfb13490222862ae78cd",
                "subCat": "Girls",
                "subCatName": "Girls",
                "category": {
                    "_id": "66c0d6d9430f507021d32280",
                    "name": "Fashion",
                    "slug": "Fashion",
                    "images": [
                        "https://res.cloudinary.com/da26rdzwp/image/upload/v1725960852/1725960851153_fash.png"
                    ],
                    "color": "#ecffec",
                    "createdAt": "2024-08-17T16:59:05.656Z",
                    "updatedAt": "2024-09-10T09:34:13.338Z",
                    "__v": 0,
                    "id": "66c0d6d9430f507021d32280"
                },
                "countInStock": 150,
                "rating": 4,
                "isFeatured": false,
                "discount": 15,
                "productRam": [],
                "size": [
                    "S",
                    "M",
                    "L",
                    "XL"
                ],
                "productWeight": [],
                "location": "All",
                "dateCreated": "2024-09-01T10:47:34.389Z",
                "__v": 0,
                "id": "66d44646aa5c959c5b9fa1c6"
            },
            {
                "_id": "66d491377d46e49d1b58de97",
                "name": "CLOSWIF Mens Polo Neck | Solid Shirt | Regular Fit | Full length Sleeve Shirt | Shirt For Mens | Mens Shirt | Mens shirt | Partywear Shirts For Mens | Shirts | shirts | Casual Shirt |",
                "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
                "images": [
                    "https://res.cloudinary.com/da26rdzwp/image/upload/v1725961503/1725961497676_closwif-mens-polo-neck-solid-shirt-regular-fit-full-length-sleeve-shirt-shirt-for-mens-mens-shirt-mens-shirt-partywear-shirts-for-mens-shirts-shirts-casual-shirt-product-images-rvyj3dsm7i-0-202407121653.jpg",
                    "https://res.cloudinary.com/da26rdzwp/image/upload/v1725961504/1725961497679_closwif-mens-polo-neck-solid-shirt-regular-fit-full-length-sleeve-shirt-shirt-for-mens-mens-shirt-mens-shirt-partywear-shirts-for-mens-shirts-shirts-casual-shirt-product-images-rvyj3dsm7i-1-202407121653.jpg",
                    "https://res.cloudinary.com/da26rdzwp/image/upload/v1725961506/1725961497680_closwif-mens-polo-neck-solid-shirt-regular-fit-full-length-sleeve-shirt-shirt-for-mens-mens-shirt-mens-shirt-partywear-shirts-for-mens-shirts-shirts-casual-shirt-product-images-rvyj3dsm7i-2-202407121653.jpg"
                ],
                "brand": "CLOSWIF",
                "price": 450,
                "oldPrice": 550,
                "catName": "Fashion",
                "catId": "66c0d6d9430f507021d32280",
                "subCatId": "66c0df9d3490222862ae78bb",
                "subCat": "Men",
                "subCatName": "Men",
                "category": {
                    "_id": "66c0d6d9430f507021d32280",
                    "name": "Fashion",
                    "slug": "Fashion",
                    "images": [
                        "https://res.cloudinary.com/da26rdzwp/image/upload/v1725960852/1725960851153_fash.png"
                    ],
                    "color": "#ecffec",
                    "createdAt": "2024-08-17T16:59:05.656Z",
                    "updatedAt": "2024-09-10T09:34:13.338Z",
                    "__v": 0,
                    "id": "66c0d6d9430f507021d32280"
                },
                "countInStock": 450,
                "rating": 4,
                "isFeatured": false,
                "discount": 12,
                "productRam": [],
                "size": [
                    "S",
                    "M",
                    "L",
                    "XL"
                ],
                "productWeight": [],
                "location": "All",
                "dateCreated": "2024-09-01T16:07:19.145Z",
                "__v": 0,
                "id": "66d491377d46e49d1b58de97"
            },
            {
                "_id": "66d492927d46e49d1b58df07",
                "name": "TAZO Mens Round Neck | Colourblocked Tshirts | Regular Fit | Full length Sleeve T-Shirt | T Shirt For Mens | Mens T Shirt | Mens Tshirt | Tshirt for Mens | T Shirts | Tshirts | Gym Wear | Sports Wear | Mens Tshirt | Dryfit Tshirts",
                "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
                "images": [
                    "https://res.cloudinary.com/da26rdzwp/image/upload/v1725961399/1725961397626_tazo-mens-round-neck-colourblocked-full-sleeve-dryfit-gymwear-tshirt-product-images-rvzwdw4nio-0-202404101341.webp",
                    "https://res.cloudinary.com/da26rdzwp/image/upload/v1725961401/1725961397629_tazo-mens-round-neck-colourblocked-full-sleeve-dryfit-gymwear-tshirt-product-images-rvzwdw4nio-1-202404101341.jpg",
                    "https://res.cloudinary.com/da26rdzwp/image/upload/v1725961403/1725961397629_tazo-mens-round-neck-colourblocked-full-sleeve-dryfit-gymwear-tshirt-product-images-rvzwdw4nio-2-202404101341.jpg"
                ],
                "brand": "Tazo",
                "price": 450,
                "oldPrice": 550,
                "catName": "Fashion",
                "catId": "66c0d6d9430f507021d32280",
                "subCatId": "66c0df9d3490222862ae78bb",
                "subCat": "Men",
                "subCatName": "Men",
                "category": {
                    "_id": "66c0d6d9430f507021d32280",
                    "name": "Fashion",
                    "slug": "Fashion",
                    "images": [
                        "https://res.cloudinary.com/da26rdzwp/image/upload/v1725960852/1725960851153_fash.png"
                    ],
                    "color": "#ecffec",
                    "createdAt": "2024-08-17T16:59:05.656Z",
                    "updatedAt": "2024-09-10T09:34:13.338Z",
                    "__v": 0,
                    "id": "66c0d6d9430f507021d32280"
                },
                "countInStock": 450,
                "rating": 4,
                "isFeatured": false,
                "discount": 12,
                "productRam": [],
                "size": [
                    "S",
                    "M",
                    "L",
                    "XL"
                ],
                "productWeight": [],
                "location": "All",
                "dateCreated": "2024-09-01T16:13:06.752Z",
                "__v": 0,
                "id": "66d492927d46e49d1b58df07"
            },
            {
                "_id": "66d595bf247824aacf08cb8a",
                "name": "Altecia Tie and Dye Jogger with Baggy Trouser with t-shirt for Women low price up to off new arrival most loved collection trending tops fancy top printed top printed trouser casual wear party wear daily wear night wear top bottom set-1Pair(size -XL)",
                "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. ",
                "images": [
                    "https://res.cloudinary.com/da26rdzwp/image/upload/v1725961295/1725961289021_altecia-tie-and-dye-jogger-with-baggy-trouser-with-t-shirt-for-women-low-price-up-to-off-new-arrival-most-loved-collection-trending-tops-fancy-top-printed-top-printed-trouser-casual-wear-party-wear-daily-wear-.jpg",
                    "https://res.cloudinary.com/da26rdzwp/image/upload/v1725961323/1725961321448_altecia-tie-and-dye-jogger-with-baggy-trouser-with-t-shirt-for-women-low-price-up-to-off-new-arrival-most-loved-collection-trending-tops-fancy-top-printed-top-printed-trouser-casual-wear-party-wear-daily-w_1.jpg",
                    "https://res.cloudinary.com/da26rdzwp/image/upload/v1725961330/1725961321488_altecia-tie-and-dye-jogger-with-baggy-trouser-with-t-shirt-for-women-low-price-up-to-off-new-arrival-most-loved-collection-trending-tops-fancy-top-printed-top-printed-trouser-casual-wear-party-wear-daily-w_2.jpg",
                    "https://res.cloudinary.com/da26rdzwp/image/upload/v1725961332/1725961321496_altecia-tie-and-dye-jogger-with-baggy-trouser-with-t-shirt-for-women-low-price-up-to-off-new-arrival-most-loved-collection-trending-tops-fancy-top-printed-top-printed-trouser-casual-wear-party-wear-daily-w_3.jpg"
                ],
                "brand": "Altecia",
                "price": 1600,
                "oldPrice": 1800,
                "catName": "Fashion",
                "catId": "66c0d6d9430f507021d32280",
                "subCatId": "66c0dfa43490222862ae78c1",
                "subCat": "Women",
                "subCatName": "Women",
                "category": {
                    "_id": "66c0d6d9430f507021d32280",
                    "name": "Fashion",
                    "slug": "Fashion",
                    "images": [
                        "https://res.cloudinary.com/da26rdzwp/image/upload/v1725960852/1725960851153_fash.png"
                    ],
                    "color": "#ecffec",
                    "createdAt": "2024-08-17T16:59:05.656Z",
                    "updatedAt": "2024-09-10T09:34:13.338Z",
                    "__v": 0,
                    "id": "66c0d6d9430f507021d32280"
                },
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
                "id": "66d595bf247824aacf08cb8a"
            },
            {
                "_id": "66df0156d9c220020e25a2a6",
                "name": "Siril Georgette Pink Color Saree with Blouse piece",
                "description": "The saree is an outfit which women can carry off with great panache. With the right material and drape, it can accentuate the beauty of women of all ages and forms.\n\n",
                "images": [
                    "https://res.cloudinary.com/da26rdzwp/image/upload/v1725961126/1725961124187_siril-georgette-pink-color-saree-with-blouse-piece-product-images-rvrk9p11sk-0-202308161432.webp",
                    "https://res.cloudinary.com/da26rdzwp/image/upload/v1725961127/1725961124195_siril-georgette-pink-color-saree-with-blouse-piece-product-images-rvrk9p11sk-1-202308161432.webp",
                    "https://res.cloudinary.com/da26rdzwp/image/upload/v1725961129/1725961124510_siril-georgette-pink-color-saree-with-blouse-piece-product-images-rvrk9p11sk-2-202308161432.webp",
                    "https://res.cloudinary.com/da26rdzwp/image/upload/v1725961131/1725961124512_siril-georgette-pink-color-saree-with-blouse-piece-product-images-rvrk9p11sk-3-202308161432.webp"
                ],
                "brand": "SIRIL",
                "price": 550,
                "oldPrice": 650,
                "catName": "Fashion",
                "catId": "66c0d6d9430f507021d32280",
                "subCatId": "66c0dfa43490222862ae78c1",
                "subCat": "Women",
                "subCatName": "Women",
                "category": {
                    "_id": "66c0d6d9430f507021d32280",
                    "name": "Fashion",
                    "slug": "Fashion",
                    "images": [
                        "https://res.cloudinary.com/da26rdzwp/image/upload/v1725960852/1725960851153_fash.png"
                    ],
                    "color": "#ecffec",
                    "createdAt": "2024-08-17T16:59:05.656Z",
                    "updatedAt": "2024-09-10T09:34:13.338Z",
                    "__v": 0,
                    "id": "66c0d6d9430f507021d32280"
                },
                "countInStock": 150,
                "rating": 5,
                "isFeatured": true,
                "discount": 12,
                "productRam": [],
                "size": [],
                "productWeight": [],
                "location": "All",
                "dateCreated": "2024-09-09T14:08:22.354Z",
                "__v": 0,
                "id": "66df0156d9c220020e25a2a6"
            }
        ],
        "totalPages": null,
        "page": 1
    }

    const [checked, setChecked] = useState(true);

    const handleChange = (event) => {
        setChecked(event.target.checked);
    };

    const [age, setAge] = useState('');

    const handleChange2 = (event) => {
      setAge(event.target.value);
    };

    return (
        <main className='mt-12'>
            <div className="container mx-auto px-4 flex flex-col md:flex-row gap-4">
                <div>
                    <div className="mb-6">
                        <h2 className="text-xl font-semibold mb-3">Product Categories</h2>
                        <div>
                            <ul>
                                {allCategories.map(i => (
                                    <li>
                                        <FormControlLabel control={<Checkbox className='py-[0.35rem]' checked={checked} onChange={handleChange} inputProps={{ 'aria-label': 'controlled' }} /> } label={i.name} />
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className='mb-6'>
                        <h2 className="text-xl font-semibold mb-3">Filter By Price</h2>
                        <Slider defaultValue={50} aria-label="Default" valueLabelDisplay="auto" />
                    </div>
                    <div className='mb-4'>
                        <h2 className="text-xl font-semibold mb-3">Product Status</h2>
                        <div>
                            <ul>
                                <li>
                                    <FormControlLabel control={<Checkbox className='py-[0.35rem]' checked={checked} onChange={handleChange} inputProps={{ 'aria-label': 'controlled' }} /> } label={'In Stock'} />
                                </li>
                                <li>
                                    <FormControlLabel control={<Checkbox className='py-[0.35rem]' checked={checked} onChange={handleChange} inputProps={{ 'aria-label': 'controlled' }} /> } label={'In Sale'} />
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div>
                        <img className='max-w-[22rem]' src='/images/sidebar-banner.gif' alt='sidebar' />
                    </div>
                </div>
                <div className="w-full">
                    <ul className='w-full flex flex-wrap gap-4 items-center bg-gray-200 text-gray-600 py-1 px-[1.6rem] mb-4 gap-y-0'>
                        <li className='text-[1.25rem]'><FaListUl /></li>
                        <li className='text-[1.25rem]'><BsFillGridFill /></li>
                        <li className='text-[1.25rem]'><BsGrid3X3GapFill  /></li>
                        <li className='m-0 md:ms-auto'>
                            <FormControl sx={{ m: 1, minWidth: 120 }} size="small" className='bg-white'>
                                <InputLabel id="demo-select-small-label">Sort By</InputLabel>
                                <Select labelId="demo-select-small-label" id="demo-select-small" value={age} label="Sort By" onChange={handleChange2} >
                                    <MenuItem value="">
                                    <em>None</em>
                                    </MenuItem>
                                    <MenuItem value={10}>Ten</MenuItem>
                                    <MenuItem value={20}>Twenty</MenuItem>
                                    <MenuItem value={30}>Thirty</MenuItem>
                                </Select>
                            </FormControl>
                        </li>
                        <li>
                            <FormControl sx={{ m: 1, minWidth: 120 }} size="small" className='bg-white'>
                                <InputLabel id="demo-select-small-label">Show 10</InputLabel>
                                <Select labelId="demo-select-small-label" id="demo-select-small" value={age} label="Show" onChange={handleChange2} >
                                    <MenuItem value="">
                                    <em>None</em>
                                    </MenuItem>
                                    <MenuItem value={10}>10</MenuItem>
                                    <MenuItem value={20}>20</MenuItem>
                                    <MenuItem value={30}>30</MenuItem>
                                </Select>
                            </FormControl>
                        </li>
                    </ul>
                    <div className="grid gap-3 mt-4 product-grid">
                        {productData.products.map(i => (<ProductCard key={i.id} data={i} styles={{maxWidth: 'none'}} />))}
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Filter;