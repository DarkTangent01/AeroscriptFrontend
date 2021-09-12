import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

const handleDragStart = (e) => e.preventDefault();

const items = [
  <img src="https://source.unsplash.com/1600x400/?smartphones" onDragStart={handleDragStart} alt=""/>,
  <img src="https://source.unsplash.com/1600x400/?laptops" onDragStart={handleDragStart} alt="" />,
  <img src="https://source.unsplash.com/1600x400/?wireless-mouse" onDragStart={handleDragStart} alt="" />,
];

const Carousel = () => {
  return (
    <AliceCarousel mouseTracking items={items} />
  );
}

export default Carousel;
