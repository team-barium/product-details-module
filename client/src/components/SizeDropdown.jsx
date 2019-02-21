import React from 'react';
import style from '../styles/sizeDropdown.css';

class SizeDropdown extends React.Component {
  constructor(props) {
    super(props);
    this.handleOutsideClick = this.handleOutsideClick.bind(this);
  }

  handleOutsideClick(e) {
    if (!this.props.node.contains(e.target)) {
      this.props.toggle();
    }
  }
  
  render() {
    let { sizes, changeSize, toggleState } = this.props;
    let sizeList = Object.keys(sizes).sort((a, b) => {
      let A = a.endsWith('h') ? a.replace('h', '.5') : a;
      let B = b.endsWith('h') ? b.replace('h', '.5') : b;
      return A - B;
    });
    if (toggleState) {
    document.addEventListener('mousedown', this.handleOutsideClick);
      return (
        <div ref={node => this.node = node} className={style.container}>
          <div className={style.sizeContainer}>
            <ul className={style.sizeList}>
              {sizeList.map((size) => {
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
            <a className={style.menuText}>Size out of stock?</a>
          </div>
        </div>
      );
    } else {
      document.removeEventListener('mousedown', this.handleOutsideClick);
      return (
        <div ref={node => this.node = node} style={{display:'none'}}></div>
      );
    }
  }
}

export default SizeDropdown;
