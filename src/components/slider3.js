import React, { Component } from 'react';

const SlideThree= (props) => {

  let background = {
    backgroundImage: 'url(https://s-media-cache-ak0.pinimg.com/originals/4e/63/c2/4e63c27e7dc82ff9861612fbb33b920b.jpg)',
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  }

  return <div style={background} className="slide"></div>
}

export default SlideThree;