import React, { Component } from 'react';
import SlideOne from './slider1.js';
import SlideTwo from './slider2.js';
import SlideThree from './slider3.js';
import SlideFour from './slider4.js';

class Slider extends Component {
  
  constructor(props) {
    super(props);

    this.state = {
      slideCount: 1
    }
  }

  render() {
    return (
      <div className="slider">

        {this.state.slideCount === 1 ? <SlideOne /> : null}
        {this.state.slideCount === 2 ? <SlideTwo /> : null} 
        {this.state.slideCount === 3 ? <SlideThree /> : null}
        {this.state.slideCount === 4 ? <SlideFour /> : null}

      </div>
    );
  }
}

export default Slider;
