import React from 'react';
import style from '../styles/cartForm.css';
import QuantityDropdown from './QuantityDropdown';
import SizeDropdown from './SizeDropdown';

class CartForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      size: 'Select Size',
      sizeDropdownToggle: false,
      quantity: 1,
      quantityDropdownToggle: false,
      heartToggle: false,
      heartUrl: 'https://s3-us-west-1.amazonaws.com/abibas-shoes/icons/heart-icon-normal.png'
    };

    this.hoverHeart = this.hoverHeart.bind(this);
    this.offHoverHeart = this.offHoverHeart.bind(this);
    this.toggleHeart = this.toggleHeart.bind(this);
    this.addToBag = this.addToBag.bind(this);
    this.toggleSizeDropdown = this.toggleSizeDropdown.bind(this);
    this.toggleQuantityDropdown = this.toggleQuantityDropdown.bind(this);
    this.changeSize = this.changeSize.bind(this);
    this.changeQuantity = this.changeQuantity.bind(this);
  }

  componentWillReceiveProps() {
    this.setState({
      heartToggle: this.props.heartToggle,
      heartUrl: !this.props.heartToggle ? 'https://s3-us-west-1.amazonaws.com/abibas-shoes/icons/heart-icon-normal.png' : 'https://s3-us-west-1.amazonaws.com/abibas-shoes/icons/heart-icon-filled.png',
      size: 'Select Size',
      quantity: 1
    });
  }

  hoverHeart() {
    this.setState({
      heartUrl: this.state.heartToggle ? 'https://s3-us-west-1.amazonaws.com/abibas-shoes/icons/heart-icon-filled-hover.png' : 'https://s3-us-west-1.amazonaws.com/abibas-shoes/icons/heart-icon-hover.png'
    });
  }

  offHoverHeart() {
    this.setState({
      heartUrl: this.state.heartToggle ? 'https://s3-us-west-1.amazonaws.com/abibas-shoes/icons/heart-icon-filled.png' : 'https://s3-us-west-1.amazonaws.com/abibas-shoes/icons/heart-icon-normal.png'
    });
  }

  toggleHeart(e) {
    e.preventDefault();
    this.setState({
      heartToggle: !this.state.heartToggle,
      heartUrl: this.state.heartToggle ? 'https://s3-us-west-1.amazonaws.com/abibas-shoes/icons/heart-icon-normal.png' : 'https://s3-us-west-1.amazonaws.com/abibas-shoes/icons/heart-icon-filled.png'
    });
  }

  addToBag(e) { //not functional
    e.preventDefault(); //prevent page refresh on click
  }

  toggleSizeDropdown() {
    this.setState({
      sizeDropdownToggle: !this.state.sizeDropdownToggle
    });
  }

  toggleQuantityDropdown() {
    this.setState({
      quantityDropdownToggle: !this.state.quantityDropdownToggle
    });
  }

  changeQuantity(e) {
    e.preventDefault();
    this.setState({
      quantity: e.target.getAttribute('quantity'),
      quantityDropdownToggle: false
    });
  }

  changeSize(e) {
    e.preventDefault();
    this.setState({
      size: e.target.getAttribute('size'),
      sizeDropdownToggle: false
    });
  }

  render() {
    let { sizes } = this.props;
    return (
      <form className={style.container}>
        <div className={style.sizeChartContainer}>
          <div className={style.sizeChart}>
            <div className={style.sizeIcon} style={{backgroundImage:"url('https://s3-us-west-1.amazonaws.com/abibas-shoes/icons/size-icon.png')"}}></div>
            Size Chart
          </div>
        </div>
        <div className={style.sizeQuantityRow}>
          <div ref={node => this.sizeNode = node} className={style.sizeSelector}>
            <div className={style.dropdown}>
              <div className={style.dropdownButton} title="select size" onClick={this.toggleSizeDropdown}>
                <span className={style.selectLabel}>{this.state.size}</span>
                <div className={style.dropdownIcon} style={{backgroundImage:"url('https://s3-us-west-1.amazonaws.com/abibas-shoes/icons/dropdown-icon.png')", transform:`${this.state.sizeDropdownToggle ? "rotate(180deg)" : "none"}`}} ></div>
              </div>
              <SizeDropdown node={this.sizeNode} sizes={sizes} changeSize={this.changeSize} toggleState={this.state.sizeDropdownToggle} toggle={this.toggleSizeDropdown} />
            </div>
          </div>
          <div ref={node => this.quantityNode = node} className={style.quantitySelector}>
            <div className={style.dropdown}>
              <div className={style.selector}>
                <div className={style.dropdownButton} title="select quantity" onClick={this.toggleQuantityDropdown}>
                  <span className={style.selectLabel}>{this.state.quantity}</span>
                  <div className={style.dropdownIcon} style={{backgroundImage:"url('https://s3-us-west-1.amazonaws.com/abibas-shoes/icons/dropdown-icon.png')", transform:`${this.state.quantityDropdownToggle ? "rotate(180deg)" : "none"}`}}></div>
                  <QuantityDropdown node={this.quantityNode} changeQuantity={this.changeQuantity} toggleState={this.state.quantityDropdownToggle} toggle={this.toggleQuantityDropdown} current={Number(this.state.quantity)} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={style.addToBagRow}>
          <button type="submit" className={style.addToBagButton} onClick={this.addToBag}>Add To Bag<div className={style.arrow}>&#x027F6;</div></button>
          <div className={style.wishlistButtonContainer}>
            <button type="submit" className={style.wishlistButton} onClick={this.toggleHeart} onMouseOver={this.hoverHeart} onMouseOut={this.offHoverHeart}>
              <div className={style.heartIcon} style={{backgroundImage:`url(${this.state.heartUrl})`}}></div>
            </button>
          </div>
        </div>
        <div className={style.shippingPromoRow}>
          <div className={style.shippingPromo}>
            <div className={style.deliveryIcon} style={{backgroundImage:"url('https://s3-us-west-1.amazonaws.com/abibas-shoes/icons/delivery-icon.png')"}}></div>
            <div className={style.shippingMessage}>Free Shipping and Free Returns</div>
          </div>
        </div>
      </form>
    );
  }
}

export default CartForm;
