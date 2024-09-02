'use client';
import Slider from 'react-slick';
import { IconButton } from '@mui/material';
import { ChevronLeft } from '@mui/icons-material';
import { BannerCard, ProductCard } from './cards';

import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { useState } from 'react';


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

export const MainBannerSlider = ({ homeBanners }) => {

  const responsive_4 = [
    { breakpoint: 700, settings: { slidesToShow: 1, centerPadding: 0, dots: true, arrows: false } }
  ]

  const bannersSlide = homeBanners.map(i => (<BannerCard data={i} key={i.id} />));

  return (
    <div className="relative">
      <MySlider name={'banner-slider'} responsive={responsive_4} dataList={bannersSlide} customSettings={{variableWidth: false, slidesToShow: 1, centerPadding: "150px", centerMode: true, dots: false}} />
    </div>
  )
}


export default function BasicTabs({ categories }) {
  const [value, setValue] = useState(1);
  const [selectedCat, setselectedCat] = useState('');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  }; 
  
  return (
    <div>
      <Tabs value={value} onChange={handleChange} variant="scrollable" scrollButtons="auto" className="filterTabs">
        {categories.map((category, index) => (
          <Tab key={category.id} label={category.name} onClick={() => setselectedCat(category.name)} />
        ))}
      </Tabs>
        {/* {categories.map((category, index) => (
          <div className={`${value === index ? 'block' : 'hidden'} `}>
            {category.title}
          </div>
        ))} */}
    </div>
  );
}

export const ProductSlider = ({ productsData }) => {

  const responsive_4 = [
    { breakpoint: 700, settings: { slidesToShow: 1, centerPadding: 0, dots: true, arrows: false } }
  ]

  const productSlide = productsData.products.map(i => (<div className='pe-3' key={i}><ProductCard data={i} /></div>));
  return (
    <div className="relative">
      <MySlider name={'product-slider'} dataList={productSlide} customSettings={{dots: false}} />
    </div>
  )
}

