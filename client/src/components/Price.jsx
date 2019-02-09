import React from 'react';
import style from '../styles/price.css';

const Price = ({ retail, sale }) => {
  return (
    <div className={style.container}>
      {retail} {sale}
    </div>
  )
}

export default Price;

