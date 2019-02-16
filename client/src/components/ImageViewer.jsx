import React from 'react';
import style from '../styles/imageViewer.css';

class ImageViewer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    let images = this.props.images;
    return (
      <div className={style.container}>
        <div className={style.imageViewer}>
          <div className={style.imageContainer}>
            <img className={style.image} src={images[0]} />
            <div className={style.leftArrow}>
              <div className={style.arrowShadow}>&#x027F5;</div>
              <div className={style.arrow}>&#x027F5;</div>
            </div>
            <div className={style.rightArrow}>
              <div className={style.arrowShadow}>&#x027F6;</div>
              <div className={style.arrow}>&#x027F6;</div>
            </div>
          </div>
          <div className={style.carousel}>
            <div className={style.carouselContainer}>
              <div className={style.carouselPrev}>
                <button className={style.carouselButton} style={{backgroundImage:"url('https://s3-us-west-1.amazonaws.com/abibas-shoes/icons/arrow-up-icon.png')"}} />
              </div>
              {images.map((image, key) => {
                return (
                  <div className={style.thumbnail}>
                    <img className={style.thumbnailImage} src={image} />
                  </div>
                );
              })}
              <div className={style.carouselNext}>
                <button className={style.carouselButton} style={{backgroundImage:"url('https://s3-us-west-1.amazonaws.com/abibas-shoes/icons/arrow-down-icon.png')"}} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ImageViewer;
