import React from 'react';
import style from '../styles/productDetailsApp.css';
import Hero from './Hero';

const ProductDetailsApp = ({ productId }) => {
  return (
    <div className={style.container}>
      <Hero productId={productId}/>
    </div>
  );
};

export default ProductDetailsApp;
