import { Star, StarHalf } from "@mui/icons-material";
import Link from "next/link";
import { BiHeart } from "react-icons/bi";
import { ShoppingCart, ShoppingCartOutlined } from "@mui/icons-material";
import { useDispatch } from "react-redux";
import { addToCart } from "@/lib/slices";

export const BannerCard = ({ data, classes }) => {

    return (
      <div className={`home-banner-card ${classes}`}>
        <img src={data.images[0]} className="rounded-md" alt="banner" style={{width: '100%'}} />
      </div>
    )
}
  
export const ProductCard = ({ data, classes, styles={} }) => {
  
  return (
    <div className={`product-card bg-gray-100 max-w-[186px] rounded-md overflow-hidden hover:shadow-md border border-gray-300 ${classes}`} style={{...styles}}>
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

export const ProductCard_2 = ({ data }) => {
  const dispatch = useDispatch();

  return (
    <div className="minicart-card flex gap-3 p-2 relative">
      <div className="h-[5.6rem] w-[5.6rem] ">
          <img className="rounded w-full h-full" src={data.images[0]} alt="Product" />
      </div>
      <Link href={`/product/${data.id}`} className="text-start border-b border-gray-300 flex-1 overflow-hidden ">
          <h4 className="text-nowrap text-gray-900 mb-1 font-semibold" style={{fontSize: '1rem'}}>{data.name}</h4>
          <p className="text-gray-500"><span className="text-blue-800" style={{fontSize: '1rem'}}>$ {data.price}</span></p>
      </Link>
      <div className="bg-white z-10 absolute top-[65%] right-0 transform -translate-y-1/2 flex gap-4">
          <BiHeart className="text-[1.7rem] text-pink-600" />
          {/* <ShoppingCart className="text-4xl text-green-600" style={{fontSize: '1.75rem'}}/> */}
          <ShoppingCartOutlined onClick={() => dispatch(addToCart({ ...data, qty: 1 }))} className="text-4xl text-green-600" style={{fontSize: '1.7rem'}} />
      </div>
  </div>
  )
}