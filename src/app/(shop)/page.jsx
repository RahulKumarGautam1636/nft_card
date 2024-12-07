import { getBanners, getCategories, getCatNameProducts, getFeaturedProducts, getProducts } from "@/api/api";
import { ProductCard } from "@/components/cards";
import FilterTabs, { HomeBannerSlider, PromoBanner } from "@/components/utils";
import { Star } from "@mui/icons-material";
import { Button, ButtonBase } from "@mui/material";

export default async function Home() {   // homeBanners, banners, categories, filteredProducts, productsData, featuredProducts
  
  const homeBanners = await getBanners('homeBanner');   
  const banners = await getBanners('banners');   
  const homeSideBanners = await getBanners('homeSideBanners');   
  const homeBottomBanners = await getBanners('homeBottomBanners');   
  const categories = await getCategories('home');
  const filteredProducts = await getCatNameProducts('Fashion', 'All');
  const productsData = await getProducts({ page: 1, perPage: 8, location: 'All' });
  const featuredProducts = await getFeaturedProducts();

 

  return (
    <div className="home mt-3 ">  
      <HomeBannerSlider homeBanners={homeBanners} />
      <main className="container mx-auto px-3">
        <section className="py-7">
          <h2 className="text-2xl font-semibold mb-4">Featured Categories</h2>
          <div className="flex overflow-auto gap-3 md:gap-10">
            {categories.categoryList.map(i => (
              <div key={i.id} className="text-center min-w-fit cursor-pointer group flex-1 flex flex-col items-center">
                  <div className="rounded-full max-w-[7rem] lg:max-w-[9.5rem] p-[1.7rem] border border-gray-300 group-hover:shadow-xl group-hover:border-gray-400" style={{background: i.color}}>
                    <img className="max-w-full" src={'/images/categories/' + i.images[0]} />
                  </div>
                  <h3 className="text-lg font-semibold mt-2">{i.name}</h3>
              </div>
            ))}
          </div>
        </section>
        <section className="grid grid-cols-2 lg:grid-cols-10 gap-5">
          <div className="relative col-span-2">
            <div className="sticky top-0 flex lg:flex-col gap-5">
              {homeSideBanners.slice(0, 4).map(i => (
                <div key={i.id}>
                  <img className="w-full" src={i.images[0]} alt="banner" />
                </div>
              ))}
            </div>
          </div>
          <div className="col-span-8">
            <FilterTabs categories={categories.categoryList} filteredProducts={filteredProducts} />
            <div className="mt-4">
              <PromoBanner banners={banners} type={'promo-banner'} path={'/images/banners/'} />
            </div>
            <div className="mt-7">
              <div className="">
                <h2 className="text-2xl font-semibold">New Products</h2>
                <p className="text-gray-500 ">Do not miss the current offers until the end of March.</p>
              </div>
              <div className="grid gap-3 mt-4 product-grid">
                {productsData.products.reverse().map(i => (<ProductCard key={i.id} data={i} styles={{maxWidth: 'none'}} />))}
              </div>
            </div>
            <div className="mt-7">
              <div className="flex justify-between items-end">
                <div>
                  <h2 className="text-2xl font-semibold">Featured Products</h2>
                  <p className="text-gray-500 ">Do not miss the current offers until the end of March.</p>
                </div>
                <Button className="text-purple-800 bg-white whitespace-nowrap border-[3px] border-purple-500 rounded-lg py-2 px-7 hover:border-[3px] hover:text-white hover:bg-purple-500" variant="outlined">View All</Button>
              </div>
              <div className="grid gap-3 mt-4 product-grid">
                {featuredProducts.reverse().map(i => (<ProductCard key={i.id} data={i} styles={{maxWidth: 'none'}} />))}
              </div>
              <div className="grid grid-cols-2 gap-3 p-7 pb-8 mt-4 overflow-hidden rounded border border-gray-200" style={{background: '#F8EFEA'}}>
                <div>
                  <p className="text-lg text-gray-500 mb-3 font-bold">Always Taking Care</p>
                  <h3 className="text-gray-900 font-bold text-lg leading-6 md:text-3xl">In store or online your health & safety is our top priority.</h3>
                </div>
                <div className="relative">
                  <img className="absolute h-100 w-full top-1/2 right-0 transform -translate-y-1/2" src="./images/banner-box2.webp" />
                </div>
              </div>
              <section className="mt-7">
                <div className="flex justify-between items-end">
                  <div className="me-4">
                    <h2 className="text-2xl font-semibold">HOT Product of the Week</h2>
                    <p className="text-gray-500 ">Dont miss this opportunity at a special discount just for this week.</p>
                  </div>
                  <Button className="text-purple-800 bg-white whitespace-nowrap border-[3px] border-purple-500 rounded-lg py-2 px-7 hover:border-[3px] hover:text-white hover:bg-purple-500" variant="outlined">View All</Button>
                </div>
                <div className="border border-red-500 flex flex-col md:flex-row rounded-lg mt-4 overflow-hidden">
                  <div className="p-3 grid place-items-center">
                    <img className="max-w-full max-h-80" src="https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-50.jpg" alt='hot-product' />
                  </div>
                  <div className="card-content flex flex-col gap-2 py-6 px-9 bg-gray-100 w-full">
                    <h4 className="text-2xl font-semibold">Chobani Complete Vanilla Greek Yogurt</h4>
                    <p className="text-green-600">In Stock</p>
                    <h5 className="flex gap-2 text-md">
                      <span className="text-gray-600 line-through">Rs 550</span>
                      <span className="font-bold text-red-700">Rs 445</span>
                    </h5>
                    <div className="text-yellow-600 flex gap-2">
                      <Star />
                      <Star />
                      <Star />
                      <Star />
                      <Star />
                    </div>
                    <div className="mt-2 h-4 rounded-lg relative bg-white overflow-hidden">
                      <span className="h-full block w-9/12" style={{backgroundImage: 'linear-gradient(45deg, #ff1313, #ffb989)'}}></span>
                    </div>
                    <div className="flex mt-3 gap-7 items-center">
                      <div className="count-down flex gap-1">
                        <span>08</span>:
                        <span>23</span>:
                        <span>47</span>:
                        <span>20</span>
                      </div>
                      <p>Remains Until the end of the Offer.</p>
                    </div>
                  </div> 
                </div>
                <div className="mt-4 bg-red-200 flex flex-col md:flex-row flex-md-row justify-center gap-4 items-center p-7 rounded-md">
                  <p className="text-lg">Super discount for your <strong className="underline">FIRST PURCHASE</strong></p>
                  <ButtonBase className="py-2 px-4 border-[3px] border-red-600 border-dashed rounded-md">FREE25%</ButtonBase>
                  <span>Use discount code in checkout!</span>
                </div>
              </section>
            </div>
          </div>
        </section>
        <section>
          <div className="mt-4">
            <PromoBanner banners={homeBottomBanners} type={'promo-banner'} path={'/images/homeBottomBanners/'}/>
          </div>
        </section>
      </main>
    </div>
  );
}


// export const kajal = {
//   "_id": "0000000000000000_1",
//   "name": "Kajal's Regular Sleeves Printed Women Dark Blue, White, Black Top",
//   "description": "The saree is an outfit which women can carry off with great panache. With the right material and drape, it can accentuate the beauty of women of all ages and forms.\n\n",
//   "images": [
//     "/images/kajal/kajal_1.jpg",
//     "/images/kajal/kajal_2.jpeg",
//     "/images/kajal/kajal_3.jpeg",
//     "/images/kajal/kajal_4.jpeg"
//   ],
//   "brand": "SIRIL",
//   "price": 550,
//   "oldPrice": 650,
//   "catName": "Fashion",
//   "catId": "66c0d6d9430f507021d32280",
//   "subCatId": "66c0dfa43490222862ae78c1",
//   "subCat": "Women",
//   "subCatName": "Women",
//   "category": {
//       "_id": "66c0d6d9430f507021d32280",
//       "name": "Fashion",
//       "slug": "Fashion",
//       "images": [
//           "https://res.cloudinary.com/da26rdzwp/image/upload/v1725960852/1725960851153_fash.png"
//       ],
//       "color": "#ecffec",
//       "createdAt": "2024-08-17T16:59:05.656Z",
//       "updatedAt": "2024-09-10T09:34:13.338Z",
//       "__v": 0,
//       "thirdLevel": "null",
//       "id": "66c0d6d9430f507021d32280"
//   },
//   "countInStock": 150,
//   "rating": 5,
//   "isFeatured": true,
//   "discount": 12,
//   "productRam": [],
//   "size": [],
//   "productWeight": [],
//   "location": "All",
//   "dateCreated": "2024-09-09T14:08:22.354Z",
//   "__v": 0,
//   "id": "0000000000000000_1"
// }
