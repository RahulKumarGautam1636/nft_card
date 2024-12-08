'use client';
import Slider from 'react-slick';
import { IconButton, Slide, Button } from '@mui/material';
import { ChevronLeft, Star, StarHalf } from '@mui/icons-material';
import { BannerCard, ProductCard } from './cards';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { useCallback, useEffect, useRef, useState } from 'react';
import { getCatNameProducts, withDB } from '@/api/api';
import Modal from '@mui/material/Modal';
import { useDispatch, useSelector } from 'react-redux';
import { globalLoader, localLoader, modalAction } from '@/lib/slices';
import { BiX } from 'react-icons/bi';
import { addToCart, addToWishlist } from "@/lib/slices";
import { BiMinus, BiPlus } from "react-icons/bi";
import { FaExchangeAlt, FaRegHeart, FaHeart  } from "react-icons/fa";
// import CryptoJS from 'crypto-js';
import InnerImageZoom from 'react-inner-image-zoom';
import 'react-inner-image-zoom/lib/InnerImageZoom/styles.min.css';
import { toast } from 'react-toastify';
import Link from 'next/link';
import Image from 'next/image';
import axios from 'axios';
// import { handleDirectory } from '@/api/actionUtils';

const Arrow = ({ customClass, onClick, el }) => {
  return (
    <IconButton className={`${customClass} ${el} bg-gray-50 hover:bg-gray-200 shadow-gray-500 shadow-sm`} onClick={onClick} color="secondary">
      <ChevronLeft style={{fontSize: '2.2rem', transform: el === 'right' ? 'rotate(180deg)' : ''}} />
    </IconButton>
  )
}
export const MySlider = ({ name, dataList, responsive=[], customSettings={} }) => {
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

export const ProductViewBox = ({ name, dataList, responsive=[], customSettings={}, product }) => {

  const mainSlide = () => product.images.map(i => (<InnerImageZoom key={i} zoomType={'hover'} src={i} zoomSrc={i} />));
  const thumbSlide = () => product.images.map(i => (<img className="max-w-32 px-2 pt-1" key={i} src={i} alt="User" />));

  const [nav3, setNav3] = useState(null);
  const [nav4, setNav4] = useState(null);
  
  let sliderRef3 = useRef(null);
  let sliderRef4 = useRef(null);

  useEffect(() => {
    setNav3(sliderRef3);
    setNav4(sliderRef4);
  }, []);

  var settings = {
    className: 'product-view-slider',
    prevArrow: <Arrow customClass='custom-arrow' el='left' />,
    nextArrow: <Arrow customClass='custom-arrow' el='right' />,
    arrows: true,
    // centerMode: true,      // force slider to init in center position.
    ...customSettings         // to override above defined settings.
  };
  return (
    <div className='media-news'>
      <div className="main-slide">
        <Slider asNavFor={nav4} ref={slider => (sliderRef3 = slider)} arrows={true} className={'main-news-slider'}>
            {mainSlide()}
        </Slider>
      </div>
      <div className="child-slide">
        <Slider asNavFor={nav3} ref={slider => (sliderRef4 = slider)} slidesToShow={4} swipeToSlide={true} focusOnSelect={true} className={'child-news-slider'} {...settings}>
            {thumbSlide()}
        </Slider>
      </div>
    </div>
  ) 
  // <Slider {...settings} className={name} responsive={responsive}>{dataList}</Slider>;
}

export const HomeBannerSlider = ({ homeBanners }) => {

  const responsive_4 = [
    { breakpoint: 700, settings: { slidesToShow: 1, centerPadding: 0, dots: true, arrows: false } }
  ]

  const bannersSlide = homeBanners.map(i => (<BannerCard type={'home-banner'} path={'/images/mainBanners/'} data={i} key={i.id} classes='px-3' />));

  return (
    <div className="relative">
      <MySlider name={'banner-slider'} responsive={responsive_4} dataList={bannersSlide} customSettings={{variableWidth: false, slidesToShow: 1, centerPadding: "150px", centerMode: true, dots: false}} />
    </div>
  )
}


export const PromoBanner = ({ banners, type, path }) => {
  const responsive_4 = [
    { breakpoint: 1200, settings: { slidesToShow: 3 } },
    { breakpoint: 1000, settings: { slidesToShow: 2 } },
    { breakpoint: 700, settings: { slidesToShow: 1, centerPadding: 0, arrows: false } }
  ]

  const bannersSlide = banners.map(i => (<BannerCard type={type} path={path} data={i} key={i.id} classes='pe-0 md:pe-3' />));

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
    const getFilterProducts = async () => {
      setLoading(true);
      const res = await getCatNameProducts(activeCat.slug, 'All');
      setProducts(res);
      setLoading(false);
    }
    getFilterProducts();
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
                  <img src="/images/categories/unused/1.jpg" className="max-w-16 lg:max-w-fit rounded-2xl" />
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
                    <img src="/images/categories/unused/1.jpg" className="max-w-16 lg:max-w-fit rounded-2xl" />
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

  const handleCart = () => {
    dispatch(addToCart({ ...product, qty: count }));
    let productToastData = { msg: 'Added to Cart', product: { ...product, qty: count }, button: {text: 'Visit Cart', link: '/cart'} };
    productToast(productToastData);
  }
  
  const handleWishlist = () => {
    dispatch(addToWishlist({ ...product, qty: 1 }));
    let productToastData = { msg: 'Added to Wishlist', product: { ...product, qty: 1 }, button: {text: 'Visit Cart', link: '/wishlist'} };
    productToast(productToastData);
  }  

  return (
    <>
      <div className="flex gap-[1.3rem]">
        <div className="text-gray-900 flex items-center gap-[1.3rem]">
          <IconButton className="bg-gray-100 shadow-gray-500 shadow-sm text-[2rem]" onClick={() => setCount(pre => pre + 1)}>
            <BiPlus />
          </IconButton>
          <span>{count}</span>
          <IconButton className="bg-gray-100 shadow-gray-500 shadow-sm text-[2rem]" onClick={() => {if (count !== 1) setCount(pre => pre - 1)}}>
            <BiMinus />
          </IconButton>
        </div>
        <div className="w-full">
          <Button variant="contained" className="rounded-full h-full w-full max-w-[16rem]" onClick={handleCart}>{isAddedToCart ? 'Added to Cart' : 'Add To Cart'}</Button>
        </div>
      </div>
      <div className="mt-11">
        <Button variant="outlined" className="me-4 rounded-full" onClick={handleWishlist}>
          {isAddedToWishlist ? 
            <><FaHeart  className="me-3" /> Added To Wishlist</>
            : 
            <><FaRegHeart className="me-3" /> Add To Wishlist</>
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

export const logOut = () => {
  // dispatch(dumpUser());
  // dispatch(loginAction(false));
  localStorage.removeItem('userLogin');
  window.location.reload();
}

export const ZoomComponent = ({ product }) => {
  return (
    <InnerImageZoom zoomType={'hover'} src={product.images[0]} zoomSrc={product.images[0]} />
  )
}


export const ProductToastCard = ({ toastData, closeToast }) => {
  return (
    <div className="toast fade show">
      <div className="toast-header flex justify-between items-center pb-2 border-b border-gray-300">
        <Image className='mr-2' src={'/images/favicon.png'} width={25} height={25} alt="Logo" />
        {/* <FaHeart className='text-xl mr-2'/> */}
        <strong className="mr-auto text-gray-700">{toastData.msg}</strong>
        <small className='text-muted'>Just now</small>
        <button type="button" onClick={closeToast} className="btn-close"></button>
      </div>
      <div className="toast-body">
        {/* <div className="w-100 flex justify-between py-3 whitespace-nowrap items-center">
          <p className="mb-0 font-semibold text-black overflow-hidden max-w-52 text-ellipsis">{toastData.product.name}</p>
          <span className="text-cyan-100 bg-cyan-700 text-sm font-bold py-[0.35rem] px-[0.8rem] rounded-2xl inline-block">₹ {toastData.product.price}</span>
        </div> */}
        <ul>
          <li className="overflow-hidden relative">
              <div className="minicart-card inline-flex gap-3 py-2">
                  <div className="h-16 w-16">
                      <img className="rounded h-full w-full" src={toastData.product.images[0]} alt="Product" />
                  </div>
                  <div className="text-start border-b border-gray-300">
                      <h4 className="text-gray-900 mb-1 whitespace-nowrap overflow-ellipsis" style={{fontSize: '0.95rem'}}>{toastData.product.name}</h4>
                      <p className="text-gray-500">{toastData.product.qty || 1} &nbsp;x&nbsp;&nbsp;<span className="text-blue-800" style={{fontSize: '1rem'}}>₹ {toastData.product.price}</span></p>
                  </div>
              </div>
          </li>
        </ul>
        <div className="flex gap-2 pt-1">
          <Link prefetch={false} className="flex-1" href={'/checkout'} onClick={closeToast}>
            <Button className="bg-pink-600 text-white rounded-lg p-2 hover:bg-pink-500 font-bold w-full">CHECKOUT</Button>
          </Link>
          <Link prefetch={false} className="flex-1" href={toastData.button.link}>
            <Button className="bg-purple-600 text-white rounded-lg p-2 hover:bg-purple-500 font-bold w-full">{toastData.button.text}</Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export const productToast = (productToastData, options) => toast(<ProductToastCard toastData={productToastData} />, { position: "top-right", autoClose: 2500, closeButton: false, className: 'product-toast', ...options });
export const stringToast = (toastData, type='') => toast(toastData, { type: type, autoClose: 2000 });


export const isEmpty = (obj) => {
  for (const prop in obj) {
    if (Object.hasOwn(obj, prop)) {
      return false;
    }
  }
  return true;
}

export const MyLoader = ({ classes }) => {
  return <div className={`fixed inset-0 z-10 flex justify-center items-center ${classes}`} style={{background: '#66627652'}}><img src='/loader.svg' alt='loading..' /></div>;
}


export const handleFormDataPost = async (path, params, dispatch) => {
  const url = `http://localhost:3000/api/${path}`;
  const formData = new FormData();
  for (let i = 0; i < params.images.length; i++) {
      const image = params.images[i];
      formData.append('images', image);
      formData.append('imgName', image.name);
  }
  const data = { ...params, images: formData.getAll('images'), imgName: formData.get('imgName') };
  const config = {headers: { 'content-type': 'multipart/form-data' }};
  dispatch(localLoader({ name: path, status: true}));
  const res = await axios.post(url, data, config).then((res) => {
      if (res.status === 200) {
          dispatch(localLoader({ name: path, status: false}));
          return true;
      } else {
          alert('Something went wrong. please try again.');
          dispatch(localLoader({ name: path, status: false}));
          return false;
      }            
  });
  return res;
}

export const useFetch = (url) => {

  const [error, setError] = useState(false);
  const [data, setData] = useState([]);
  const dispatch = useDispatch();

  const fetchData = useCallback(async () => {
    try {
      const res = await fetch(url);
      if (res.status === 500) {            // Status 500 called internal server error is not an error it's a responce.
        setError(true);                    // hence it can't be catched by try catch statement hence handling it mannually.
        return;
      }
      const json = await res.json();
      setData(json);          
    } catch (err) {
      setError(err);
    }
    dispatch(globalLoader(false));
  }, [url]);

  useEffect(() => {
    dispatch(globalLoader(true));
    // setTimeout(() => {                        // turn on Timeout to test Skeleton loading.
      fetchData();
    // }, 5000);
  }, [fetchData]);

  return [data, error];
}