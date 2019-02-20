import React from 'react';
import style from '../styles/sizeDropdown.css';

const SizeDropdown = ({ sizes, changeSize, toggle }) => {
  if (toggle) {
    return (
      <div className={style.container}>
        <div className={style.sizeContainer}>
          <ul className={style.sizeList}>
            {Object.keys(sizes).map((size) => {
              if (sizes[size] > 0) {
                let sizeText = size.endsWith('h') ? size.replace('h', '.5') : size;
                return (
                  <li key={sizeText} className={style.sizeEntry}>
                  <button size={sizeText} className={style.sizeButton} onClick={changeSize}>
                    {sizeText}
                  </button>
                </li>
                );
              }})}
          </ul>
        </div>
      </div>
    );
  } else {
    return null;
  }
}

export default SizeDropdown;
