import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import './ImageCarousel.css'
// import { useState } from "react";

import img1 from '../img/img1.png';
import img2 from '../img/img2.png';
import img3 from '../img/img3.png';
import img4 from '../img/img4.jpg';
import img5 from '../img/img5.png';
import img6 from '../img/img6.png';
import img7 from '../img/img7.png';



function CarouselFadeExample() {
  return (
    <div className="CarouselContainer">
      <Carousel fade className="ImageCarousel">
        <Carousel.Item interval={1200}>
          <img src={img2} alt="First slide" />
          <Carousel.Caption>
            <h3>Måla och skapa</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={1200}>
          <img src={img1} alt="Second slide" />
          <Carousel.Caption>
            <h3>Bada i havet</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={1200}>
          <img src={img3} alt="Third slide" />
          <Carousel.Caption>
            <h3>Vattenkrig</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={1200}>
          <img src={img4} alt="4slide" />
          <Carousel.Caption>
            <h3>Läsa böcker i solen</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={1200}>
          <img src={img5} alt="Third slide" />
          <Carousel.Caption>
            <h3>Bygga med lego</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={1200}>
          <img src={img6} alt="Third slide" />
          <Carousel.Caption>
            <h3>Baka med kompisar</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={1200}>
          <img src={img7} alt="Third slide" />
          <Carousel.Caption>
            <h3>Skapa musik</h3>
          </Carousel.Caption>
        </Carousel.Item>
        </Carousel>
        </div>
  );
}

export default CarouselFadeExample;
