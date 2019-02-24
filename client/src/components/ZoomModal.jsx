import React from 'react';
import style from '../styles/zoomModal.css';
import SkyLight from 'react-skylight';

class ZoomModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    let { images, imageIndex } = this.props;
    return (
      <div className={style.container}>
      </div>
    );
  }
}

export default ZoomModal;
