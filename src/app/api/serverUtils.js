// import { writeFile } from 'fs';
import { mkdir, stat, writeFile } from 'fs/promises';
import { join } from "path";
import { v2 as cloudinary } from 'cloudinary';
import { remoteEnd } from '@/api/actionUtils';

export const handleImages = async (folderName, images, customName) => {
    // console.log(folderName, images, customName)
    let fileUrlList = [];
    let fileNameList = [];
    for (let i = 0; i < images.length; i++) {
        const image = images[i];
  
        const extension = image.name.split('.').pop();
        const fileName = `${customName}_${i+1}.${extension}`;
    
        const bufferedImage = await image.arrayBuffer();
  
        const buffer = Buffer.from(bufferedImage);
  
        const {absolutePath, relativePath} = await handleDirectory(folderName);
  
        await writeFile(`${absolutePath}/${fileName}`, buffer);
        const fileUrl = `${relativePath}/${fileName}`;
        fileUrlList.push(fileUrl);
        fileNameList.push(fileName);
    }
    return { fileUrlList: fileUrlList, fileNameList: fileNameList };
}

export const handleDirectory = async (folderName, rootFolder=`/images/`) => {
    let uploadFolder = rootFolder + folderName;
    const uploadDir = join(process.cwd(), "public", uploadFolder);
    try {
        await stat(uploadDir);
    } catch (e) {
        if (e.code === "ENOENT") {
        await mkdir(uploadDir, { recursive: true });      // This is for checking the directory is exist (ENOENT : Error No Entry)
        } else {
        console.error("Error while trying to create directory when uploading a file\n", e);
        return { message: 'Something went wrong. Error while creating directory.' };
        }
    } finally {
        return { absolutePath: uploadDir, relativePath: uploadFolder };
    }
}
  

export const uploadImages = async (imagesList, folder) => {
    
    cloudinary.config({
        cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
        api_key: process.env.CLOUDINARY_API_KEY,
        api_secret: process.env.CLOUDINARY_API_SECRET,
    })

    let imageURLs = [];

    for (let i = 0; i < imagesList.length; i++) {

        const fileName = (imagesList[i].name).split('.')[0];            // file name without extension. required by cloudinary docs.
        const filePath = folder + '/' + fileName;
        const arrayBuffer = await imagesList[i].arrayBuffer();
        const buffer = Buffer.from(arrayBuffer);
        console.log(filePath);

        const res = await new Promise((resolve, reject) => {
            cloudinary.uploader.upload_stream({public_id: filePath, asset_folder: folder, use_filename: true, unique_filename: false}, function (error, result) {
              if (error) {
                reject(error);
                return;
              }
              resolve(result);
            }).end(buffer);
        });
        console.log(res);
        imageURLs.push(`${res.display_name}.${res.format}`);
    }
    return imageURLs;
}

export const deleteImages = async (imagesList, folder) => {
    
    cloudinary.config({
        cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
        api_key: process.env.CLOUDINARY_API_KEY,
        api_secret: process.env.CLOUDINARY_API_SECRET,
    })

    let retained = [];

    // for (let i = 0; i < imagesList.length; i++) {
    //     if (!imagesList[i].delete) return;
    //     const fileName = (imagesList[i].name).split('.')[0];       
    //     const filePath = folder + '/' + fileName;          
    //     cloudinary.uploader.destroy(filePath, {}).then((result) => {           // delete by public id. ex - Shopify/products/location-icon   (no-extension)
    //         if (result.result !== 'ok') {
    //             retained.push(imagesList[i].name)
    //         }
    //     });
    // }

    for (const image of imagesList) {
        if (image.delete) {
            const fileName = (image.name).split('.')[0];       
            const filePath = folder + '/' + fileName;          
            let res = await cloudinary.uploader.destroy(filePath, { invalidate: true });
            console.log(res);
        } else {
            retained.push(image.name)
        }
    }

    // if (!imagesList[1].delete) return;
    // const fileName = (imagesList[1].name).split('.')[0];       
    // const filePath = folder + '/' + fileName;          
    // let res = await cloudinary.uploader.destroy(filePath, {});
    // if (res.result !== 'ok') {
    //     retained.push(imagesList[1].name)
    // }

    return retained;
}