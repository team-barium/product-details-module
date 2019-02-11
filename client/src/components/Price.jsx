import React from 'react';
import style from '../styles/price.css';

const Price = ({ retail, sale }) => {
  if (retail === sale || sale === null) {
    return (
      <div className={style.container}>
        <a className={style.regularPrice}>${retail}</a>
      </div>
    );
  } else {
    return (
      <div className={style.container}>
        <a className={style.salePrice}>${sale}</a>
        <a className={style.strikeoutPrice}>${retail}</a>
      </div>
    );
  }
}

export default Price;

