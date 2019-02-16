import React from 'react';
import style from '../styles/colorChooser.css';

const ColorChooser = ({ colors, colorImages, colorIds, productId, changeColor}) => {
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
          {colorIds.map((id, key) => {
            let imageUrl = colorImages[colorIds.indexOf(id)];
            if (id === productId) {
              return (
                  <div key={key} className={style.colorVariationCurrent}>
                    <div className={style.checkmark} style={{backgroundImage: "url('https://s3-us-west-1.amazonaws.com/abibas-shoes/icons/check-icon.png')"}}>
                    </div>
                    <div style={{backgroundImage: `url(${imageUrl})`}} id={colorIds[key]} className={style.image} onClick={changeColor} />
                  </div>
              );
            } else {
              return (
                  <div key={key} className={style.colorVariation}>
                    <div style={{backgroundImage: `url(${imageUrl})`}} id={colorIds[key]} className={style.image} onClick={changeColor} />
                  </div>
              );
            }
          })}
        </div>
      </div>
    </div>
  );
}

export default ColorChooser;
