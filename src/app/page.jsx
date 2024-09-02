import { getBanners, getCategories, getFeaturedProducts, getFilteredProducts, getHomeBanners, getProducts } from "@/api/api";
import { ProductCard } from "@/components/cards";
import BasicTabs, { MainBannerSlider, ProductSlider } from "@/components/utils";

export default async function Home() {
  
  const homeBanners = await getHomeBanners();
  const banners = await getBanners();
  const categories = await getCategories();
  const filteredProducts = await getFilteredProducts();
  const productsData = await getProducts();
  const featuredProducts = await getFeaturedProducts();

  return (
    <div className="home mt-3">  
      <MainBannerSlider homeBanners={homeBanners} />
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
            <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-4">
              {banners.map(i => (<img key={i.id} className="hover:shadow-md border border-gray-300 rounded-md w-full" src={i.images[0]} alt="promotion"/>))}                                                
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
            </div>
          </div>
        </section>
      </main>
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
