import React from 'react';
import style from '../styles/ratingReviews.css';

const RatingReviews = ({ count, rating, mobile }) => {
  let stars = [];
  while (rating > 1) {
    stars.push(1);
    rating -= 1;
  }
  if (rating > 0) {
    stars.push(rating);
  }
  while (stars.length < 5) {
    stars.push(0);
  }
  return (
    <div className={style.container}>
      <div className={style.starRating}>
        {stars.map((star, key) => {
          let percentage = `${(star / 1 * 100)}%`;
          return (
            <div className={style.outerStar} key={key}>
              &#x02606;
              <div style={{width:percentage}} className={style.innerStar}>
                &#x02605;
              </div>
            </div>
          );
        })}
      </div>
      <a onClick={() => { document.getElementById('reviews').scrollIntoView({behavior: "smooth"}); window.scrollBy(0, -120); }} className={style.count}>{mobile ? count : `Read all ${count} reviews`}</a>
    </div>
  );
};

export default RatingReviews;
