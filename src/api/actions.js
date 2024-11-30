"use server";
// import { redirect } from 'next/navigation';
// import { saveMeal } from './meals';
// import { revalidatePath } from 'next/cache';
import { writeFile } from "fs/promises";
import { Category, SubCategory } from '@/lib/models';
import mongoose from 'mongoose';
import dbConnect from '@/lib/dbConnect';
import { isInvalidText, waitFor } from './actionUtils';
import { handleDirectory } from "@/app/api/serverUtils";

// export async function getCategory(prevState, formData) {
//   await dbConnect();

//   const category = await Category.find()   //.populate('children').exec();
//   revalidatePath('/admin/categories');
//   // redirect('/admin/categories');
//   return JSON.stringify(category);
// }

export async function createCategory(prevState, formData) {
    const category = {
      name: formData.get('name'),
      color: formData.get('color'),
      createDate: formData.get('createDate'),
      images: formData.get('categoryImage'),
    };

    console.log(category.images);

    // let imageWithZeroSize = category.images.find(i => i.size === 0);
  
    if (isInvalidText(category.name) || isInvalidText(category.color) || isInvalidText(category.createDate) || !category.images || category.images.size === 0) {
      return {message: 'Invalid input.', payload: formData};
    }

    const extension = category.images.name.split('.').pop();
    const fileName = `${category.name}.${extension}`;
  
    const bufferedImage = await category.images.arrayBuffer();

    const buffer = Buffer.from(bufferedImage);

    const folderName = 'category';

    const {absolutePath, relativePath} = await handleDirectory(folderName);

    await writeFile(`${absolutePath}/${fileName}`, buffer);
    const fileUrl = `${relativePath}/${fileName}`;

    await dbConnect();
    var id = new mongoose.Types.ObjectId();    
    const doc = new Category({ 
        _id: id,
        id: id,
        name: category.name,
        images: [fileUrl],
        color: category.color,
        slug: category.name,
        children: []
    });
    await doc.save();    

    // revalidatePath('/admin/categories');
    // redirect('/admin/categories');
    // await waitFor(3000);
    await new Promise((resolve) => {
      setTimeout(resolve, 3000);
    })
    return {
      status: 200,
      message: 'Successfully Created the Category',
    }
  }

  // export async function getSubCategory(prevState, formData) {
  //   await dbConnect();
  
  //   const subCategory = await SubCategory.find()   //.populate('children').exec();
  //   return JSON.stringify(subCategory);
  // }  

  export async function createSubCategory(prevState, formData) {
    const subCategory = {
      name: formData.get('name'),
      color: formData.get('color'),
      parentCategory: formData.get('parentCategory'),
      createDate: formData.get('createDate'),
      images: formData.get('subCategory_image'),
    };

    if (isInvalidText(subCategory.name) || isInvalidText(subCategory.color) || isInvalidText(subCategory.parentCategory) || isInvalidText(subCategory.createDate) || !subCategory.images || subCategory.images.size === 0 ) return {message: 'Invalid input.'};

    const extension = subCategory.images.name.split('.').pop();
    const fileName = `${subCategory.name}.${extension}`;
  
    const bufferedImage = await subCategory.images.arrayBuffer();

    const buffer = Buffer.from(bufferedImage)

    const folderName = 'subCategory';

    const {absolutePath, relativePath} = await handleDirectory(folderName);

    await writeFile(`${absolutePath}/${fileName}`, buffer);
    const fileUrl = `${relativePath}/${fileName}`;

    await dbConnect();

    var id = new mongoose.Types.ObjectId();
    
    const doc = new SubCategory({ 
        _id: id,
        id: id,
        name: subCategory.name,
        images: [fileUrl],
        color: subCategory.color,
        slug: subCategory.name,
        parentCategory: subCategory.parentCategory,
        children: [],
    });
    await doc.save();    

    // revalidatePath('/admin/categories');
    // redirect('/admin/categories');
    await waitFor(3000);
    return {
      message: 'Successfully Created the Sub Category',
    }
  }
  
  

  
