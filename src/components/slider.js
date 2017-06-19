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

  }

  render() {

    var imageStyling = {
      backgroundImage: "url(" + this.state.photos[this.state.slideCount].url + ")",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      height: "100vh"
    }

    return (
        <div style={imageStyling}>

          <RightArrow nextSlide={this.nextSlide} />
          <LeftArrow previousSlide={this.previousSlide} />
          
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
