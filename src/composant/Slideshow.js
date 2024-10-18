import React, { useState } from 'react';

const Slideshow = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  if (images.length <= 1) return null;

  return (
    <div className="slideshow">
      <button onClick={handlePrevious} className="slideshow-button left">{'<'}</button>
      <img src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} />
      <button onClick={handleNext} className="slideshow-button right">{'>'}</button>
      <p>{`${currentIndex + 1} / ${images.length}`}</p>
    </div>
  );
};

export default Slideshow;
