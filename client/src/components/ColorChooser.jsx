import React from 'react';
import style from '../styles/colorChooser.css';

const ColorChooser = ({ colors, colorImages, colorIds }) => {
  return (
    <div className={style.container}>
      <div className={style.title}>
        Available Colors
      </div>
      <div className={style.colorLabels}>
        {colors.join(' / ')}
      </div>
      <div className={style.variationOuter}>
        <div className={style.variationInner}>
          (list of color variation selectors here)
          <div className={style.colorVariation}>
            Color Choice
          </div>
          <div className={style.colorVariationCurrent}>
            Selected Color
          </div>
        </div>
      </div>
    </div>
  );
}

export default ColorChooser;
