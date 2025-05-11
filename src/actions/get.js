"use server"

import { Banners, Brands, Category, HomeBanner, HomeBottomBanners, HomeSideBanners, Locations, Orders, Products, Questions, Subjects, SubCategory, User, Chapters } from "@/lib/models";
import dbConnect from "@/lib/dbConnect";
import { parseData, waitFor } from "@/api/actionUtils";
// import mongoose from "mongoose";

export async function getQuiz(body) {  
    console.log(body.userId);
    await dbConnect();
    let quiz = await Subjects.find({"author": body.userId});
    if (quiz.length) {
        return parseData({status: 200, data: quiz})
    } else {
        return parseData({status: 204, message: 'NO Content found for the user.'})
    }
}

export async function getChapters(body) {  
    await dbConnect();
    let quiz = await Chapters.find({"subjectId": body.subjectId});
    if (quiz.length) {
        return parseData({status: 200, data: quiz})
    } else {
        return parseData({status: 204, message: 'NO Content found for the user.'})
    }
}

export async function getQuestions(body) {  
    console.log(body.quizId);
    await dbConnect();
    let quiz = await Questions.find({"chapterId": body.quizId});
    if (quiz.length) {
        return parseData({status: 200, data: quiz})
    } else {
        return parseData({status: 204, message: 'NO Content found for the user.'})
    }
}

export async function getUser(body) {  
    await dbConnect();
    let user = await User.find({"phone": body.phone}).populate('address');
    if (user.length) {
        let firstResult = user[0];
        if (firstResult.password == body.password) {
            return parseData({status: 200, data: firstResult})
        } else {
            return parseData({status: 403, message: 'Your password is incorrect.'})
        }
    } else {
        return parseData({status: 404, message: 'This number is not Registered.'})
    }
}

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

export async function getCategories2(id) {
    await dbConnect();
    let category;
    if (id) {
        category = await Category.findById(id)
        return parseData(category)
    }
        category = await Category.find()
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
    } else if (params.id) {
        subCategory = await SubCategory.findById(id)
        return parseData(subCategory)
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
        products = await Products.findById(id).populate('category').populate('subCatId').populate('brand').populate({ path: 'location', model: 'Locations'});
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

export async function getLocations() {
    await dbConnect();
    const locations = await Locations.find();
    return {
        data: parseData(locations)
    };
}

export async function getOrders(params) {  
    await dbConnect();
    let orders = await Orders.find({ "userId": params.userId }).populate({ 
        path: 'products', 
        populate: {
            path: 'id',
            model: 'Products'
        }
    }).populate('shippingAddress');
    return parseData({status: 200, data: orders})
}