import { Star } from "@mui/icons-material";
import Link from "next/link";
import { BiHeart } from "react-icons/bi";
import { IconButton } from "@mui/material";

export const ProductCardLoader = () => {
    return (
        <div className={`product-card bg-gray-100 min-w-52 rounded-md overflow-hidden hover:shadow-md border border-gray-300`}>
            <div className="card-img h-[215px] lg:h-[230px] overflow-hidden bg-white flex justify-center items-center relative">
                <Link prefetch={false} href={`#`} className="group h-full w-full skeleton border-r-0"></Link>
                <div className="flex gap-3 items-center absolute bottom-[3%] right-[4%]">
                    <IconButton className="bg-gray-50 hover:bg-gray-200 shadow-gray-500 shadow-sm text-[1.35rem] text-red-500 p-[0.4rem] skeleton">
                        <BiHeart title="Add to wishlist" />
                    </IconButton>
                    <IconButton className="bg-gray-50 hover:bg-gray-200 shadow-gray-500 shadow-sm text-[1.35rem] text-purple-500 p-[0.4rem] skeleton">
                        <BiHeart title="Add to wishlist" />
                    </IconButton>
                </div>
            </div>
            <div className="card-content flex flex-col gap-2 p-3 bg-gray-100">
                <h4 className="text-md font-semibold skeleton">{('Aashirvaad Superior Whole Wheat MP Atta 1000kg').substr(0, 30)}...</h4>
                <p className="text-green-600 skeleton">In Stock</p>
                <div className="text-yellow-600 flex gap-[0.4rem] skeleton">
                    {Array.from(Array(5).keys()).map(i => (<Star key={i} />))}
                </div>
                <h5 className="flex gap-2 text-md">
                    <span className="text-gray-600 line-through skeleton">Rs 1000</span>
                    <span className="font-bold text-red-700 skeleton">Rs 1000000</span>
                </h5>
            </div>                
        </div>
    )
}

export const ProductSlideLoader = ({ cardCount }) => {
    return (
        <section className="mx-4 md:mx-7 mt-4 md:mt-8 rounded-[1.3rem] p-5 md:p-7 md:ps-[2.05rem] md:pe-[2.35rem] bg-white">
            <h2 className="text-2xl font-semibold mb-6 skeleton w-fit">Related Products You May Like.</h2>
            <div className="flex gap-4 overflow-hidden">
                {Array.from(Array(cardCount).keys()).map(i => (<ProductCardLoader key={i} />))}
            </div>
        </section>
    )
}

export const ProductGridLoader = ({ cardCount }) => {
    return (
        <div className="grid gap-3 mt-4 product-grid">
            {Array.from(Array(cardCount).keys()).map(i => (<ProductCardLoader key={i} />))}
        </div>
    )
} 