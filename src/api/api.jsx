import axios from "axios";

const isLive = true;

const baseURL = 'https://node-server-ecommerce.onrender.com';

export const getHomeBanners = async () => {
    const res = await axios.get(isLive ? `${baseURL}/api/homeBanner` : 'http://localhost:3000/homeBanners');
    return res.data;
}

export const getBanners = async () => {
    const res = await axios.get(isLive ? `${baseURL}/api/banners` : 'http://localhost:3000/banners');
    return res.data;
}

export const getCategories = async () => {
    const res = await axios.get(isLive ? `${baseURL}/api/category` : 'http://localhost:3000/category');
    return res.data;
}

export const getProducts = async () => {
    const res = await axios.get(isLive ? `${baseURL}/api/products?page=1&perPage=8&location=All` : 'http://localhost:3000/productsPerPage');
    return res.data;
}

export const getFeaturedProducts = async () => {
    const res = await axios.get(isLive ? `${baseURL}/api/products/featured?location=All` : 'http://localhost:3000/featured');
    return res.data;
}

export const getFilteredProducts = async (catName, location) => {
    const res = await axios.get(isLive ? `${baseURL}/api/products/catName?catName=${catName}&location=${location}` : 'http://localhost:3000/filteredProducts');
    return res.data;
}

export const getProduct = async (id) => {
    const res = await axios.get(isLive ? `${baseURL}/api/products/${id}` : 'http://localhost:3000/filteredProducts');
    return res.data;
}
export const getReviews = async (id) => {
    const res = await axios.get(isLive ? `${baseURL}/api/productReviews?productId=${id}` : 'http://localhost:3000/filteredProducts');
    return res.data;
}

export const getSubCatProducts = async (subCatId, location) => {
    const res = await axios.get(isLive ? `${baseURL}/api/products/subCatId?subCatId=${subCatId}&location=${location}` : 'http://localhost:3000/filteredProducts');
    return res.data;
}