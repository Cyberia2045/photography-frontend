import React, { Component } from 'react';
import RightArrow from './RightArrow';
import LeftArrow from './LeftArrow';
import SlideScroller from './slideScroller';

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
      height: "100vh"
    }

    return (
        <div style={slideStyling}>

          <RightArrow nextSlide={this.nextSlide} />
          <LeftArrow previousSlide={this.previousSlide} />
          <SlideScroller slideScroll={this.slideScroll} />
          
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

  slideScroll() {
    var height = window.innerHeight;

    var position = 0;
    var increment = height / 20


    var myInterval = setInterval(function() {
      window.scrollBy(0, increment);
      position++
      if (position === 20) {
        window.scrollBy(0, 6)
        clearInterval(myInterval)
      }
    }, 20)
  }

}

export default Slider;
