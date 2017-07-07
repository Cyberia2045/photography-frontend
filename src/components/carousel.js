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

		this.handleLoadGallery = this.handleLoadGallery.bind(this)

	}

		render() {

			let scrollText;
			if (this.props.scrollText) {
				scrollText = <div onClick={this.slideScroll} className="scrollText">{this.props.scrollText}</div>
			} else {
				scrollText = <span></span>
			}

			return(
				<div className="carousel">
					<div className="carousel__title">{this.state.carouselTitle}</div>
					<Slider photos={this.state.carouselSlider}/>
					<div onClick={this.handleLoadGallery} className="carousel-button">{this.state.carouselButtonTitle}</div>
					{scrollText}
				</div>
				)

		}

		handleLoadGallery() {
			this.props.loadGallery(this.props.gallery)
		}

		slideScroll() {
			var height = window.innerHeight;
	
			var position = 0;
			var increment = height / 20


			var myInterval = setInterval(function() {
				console.log("hello")
				window.scrollBy(0, increment);
				position++
				if (position === 20) {
					window.scrollBy(0, 6)
					clearInterval(myInterval)
				}
			}, 20)
		}

}

export default Carousel;