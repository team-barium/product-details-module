import React from 'react';
import axios from 'axios';
import style from '../styles/hero.css';
import OrderInfo from './OrderInfo';
import ImageViewer from './ImageViewer';
import SaleBadge from './SaleBadge';

class Hero extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loadedData: false,
      productDetails: null,
        /* Example Details
          availableColors: [1, 2, 3]
          colors: ["Cloud White", "Grey", "Ash Pearl"]
          heartToggle: false
          images: ["image url"]
          name: "Edgebounce Shoes"
          productId: 1
          retailPrice: 100
          reviewCount: 104
          reviewRating: 4
          salePrice: 50
          sizes: {
            5: 1,
            5h: 0,
          }
          tags: ["Women's", "Running"]
          thumbnails: ["image url"]
        */
      availableColorImages: []
    }
    this.fetchProduct = this.fetchProduct.bind(this);
    this.changeColor = this.changeColor.bind(this);
  }

  componentDidMount() {
    this.fetchProduct(this.props.productId);
  }

  fetchProduct(productId) {
    axios
      .get('/abibas/product', { params: { id: productId } })
      .then((response) => {
        this.setState({
          productDetails: response.data.product,
          availableColorImages: response.data.colorThumbnails,
          loadedData: true
        });
      })
      .catch((err) => {
        console.log(err);
      })
  }

  changeColor(e) {
    e.preventDefault();
    this.fetchProduct(Number(e.target.getAttribute('id')));
  }

  render() {
    if (this.state.loadedData) {
      let salePrice = this.state.productDetails.salePrice;
      let retailPrice = this.state.productDetails.retailPrice;
      let sale = salePrice / retailPrice * 100;
      let images = this.state.productDetails.images;
      return (
        <div className={style.background}>
          <div className={style.container}>
            <ImageViewer images={images} />
            <SaleBadge sale={sale} />
            <OrderInfo details={this.state.productDetails} availableColorImages={this.state.availableColorImages} changeColor={this.changeColor} />
          </div>
          <div className={style.background}>
          </div>
        </div>
        );
    } else {
      return null;
    }
  }
}

export default Hero;
