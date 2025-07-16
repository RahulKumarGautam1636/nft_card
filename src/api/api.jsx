import axios from "axios";
import { NEXT_APP_BASE_URL } from "@/constants";
import { banners, category, categoryId, catNameData, featured, homeBanners, homeBottomBanners, homeSideBanners, productPerPage } from "@/data";
import { getBanners2, getCategories2, getFilteredProducts2, getProducts2 } from "@/actions/get";

export const isLive = false;
export const withRemoteDB = true;
const fixedData = false;
const emptyRes = false;

const baseURL = process.env.NEXT_PUBLIC_BASE_URL;

export const getBanners = async (type) => { 
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
    let res = await getBanners2(type);
    return res.data;
}

export const getCategories = async (caller) => {
    console.log(caller);
    if (emptyRes) return { categoryList: [{ name: '', slug: '2342322342', children: [], images: ['']}] };
    let res = await getCategories2();
    return res.data;
}

export const getProducts = async ({ catName, catId, subCatId, page, perPage, location }) => {
    if (emptyRes) return { products: [] };
    let res = await getProducts2({
        catName: catName, 
        catId: catId, 
        subCatId: subCatId, 
        page: page, 
        perPage: perPage, 
        location: location
    });
    return res;
}

export const getFeaturedProducts = async () => {
    if (emptyRes) return [];
    let res = await getProducts2({ featured: true });
    return res;
}


export const getProduct = async (id) => {
    // if (emptyRes) return [];
    let res = await getProducts2({ id: id }); 
    return res;
}
export const getReviews = async (id) => {
    if (emptyRes) return [];
    const res = await axios.get(`https://api.spicezgold.com/api/productReviews?productId=${id}`);
    return res.data;
}

export const getCatNameProducts = async (catName, location) => {
    // if (fixedData) return catNameData;
    // if (emptyRes) return {products: []};
    let res = await getProducts2({ catName: catName, location: location }); 
    return res;
}

export const getCatIdProducts = async (catTypeName, catIdValue, location) => {
    // if (fixedData) return categoryId;
    if (emptyRes) return {products: []};
    let res = await getProducts2({[catTypeName]: catIdValue, location: location});
    return res;
}

export const getFilteredProducts = async (catType, id, minPrice=100, maxPrice=100000, location='All') => {
    if (emptyRes) return [];
    let res = getFilteredProducts2({ catType: catType, id: id, minPrice: minPrice, maxPrice: maxPrice, location: location });
    return res;
}

export const searchProducts = async (query) => {
    let res = await getProducts2({ search: query });
    return res;
}

// LOGIN API ---------------------------------------------------------------------------------------

export const login = async (phone, password, compCode) => { 
    if (emptyRes || fixedData) return { data: {} };  
    const res = await axios.get(`${NEXT_APP_BASE_URL}/api/UserAuth?UN=${phone}&UP=${password}&CID=${compCode}`);
    return res;
}

export const register = async (params) => {
    try {
        const res = await axios.post(`${NEXT_APP_BASE_URL}/api/UserReg`, params);
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