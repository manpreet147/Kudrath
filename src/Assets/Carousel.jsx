import React from 'react'
import Slider from 'react-slick';
import Card2 from './Cards/Card2';
import Card1 from './Cards/Card1';

const Carousel = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed : 500,
        slidesToShow : 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed : 2000,
      };

  return (
    <div style={{ width: "80%", margin: "0 auto", padding: "20px", background: "#f8f8f8" }}>
     <Slider {...settings}>
    <div>
      <p>display1</p>
    </div>
    <div>
      <p>hello</p>
    </div>
    </Slider>
    </div>

  )
}

export default Carousel
