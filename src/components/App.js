import React, { Component } from 'react';
import Carousel from './carousel';
import Slider from './slider'

class App extends Component {

  constructor() {
    super();
    this.state = {

    }
    this.GalleryContainer = {
      width: "100vw",
      height: "100vh",
      backgroundColor: "rgb(240, 240, 240)",
      marginTop: "-20px"
    }
  }

  render() {

    return (
      <div className="App">
        <div style={this.GalleryContainer}>
          <Carousel gallery={this.state.Slider} carouselTitle="Travel Photography" carouselButtonTitle="Explore the Gallery" /> 
          <Slider />

        </div>   
      </div>
    );
  }
}

export default App;
