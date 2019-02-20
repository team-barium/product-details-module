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
    let { name, tags, retailPrice, salePrice, reviewCount, reviewRating, colors, availableColors, sizes, productId, heartToggle } = this.props.details;
    let { availableColorImages } = this.props;
    return (
      <div className={style.container}>
        <div className={style.background}>
          <div className={style.infoBar}>
            <ProductInfo name={name} tags={tags} reviewCount={reviewCount} reviewRating={reviewRating} retailPrice={retailPrice} salePrice={salePrice} />
            <ColorChooser colors={colors} colorImages={availableColorImages} colorIds={availableColors} productId={productId} changeColor={this.props.changeColor} />
            <CartForm sizes={sizes} heartToggle={heartToggle} />
          </div>
        </div>
      </div>
    )
  }
}

export default OrderInfo;
