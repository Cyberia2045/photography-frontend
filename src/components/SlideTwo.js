import React, { Component } from 'react';

class SlideTwo extends Component {

	render() {

  let background = {
    backgroundImage: 'url(http://finedininglovers.cdn.crosscast-system.com/BlogPost/xl_11047_faroe-finedininglovers-TP.jpg)',
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

export default SlideTwo;