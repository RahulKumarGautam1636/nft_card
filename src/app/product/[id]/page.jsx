import { Check, Star } from "@mui/icons-material";
import { Button, IconButton } from "@mui/material";
import { BiMinus, BiPlus } from "react-icons/bi";
import { FaExchangeAlt, FaRegHeart } from "react-icons/fa";
import { SiCodefresh } from "react-icons/si";
import { RiMoneyRupeeCircleLine } from "react-icons/ri";
import { TbTruckDelivery } from "react-icons/tb";
import { HiMiniArrowUturnLeft } from "react-icons/hi2";

export default async function Product() {
  
  return (
    <div className="product-page mt-3 py-8 bg-gray-100">  
      <main className="container mx-auto px-7">
        <section className="p-7 rounded-[1.3rem] bg-white">
          <div>
            <h2 className="text-2xl leading-[2.4rem] md:text-3xl font-semibold mb-4 md:mb-5">Field Roast Chao Cheese Creamy Original</h2>
            <div className="flex items-center gap-6 font-medium text-[0.95rem] flex-wrap gap-y-[0.8rem]">
              <p className="text-gray-500">Brands: <span className="text-gray-900">Welch's</span></p>
              <span className="w-[2px] bg-gray-300 h-4"></span>
              <div className="flex items-center gap-3">
                <div className="text-yellow-600 flex items-center gap-[0.1rem]">
                    {Array.from(Array(5).keys()).map(i => (<Star className="text-[1.4rem]" key={i} />))}
                </div>
                <p className="text-gray-500">1 Review</p>
              </div>
              <span className="w-[2px] bg-gray-300 h-4"></span>
              <p className="text-gray-500">SKU: <span className="text-gray-900">F95MK</span></p>
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mt-6">
            <div className="relative">
              <div className="">
                <span className="bg-green-100 text-green-700 text-sm font-medium py-[0.35rem] px-[0.8rem] rounded-2xl mt-4 inline-block mb-3">25% OFF</span>
                <span className="bg-gray-300 text-gray-900 text-sm font-medium py-[0.35rem] px-[0.8rem] rounded-2xl mt-4 inline-block">Recomended</span>
              </div>
              <img className="invisible" src="https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-62-768x691.jpg" />
            </div>
            <div className="invisible">
              <h5 className="flex gap-4 text-2xl items-end">
                <span className="text-gray-500 text-lg line-through">Rs 935</span>
                <span className="font-bold text-red-700">Rs 725</span>
              </h5>
              <span className="bg-green-100 text-green-700 text-sm font-medium py-[0.35rem] px-[0.8rem] rounded-2xl mt-4 inline-block">In Stock</span>
              <p className="mt-6 mb-[1.8rem] leading-7">Vivamus adipiscing nisl ut dolor dignissim semper. Nulla luctus malesuada tincidunt. Class aptent taciti sociosqu ad litora torquent</p>
              <div className="flex gap-[1.3rem]">
                <div className="text-gray-900 flex items-center gap-[1.3rem]">
                  <IconButton className="bg-gray-100 text-[2rem]">
                    <BiPlus />
                  </IconButton>
                  <span>1</span>
                  <IconButton className="bg-gray-100 text-[2rem]">
                    <BiMinus />
                  </IconButton>
                </div>
                <div className="w-full">
                  <Button variant="contained" className="rounded-full h-full w-full max-w-[16rem]">Add To Cart</Button>
                </div>
              </div>
              <div className="mt-11">
                <Button variant="outlined" className="me-4 rounded-full"><FaRegHeart className="me-3"/> Add To Wishlist</Button>
                <Button variant="text"><FaExchangeAlt className="me-3" /> Compare</Button>
              </div>
              <ul className="mt-11">
                <li className="mb-[0.65rem] me-2"><Check className="text-green-500" /> Weight: <span>Organic</span></li>
                <li className="mb-[0.65rem] me-2"><Check className="text-green-500" /> MFG: <span>June 4 2023</span></li>
                <li className="mb-[0.65rem] me-2"><Check className="text-green-500" /> Life: <span>30 Days</span></li>
              </ul>
            </div>
            <div className="invisible">
              <div className="bg-red-50 text-red-600 py-4 px-12 rounded-xl text-center">
                <h4>Covid-19 Info: We keep delivering.</h4>
              </div>
              <ul className="mt-7 bg-slate-100 p-8 rounded-xl text-[0.9rem] text-black">
                <li className="flex gap-5 items-center mb-[1.45rem]"><TbTruckDelivery className="text-[1.75rem] text-gray-500" /> Free Shipping apply to all orders over $100</li>
                <li className="flex gap-5 items-center mb-[1.45rem]"><HiMiniArrowUturnLeft className="text-[1.75rem] text-gray-500" /> 1 Day Returns if you change your mind</li>
                <li className="flex gap-5 items-center mb-[1.45rem]"><RiMoneyRupeeCircleLine className="text-[1.75rem] text-gray-500" /> Best price on the market</li>
                <li className="flex gap-5 items-center mb-[1.45rem]"><SiCodefresh className="text-[1.75rem] text-gray-500" /> Guranteed 100% Organic from natural farmas</li>
              </ul>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
