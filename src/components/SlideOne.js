import React, { Component } from 'react';

class SlideOne extends Component {

	render() {

  let background = {
    backgroundImage: 'url(https://static.independent.co.uk/s3fs-public/thumbnails/image/2013/12/06/10/bhutan.jpg)',
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  }

  return (
  	<div>
  		<div className="slide" style={background}></div>
  	</div>
  	)

	}
}

export default SlideOne;