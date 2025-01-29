'use server'

import { parseData, waitFor } from "@/api/actionUtils";
import { deleteImages, handleImages, uploadImages } from "@/app/api/serverUtils";
import dbConnect from "@/lib/dbConnect";
import { Address, Category, Products, Questions, Quiz, User } from "@/lib/models";
import mongoose from "mongoose";


export async function createQuiz(body) {

    var editId = body.id;

    var id = new mongoose.Types.ObjectId();

    const quiz = {   
        _id: editId || id,
        id: editId || id,
        heading: body.heading,
        description: body.description,
        author: body.author,
    };   
    
    console.log(quiz);
    
    await dbConnect();
    if (editId) {
        await Quiz.findByIdAndUpdate(editId, quiz);
    } else {        
        let doc = new Quiz(quiz);
        await doc.save(); 
    }
    return parseData({status: 200, data: quiz})
}

export async function createQuestion(body) {

    var editId = body.id;

    var id = new mongoose.Types.ObjectId();

    const question = {   
        _id: editId || id,
        id: editId || id,
        title: body.title,
        answer: body.answer,
        explain: body.explain,
        options: body.options,
        parentId: body.parentId
    };   
    
    await dbConnect();
    if (editId) {
        await Questions.findByIdAndUpdate(editId, question);
    } else {       
        let doc = new Questions(question);
        await doc.save(); 
    }
    return parseData({status: 200, data: question})
}



export async function createUser(body) {

    var editId = body.id;

    var id = new mongoose.Types.ObjectId();

    const user = {   
        _id: editId || id,
        id: editId || id,
        name: body.name,
        phone: body.phone,
        email: body.email,
        password: body.password
    };    
    
    await dbConnect();
    if (editId) {
        await User.findByIdAndUpdate(editId, user)
    } else {

        let userExist = await User.find({"phone": body.phone});
        if (userExist.length) return { status: 409, message: 'This Phone Number is already linked to an account.' };
        
        let doc = new User(user);
        await doc.save(); 
    }
    return parseData({status: 200, data: user})
}

export async function createAddress(body) {

    var id = new mongoose.Types.ObjectId();
    var editId = body.editId;
    
    const address = {   
        _id: editId || id,
        id: editId || id,
        addressLine: addressLine,
        state: state,
        pin: pin,
        country: country
    };    
    
    await dbConnect();
    if (editId) {
        await Address.findByIdAndUpdate(editId, address)
    } else {
        let doc = new Category(address);
        await doc.save(); 
    }
    return parseData({status: 200, data: address})
}


export async function postCategory(folder, body) {

    const retainedImages = await deleteImages(body.recImg, 'Shopify/categories');
    const imagesUrlList = await uploadImages(body.images, 'Shopify/categories');

    var id = new mongoose.Types.ObjectId();
    var editId = body.editId;

    const category = { 
        _id: editId || id,
        id: editId || id,
        name: body.name,
        images: [...retainedImages, ...imagesUrlList],
        color: body.color,
        slug: body.name,
        children: []
    }  
    
    
    await dbConnect();
    if (editId) {
        await Category.findByIdAndUpdate(editId, category)
    } else {
        let doc = new Category(category);
        await doc.save(); 
    }
    return parseData({ title: 'Successfully created the item.'})
}

export async function createProduct(folder, body) {
    
    var recImg = body.recImg;
    var id = new mongoose.Types.ObjectId();
    var editId = body.editId;
    const retainedImages = await deleteImages(body.recImg, 'Shopify/products');                     // format to pass folder name.
    console.log('----------retained: ', retainedImages);
    const imagesUrlList = await uploadImages(body.images, 'Shopify/products');                   // format to pass folder name.

    let product = {
        _id: editId || id,  
        id: editId || id,
        name: body.name,
        description: body.description,
        images: [...retainedImages, ...imagesUrlList],
        brand: body.brand,
        price: body.price,
        oldPrice: body.maxPrice,

        catName: body.category.name,
        catId: body.category.id,
        category: body.category.id,

        subCatId: body.subCategory.id,
        subCat: body.subCategory.name,
        subCatName: body.subCategory.name,
        
        countInStock: body.countInStock,

        rating: body.rating,

        isFeatured: body.isFeatured,
        discount: body.discount,
        
        productRam: body.ram,

        size: body.sizes,
        productWeight: body.weights,

        location: body.locations,

        dateCreated: body.dateCreated,
        updatedAt: body.dateCreated,
    }

    console.log(recImg);    

    await dbConnect();
    if (editId) {
        await Products.findByIdAndUpdate(editId, product); 
    } else {
        let doc = new Products(product)
        await doc.save();  
    }   
    return parseData({ title: 'Successfully created the item.' })
}