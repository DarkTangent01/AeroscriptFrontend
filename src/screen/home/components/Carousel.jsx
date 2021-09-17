import React from 'react';
import { Carousel } from 'antd';
import 'antd/dist/antd.css';

const contentStyle = {
  height: '24rem',
  color: '#fff',
  lineHeight: '23rem',
  textAlign: 'center',
  background: '#364d79',
  marginBottom: '-0.5rem',
};

const Carousell = () => {
  return (
    <div>
      <Carousel effect="fade">
    <div>
      <h3 style={contentStyle}>1</h3>
    </div>
    <div>
      <h3 style={contentStyle}>2</h3>
    </div>
    <div>
      <h3 style={contentStyle}>3</h3>
    </div>
    <div>
      <h3 style={contentStyle}>4</h3>
    </div>
  </Carousel>
    </div>
  )
}

export default Carousell
