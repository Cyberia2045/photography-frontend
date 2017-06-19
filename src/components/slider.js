import React, { Component } from 'react';
import RightArrow from './RightArrow';
import LeftArrow from './LeftArrow';

class Slider extends Component {
  
  constructor(props) {
    super(props);

    this.state = {
      slideCount: 1,
      photos: props.photos
    }

    this.nextSlide = this.nextSlide.bind(this);
    this.previousSlide = this.previousSlide.bind(this);

  }

  render() {

    var imageStyling = {
      backgroundImage: "url(" + this.state.photos[this.state.slideCount].url + ")",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      height: "100vh"
    }

    return (
        <div style={imageStyling} className="slider">

        <RightArrow nextSlide={this.nextSlide} />

          <div><LeftArrow previousSlide={this.previousSlide} /></div>
          
        </div>
    );
  }

  nextSlide() {
    this.setState({ slideCount: this.state.slideCount + 1 })
  }

  previousSlide() {
    this.setState({ slideCount: this.state.slideCount - 1 })
  }

}

export default Slider;
