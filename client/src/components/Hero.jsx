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
      productDetails: {
          availableColors: [1],
          colors: [""],
          heartToggle: false,
          images: [""],
          name: '',
          productId: 0,
          retailPrice: 0,
          reviewCount: 0,
          reviewRating: 0,
          salePrice: 0,
          sizes: {
            '5': 1,
            '5h': 0
          },
          tags: ["Women's", "Running"],
          thumbnails: [""]
      },
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
  }

  componentDidMount() {
    this.fetchProduct();
  }

  fetchProduct() {
    axios
      .get('/abibas/product', { params: { id: 2 } })
      .then((response) => {
        this.setState({
          productDetails: response.data.product,
          availableColorImages: response.data.colorThumbnails
        });
      })
      .catch((err) => {
        console.log(err);
      })
  }

  render() {
    let salePrice = this.state.productDetails.salePrice;
    let retailPrice = this.state.productDetails.retailPrice;
    let sale = salePrice / retailPrice * 100;
    return (
      <div>
        <div className={style.container}>
          <ImageViewer images={this.state.productDetails.images} />
          <SaleBadge sale={sale} />
          <OrderInfo details={this.state.productDetails} availableColorImages={this.state.availableColorImages} />
        </div>
        <div className={style.background}>
        </div>
      </div>
    )
  }
}

export default Hero;
