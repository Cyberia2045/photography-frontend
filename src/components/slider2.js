import React, { Component } from 'react';

const SlideTwo= (props) => {

  let background = {
    backgroundImage: 'url(http://finedininglovers.cdn.crosscast-system.com/BlogPost/xl_11047_faroe-finedininglovers-TP.jpg)',
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  }

  return <div style={background} className="slide"></div>
}

export default SlideTwo;