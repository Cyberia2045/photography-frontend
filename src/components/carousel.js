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
	}

		render() {

			return(
				<div>
					<h2>{this.state.carouselTitle}</h2>
					<div><Slider photos={this.state.carouselSlider} /></div>
					<p>{this.state.carouselButtonTitle}</p>
				</div>
				)

		}

}

export default Carousel;