import React from 'react';
import style from '../styles/saleBadge.css';

const SaleBadge = ({ sale }) => {
  return (
    <div className={style.container}>
      <div className={style.badge}>
        -{sale} %
      </div>
    </div>
  );
}

export default SaleBadge;
