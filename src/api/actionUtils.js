import { blur, remoteAssets } from "@/constants";


export const waitFor = async (time) => await new Promise((resolve) => setTimeout(resolve, time));

export function isInvalidText(text) {
  return !text || text.trim() === '';
}

export const parseData = (obj) => JSON.parse(JSON.stringify(obj));


export const imgSource = (folder, fileName) => {
  if (blur) return '#';
  let path;
  if (remoteAssets) {
    path = `${remoteEnd}/${folder}/${fileName}`;
  } else {
    path = `/images/${folder}/${fileName}`;
  }
  return path;
}


export const remoteEnd = 'https://res.cloudinary.com/dmse11kmn/image/upload/Shopify';

