import React from 'react';
import style from '../styles/ratingReviews.css';

const RatingReviews = ({ count, rating }) => {
  return (
    <div>
      Stars: {rating} Read all {count} reviews
    </div>
  );
};

export default RatingReviews;
