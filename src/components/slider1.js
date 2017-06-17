import React, { Component } from 'react';

const SlideOne= (props) => {

  let background = {
    backgroundImage: 'url(https://static.independent.co.uk/s3fs-public/thumbnails/image/2013/12/06/10/bhutan.jpg)',
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  }

  return <div style={background} className="slide"></div>
}

export default SlideOne;