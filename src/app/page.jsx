import { getBanners, getCategories, getFeaturedProducts, getFilteredProducts, getHomeBanners, getProducts } from "@/api/api";
import { ProductCard } from "@/components/cards";
import BasicTabs, { HomeBannerSlider, ProductSlider, PromoBanner } from "@/components/utils";
import { Email } from "@mui/icons-material";
import { Button } from "@mui/material";
import { IoSearch } from "react-icons/io5";

export default async function Home() {
  
  const homeBanners = await getHomeBanners();
  const banners = await getBanners();
  const categories = await getCategories();
  const filteredProducts = await getFilteredProducts();
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
                  <img className="rounded-full border border-gray-300 shadow-md group-hover:border-gray-500" src={i.images[0]} />
                  <h3 className="text-lg font-semibold mt-2">{i.name}</h3>
              </div>
            ))}
          </div>
        </section>
        <section className="grid grid-cols-1 lg:grid-cols-6 gap-5">
          <div className="relative">
            <div className="sticky top-0 flex lg:flex-col gap-5">
              <div>
                <img className="max-w-full" src="/images/promotions/banner1.jpg" />
              </div>
              <div>
                <img className="max-w-full" src="/images/promotions/banner2.jpg" />
              </div>
            </div>
          </div>
          <div className="col-span-5">
            <div className="flex justify-between flex-wrap">
              <div className="">
                <h2 className="text-2xl font-semibold">Popular Products</h2>
                <p className="text-gray-500 ">Do not miss the current offers until the end of March.</p>
              </div>
              <div className="max-w-full">
                <BasicTabs categories={categories.categoryList} />
              </div>
            </div>
            <div className="mt-4">
              <ProductSlider productsData={filteredProducts} />
            </div>
            <div className="mt-4">
              {/* {banners.map(i => (<img key={i.id} className="hover:shadow-md border border-gray-300 rounded-md w-full" src={i.images[0]} alt="promotion"/>))} */}
              <PromoBanner banners={banners} />
            </div>
            <div className="mt-4">
              <div className="">
                <h2 className="text-2xl font-semibold">New Products</h2>
                <p className="text-gray-500 ">Do not miss the current offers until the end of March.</p>
              </div>
              <div className="grid gap-3 mt-4 product-grid">
                {productsData.products.reverse().map(i => (<ProductCard key={i.id} data={i} classes='max-w-none' />))}
              </div>
            </div>
            <div className="mt-4">
              <div className="">
                <h2 className="text-2xl font-semibold">Featured Products</h2>
                <p className="text-gray-500 ">Do not miss the current offers until the end of March.</p>
              </div>
              <div className="grid gap-3 mt-4 product-grid">
                {featuredProducts.reverse().map(i => (<ProductCard key={i.id} data={i} classes='max-w-none' />))}
              </div>
              <section className="bg-red-200 flex gap-3 items-center justify-between p-7 mt-4">
                <div>
                  <p className="text-lg text-gray-600 mb-3">Always Taking Care</p>
                  <h3 className="text-3xl text-gray-900 font-bold">In store or online your health & safety is our top priority.</h3>
                </div>
                <img src="./images/banner-box2.webp" />
              </section>
            </div>
          </div>
        </section>
      </main>
      <section className="px-3 bg-purple-600 pt-4 pb-4 mt-4">
        <div className="container mx-auto grid grid-cols-2 gap-4 w-full">
          <div className="pt-12">
            <p className="text-white text-2xl font-semibold">$20 discount for your first order</p>
            <h2 className="text-white text-5xl my-4 font-bold">Join our newsletter and get...</h2>
            <p className="text-gray-300 text-md mb-6 font-semibold">Join our email subscription now to get updates on <br/> promotions and coupons.</p>
            <div className="flex gap-2 max-w-[520px] border-8 border-slate-100 bg-slate-100 outline-none text-sm rounded">
              <Email className="text-4xl my-auto text-gray-500" />
              <input className="p-3 w-full border-0 outline-none text-lg" placeholder="Your Email Address" />
              <Button className="bg-purple-800 text-white text-nowrap rounded-lg py-1 px-7 hover:bg-purple-500">Sign in</Button>
            </div>
          </div>
          <div className="ms-auto">
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
