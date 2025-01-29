'use client';
import { Star, StarBorder, StarHalf } from "@mui/icons-material";
import Link from "next/link";
import { BiHeart, BiPlus } from "react-icons/bi";
import { ShoppingCartOutlined } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, addToWishlist } from "@/lib/slices";
import { IconButton } from "@mui/material";
import { IoMdHeart } from "react-icons/io";
import { MdOutlineShoppingCart, MdShoppingCart } from "react-icons/md";
import { productToast } from "./utils";
import { imgSource } from "@/api/actionUtils";


export const BannerCard = ({ data, classes, type, path }) => {

  return (
    <div className={`home-banner-card ${classes}`}>
      <img src={imgSource(`${path}`, data.images[0])} className="rounded-md" alt="banner" style={{width: '100%'}} />
    </div>
  )
}
  
export const ProductCard = ({ data, classes, styles={} }) => {

  const dispatch = useDispatch();
  const cart = useSelector(state => state.cart);
  const cartList = Object.values(cart);
  const wishlist = useSelector(state => state.wishlist);
  const wishlistList = Object.values(wishlist);
  const isAddedToCart = cartList.find(i => i.id === data.id);
  const isAddedToWishlist = wishlistList.find(i => i.id === data.id);

  const handleCart = () => {
    dispatch(addToCart({ ...data, qty: 1 }))
    let productToastData = { msg: 'Added to Cart', product: data, button: {text: 'Visit Cart', link: '/cart'} };
    productToast(productToastData);
  }
  
  const handleWishlist = () => {
    dispatch(addToWishlist({ ...data, qty: 1 }));
    let productToastData = { msg: 'Added to Wishlist', product: data, button: {text: 'Visit Cart', link: '/wishlist'} };
    productToast(productToastData);
  }

  return (
    <div className={`product-card bg-gray-100 max-w-[186px] rounded-md overflow-hidden hover:shadow-md border border-gray-300 ${classes}`} style={{...styles}}>
      <div className="card-img h-[215px] lg:h-[230px] overflow-hidden bg-white flex justify-center items-center relative">
        <Link prefetch={false} href={`/product/${data.id}`} className="group">
          <img className="max-w-full max-h-full transform group-hover:scale-110 transition-transform" src={imgSource('products', data.images[0])} alt="product" />
        </Link>
        {/* <Button className="rounded-full bg-purple-50 min-w-0 p-3 hover:bg-purple-200 md:hidden" style={{border: '1px solid #cbcbcb'}}><GiHamburgerMenu className="text-2xl text-purple-800"/></Button> */}
        <div className="flex gap-3 items-center absolute bottom-[3%] right-[4%]">
          <IconButton className="bg-gray-50 hover:bg-gray-200 shadow-gray-500 shadow-sm text-[1.35rem] text-red-500 p-[0.4rem]" onClick={handleWishlist}>
            {isAddedToWishlist ? <IoMdHeart /> : <BiHeart title="Add to wishlist" />}
          </IconButton>
          <IconButton className="bg-gray-50 hover:bg-gray-200 shadow-gray-500 shadow-sm text-[1.35rem] text-purple-500 p-[0.4rem]" onClick={handleCart} >
            {isAddedToCart ? <MdShoppingCart /> : <MdOutlineShoppingCart title="Add to cart" />}
          </IconButton>
        </div>
      </div>
      <div className="card-content flex flex-col gap-2 p-3 bg-gray-100">
        <h4 className="text-md font-semibold">{data.name.substr(0, 30)}...</h4>
        {data.countInStock > 0 ? <p className="text-green-600">In Stock</p> : <p className="text-red-600">Out of Stock</p>}
        <div className="text-yellow-600 flex gap-[0.4rem]">
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

// {
//   "_id": "66e13bcc67c833713b24763a",
//   "name": "ZAALIQA Girls Black Handbag",
//   "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
//   "images": [
//       "https://res.cloudinary.com/da26rdzwp/image/upload/v1726036935/1726036933380_zaaliqa-girls-black-handbag-product-images-rvd5gtvjgi-0-202404151052.jpg",
//       "https://res.cloudinary.com/da26rdzwp/image/upload/v1726036935/1726036934023_zaaliqa-girls-black-handbag-product-images-rvd5gtvjgi-1-202404151052.webp",
//       "https://res.cloudinary.com/da26rdzwp/image/upload/v1726036936/1726036934427_zaaliqa-girls-black-handbag-product-images-rvd5gtvjgi-2-202404151052.jpg"
//   ],
//   "brand": "ZAALIQA",
//   "price": 620,
//   "oldPrice": 750,
//   "catName": "Bags",
//   "catId": "66c0d82c430f507021d322d5",
//   "subCatId": "66c0dfa43490222862ae78c1",
//   "subCat": "Women",
//   "subCatName": "Women",
//   "category": "66c0d82c430f507021d322d5",
//   "countInStock": 1500,
//   "rating": 5,
//   "isFeatured": true,
//   "discount": 11,
//   "productRam": [],
//   "size": [],
//   "productWeight": [],
//   "location": "All",
//   "dateCreated": "2024-09-11T06:42:20.690Z",
//   "__v": 0,
//   "id": "66e13bcc67c833713b24763a"
// }

export const ProductCard_2 = ({ data }) => {
  const dispatch = useDispatch();
  const cart = useSelector(state => state.cart);
  const cartList = Object.values(cart);
  const wishlist = useSelector(state => state.wishlist);
  const wishlistList = Object.values(wishlist);
  const isAddedToCart = cartList.find(i => i.id === data.id);
  const isAddedToWishlist = wishlistList.find(i => i.id === data.id);

  return (
    <div className="minicart-card flex gap-3 py-2 relative">
      <div className="h-[6.6rem] w-[6.6rem]">
          <img className="rounded w-full h-full border border-gray-200" src={imgSource('products', data.images[0])} alt="Product" />
      </div>
      <Link prefetch={false} href={`/product/${data.id}`} className="text-start border-b border-gray-300 flex-1 overflow-hidden ">
          <h4 className="whitespace-nowrap text-gray-900 font-semibold overflow-ellipsis overflow-hidden" style={{fontSize: '0.95rem'}}>{data.name}</h4>
          <div className="flex gap-[0.65rem] my-[0.55rem] items-end">
            <span className="text-red-600 text-[0.75rem] line-through">{data.oldPrice}</span>
            <span className="text-blue-800" style={{fontSize: '0.88rem'}}>₹ {data.price}</span>
            <span className="text-cyan-100 bg-cyan-700 text-[0.75rem] font-medium py-[0.15rem] px-[0.6rem] rounded-2xl inline-block">{data.discount}% OFF</span>
          </div>
          <div className="text-yellow-600 flex cursor-pointer">
              {[1,2,3,4,5].map(x => <Star key={x} className="text-[1.2rem]" />)}
          </div>
      </Link>
      <div className="bg-white z-10 absolute top-[65%] right-0 transform -translate-y-1/2 flex gap-2">
          <IconButton>
            {isAddedToWishlist ? <IoMdHeart className="text-[1.7rem] text-pink-600" /> : <BiHeart className="text-[1.7rem] text-pink-600" title="Add to wishlist" onClick={() => dispatch(addToWishlist({ ...data, qty: 1 }))} />}
          </IconButton>
          <IconButton>
            {isAddedToCart ? <MdShoppingCart className="text-[1.7rem] text-green-600" /> : <MdOutlineShoppingCart className="text-[1.7rem] text-green-600" title="Add to cart" onClick={() => dispatch(addToCart({ ...data, qty: 1 }))} />}
          </IconButton>
      </div>
  </div>
  )
}