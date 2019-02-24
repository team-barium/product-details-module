import React from 'react';
import style from '../styles/zoomModal.css';
import CarouselIndicator from './CarouselIndicator';

class ZoomModal extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let { images, index, previous, next, setIndex } = this.props;

    return (
      <div className={style.container}>
        <div className={style.carousel} style={{transform:`translate(-${index * 100}vw, 0)`}}>
            {images.map((image, key) => {
              return (
                <div key={key} className={style.carouselEntry}>
                  <div className={style.imageWrapper}>
                    <img className={style.image} src={image} />
                  </div>
                </div>
              );
            })}
        </div>
        <div className={style.leftArrow} onClick={previous}>&#x027F5;</div>
        <div className={style.rightArrow} onClick={next}>&#x027F6;</div>
        <CarouselIndicator images={images} index={index} setIndex={setIndex} />
      </div>
    );
  }
}

export default ZoomModal;
