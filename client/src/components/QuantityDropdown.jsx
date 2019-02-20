import React from 'react';
import style from '../styles/QuantityDropdown.css';

const QuantityDropdown = ({ changeQuantity, toggle, current }) => {
  if (toggle) {
    return (
      <div className={style.container}>
        <ul className={style.quantityList}>
          {Array.from(Array(15)).map((undef, n) => {
            let q = n + 1;
            let selected = {};
            if (q === current) {
              selected['backgroundColor'] = '#ebedee';
              selected['fontFamily'] = 'AdihausDIN-Bold';
            }
            return (
              <li key={n} className={style.quantityEntry}>
                <button quantity={q} className={style.quantityButton} onClick={changeQuantity} style={selected} >
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
