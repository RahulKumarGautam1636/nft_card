import { getBanners, getCategories, getFeaturedProducts, getFilteredProducts, getHomeBanners, getProducts } from "@/api/api";
import { ProductCard } from "@/components/cards";
import FilterTabs, { HomeBannerSlider, ProductSlider, PromoBanner } from "@/components/utils";
import { Email, Star } from "@mui/icons-material";
import { Button, ButtonBase } from "@mui/material";

export default async function Home() {
  
  const homeBanners = await getHomeBanners();
  const banners = await getBanners();
  const categories = await getCategories();
  const filteredProducts = await getFilteredProducts('Fashion', 'All');
  const productsData = await getProducts();
  const featuredProducts = await getFeaturedProducts();

  return (
    <div className="home mt-3">  
      <HomeBannerSlider homeBanners={homeBanners} />
      <main className="container mx-auto px-3">
        <section className="py-7">
          <h2 className="text-2xl font-semibold mb-4">Feature Categories</h2>
          <div className="flex overflow-auto gap-3 md:gap-10">
            {categories.categoryList.map(i => (
              <div key={i.id} className="text-center min-w-fit cursor-pointer group">
                  <div className="rounded-full max-w-[7rem] lg:max-w-[9.5rem] p-[1.7rem] border border-gray-300 group-hover:shadow-xl group-hover:border-gray-400" style={{background: i.color}}>
                    <img className="max-w-full" src={i.images[0]} />
                  </div>
                  <h3 className="text-lg font-semibold mt-2">{i.name}</h3>
              </div>
            ))}
          </div>
        </section>
        <section className="grid grid-cols-2 lg:grid-cols-10 gap-5">
          <div className="relative col-span-2">
            <div className="sticky top-0 flex lg:flex-col gap-5">
              <div>
                <img className="w-full" src="/images/promotions/banner1.jpg" />
              </div>
              <div>
                <img className="w-full" src="/images/promotions/banner2.jpg" />
              </div>
            </div>
          </div>
          <div className="col-span-8">
            <FilterTabs data={categories.categoryList} filteredProducts={filteredProducts} />
            <div className="mt-4">
              <PromoBanner banners={banners} />
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
      </main>
      <section className="px-3 bg-purple-600 pt-4 pb-4 mt-4">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
          <div className="pt-10">
            <p className="text-white text-2xl font-semibold">$20 discount for your first order</p>
            <h2 className="text-white text-[2.5rem] md:text-5xl my-4 font-bold">Join our newsletter and get...</h2>
            <p className="text-gray-300 text-md mb-6 font-semibold">Join our email subscription now to get updates on <br/> promotions and coupons.</p>
            <div className="flex gap-2 max-w-[520px] border-8 border-slate-100 bg-slate-100 outline-none text-sm rounded">
              <Email className="text-4xl my-auto text-gray-500" />
              <input className="p-3 w-full border-0 outline-none text-lg" placeholder="Your Email Address" />
              <Button className="bg-purple-800 text-white whitespace-nowrap rounded-lg py-1 px-7 hover:bg-purple-500">Sign in</Button>
            </div>
          </div>
          <div className="ms-auto hidden md:block">
            <img className="max-w-full max-h-[330px]" src="https://fullstack-ecommerce.netlify.app/static/media/newsletter.5931358dd220a40019fc.png" alt="slide" />
          </div>
        </div>
      </section>
    </div>
  );
}


{/* <Swiper 
  navigation={true}
  loop={true}
  speed={500}
  autoplay={{
      delay: 3500,
      disableOnInteraction: false,
  }}
  slidesPerView={'auto'}
  centeredSlides={true}
  spaceBetween={15}
  pagination={{
    clickable: true,
  }}
  modules={[Pagination]}
  className="mySwiper"
>
  {banners.map(i => (
    <SwiperSlide>
      <img src={`/images/${i}`} alt="banner" style={{maxWidth: '1280px'}} />
    </SwiperSlide>
  ))}
</Swiper> */}
