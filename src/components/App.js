import React, { Component } from 'react';
import Carousel from './carousel';
import '../css/styles.css';

class App extends Component {

  constructor() {
    super();
    this.state = {

    }

    this.travelPhotos = [
      {
        name: "Cliff Temple",
        location: "Bhutan",
        url: "https://static.independent.co.uk/s3fs-public/thumbnails/image/2013/12/06/10/bhutan.jpg"
      },
      {
        name: "Waterfalls at the Edge of the World",
        location: "Faroe Islands",
        url: "http://finedininglovers.cdn.crosscast-system.com/BlogPost/xl_11047_faroe-finedininglovers-TP.jpg"
      },        
      {
        name: "Climbing North England",
        location: "Peaks District, UK",
        url: "https://s-media-cache-ak0.pinimg.com/originals/4e/63/c2/4e63c27e7dc82ff9861612fbb33b920b.jpg"
      },        
      {
        name: "Friends of the Western Ghats",
        location: "South India",
        url: "http://www.daijiworld.com/images1/sush_240810_fall1.jpg"
      }
    ]

  }

  render() {

    return (
      <div className="App">
        
          <Carousel carouselSlider= {this.travelPhotos} carouselTitle="Travel Photography" carouselButtonTitle="Explore" />   
        
          <Carousel carouselSlider= {this.travelPhotos} carouselTitle="Travel Photography" carouselButtonTitle="Explore" /> 

          <Carousel carouselSlider= {this.travelPhotos} carouselTitle="Travel Photography" carouselButtonTitle="Explore" /> 

          <Carousel carouselSlider= {this.travelPhotos} carouselTitle="Travel Photography" carouselButtonTitle="Explore" /> 

      </div>

    );
  }
}

export default App;
