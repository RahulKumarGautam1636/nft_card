"use client";
// import { MongoClient } from 'mongodb';
import { Download } from "@mui/icons-material";
import { IconButton } from "@mui/material";
// import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { BiX } from "react-icons/bi";

export const isEmpty = (obj) => {
    console.log(obj);
    for (const prop in obj) {
      if (Object.hasOwn(obj, prop)) {
        return false;
      }
    }
    return true;
}

// const connectionString = `mongodb+srv://admin-rahul:OmMmBHSDSLZS1eiA@ecommerce.vz7ko.mongodb.net/`;
// const connectionString = 'mongodb://127.0.0.1:27017/shopify';
// export const client = new MongoClient(connectionString, {          // process.env.MONGODB_URI
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

export const formatProducts = (list) => list.map(i => ({...i, _id: {"$oid": i._id}, category: {"$oid": i._id}, location: i.location.map(x => ({"$oid": x._id}))}));


export const ImagePicker = ({ label, name, multiSelect=false, pickerValue }) => {

  const [pickedImage, setPickedImage] = useState([]);
  const imageRef = useRef(null);

  function handleImageChange(event) {

    setPickedImage([]);
    const file = event.target.file;

    if (!file.length) return setPickedImage(null);

    for (let i = 0; i < file.length; i++) {
      const fileReader = new FileReader();
      fileReader.onload = () => {   
        if (!multiSelect) return setPickedImage([fileReader.result]);
        setPickedImage(pre => [ ...pre, fileReader.result ]);
      }
      fileReader.readAsDataURL(file[i]);
    }
  }

  const handleDelete = (index) => {
    let removed = pickedImage.filter((i, n) => n !== index);
    setPickedImage(removed); 
  }

  // const resetPicker = () => setPickedImage([]);
  console.log(pickerValue);

  return (
    <div>
        <p className="text-black text-[0.9rem] mb-4 block" onClick={() => console.log(imageRef.current.file)}>{label}</p>
        <div className="grid gap-4" style={{gridTemplateColumns: 'repeat(auto-fit, minmax(11rem, 1fr))'}}>
            {pickedImage.length ? 
              <>
                {pickedImage.map((i, n) => (
                  <div key={n} className="h-40 p-5 border border-gray-200 rounded-lg flex justify-center items-center relative">
                    <IconButton className="bg-transparent hover:bg-gray-200 absolute top-0 right-0 p-1" onClick={() => handleDelete(n)}>
                      <BiX className="text-[2rem] text-gray-500" />
                    </IconButton>
                    <img className="max-h-full" src={i} alt="The image selected by the user." />
                  </div>))}
              </>
            : ''}
            <label htmlFor={name} className="h-40 px-5 cursor-pointer border border-dashed border-blue-500 bg-gray-50 rounded-lg flex flex-col gap-3 justify-center items-center text-center">
                <Download className="text-[4rem] text-pink-600" />
                <p className="font-medium text-blue-500">Click or Drop your images here</p>
                <input className="hidden" type="file" multiple={multiSelect} id={name} ref={imageRef} accept="image/png, image/jpeg" name={name} onChange={handleImageChange} />
            </label>
        </div>
    </div>
  )
}


export const ImagePicker2 = ({ label, name, multiSelect=false, pickerValue, setImages, imgCount }) => {

  const [files, setFiles] = useState([]);
  const [imgURL, setImgURL] = useState([]);
  const imageRef = useRef(null);

  useEffect(() => {
    if (imgCount) return;
    setFiles([]);
    setImgURL([]);
  }, [imgCount])

  const handleImageChange = (event) => {
    let images = event.target.files;
    let files = [];
    let urls = [];
    for (let i = 0; i < images.length; i++) {
      const image = images[i];
      let sizeInKB = image.size / 1024;
      if (sizeInKB > 1000) return alert('Please select a file less than 5mb in size.'); 
      var url = URL.createObjectURL(image); 
      files.push(image);   
      urls.push(url);   
    }
    setFiles(files); 
    setImgURL(urls);
    setImages(pre => ({...pre, images: files}));
  }

  console.log(imgURL);

  function handleSubmit(event) {
    event.preventDefault() 
    if (!files.length) return alert('Please select a file.');     
    console.log(files);
    console.log(imgURL);       
    setFiles([]);
    setImgURL([]);
  } 
  
  const handleDelete = () => {};

  return (
    <div>
        <p className="text-black text-[0.9rem] mb-4 block" onClick={() => console.log(imageRef.current.file)}>{label}</p>
        <div className="grid gap-4" style={{gridTemplateColumns: 'repeat(auto-fit, minmax(11rem, 1fr))'}}>
            {imgURL.length ? 
              <>
                {imgURL.map((i, n) => (
                  <div key={n} className="h-40 p-5 border border-gray-200 rounded-lg flex justify-center items-center relative">
                    <IconButton className="bg-transparent hover:bg-gray-200 absolute top-0 right-0 p-1" onClick={() => handleDelete(n)}>
                      <BiX className="text-[2rem] text-gray-500" />
                    </IconButton>
                    <img onClick={handleSubmit} className="max-h-full" src={i} alt="The image selected by the user." />
                  </div>
                ))}
              </>
            : ''}
            <label htmlFor={name} className="h-40 px-5 cursor-pointer border border-dashed border-blue-500 bg-gray-50 rounded-lg flex flex-col gap-3 justify-center items-center text-center">
                <Download className="text-[4rem] text-pink-600" />
                <p className="font-medium text-blue-500">Click or Drop your images here</p>
                <input className="hidden" type="file" multiple={multiSelect} id={name} ref={imageRef} accept="image/png, image/jpeg" name={name} onChange={handleImageChange} />
            </label>
        </div>
    </div>
  )
}

export const waitFor = async (time) => await new Promise((resolve) => setTimeout(resolve, time));

