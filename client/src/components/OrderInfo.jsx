import React from 'react';
import style from '../styles/orderInfo.css';
import ProductInfo from './ProductInfo';
import ColorChooser from './ColorChooser';
import CartForm from './CartForm';

class OrderInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    let name = this.props.details.name;
    let tags = this.props.details.tags;
    let retailPrice = this.props.details.retailPrice;
    let salePrice = this.props.details.salePrice;
    let reviewCount = this.props.details.reviewCount;
    let reviewRating = this.props.details.reviewRating;
    let colors = this.props.details.colors;
    let availableColors = this.props.details.availableColors;
    let availableColorImages = this.props.availableColorImages;
    let sizes = this.props.details.sizes;
    let productId = this.props.details.productId;
    return (
      <div className={style.container}>
        <div className={style.background}>
          <div className={style.infoBar}>
            <ProductInfo name={name} tags={tags} reviewCount={reviewCount} reviewRating={reviewRating} retailPrice={retailPrice} salePrice={salePrice} />
            <ColorChooser colors={colors} colorImages={availableColorImages} colorIds={availableColors} productId={productId} changeColor={this.props.changeColor} />
            <CartForm sizes={sizes} />
          </div>
        </div>
      </div>
    )
  }
}

export default OrderInfo;
