import React from 'react';
import style from '../styles/productInfo.css';
import RatingReviews from './RatingReviews';
import Price from './Price';

class ProductInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    let name = this.props.name;
    let tags = this.props.tags;
    let retailPrice = this.props.retailPrice;
    let salePrice = this.props.salePrice;
    let reviewCount = this.props.reviewCount;
    let reviewRating = this.props.reviewRating;

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
