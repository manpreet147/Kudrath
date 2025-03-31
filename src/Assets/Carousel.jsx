import React from 'react'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Card2 from './Cards/Card2';
import Card1 from './Cards/Card1';

const Carousel = () => {
    const settings = {
        dots: true,
        infinte: true,
        speed : 500,
        slidesToShow : 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplayspeed : 2000,
      };

  return (
    <div>
      <Slider {...settings}>
        <div>
            <h3>
              <Card1 />
            </h3>
        </div>
        <div>
            <h3>
              <Card2 />
            </h3>
        </div>
        
      </Slider>
    </div>
  )
}

export default Carousel
