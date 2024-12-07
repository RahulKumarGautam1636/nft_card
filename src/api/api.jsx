import axios from "axios";
import { dummyUser, NEXT_APP_BASE_URL } from "@/constants";
import { banners, category, categoryId, catNameData, featured, homeBanners, homeBottomBanners, homeSideBanners, productPerPage } from "@/data";
import { getBanners2, getCategories2, getFilteredProducts2, getProducts2 } from "@/actions/banners";

export const isLive = false;
export const withDB = true;
const fixedData = false;
const emptyRes = false;

const myBaseURL = process.env.NEXT_PUBLIC_BASE_URL;
const otherBaseURL = process.env.NEXT_PUBLIC_REMOTE_BASE_URL;

const baseURL = isLive ? otherBaseURL : myBaseURL;

// https://node-server-dux3.onrender.com;
// https://node-server-utis.onrender.comy
// https://node-server-jyhc.onrender.com
// https://node-server-ecommerce.onrender.com 

export const getBanners = async (type) => {
    console.log(`getBanners ${type}`);   
    // if (fixedData) {
    //     if (type === 'banners') {
    //         return banners;
    //     } else if (type === 'homeBanner') {
    //         return homeBanners;
    //     } else if (type === 'homeSideBanners') {
    //         return homeSideBanners;
    //     } else if (type === 'homeBottomBanners') {
    //         return homeBottomBanners;
    //     }
    // }
    if (emptyRes) return [];
    let res;
    if (withDB) {
        res = await getBanners2(type);
    } else {
        res = await axios.get(isLive ? `${baseURL}/api/${type}` : `${baseURL}/api/banners?type=${type}`);
    }
    return res.data;
}

export const getCategories = async (caller) => {
    console.log('getCategories', caller);
    // if (fixedData) return category;
    if (emptyRes) return { categoryList: [{ name: '', slug: '2342322342', children: [], images: ['']}] };
    let res;
    if (withDB) {
        res = await getCategories2();
    } else {
        res = await axios.get(isLive ? `${baseURL}/api/category` : `${baseURL}/api/category`);
    } 
    return res.data;
}

export const getProducts = async ({ catName, catId, subCatId, page, perPage, location }) => {
    console.log('getProducts');
    // if (fixedData) return productPerPage;
    if (emptyRes) return { products: [] };
    let res;
    if (withDB) {
        res = await getProducts2({
            catName: catName, 
            catId: catId, 
            subCatId: subCatId, 
            page: page, 
            perPage: perPage, 
            location: location
        });
        return res;
    } else {
        res = await axios.get(isLive ? `${baseURL}/api/products?page=1&perPage=8&location=All` : `${baseURL}/api/products?catId=${catId || ''}&subCatId=${subCatId || ''}&catName=${catName || ''}&page=${page || ''}&perPage=${perPage || ''}&location=${location || ''}`);
        return res.data;
    }
}

export const getFeaturedProducts = async () => {
    console.log('getFeaturedProducts');
    // if (fixedData) return featured;
    if (emptyRes) return [];
    let res;
    if (withDB) {
        res = await getProducts2({ featured: true });
        return res;
    } else {
        res = await axios.get(isLive ? `${baseURL}/api/products/featured?location=All` : `${baseURL}/api/products/featured?location=All`);
        return res.data;
    }
}


export const getProduct = async (id) => {
    console.log('getProduct');
    // if (emptyRes) return [];
    let res;
    if (withDB) {
        res = await getProducts2({ id: id }); 
        return res;
    }
    res = await axios.get(isLive ? `${baseURL}/api/products/${id}` : `${baseURL}/api/products/${id}`);
    return res.data;
}
export const getReviews = async (id) => {
    console.log('getReviews');
    if (emptyRes) return [];
    const res = await axios.get(`${otherBaseURL}/api/productReviews?productId=${id}`);
    return res.data;
}

export const getCatNameProducts = async (catName, location) => {
    console.log('getCatNameProducts');
    // if (fixedData) return catNameData;
    // if (emptyRes) return {products: []};

    let res;
    if (withDB) {
        res = await getProducts2({ catName: catName, location: location }); 
        return res;
    }
    res = await axios.get(isLive ? `${baseURL}/api/products/catName?catName=${catName}&location=${location}` : `${baseURL}/api/products?catName=${catName}&location=${location}`);
    return res.data;
}

export const getCatIdProducts = async (catTypeName, catIdValue, location) => {
    // if (fixedData) return categoryId;
    if (emptyRes) return {products: []};
    let res;
    if (withDB) {
        res = await getProducts2({[catTypeName]: catIdValue, location: location});
        return res;
    }
    res = await axios.get(isLive ? `${baseURL}/api/products/${catTypeName}?${catTypeName}=${catIdValue}&location=${location}` : `${baseURL}/api/products?${catTypeName}=${catIdValue}&location=${location}`);
    return res.data;
}

export const getFilteredProducts = async (catType, id, minPrice=100, maxPrice=100000, location='All') => {
    console.log('getFilteredProducts');
    if (emptyRes) return [];
    let res;
    if (withDB) {
        res = getFilteredProducts2({ catType: catType, id: id, minPrice: minPrice, maxPrice: maxPrice, location: location });
        return res;
    }
    res = await axios.get(isLive ? `${otherBaseURL}/api/products/fiterByPrice?minPrice=${minPrice}&maxPrice=${maxPrice}&${catType}=${id}&location=${location}` : `${myBaseURL}/api/filter/${catType}?minPrice=${minPrice}&maxPrice=${maxPrice}&id=${id}&location=${location}`);
    return res.data;
}

export const searchProducts = async (query) => {
    console.log('searchProducts');
    let res;
    if (withDB) {
        res = await getProducts2({ search: query });
        return res;
    } else {
        res = await axios.get(isLive ? `${baseURL}/api/search?q=${query}` : `${baseURL}/api/products?search=${query}`);
        return res.data;
    }
}

// LOGIN API ---------------------------------------------------------------------------------------

export const login = async (phone, password, compCode) => { 
    if (emptyRes || fixedData) return { data: dummyUser };  
    const res = await axios.get(`${NEXT_APP_BASE_URL}/api/UserAuth?UN=${phone}&UP=${password}&CID=${compCode}`);
    return res;
}

export const register = async (params) => {
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
} 

// export const getOtp = async () => {
//     loaderAction(true);
//     const res = await axios.get(`${NEXT_APP_BASE_URL}/api/UserReg/0?name=Subscriber&mob=${regData.RegMob1}`);
//     loaderAction(false);
//     if (res.status === 200) {
//       console.log(res.data);
//       return res.data;
//     }
//     alert('An Error Occured, Try again later.');
//     return 'asdfasdasdf';
// }

export const getOtp = () => '0'; 