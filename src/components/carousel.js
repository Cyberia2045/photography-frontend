import React, { Component } from 'react';
import Slider from './slider';

class Carousel extends Component {

	constructor(props) {
		super(props);
		this.state = {
			carouselSlider: props.carouselSlider,
			carouselTitle: props.carouselTitle,
			carouselButtonTitle: props.carouselButtonTitle
		}
		this.carouselStyle = {
			position: "relative"
		}
	}

		render() {

			return(
				<div style={this.carouselStyle}>
					<div className="carousel-title">{this.state.carouselTitle}</div>
					<Slider photos={this.state.carouselSlider} />
					<div className="carousel-button">{this.state.carouselButtonTitle}</div>
				</div>
				)

		}
}

export default Carousel;