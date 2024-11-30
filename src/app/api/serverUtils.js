'use server';
// import { writeFile } from 'fs';
import { mkdir, stat, writeFile } from 'fs/promises';
import { join } from "path";


export const handleImages = async (folderName, images, customName) => {
    console.log(folderName, images, customName)
    let fileUrlList = [];
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
    }
    return fileUrlList;
}

export const handleDirectory = async (folderName, rootFolder=`/images/uploaded/`) => {
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
  