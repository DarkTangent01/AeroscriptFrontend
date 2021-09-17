import React from 'react';
import { Carousel } from 'antd';
import 'antd/dist/antd.css';
import image1 from '../../../images/carousel1.png';
import image2 from '../../../images/carousel2.png';
import image3 from '../../../images/carouselimage.png';
import image4 from '../../../images/mobiles.jpg';

const contentStyle = {
  height: '24rem',
  // color: '#fff',
  // lineHeight: '23rem',
  textAlign: 'center',
  background: '#364d79',
  marginBottom: '-0.5rem',
};

const Carousell = () => {
  return (
    <div>
      <Carousel effect="fade" autoplay >
    <div>
    <h3 style={contentStyle}><img src={image1} style={{width: "1472px", height: '377px'}} alt="" srcset="" /></h3>
    </div>
    <div>
      <h3 style={contentStyle}><img src={image2} style={{width: "1472px", height: '377px'}} alt="" srcset="" /></h3>
    </div>
    <div>
      <h3 style={contentStyle}><img src={image3} style={{width: "1472px", height: '377px'}} alt="" srcset="" /></h3>
    </div>
    <div>
      <h3 style={contentStyle}><img src={image4} style={{width: "1472px", height: '377px'}} alt="" srcset="" /></h3>
    </div>
  </Carousel>
    </div>
  )
}

export default Carousell
