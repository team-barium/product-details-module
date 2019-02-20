import React from 'react';
import style from '../styles/productInfo.css';
import RatingReviews from './RatingReviews';
import Price from './Price';

class ProductInfo extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let { name, tags, retailPrice, salePrice, reviewCount, reviewRating } = this.props;

    return (
      <div className={style.container}>
        <RatingReviews count={reviewCount} rating={reviewRating} />
        <div className={style.productCategory}>
          {tags.join(' ')}
        </div>
        <div className={style.productName}>
          {name}
        </div>
        <Price retail={retailPrice} sale={salePrice} />
      </div>
    );
  }
}

export default ProductInfo;
