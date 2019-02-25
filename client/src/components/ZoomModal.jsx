import React from 'react';
import style from '../styles/zoomModal.css';
import CarouselIndicator from './CarouselIndicator';

class ZoomModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      zoom: false,
      x: null,
      y: null,
      cursor: 'zoom-in',
      buttonVisibility: 'visible'
    }
    this.zoomOn = this.zoomOn.bind(this);
    this.zoomOff = this.zoomOff.bind(this);
    this.toggleZoom = this.toggleZoom.bind(this);
    this.getPosition = this.getPosition.bind(this);
  }

  componentWillReceiveProps() {
    this.setState({
      zoom: false,
      cursor: 'zoom-in',
      buttonVisibility: 'visible'
    });
  }

  zoomOn(e) {
    e.target.addEventListener('mousemove', this.getPosition);
    e.target.style.transform = 'scale(2)';
    this.setState({
      x: null,
      y: null,
      zoom: true,
      cursor: 'zoom-out',
      buttonVisibility: 'hidden'
    });
  }

  zoomOff(e) {
    e.target.removeEventListener('mousemove', this.getPosition);
    e.target.style.transform = 'none';
    this.setState({
      zoom: false,
      cursor: 'zoom-in',
      buttonVisibility: 'visible'
    });
  }

  toggleZoom(e) {
    if (this.state.zoom === false) {
      this.zoomOn(e);
    } else {
      this.zoomOff(e);
    }
  }

  getPosition(e) {
    this.setState({
      x: e.offsetX,
      y: e.offsetY
    });
  }


  render() {
    let { images, index, previous, next, setIndex, popup } = this.props;
    if (popup) {
      return (
        <div className={style.container}>
          <div className={style.carousel} style={{transform:`translate(-${index * 100}vw, 0)`}}>
              {images.map((image, key) => {
                return (
                  <div key={key} className={style.carouselEntry}>
                    <div className={style.imageWrapper}>
                      <div className={style.image} style={{backgroundImage: `url(${image})`, cursor: this.state.cursor, transform: 'none', transformOrigin: `${this.state.x}px ${this.state.y}px` }} onClick={this.toggleZoom} />
                    </div>
                  </div>
                );
              })}
          </div>
          <div style={{visibility: this.state.buttonVisibility}}>
            <div className={style.leftArrow} onClick={previous}>&#x027F5;</div>
            <div className={style.rightArrow} onClick={next}>&#x027F6;</div>
            <CarouselIndicator images={images} index={index} setIndex={setIndex} />
          </div>

        </div>
      );
    } else {
      return null;
    }
  }
}

export default ZoomModal;
