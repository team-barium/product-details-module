import React, { useState } from 'react';
import style from '../styles/carouselIndicator.css';

const CarouselIndicator = ({ index, images, setIndex }) => {
  return (
    <div className={style.container}>
      <ul className={style.indicatorList}>
        {images.map((image, key) => {
          let indicatorStyle = key === index ? style.selectedIndicator : style.indicator;
          return (
            <li key={key} index={key} className={indicatorStyle} onClick={setIndex}>
              <a className={style.line} index={key} ></a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default CarouselIndicator;
