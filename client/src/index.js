import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

let productId = 1;

ReactDOM.render(<App productId={productId} />, document.getElementById('app'));

