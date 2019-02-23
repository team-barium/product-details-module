import React from 'react';
import style from '../styles/quantityDropdown.css';

class QuantityDropdown extends React.Component {
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
    let { changeQuantity, toggleState, current } = this.props;
    if (toggleState) {
      document.addEventListener('mousedown', this.handleOutsideClick);
      return (
        <div ref={node => this.node = node} className={style.container}>
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
      document.removeEventListener('mousedown', this.handleOutsideClick);
      return (
        <div ref={node => this.node = node} style={{display:'none'}}></div>
      );
    }
  }
}

export default QuantityDropdown;
