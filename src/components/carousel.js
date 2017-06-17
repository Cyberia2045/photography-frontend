import React, { Component } from 'react';
import Slider from './slider.js'

class Carousel extends Component {

	constructor(props) {
		super(props);
		this.state = {
			gallery: props.gallery,
			carouselTitle: props.carouselTitle,
			carouselButtonTitle: props.carouselButtonTitle
		}
	}

		render() {

			console.log(this.state.gallery)
			return(
				<div>
					<h2>{this.state.carouselTitle}</h2>
					<div>{this.state.gallery}</div>
					<p>{this.state.carouselButtonTitle}</p>
				</div>
				)

		}

}

export default Carousel;