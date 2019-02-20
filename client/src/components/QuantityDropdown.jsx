import React from 'react';
import style from '../styles/QuantityDropdown.css';

const QuantityDropdown = ({ changeQuantity, toggle }) => {
  if (toggle) {
    return (
      <div className={style.container}>
        <ul className={style.quantityList}>
          {Array.from(Array(15)).map((undef, n) => {
            let q = n + 1;
            return (
              <li key={n} className={style.quantityEntry}>
              <button quantity={q} className={style.quantityButton} onClick={changeQuantity}>
                {q}
              </button>
            </li>
            )
          })}
        </ul>
      </div>
      );
  } else {
    return null;
  }
}

export default QuantityDropdown;
