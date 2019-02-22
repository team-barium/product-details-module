import React from 'react';
import ReactDOM from 'react-dom';
import ProductDetailsApp from './components/App';

let productId = Math.floor(Math.random() * 25) + 1; //random number between 1 - 25

ReactDOM.render(<ProductDetailsApp productId={productId} />, document.getElementById('details'));

