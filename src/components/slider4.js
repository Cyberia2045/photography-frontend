import React, { Component } from 'react';

const SlideFour= (props) => {

  let background = {
    backgroundImage: 'url(http://www.daijiworld.com/images1/sush_240810_fall1.jpg)',
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  }

  return <div style={background} className="slide"></div>
}

export default SlideFour;