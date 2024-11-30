import { Check, Star } from "@mui/icons-material";
import { SiCodefresh } from "react-icons/si";
import { RiMoneyRupeeCircleLine } from "react-icons/ri";
import { TbTruckDelivery } from "react-icons/tb";
import { HiMiniArrowUturnLeft } from "react-icons/hi2";
import { ActionBox, DescriptionTabs, ProductSlider, ProductViewBox, ZoomComponent } from "@/components/utils";
import { getProduct, getReviews, getCatIdProducts } from "@/api/api";
import { kajal } from "../../page";
import { Suspense } from "react";
// import Loading from "@/app/loading";


export default async function Product(props) {
  const params = await props.params;

  const tabs = [
    { name: 'Description', id: 1 },
    { name: 'Additional Info', id: 2 },
    { name: 'Reviews (0)', id: 3 }
  ]

  let product;
  let reviews;
  let relatedProducts;

  // if (params.id === '0000000000000000_1') {
  //   product = kajal
  //   reviews = await getReviews('670b4d0961347e5c638f893f');
  //   relatedProducts = await getCatIdProducts('subCatId', '671b3471b53f41486ff73d75', 'All');
  // } else {
  product = await getProduct(params.id);
  reviews = await getReviews(params.id);
  relatedProducts = await getCatIdProducts('subCatId', product.subCatId, product.location[0].value);
  // }


  return (
    <div className="product-page mt-3 py-8 bg-gray-100 ">  
      <main className="container mx-auto max-w-[1315px]">
        {/* <Suspense fallback={<Loading />}> */}
          <section className="mx-4 md:mx-7 rounded-[1.3rem] p-5 md:p-7 md:ps-[2.05rem] md:pe-[2.35rem] bg-white">
            <div>
              <h2 className="text-2xl leading-[2.4rem] md:text-3xl font-semibold mb-4 md:mb-5">{product.name}</h2>
              <div className="flex items-center gap-6 font-medium text-[0.95rem] flex-wrap gap-y-[0.8rem]">
                <p className="text-gray-500">Brands: <span className="text-gray-900">{product.brand}</span></p>
                <span className="w-[2px] bg-gray-300 h-4"></span>
                <div className="flex items-center gap-3">
                  <div className="text-yellow-600 flex items-center gap-[0.1rem]">
                      {Array.from(Array(product.rating).keys()).map(i => (<Star className="text-[1.4rem]" key={i} />))}
                  </div>
                  <p className="text-gray-500">1 Review</p>
                </div>
                <span className="w-[2px] bg-gray-300 h-4"></span>
                <p className="text-gray-500">SKU: <span className="text-gray-900">F95MK</span></p>
              </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mt-10">
              <div className="relative pt-8 pb-4 md:p-0 rounded-xl border border-gray-200 overflow-hidden h-fit me-0 lg:me-8">
                <div className="flex md:flex-col gap-3 items-start absolute top-4 left-4 z-10">
                  <span className="text-gray-200 bg-gray-800 text-sm font-medium py-[0.35rem] px-[0.8rem] rounded-2xl inline-block">Recomended</span>
                  <span className="text-cyan-100 bg-cyan-700 text-sm font-medium py-[0.35rem] px-[0.8rem] rounded-2xl inline-block">25% OFF</span>
                </div>
                {/* <ZoomComponent product={product} /> */}
                <ProductViewBox product={product} />
              </div>
              <div>
                <h5 className="flex gap-4 text-2xl items-end">
                  <span className="text-gray-500 text-lg line-through">Rs {product.oldPrice}</span>
                  <span className="font-bold text-red-700">Rs {product.price}</span>
                </h5>
                {product.countInStock ? <span className="bg-green-100 text-green-700 text-sm font-medium py-[0.35rem] px-[0.8rem] rounded-2xl mt-4 inline-block">In Stock</span> : ''}
                <p className="mt-6 mb-[1.8rem] leading-7">{product.description}</p>
                <ActionBox product={product} />
                <ul className="mt-11">
                  <li className="mb-[0.65rem]"><Check className="text-green-500 me-3" /> Weight: <span>{product.productWeight.length ? product.productWeight[0] : 'N/A'}</span></li>
                  <li className="mb-[0.65rem]"><Check className="text-green-500 me-3" /> MFG: <span>{new Date(product.dateCreated).toDateString()}</span></li>
                  <li className="mb-[0.65rem]"><Check className="text-green-500 me-3" /> Category: <span>{product.subCatName} {product.catName}</span></li>
                </ul>
              </div>
              <div>
                <div className="bg-red-100 text-red-600 py-4 px-12 rounded-xl text-center">
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
        {/* </Suspense> */}
        <section className="mx-4 md:mx-7 mt-4 md:mt-8 rounded-[1.3rem] p-5 md:p-7 md:ps-[2.05rem] md:pe-[2.35rem] bg-white">
          <DescriptionTabs tabs={tabs} reviews={reviews} />
        </section>
        <section className="mx-4 md:mx-7 mt-4 md:mt-8 rounded-[1.3rem] p-5 md:p-7 md:ps-[2.05rem] md:pe-[2.35rem] bg-white">
          <h2 className="text-2xl font-semibold mb-6">Related Products</h2>
          <ProductSlider productsData={relatedProducts} />
        </section>
      </main>
    </div>
  );
}



