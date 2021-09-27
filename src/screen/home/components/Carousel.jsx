import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

export default function CarouselComponent() {
    return (
        <div class="carousel-wrapper">
            <Carousel infiniteLoop useKeyboardArrows stopOnHover={true}  autoPlay showThumbs={false} showIndicators={false} showStatus={false}>
                <div>
                    <img src="https://source.unsplash.com/1600x500/?google" alt='google' />
                </div>
                <div>
                    <img src="https://source.unsplash.com/1600x500/?facebook" alt='facebook'/>
                </div>
                <div>
                    <img src="https://source.unsplash.com/1600x500/?amazon" alt='amazon'/>
                </div>
                <div>
                    <img src="https://source.unsplash.com/1600x500/?spacex" alt='spaceX'/>
                </div>
            </Carousel>
        </div>
    );
}
