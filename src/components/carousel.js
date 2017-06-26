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

		this.handleLoadGallery = this.handleLoadGallery.bind(this)

	}

		render() {

			let scrollText = this.props.scrollText ? this.props.scrollText : ""

			return(
				<div style={this.carouselStyle}>
					<div className="carousel-title">{this.state.carouselTitle}</div>
					<Slider photos={this.state.carouselSlider}/>
					<div onClick={this.handleLoadGallery} className="carousel-button">{this.state.carouselButtonTitle}</div>
					<div onClick={this.scroll}>{scrollText}</div>
				</div>
				)

		}

		handleLoadGallery() {
			this.props.loadGallery(this.props.gallery)
		}

}

export default Carousel;