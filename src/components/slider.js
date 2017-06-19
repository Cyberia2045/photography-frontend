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

    var slideStyling = {
      backgroundImage: "url(" + this.state.photos[this.state.slideCount].url + ")",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      height: "100vh"
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
    this.setState({ slideCount: this.state.slideCount - 1 })
  }

}

export default Slider;
