import React from 'react';
import style from '../styles/productInfoMobile.css';
import RatingReviews from './RatingReviews';
import Price from './Price';

const ProductInfoMobile = ({ details }) => {
  let { name, tags, retailPrice, salePrice, reviewCount, reviewRating } = details;
  
  return (
    <div className={style.container}>
      <div className={style.productCategory}>
        {tags.join(' ')}
      </div>
      <div className={style.productName}>
        {name}
      </div>
      <div className={style.reviewPriceContainer}>
        <RatingReviews mobile={true} count={reviewCount} rating={reviewRating} />
        <Price retail={retailPrice} sale={salePrice} />
      </div>
    </div>
  );
}

export default ProductInfoMobile;



