import React from 'react';
import style from '../styles/app.css';
import Hero from './Hero';

const App = (props) => {
  let productId = props.productId;
  return (
    <div className={style.container}>
      <Hero productId={productId}/>
    </div>
  );
};

export default App;
