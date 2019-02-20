import React from 'react';
import style from '../styles/saleBadge.css';

const SaleBadge = ({ sale }) => {
  return (
    <div className={style.container}>
      -{sale} %
    </div>
  );
}

export default SaleBadge;
