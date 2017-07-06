import React, { Component } from 'react';
import RightArrow from './RightArrow';
import LeftArrow from './LeftArrow';

class Slider extends Component {
  
  constructor(props) {
    super(props);

    this.state = {
      slideCount: 0,
      photos: props.photos
    }

    this.nextSlide = this.nextSlide.bind(this);
    this.previousSlide = this.previousSlide.bind(this);

    this.carouselSlider = setInterval(this.nextSlide, 7000)
  }

  render() {

    var slideStyling = {
      backgroundImage: "url(" + this.state.photos[this.state.slideCount] + ")",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      height: "100vh",
      opacity: "0",
      animation: "fade 5s ease-in",
      animationFillMode: "forwards"
    }

    return (
        <div style={slideStyling}>

          <RightArrow nextSlide={this.nextSlide} />
          <LeftArrow previousSlide={this.previousSlide} />
          
        </div>
    );
  }

  nextSlide() {
    if (this.state.slideCount === this.state.photos.length -1) {
        this.setState({ slideCount: 0})
    }
    else {
      this.setState({ slideCount: this.state.slideCount +1 })
    }
  }

  previousSlide() {
    if (this.state.slideCount === 0) {
      this.setState({ slideCount: this.state.photos.length - 1})
    }
    else {
      this.setState({ slideCount: this.state.slideCount - 1 })
    }
  } 

  componentWillUnmount() {
    this.carouselSlider && clearInterval(this.carouselSlider);
  }

}

export default Slider;
