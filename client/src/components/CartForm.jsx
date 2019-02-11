import React from 'react';
import style from '../styles/cartForm.css';

const CartForm = (props) => {
  return (
    <div className={style.container}>
      <div className={style.sizeChart}>
        Size Chart
      </div>
      <div className={style.sizeQuantityRow}>
        <div className={style.sizeSelector}>
          SizeSelector
        </div>
        <div className={style.quantitySelector}>
          QuantitySelector
        </div>
      </div>
      <div className={style.addToBagRow}>
        <button className={style.addToBagButton}>Add To Bag</button>
        <button className={style.wishlistButton}>heartToggle</button>
      </div>
    </div>
  );
}

export default CartForm;
