import axios from "axios";

const isLive = true;

const baseURL = 'https://node-server-ecommerce.onrender.com';


export const getBanners = async (type) => {
    console.log(`getBanners ${type}`);    
    console.log(`${baseURL}/api/${type}`);
    
    const res = await axios.get(isLive ? `${baseURL}/api/${type}` : `http://localhost:3000/${type}`);
    return res.data;
}

export const getCategories = async (caller) => {
    console.log('getCategories', caller);
    
    const res = await axios.get(isLive ? `${baseURL}/api/category` : 'http://localhost:3000/category');
    return res.data;
}

export const getProducts = async () => {
    console.log('getProducts');
    
    const res = await axios.get(isLive ? `${baseURL}/api/products?page=1&perPage=8&location=All` : 'http://localhost:3000/productsPerPage');
    return res.data;
}

export const getFeaturedProducts = async () => {
    console.log('getFeaturedProducts');
    
    const res = await axios.get(isLive ? `${baseURL}/api/products/featured?location=All` : 'http://localhost:3000/featured');
    return res.data;
}


export const getProduct = async (id) => {
    console.log('getProduct');
    
    const res = await axios.get(isLive ? `${baseURL}/api/products/${id}` : 'http://localhost:3000/filteredProducts');
    return res.data;
}
export const getReviews = async (id) => {
    console.log('getReviews');
    
    const res = await axios.get(isLive ? `${baseURL}/api/productReviews?productId=${id}` : 'http://localhost:3000/filteredProducts');
    return res.data;
}

export const getCatNameProducts = async (catName, location) => {
    console.log('getCatNameProducts');
    
    const res = await axios.get(isLive ? `${baseURL}/api/products/catName?catName=${catName}&location=${location}` : 'http://localhost:3000/filteredProducts');
    return res.data;
}

export const getCatIdProducts = async (catName, id, location) => {
    console.log('getCatIdProducts');
    
    const res = await axios.get(isLive ? `${baseURL}/api/products/${catName}?${catName}=${id}&location=${location}` : 'http://localhost:3000/filteredProducts');
    return res.data;
}

export const getFilteredProducts = async (catType, id, minPrice, maxPrice, location) => {
    console.log('getFilteredProducts');
    
    const res = await axios.get(isLive ? `${baseURL}/api/products/fiterByPrice?minPrice=${minPrice}&maxPrice=${maxPrice}&${catType}=${id}&location=${location}` : 'http://localhost:3000/filteredProducts');
    return res.data;
}

// https://node-server-ecommerce.onrender.com/api/products/fiterByPrice?minPrice=100&maxPrice=100000&subCatId=66c0dfab3490222862ae78c7&location=All

