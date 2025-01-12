"use server"

import { Banners, Brands, Category, HomeBanner, HomeBottomBanners, HomeSideBanners, Products, SubCategory } from "@/lib/models";
import dbConnect from "@/lib/dbConnect";
import { parseData, waitFor } from "@/api/actionUtils";
// import mongoose from "mongoose";

export async function getBanners2(type) {
    
    await dbConnect();

    let banners = [];

    if (type === 'banners') {
        banners = await Banners.find({});
    } else if (type === 'homeBanner') {
        banners = await HomeBanner.find({});
    } else if (type === 'homeBottomBanners') {
        banners = await HomeBottomBanners.find({});
    } else if (type === 'homeSideBanners') {
        banners = await HomeSideBanners.find({});
    }

    return {
        data: parseData(banners)
    };
}

export async function getCategories2() {
    await dbConnect();
    const category = await Category.find()
    return {
        data: parseData({ categoryList: category })
    };
}

export async function deleteEntity({ name, id}) {
    await dbConnect();
    if (name === 'category') {
        await Category.deleteOne({ id: id });    
    } else if (name === 'subCategory') {
        await SubCategory.deleteOne({ id: id });    
    } else if (name === 'product') {
        await Products.deleteOne({ id: id });    
    }
    await waitFor(2000);
    return { status: 200, message: 'Successfully deleted the Item.' };
}

export async function getSubCategory(params={}) {
    await dbConnect();
    let subCategory;

    if (params.parentId) {
        subCategory = await SubCategory.find({ parent: params.parentId });
    } else {
        subCategory = await SubCategory.find();
    }

    return {
        data: parseData(subCategory)
    };
}

export async function getBrands() {
    await dbConnect();
    const brands = await Brands.find()
    return {
        data: parseData(brands)
    };
}

export async function getProducts2(params) {
    let search = params.search || '';
    let featured = params.featured || '';
    let id = params.id || '';
    let page = params.page || '';  
    let perPage = params.perPage || '';  
    let catName = params.catName || '';
    let location = params.location || 'All';

    await dbConnect();

    let products = [];
    
    if (search) {
        products = await Products.find({"name": {"$regex": search, "$options": "i"}});
        return parseData(products);
    } else if (id) {
        products = await Products.findById(id);
        return parseData(products);
    } else if (featured) {
        products = await Products.find({ isFeatured: true })
        return parseData(products);
    } else if (catName) {
        products = await Products.find({"catName": catName});
        return parseData({ products: products });
    } else {
        const options = {
            page: page || 1,
            limit: perPage || 10,
            collation: {locale: 'en'}
        };
        products = await Products.paginate({}, options)             //.find().populate('category');
        return parseData({ ...products, products: products.docs });
    }
}

export async function getFilteredProducts2(params) {
    let catType = params.catType || '';
    let id = params.id || '';
    let minPrice = params.minPrice || 100;
    let maxPrice = params.maxPrice || 100000;
    let location = params.location || 'All';
    
    await dbConnect();
    let products = []; 

    products = await Products.find({ [catType]: id, price: { $gte: minPrice }, price: { $lte: maxPrice } });   
    return parseData({ products: products, totalPages: 0, page: 0 });
}
