import React from 'react';
import axios from 'axios';

class Hero extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentProduct: null
    }
  }

  fetchProduct() {
    axios
      .get('/abibas/product')
  }

  render() {
    return (
      <div>hi</div>
    )
  }
}

export default Hero;
