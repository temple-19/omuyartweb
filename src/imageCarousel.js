import React, { useState, useEffect } from 'react';
import kdot from './assets/kdot1.jpg';
import kdott from './assets/kdot2.jpg';

const ImageCarousel = () => {
  const images = [kdot, kdott];

  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 1500); // Adjust the interval (in milliseconds) for automatic sliding

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex  relative h-96 ">
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`Ige ${index + 1}`}
          className={`absolute rounded  transition-opacity  ${
            index === currentImage ? 'opacity-100' : 'opacity-0'
          }`}
        />
      ))}
    </div>
  );
};

export default ImageCarousel;
