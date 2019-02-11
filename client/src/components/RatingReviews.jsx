import React from 'react';
import style from '../styles/ratingReviews.css';

const RatingReviews = ({ count, rating }) => {
  return (
    <div className={style.container}>
      Stars: {rating} <a className={style.count}>Read all {count} reviews</a>
    </div>
  );
};

export default RatingReviews;
