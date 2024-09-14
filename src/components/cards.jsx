import { Star, StarHalf } from "@mui/icons-material";
import Link from "next/link";

export const BannerCard = ({ data, classes }) => {

    return (
      <div className={`home-banner-card ${classes}`}>
        <img src={data.images[0]} className="rounded-md" alt="banner" style={{width: '100%'}} />
      </div>
    )
}
  
export const ProductCard = ({ data, classes, styles={} }) => {
  
  return (
    <div className={`invisible product-card bg-gray-100 max-w-[186px] rounded-md overflow-hidden hover:shadow-md border border-gray-300 ${classes}`} style={{...styles}}>
      <div className="card-img h-[215px] lg:h-[230px] overflow-hidden bg-white flex justify-center items-center">
        <Link href={`/product/${data.id}`}>
          <img className="max-w-full max-h-full" src={data.images[0]} alt="product" />
        </Link>
      </div>
      <div className="card-content flex flex-col gap-2 p-3 bg-gray-100">
        <h4 className="text-md font-semibold">{data.name.substr(1, 30)}...</h4>
        {data.countInStock > 0 ? <p className="text-green-600">In Stock</p> : <p className="text-red-600">Out of Stock</p>}
        <div className="text-yellow-600 flex gap-2">
          {Array.from(Array(Math.floor(data.rating)).keys()).map(i => (<Star key={i} />))}
          {(data.rating % 1) ? <StarHalf /> : ''}
        </div>
        <h5 className="flex gap-2 text-md">
          <span className="text-gray-600 line-through">Rs {data.oldPrice}</span>
          <span className="font-bold text-red-700">Rs {data.price}</span>
        </h5>
      </div>                
    </div>
  )
}