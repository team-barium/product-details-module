import React from 'react';
import style from '../styles/saleBadge.css';

const SaleBadge = ({ sale }) => {
  if (sale > 0) {
    return (
      <div className={style.container}>
        <div className={style.badge}>
          -{sale} %
        </div>
      </div>
    );
  } else {
    return null;
  }
}

export default SaleBadge;
