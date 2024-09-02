import { Star, StarHalf } from "@mui/icons-material";

export const BannerCard = ({ data }) => {

    return (
      <div className="px-3">
        <img src={data.images[0]} alt="banner" style={{width: '100%'}} />
      </div>
    )
}
  
export const ProductCard = ({ data, classes }) => {
  
  return (
    <div className={`product-card max-w-[230px] rounded-md overflow-hidden hover:shadow-md border border-gray-300 ${classes}`}>
      <div className="card-img h-[230px] overflow-hidden">
        <img className="max-w-full" src={data.images[0]} alt="product" />
      </div>
      <div className="card-content flex flex-col gap-2 p-3 bg-gray-100">
        <h4 className="text-md font-semibold">{data.name.substr(1, 30)}...</h4>
        {data.countInStock > 0 ? <p className="text-green-600">In Stock</p> : <p className="text-red-600">Out of Stock</p>}
        <div className="text-yellow-600 flex gap-2">
          {Array.from(Array(data.rating).keys()).map(i => (<Star key={i} />))}
        </div>
        <h5 className="flex gap-2 text-md">
          <span className="text-gray-600 line-through">Rs {data.oldPrice}</span>
          <span className="font-bold text-red-700">Rs {data.price}</span>
        </h5>
      </div>                
    </div>
  )
}