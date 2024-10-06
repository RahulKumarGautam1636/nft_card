'use client';
import Slider from 'react-slick';
import { IconButton, Slide, Button } from '@mui/material';
import { ChevronLeft, Star, StarHalf } from '@mui/icons-material';
import { BannerCard, ProductCard } from './cards';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { useEffect, useState } from 'react';
import { getCatNameProducts } from '@/api/api';
import Modal from '@mui/material/Modal';
import { useDispatch, useSelector } from 'react-redux';
import { modalAction } from '@/lib/slices';
import { BiX } from 'react-icons/bi';
import { addToCart, addToWishlist } from "@/lib/slices";
import { BiMinus, BiPlus } from "react-icons/bi";
import { FaExchangeAlt, FaRegHeart, FaHeart  } from "react-icons/fa";
import CryptoJS from 'crypto-js';

export const MySlider = ({ name, dataList, responsive=[], customSettings={} }) => {
    const Arrow = ({ customClass, onClick, el }) => {
      return (
        <IconButton className={`${customClass} ${el} bg-gray-50 hover:bg-gray-200 shadow-gray-500 shadow-sm`} onClick={onClick} color="secondary">
          <ChevronLeft style={{fontSize: '2.2rem', transform: el === 'right' ? 'rotate(180deg)' : ''}} />
        </IconButton>
      )
    }
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      autoplay: 3000,
      slidesToScroll: 1,
      swipeToSlide: true,
      variableWidth: true,
      className: 'product-slider',
      prevArrow: <Arrow customClass='custom-arrow' el='left' />,
      nextArrow: <Arrow customClass='custom-arrow' el='right' />,
      arrows: true,
      // centerMode: true,      // force slider to init in center position.
      ...customSettings         // to override above defined settings.
    };
    return <Slider {...settings} className={name} responsive={responsive}>{dataList}</Slider>;
}

export const HomeBannerSlider = ({ homeBanners }) => {

  const responsive_4 = [
    { breakpoint: 700, settings: { slidesToShow: 1, centerPadding: 0, dots: true, arrows: false } }
  ]

  const bannersSlide = homeBanners.map(i => (<BannerCard data={i} key={i.id} classes='px-3' />));

  return (
    <div className="relative">
      <MySlider name={'banner-slider'} responsive={responsive_4} dataList={bannersSlide} customSettings={{variableWidth: false, slidesToShow: 1, centerPadding: "150px", centerMode: true, dots: false}} />
    </div>
  )
}


export const PromoBanner = ({ banners }) => {
  const responsive_4 = [
    { breakpoint: 1200, settings: { slidesToShow: 3 } },
    { breakpoint: 1000, settings: { slidesToShow: 2 } },
    { breakpoint: 700, settings: { slidesToShow: 1, centerPadding: 0, arrows: false } }
  ]

  const bannersSlide = banners.map(i => (<BannerCard data={i} key={i.id} classes='pe-0 md:pe-3' />));

  return (
    <div className="relative">
      <MySlider name={'promo-slider'} responsive={responsive_4} dataList={bannersSlide} customSettings={{variableWidth: false, dots: false, slidesToShow: 3}} />
    </div>
  )
}


export default function FilterTabs({ categories, filteredProducts }) {
  const [activeCat, setActiveCat] = useState(categories[0]);
  const [value, setValue] = useState(0);
  const [products, setProducts] = useState(filteredProducts);
  const [isLoading, setLoading] = useState(false);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  }; 

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      const res = await getCatNameProducts(activeCat.slug, 'All');
      setProducts(res);
      setLoading(false);
    }
    getProducts();
  }, [activeCat])

  return (
    <div className='relative'>
      {isLoading ? <div className='absolute inset-0 z-10 flex justify-center items-center' style={{background: '#f8f8f8ad'}}><img src='/loader.svg' alt='loading..' /></div> : ''}
      <div className="flex justify-between flex-wrap">
        <div className="">
          <h2 className="text-2xl font-semibold">Popular Products</h2>
          <p className="text-gray-500 ">Do not miss the current offers until the end of March.</p>
        </div>
        <div className="max-w-full">
          <Tabs value={value} onChange={handleChange} variant="scrollable" scrollButtons="auto" className="filterTabs">
            {categories.map((category, index) => (
              <Tab key={category.id} label={category.name} onClick={() => setActiveCat(category)} style={{fontSize: '0.975rem', minHeight: '3.55rem', padding: '1rem 1.2rem', minWidth: '5.625rem'}} />
            ))}
          </Tabs>
        </div>
      </div>
      <div className="mt-4">
        <ProductSlider productsData={products} />
      </div>
    </div>
  );
}

export const ProductSlider = ({ productsData }) => {

  // const responsive = [
  //   { breakpoint: 700, settings: { dots: true, arrows: false } }
  // ]

  const productSlide = productsData.products.map(i => (<div className='pe-3' key={i}><ProductCard data={i} /></div>));
  return (
    <div className="relative">
      <MySlider name={'product-slider'} dataList={productSlide} customSettings={{dots: false}} />
    </div>
  )
}


export function DescriptionTabs({ tabs, reviews }) {
  const [value, setValue] = useState(0);
  const [selectedCat, setselectedCat] = useState('');

  const handleChange = (event, newActive) => {
    setValue(newActive);
  }; 
  
  return (
    <div>
      <Tabs value={value} onChange={handleChange} variant="scrollable" scrollButtons="auto" className="filterTabs">
        {tabs.map((item, index) => (
          <Tab key={item.id} label={item.name} onClick={() => setselectedCat(item.name)} style={{fontSize: '0.975rem', minHeight: '3.55rem', padding: '1rem 1.2rem', minWidth: '5.625rem'}} />
        ))}
      </Tabs>
      <div className="tabContent pt-4">
        <div className={`tab-item p-4 ${value === 0 ? 'block' : 'hidden'} `}>
          <p className="leading-7">
            Quisque varius diam vel metus mattis, id aliquam diam rhoncus. Proin vitae magna in dui finibus malesuada et at nulla. Morbi elit ex, viverra vitae ante vel, blandit feugiat ligula. Fusce fermentum iaculis nibh, at sodales leo maximus a. Nullam ultricies sodales nunc, in pellentesque lorem mattis quis. Cras imperdiet est in nunc tristique lacinia. Nullam aliquam mauris eu accumsan tincidunt. Suspendisse velit ex, aliquet vel ornare vel, dignissim a tortor.
            Morbi ut sapien vitae odio accumsan gravida. Morbi vitae erat auctor, eleifend nunc a, lobortis neque. Praesent aliquam dignissim viverra. Maecenas lacus odio, feugiat eu nunc sit amet, maximus sagittis dolor. Vivamus nisi sapien, elementum sit amet eros sit amet, ultricies cursus ipsum. Sed consequat luctus ligula. Curabitur laoreet rhoncus blandit. Aenean vel diam ut arcu pharetra dignissim ut sed leo. Vivamus faucibus, ipsum in vestibulum vulputate, lorem orci convallis quam, sit amet consequat nulla felis pharetra lacus. Duis semper erat mauris, sed egestas purus commodo vel.
          </p>
        </div>
        <div className={`tab-item p-4 ${value === 1 ? 'block' : 'hidden'} `}>
          <div className="table-responsive">
              <table className="table table-bordered text-left w-full">
                <tbody>
                  <tr>
                    <th>Stand Up</th>
                    <td>
                      <p>35″L x 24″W x 37-45″H(front to back wheel)</p>
                    </td>
                  </tr>
                  <tr>
                    <th>Folded (w/o wheels)</th>
                    <td>
                      <p>32.5″L x 18.5″W x 16.5″H</p>
                    </td>
                  </tr>
                  <tr>
                    <th>Folded (w/ wheels)</th>
                    <td>
                      <p>32.5″L x 24″W x 18.5″H</p>
                    </td>
                  </tr>
                  <tr>
                    <th>Door Pass Through</th>
                    <td>
                      <p>24</p>
                    </td>
                  </tr>
                  <tr>
                    <th>Frame</th>
                    <td>
                      <p>Aluminum</p>
                    </td>
                  </tr>
                  <tr>
                    <th>Weight (w/o wheels)</th>
                    <td>
                      <p>20 LBS</p>
                    </td>
                  </tr>
                  <tr>
                    <th>Weight Capacity</th>
                    <td>
                      <p>60 LBS</p>
                    </td>
                  </tr>
                  <tr>
                    <th>Width</th>
                    <td>
                      <p>24″</p>
                    </td>
                  </tr>
                  <tr>
                    <th>Handle height (ground to handle)</th>
                    <td>
                      <p>37-45″</p>
                    </td>
                  </tr>
                  <tr>
                    <th>Wheels</th>
                    <td>
                      <p>12″ air / wide track slick tread</p>
                    </td>
                  </tr>
                  <tr>
                    <th>Seat back height</th>
                    <td>
                      <p>21.5″</p>
                    </td>
                  </tr>
                  <tr>
                    <th>Head room (inside canopy)</th>
                    <td>
                      <p>25″</p>
                    </td>
                  </tr>
                  <tr>
                    <th>Color</th>
                    <td>
                      <p>Black, Blue, Red, White</p>
                    </td>
                  </tr>
                  <tr>
                    <th>Size</th>
                    <td>
                      <p>M, S</p>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
        </div>
        <div className={`tab-item pt-4 px-0 lg:p-4 ${value === 2 ? 'block' : 'hidden'} `}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-16">
            <div>
              <h3 className="text-2xl font-semibold mb-5 md:mb-8">Customer questions & answers</h3>
              <div>
                <div className="flex gap-6 items-start mb-6 w-full">
                  <img src="/images/categories/1.jpg" className="max-w-16 lg:max-w-fit rounded-2xl" />
                  <div className='flex-1'>
                    <div className="flex justify-between gap-x-4 gap-y-2 flex-wrap w-full">
                      <h4 className="text-xl font-semibold">Satyam Kumar</h4>
                      <div className="text-yellow-600 flex items-center gap-[0.1rem]">
                          {Array.from(Array(5).keys()).map(i => (<Star className="text-[1.4rem]" key={i} />))}
                      </div>
                    </div>
                    <span className="text-gray-400 mt-2 mb-3 block">May 1, 2021</span>
                    <p>Sed perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.</p>
                  </div>
                </div>
                {reviews.map(review => (
                  <div className="flex gap-6 items-start mb-6 w-full" key={review.id}>
                    <img src="/images/categories/1.jpg" className="max-w-16 lg:max-w-fit rounded-2xl" />
                    <div className='flex-1'>
                      <div className="flex justify-between gap-x-4 gap-y-2 flex-wrap w-full">
                        <h4 className="text-xl font-semibold">{review.customerName}</h4>
                        <div className="text-yellow-600 flex items-center gap-[0.1rem]">
                            {Array.from(Array(Math.floor(review.customerRating)).keys()).map(i => (<Star className="text-[1.4rem]" key={i} />))}
                            {(review.customerRating % 1) ? <StarHalf /> : ''}
                        </div>
                      </div>
                      <span className="text-gray-400 mt-2 mb-3 block">{new Date(review.dateCreated).toDateString()}</span>
                      <p>{review.review}</p>
                    </div>
                  </div>
                ))}
              </div>
              <hr className="mt-6"/>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-4 md:mb-6">Add Your Own Review.</h3>
              <div className="rounded-xl border border-gray-100 overflow-hidden">
                <div className="flex gap-5 py-4 px-6 bg-gray-100">
                  <h5 className="text-lg font-semibold">Your Rating :</h5>
                  <div className="text-gray-400 flex items-center gap-[0.1rem]">
                      {Array.from(Array(5).keys()).map(i => (<Star className="text-[1.4rem]" key={i} />))}
                  </div>
                </div>
                <textarea className="bg-gray-100 w-full border-t border-gray-300 py-4 px-6 min-h-28 outline-none" placeholder="Write Your Review..."></textarea>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}





export const BasicModal = ({ child, name, direction='up', icon=true, canvas }) => {

  const dispatch = useDispatch();
  const isActive = useSelector((state) => state.modals[name].status);

  const handleClose = () => {
    dispatch(modalAction({name: name, status: !isActive, data: ''}));
  }

  return (
    <Modal className={`flex items-center justify-center ${canvas || 'px-4'}`} open={isActive} onClose={handleClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
      <Slide direction={direction} in={isActive} mountOnEnter unmountOnExit>
        <div className={`relative max-h-full overflow-auto ${canvas && 'w-full'}`}>
          {icon && <IconButton className="bg-gray-100 hover:bg-gray-300 text-[2rem] absolute top-4 right-4" onClick={handleClose}>
            <BiX />
          </IconButton>}
          {child}
        </div>
      </Slide>  
    </Modal>
  );
}


export const ActionBox = ({ product }) => {

  const dispatch = useDispatch();
  const cart = useSelector(state => state.cart);
  const cartList = Object.values(cart);
  const isAddedToCart = cartList.find(i => i.id === product.id);
  const wishlist = useSelector(state => state.wishlist);
  const wishlistList = Object.values(wishlist);
  const isAddedToWishlist = wishlistList.find(i => i.id === product.id);
  const [count, setCount] = useState(1);
  

  return (
    <>
      <div className="flex gap-[1.3rem]">
        <div className="text-gray-900 flex items-center gap-[1.3rem]">
          <IconButton className="bg-gray-100 text-[2rem]" onClick={() => setCount(pre => pre + 1)}>
            <BiPlus />
          </IconButton>
          <span>{count}</span>
          <IconButton className="bg-gray-100 text-[2rem]" onClick={() => {if (count !== 1) setCount(pre => pre - 1)}}>
            <BiMinus />
          </IconButton>
        </div>
        <div className="w-full">
          <Button variant="contained" className="rounded-full h-full w-full max-w-[16rem]" onClick={() => dispatch(addToCart({ ...product, qty: count }))}>{isAddedToCart ? 'Added to Cart' : 'Add To Cart'}</Button>
        </div>
      </div>
      <div className="mt-11">
        <Button variant="outlined" className="me-4 rounded-full" onClick={() => dispatch(addToWishlist({ ...product, qty: 1 }))}>
          {isAddedToWishlist ? 
            <><FaHeart  className="me-3" onClick={() => dispatch(addToWishlist({ ...product, qty: 1 }))}/> Added To Wishlist</>
            : 
            <><FaRegHeart className="me-3" onClick={() => dispatch(addToWishlist({ ...product, qty: 1 }))}/> Add To Wishlist</>
          }  
          </Button>
        <Button variant="text"><FaExchangeAlt className="me-3" /> Compare</Button>
      </div>
    </>
  )
}


export const handleNumberInputs = (e, setStateName) => {
  const {name, value} = e.target;
  const re = /^[0-9\b]+$/;
  if (value === '' || re.test(value)) {
   setStateName(preValue => {
       return {...preValue, [name]: value};
     });
  }
}

export const encrypt = (data) => '' //CryptoJS.AES.encrypt(JSON.stringify(data), process.env.REACT_APP_SECRET_KEY).toString();

export const decrypt = (data) => {
  // if (!data) return false;
  // if (data.length > 200) return false;
  // var bytes  = CryptoJS.AES.decrypt(data, process.env.REACT_APP_SECRET_KEY);
  // var decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
  // return decryptedData;
}