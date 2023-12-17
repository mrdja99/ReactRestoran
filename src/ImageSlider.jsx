import React, { useState } from 'react';
import './ImageSlider.css';
import { SlArrowLeftCircle, SlArrowRightCircle  } from "react-icons/sl";


function ImageSlider() {
    const images = [
        require('./images/SlikaHrane1.jpg'),
        require('./images/SlikaHrane2.jpg'),
        require('./images/SlikaHrane3.jpg'),
        require('./images/SlikaHrane4.jpg'),
    ];

    const [currentImage, setCurrentImage] = useState(0);

    const nextSlide = () => {
        setCurrentImage((picture) => (picture + 1) % images.length);
    }
     
    const previousSlide = () => {
        setCurrentImage((picture) => (picture - 1 + images.length) % images.length)
    }

  return (
    <div className='image-slider'>
        <img src={images[currentImage]} alt={`Slika ${currentImage + 1}`} />
        <button onClick={previousSlide} className='arrow-button left'><SlArrowLeftCircle /></button>
        <button onClick={nextSlide} className='arrow-button right'><SlArrowRightCircle /></button>
    </div>
  )
}

export default ImageSlider;