import React, { Component } from 'react';

class SlideFour extends Component {

	render() {

  let background = {
    backgroundImage: 'url(http://www.daijiworld.com/images1/sush_240810_fall1.jpg)',
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

export default SlideFour;