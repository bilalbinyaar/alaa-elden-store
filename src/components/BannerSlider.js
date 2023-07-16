import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import slide_1 from '../assets/banner-slides/banner-slide.png';

const BannerSlider = () => {
  // Slider settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    // fade: true,
    // cssEase: 'linear',
  };

  // Slider content
  const slides = [
    <div className="slide-div" key={1}>
      <img src={slide_1} alt="banner-slide" />
    </div>,
    <div className="slide-div" key={2}>
      <img src={slide_1} alt="banner-slide" />
    </div>,
    <div className="slide-div" key={3}>
      <img src={slide_1} alt="banner-slide" />
    </div>,
  ];

  return (
    <div className="banner-slider">
      <Slider {...settings}>{slides}</Slider>
    </div>
  );
};

export default BannerSlider;
