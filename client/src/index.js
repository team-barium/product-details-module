import React from 'react';
import ReactDOM from 'react-dom';
import ProductDetailsApp from './components/App';

let productId = 1;

ReactDOM.render(<ProductDetailsApp productId={productId} />, document.getElementById('details'));

