import React from 'react';
import style from '../styles/carouselIndicator.css';

const CarouselIndicator = ({ images, setIndex }) => (
  <div className={style.container}>
    <ul className={style.indicatorList}>
      {images.map((image, key) => {
        return (
          <li key={key} index={key} className={style.indicator} onClick={setIndex}>
            <a className={style.line} index={key} ></a>
          </li>
        );
      })}
    </ul>
  </div>
);

export default CarouselIndicator;
