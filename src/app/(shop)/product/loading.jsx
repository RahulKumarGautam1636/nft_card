import { Check, Star } from "@mui/icons-material";
import { SiCodefresh } from "react-icons/si";
import { RiMoneyRupeeCircleLine } from "react-icons/ri";
import { TbTruckDelivery } from "react-icons/tb";
import { HiMiniArrowUturnLeft } from "react-icons/hi2";
import { Button, IconButton } from "@mui/material";
import { BiPlus } from "react-icons/bi";
import { ProductSlideLoader } from "@/components/utils/loaders";


export default function Loading() {

    return (
    <div className="product-page mt-3 md:py-8 bg-gray-100 ">  
        <main className="container mx-auto max-w-[1315px]">
            <section className="mx-4 md:mx-7 rounded-[1.3rem] p-5 md:p-7 md:ps-[2.05rem] md:pe-[2.35rem] bg-white border border-slate-300 shadow-md">
            <div>
                <h2 className="text-2xl leading-[2.4rem] md:text-3xl font-semibold mb-4 md:mb-5 skeleton">GESPO Black & Teal</h2>
                <div className="flex items-center gap-6 font-medium text-[0.95rem] flex-wrap gap-y-[0.8rem]">
                    <p className="text-gray-500 skeleton">Brands: <span className="text-gray-900"> Product Brand Name</span></p>
                    <span className="w-[2px] bg-gray-300 h-4"></span>
                    <div className="flex items-center gap-3">
                        <div className="text-yellow-600 flex items-center gap-[0.1rem]">
                            {Array.from(Array(5).keys()).map(i => (<Star className="text-[1.4rem]" key={i} />))}
                        </div>
                        <p className="text-gray-500 skeleton">1 Review</p>
                    </div>
                    <span className="w-[2px] bg-gray-300 h-4"></span>
                    <p className="text-gray-500 skeleton">SKU: <span className="text-gray-900">F95MK</span></p>
                </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mt-4 md:mt-10">
                <div className="relative rounded-xl border border-gray-200 overflow-hidden h-fit me-0 lg:me-8">
                <div className="flex md:flex-col gap-3 items-start absolute top-4 left-4 z-10">
                    <span className="text-gray-200 bg-gray-800 text-sm font-medium py-[0.35rem] px-[0.8rem] rounded-2xl inline-block">Recomended</span>
                    <span className="text-cyan-100 bg-cyan-700 text-sm font-medium py-[0.35rem] px-[0.8rem] rounded-2xl inline-block">25% OFF</span>
                </div>
                <div className="h-[26rem] w-full skeleton"></div>
                </div>
                <div>
                <h5 className="flex gap-4 text-2xl items-end">
                    <span className="text-gray-500 text-lg line-through skeleton">Rs 499</span>
                    <span className="font-bold text-red-700 skeleton">Rs 399</span>
                </h5>
                <span className="bg-green-100 text-green-700 text-sm font-medium py-[0.35rem] px-[0.8rem] rounded-2xl mt-4 inline-block skeleton">In Stock</span>
                <p className="mt-6 mb-[1.8rem] leading-7 skeleton">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's</p>
                
                <div className="flex gap-[1.3rem]">
                    <div className="text-gray-900 flex items-center gap-[1.3rem]">
                    <IconButton className="bg-gray-100 shadow-gray-500 shadow-sm text-[2rem] skeleton">
                        <BiPlus />
                    </IconButton>
                    <span>1</span>
                    <IconButton className="bg-gray-100 shadow-gray-500 shadow-sm text-[2rem] skeleton">
                        <BiPlus />
                    </IconButton>
                    </div>
                    <div className="w-full">
                    <Button variant="contained" className="rounded-full h-full w-full max-w-[16rem] skeleton">Added to Cart</Button>
                    </div>
                </div>
                <ul className="mt-11">
                    <li className="mb-[0.65rem] skeleton"><Check className="text-green-500 me-3" /> Weight: <span> Weight</span></li>
                    <li className="mb-[0.65rem] skeleton"><Check className="text-green-500 me-3" /> MFG: <span>Wed Aug 28 2024</span></li>
                    <li className="mb-[0.65rem] skeleton"><Check className="text-green-500 me-3" /> Category: <span>Men Fashion</span></li>
                </ul>
                </div>
                <div>
                <div className="bg-red-100 text-red-600 py-4 px-12 rounded-xl text-center skeleton">
                    <h4>Covid-19 Info: We keep delivering.</h4>
                </div>
                <ul className="mt-7 bg-slate-100 p-8 rounded-xl text-[0.9rem] text-black">
                    <li className="flex gap-5 items-center mb-[1.45rem] skeleton"><TbTruckDelivery className="text-[1.75rem] text-gray-500" /> Free Shipping apply to all orders over $100</li>
                    <li className="flex gap-5 items-center mb-[1.45rem] skeleton"><HiMiniArrowUturnLeft className="text-[1.75rem] text-gray-500" /> 1 Day Returns if you change your mind</li>
                    <li className="flex gap-5 items-center mb-[1.45rem] skeleton"><RiMoneyRupeeCircleLine className="text-[1.75rem] text-gray-500" /> Best price on the market</li>
                    <li className="flex gap-5 items-center mb-[1.45rem] skeleton"><SiCodefresh className="text-[1.75rem] text-gray-500" /> Guranteed 100% Organic from natural farmas</li>
                </ul>
                </div>
            </div>
            </section>
            <ProductSlideLoader cardCount={10} />
        </main>
    </div>
    )
}
