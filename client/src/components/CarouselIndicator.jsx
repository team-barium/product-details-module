import React, { useState } from 'react';
import style from '../styles/carouselIndicator.css';

const CarouselIndicator = ({ index, images, setIndex }) => {
  const [current, setCurrent] = useState(index);
  return (
    <div className={style.container}>
      <ul className={style.indicatorList}>
        {images.map((image, key) => {
          let indicatorStyle = key === current ? style.selectedIndicator : style.indicator;
          return (
            <li key={key} index={key} className={indicatorStyle} onClick={(e) => { setIndex(e); setCurrent(key); }}>
              <a className={style.line} index={key} ></a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default CarouselIndicator;
