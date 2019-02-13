import React from 'react';
import style from '../styles/cartForm.css';

class CartForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      size: 'Select Size',
      quantity: null,
      heartToggle: false
    };
  }

  render() {
    return (
      <form className={style.container}>
        <div className={style.sizeChartContainer}>
          <div className={style.sizeChart}>
            <div className={style.sizeIcon} style={{backgroundImage:"url('https://s3-us-west-1.amazonaws.com/abibas-shoes/icons/size-icon.png')"}}></div>
            Size Chart
          </div>
        </div>
        <div className={style.sizeQuantityRow}>
          <div className={style.sizeSelector}>
            <div className={style.dropdown}>
              <button type="button" className={style.dropdownButton} title="select size">
                <span className={style.selectLabel}>{this.state.size}</span>
                <div className={style.dropdownIcon} style={{backgroundImage:"url('https://s3-us-west-1.amazonaws.com/abibas-shoes/icons/dropdown-icon.png')"}}></div>
              </button>
            </div>
          </div>
          <div className={style.quantitySelector}>
            <div className={style.dropdown}>
              <div className={style.selector}>
                <button type="button" className={style.dropdownButton} title="select quantity">
                  <span className={style.selectLabel}>{this.state.quantity}</span>
                  <div className={style.dropdownIcon} style={{backgroundImage:"url('https://s3-us-west-1.amazonaws.com/abibas-shoes/icons/dropdown-icon.png')"}}></div>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className={style.addToBagRow}>
          <button type="submit" className={style.addToBagButton}>Add To Bag<div className={style.arrow}>&#x027F6;</div></button>
          <button type="submit" className={style.wishlistButton}>
            <div className={style.heartIcon} style={{backgroundImage:"url('https://s3-us-west-1.amazonaws.com/abibas-shoes/icons/heart-icon-normal.png')"}}></div>
          </button>
        </div>
        <div className={style.shippingPromoRow}>
          <div className={style.shippingPromo}>
            <div className={style.deliveryIcon} style={{backgroundImage:"url('https://s3-us-west-1.amazonaws.com/abibas-shoes/icons/delivery-icon.png')"}}></div>
            <div className={style.shippingMessage}>Free Shipping and Free Returns</div>
          </div>
        </div>
      </form>
    );
  }
}

export default CartForm;
