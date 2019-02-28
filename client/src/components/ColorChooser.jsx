import React from 'react';
import style from '../styles/colorChooser.css';

const ColorChooser = ({ colors, colorImages, productId }) => {
  return (
    <div className={style.container}>
      <div className={style.title}>Available Colors</div>
      <div className={style.colorLabels}>{colors.join(' / ')}</div>
      <div className={style.variationOuter}>
        <div className={style.variationInner}>
          <div className={style.colorVariationCurrent}>
            <div
              className={style.checkmark}
              style={{
                backgroundImage:
                  "url('https://s3-us-west-1.amazonaws.com/abibas-shoes/icons/check-icon.png')"
              }}
            />
            <div
              style={{ backgroundImage: `url(${colorImages[0]})` }}
              id={productId}
              className={style.image}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ColorChooser;
