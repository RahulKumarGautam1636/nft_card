import axios from "axios";

const isLive = true;
const emptyRes = false;

const baseURL = 'https://node-server-jyhc.onrender.com';
                // https://node-server-ecommerce.onrender.com 

export const getBanners = async (type) => {
    console.log(`getBanners ${type}`);   
    if (emptyRes) return [];
    const res = await axios.get(isLive ? `${baseURL}/api/${type}` : `http://localhost:3000/${type}`);
    return res.data;
}

export const getCategories = async (caller) => {
    console.log('getCategories', caller);
    if (emptyRes) return { categoryList: [{ name: '', slug: '2342322342', children: [], images: ['']}] };
    const res = await axios.get(isLive ? `${baseURL}/api/category` : 'http://localhost:3000/category');
    return res.data;
}

export const getProducts = async () => {
    console.log('getProducts');
    if (emptyRes) return { products: [] };
    const res = await axios.get(isLive ? `${baseURL}/api/products?page=1&perPage=8&location=All` : 'http://localhost:3000/productsPerPage');
    return res.data;
}

export const getFeaturedProducts = async () => {
    console.log('getFeaturedProducts');
    if (emptyRes) return [];
    const res = await axios.get(isLive ? `${baseURL}/api/products/featured?location=All` : 'http://localhost:3000/featured');
    return res.data;
}


export const getProduct = async (id) => {
    console.log('getProduct');
    // if (emptyRes) return [];
    const res = await axios.get(isLive ? `${baseURL}/api/products/${id}` : 'http://localhost:3000/filteredProducts');
    return res.data;
}
export const getReviews = async (id) => {
    console.log('getReviews');
    if (emptyRes) return [];
    const res = await axios.get(isLive ? `${baseURL}/api/productReviews?productId=${id}` : 'http://localhost:3000/filteredProducts');
    return res.data;
}

export const getCatNameProducts = async (catName, location) => {
    console.log('getCatNameProducts');
    if (emptyRes) return {products: []};
    const res = await axios.get(isLive ? `${baseURL}/api/products/catName?catName=${catName}&location=${location}` : 'http://localhost:3000/filteredProducts');
    return res.data;
}

export const getCatIdProducts = async (catName, id, location) => {
    console.log('getCatIdProducts');
    if (emptyRes) return {products: []};
    const res = await axios.get(isLive ? `${baseURL}/api/products/${catName}?${catName}=${id}&location=${location}` : 'http://localhost:3000/filteredProducts');
    return res.data;
}

export const getFilteredProducts = async (catType, id, minPrice=100, maxPrice=100000, location='All') => {
    console.log('getFilteredProducts');
    if (emptyRes) return [];
    const res = await axios.get(isLive ? `${baseURL}/api/products/fiterByPrice?minPrice=${minPrice}&maxPrice=${maxPrice}&${catType}=${id}&location=${location}` : 'http://localhost:3000/filteredProducts');
    return res.data;
}

export const searchProducts = async (query) => {    
    console.log('searchProducts');
    const res = await axios.get(isLive ? `${baseURL}/api/search?q=${query}` : `http://localhost:3000/api/search?q=${query}`);
    return res.data;
}
