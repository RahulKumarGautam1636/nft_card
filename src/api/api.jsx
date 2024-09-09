import axios from "axios";

const isLive = true;

export const getHomeBanners = async () => {
    const res = await axios.get(isLive ? 'https://server-node-93tx.onrender.com/api/homeBanner' : 'http://localhost:3000/homeBanners');
    return res.data;
}

export const getBanners = async () => {
    const res = await axios.get(isLive ? 'https://server-node-93tx.onrender.com/api/banners' : 'http://localhost:3000/banners');
    return res.data;
}

export const getCategories = async () => {
    const res = await axios.get(isLive ? 'https://server-node-93tx.onrender.com/api/category' : 'http://localhost:3000/category');
    return res.data;
}

export const getProducts = async () => {
    const res = await axios.get(isLive ? 'https://server-node-93tx.onrender.com/api/products?page=1&perPage=8&location=All' : 'http://localhost:3000/productsPerPage');
    return res.data;
}

export const getFeaturedProducts = async () => {
    const res = await axios.get(isLive ? 'https://server-node-93tx.onrender.com/api/products/featured?location=All' : 'http://localhost:3000/featured');
    return res.data;
}

export const getFilteredProducts = async (catName, location) => {
    const res = await axios.get(isLive ? `https://server-node-93tx.onrender.com/api/products/catName?catName=${catName}&location=${location}` : 'http://localhost:3000/filteredProducts');
    return res.data;
}

export const getProduct = async (id) => {
    const res = await axios.get(isLive ? `https://server-node-93tx.onrender.com/api/products/${id}` : 'http://localhost:3000/filteredProducts');
    return res.data;
}
export const getReviews = async (id) => {
    const res = await axios.get(isLive ? `https://server-node-93tx.onrender.com/api/productReviews?productId=${id}` : 'http://localhost:3000/filteredProducts');
    return res.data;
}

export const getSubCatProducts = async (subCatId, location) => {
    const res = await axios.get(isLive ? `https://server-node-93tx.onrender.com/api/products/subCatId?subCatId=${subCatId}&location=${location}` : 'http://localhost:3000/filteredProducts');
    return res.data;
}