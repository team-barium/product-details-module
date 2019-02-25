import React from 'react';
import style from '../styles/imageViewer.css';
import SkyLight from 'react-skylight';
import ZoomModal from './ZoomModal';

class ImageViewer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      imageIndex: 0,
      zoomIndex: 0,
      numItems: 0,
      firstItem: 0, //first item visible in the thumbnail carousel
      lastItem: 0, //last item visible in the thumbnail carousel
      shiftCount: 0,
      upArrowDisplay: "none",
      downArrowDisplay: "none",
      popup: false
    }
    this.nextImage = this.nextImage.bind(this);
    this.previousImage = this.previousImage.bind(this);
    this.setImage = this.setImage.bind(this);
    this.shiftUp = this.shiftUp.bind(this);
    this.shiftDown = this.shiftDown.bind(this);
    this.shiftMultiple = this.shiftMultiple.bind(this);
    this.nextZoomIndex = this.nextZoomIndex.bind(this);
    this.previousZoomIndex = this.previousZoomIndex.bind(this);
    this.setZoomIndex = this.setZoomIndex.bind(this);
    this.resetZoomIndex = this.resetZoomIndex.bind(this);
    this.togglePopup = this.togglePopup.bind(this);
  }

  componentDidMount() {
    this.setState({
      imageIndex: 0,
      zoomIndex: 0,
      numItems: this.props.images.length,
      firstItem: 0,
      lastItem: this.props.images.length > 6 ? 6 : this.props.images.length - 1,
      shiftCount: 0,
      upArrowDisplay: "none"
    });

    if (this.props.images.length > 7) {
      this.setState({
        downArrowDisplay: "flex"
      });
    }
  }

  componentWillReceiveProps(props) {
    this.setState({
      imageIndex: 0,
      zoomIndex: 0,
      numItems: props.images.length,
      firstItem: 0,
      lastItem: props.images.length > 6 ? 6 : props.images.length - 1,
      shiftCount: 0,
      upArrowDisplay: "none"
    });

    if (props.images.length > 6) {
      this.setState({
        downArrowDisplay: "flex"
      });
    }
  }

  previousImage() {
    let images = this.props.images;
    if (this.state.imageIndex > 0) {
      this.setState({
        imageIndex: this.state.imageIndex - 1,
        zoomIndex: this.state.imageIndex -1
      });
      if (this.state.imageIndex - 1 < this.state.firstItem) {
        this.shiftMultiple(this.state.imageIndex - 1 - this.state.firstItem);
      }
    } else {
      this.setState({
        imageIndex: images.length - 1,
        zoomIndex: images.length - 1
      });
      if (images.length - 1 > this.state.lastItem) {
        this.shiftMultiple(images.length - 1 - this.state.lastItem);
      }
    }
  }

  nextImage() {
    let images = this.props.images;
    if (this.state.imageIndex < images.length - 1) {
      this.setState({
        imageIndex: this.state.imageIndex + 1,
        zoomIndex: this.state.imageIndex + 1
      });
      if (this.state.imageIndex + 1 > this.state.lastItem) {
        this.shiftMultiple(this.state.imageIndex + 1 - this.state.lastItem);
      }
    } else {
      this.setState({
        imageIndex: 0,
        zoomIndex: 0
      });
      if (this.state.firstItem > 0) {
        this.shiftMultiple(0 - this.state.firstItem)
      }
    }
  }

  setImage(e) {
    if (e) {
      e.preventDefault();
    }
    let newIndex = Number(e.target.getAttribute('id'));
    this.setState({
      imageIndex: newIndex,
      zoomIndex: newIndex
    });
  }
  
  shiftDown(e) {
    if (e) {
      e.preventDefault();
    }
    this.setState({
      upArrowDisplay: this.state.firstItem === 1 ? "none" : "flex",
      downArrowDisplay: this.state.numItems > 7 ? "flex" : "none",
      firstItem: this.state.firstItem - 1,
      lastItem: this.state.lastItem - 1,
      shiftCount: this.state.shiftCount + 1
    });
  }

  shiftUp(e) {
    if (e) {
      e.preventDefault();
    }
    this.setState({
      upArrowDisplay: this.state.firstItem >= 0 ? "flex" : "none",
      downArrowDisplay: this.state.lastItem === this.state.numItems - 2 ? "none": "flex",
      firstItem: this.state.firstItem + 1,
      lastItem: this.state.lastItem + 1,
      shiftCount: this.state.shiftCount - 1
    });
  }

  shiftMultiple(n) {
    this.setState({
      upArrowDisplay: this.state.firstItem + n <= 0 ? "none" : "flex",
      downArrowDisplay: this.state.lastItem + n < this.state.numItems - 1 ? "flex" : "none",
      firstItem: this.state.firstItem + n,
      lastItem: this.state.lastItem + n,
      shiftCount: this.state.shiftCount - n
    });
  }

  nextZoomIndex() {
    let last = this.state.numItems - 1;
    if (this.state.zoomIndex < last) {
      this.setState({
        zoomIndex: this.state.zoomIndex + 1
      });
    }
  }

  previousZoomIndex() {
    if (this.state.zoomIndex > 0) {
      this.setState({
        zoomIndex: this.state.zoomIndex - 1
      });
    }
  }

  setZoomIndex(e) {
    this.setState({
      zoomIndex: Number(e.target.getAttribute('index'))
    });
  }

  resetZoomIndex() {
    this.setState({
      zoomIndex: this.state.imageIndex,
      popup: false
    });
  }

  togglePopup() {
    this.popup.show();
    this.setState({
      popup: true
    });
  }

  render() {
    let { images } = this.props;
    const zoomModalStyle = {
      backgroundColor: '#ebedee',
      width: '100%',
      left: '0',
      top: '10%',
      boxSizing: 'border-box',
      maxHeight: '80vh',
      margin: '0',
      padding: '0',
    }
    const closeButtonStyle = {
      display: 'flex',
      cursor: 'pointer',
      position: 'absolute',
      fontSize: '45px',
      fontWeight: '100',
      right: '10px',
      top: '-14px',
      width: '34px',
      height: '34px',
      alignItems: 'center',
      justifyContent: 'center',
      border: '1px solid #000',
      paddingBottom: '6px',
      boxSizing: 'border-box',
      fontFamily: 'system-ui',
      innerText: '&times',
      alignText: 'center',
      backgroundColor: '#fff',
      zIndex: '200'
    }

    return (
      <div className={style.container}>
        <SkyLight dialogStyles={zoomModalStyle} closeButtonStyle={closeButtonStyle} ref={ref => this.popup = ref} transitionDuration={0} hideOnOverlayClicked beforeClose={this.resetZoomIndex} >
          <ZoomModal images={images} index={this.state.zoomIndex} previous={this.previousZoomIndex} next={this.nextZoomIndex} setIndex={this.setZoomIndex} popup={this.state.popup} />
        </SkyLight>
        <div className={style.imageViewer}>
          <div className={style.imageContainer}>
            <img className={style.image} src={images[this.state.imageIndex]} onClick={this.togglePopup} />
            <div className={style.leftArrow} onClick={this.previousImage}>
              <div className={style.arrowShadow}>&#x027F5;</div>
              <div className={style.arrow}>&#x027F5;</div>
            </div>
            <div className={style.rightArrow} onClick={this.nextImage} >
              <div className={style.arrowShadow}>&#x027F6;</div>
              <div className={style.arrow}>&#x027F6;</div>
            </div>
          </div>
          <div className={style.carousel}>
            <div className={style.carouselContainer}>
              <div className={style.carouselPrev}>
                <button className={style.carouselButton} style={{backgroundImage:"url('https://s3-us-west-1.amazonaws.com/abibas-shoes/icons/arrow-up-icon.png')", display:this.state.upArrowDisplay}} onClick={this.shiftDown} />
              </div>
              {images.map((image, key) => {
                let thumbnailStyle = key === this.state.imageIndex ? style.selectedThumbnail : style.thumbnail;
                return (
                  <div className={thumbnailStyle} id={key} key={key} style={{transform:`translate(0, ${this.state.shiftCount * 64}px)`}} onClick={this.setImage}>
                    <img className={style.thumbnailImage} id={key} src={image} />
                  </div>
                );
              })}
              <div className={style.carouselNext}>
                <button className={style.carouselButton} style={{backgroundImage:"url('https://s3-us-west-1.amazonaws.com/abibas-shoes/icons/arrow-down-icon.png')", display: this.state.downArrowDisplay}} onClick={this.shiftUp} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ImageViewer;
