import React, { Component } from 'react';
import Carousel from './carousel';
import Gallery from './gallery'
import '../css/styles.css';

class App extends Component {

constructor() {
  super();
  this.state = {

  }

  this.explorerCarousel = [
    
    {
      url: "https://farm3.staticflickr.com/2916/33308008471_b86068af0f_h.jpg"
    },

    {
      url: "https://farm3.staticflickr.com/2813/32622133573_cb63740701_h.jpg"
    },  

    {
      url: "https://farm4.staticflickr.com/3798/33326809421_600e90e109_h.jpg"
    },        

  ]

  this.gallery = {
    
    "Exploring the World Through Light and Glass": [

    // Kansas Farm House
    "https://farm1.staticflickr.com/603/32622170683_43a329fdb0_h.jpg",

    // Utah
    "https://farm4.staticflickr.com/3754/32593897024_096c77a8e6_h.jpg",

    // West Kansas
    "https://farm4.staticflickr.com/3869/33404262086_331e34fe33_h.jpg",

    //Lambertville High School
    "https://farm1.staticflickr.com/596/33395830686_42e36bb25c_h.jpg",

    //Abandonned in a Hayfield
    "https://farm3.staticflickr.com/2950/32611838324_c64a17be8c_h.jpg",

    //Eastern State Penitentiary
    "https://farm4.staticflickr.com/3679/32639670253_0fdee7ebf2_h.jpg"

    ],
    
    "holiday": ["http://images.redfunnel.co.uk/images/ferry-travel/red-osprey-picture-gallery/red_osprey_leaves_cowes_roads.jpg", "https://www.e-oprawa.pl/media/PL/img/galeria/580x360/661.jpg", "https://metrouk2.files.wordpress.com/2015/07/ad_175752041.jpg"],
    
    "beach": []
  }

  this.loadGallery = this.loadGallery.bind(this)

}

  render() {

    if (this.state.selectedGallery) {
      
      return <Gallery name={this.state.selectedGallery} photos={this.gallery[this.state.selectedGallery]}/>

    }

    return (
      <div className="App">
        
          <Carousel carouselSlider= {this.explorerCarousel} carouselTitle="Photography By Michael Nagy" carouselButtonTitle="Explore" />   
        
          <Carousel carouselSlider= {this.explorerCarousel} carouselTitle="Exploring the World Through Light and Glass" carouselButtonTitle="Explore" loadGallery={this.loadGallery} gallery="Exploring the World Through Light and Glass" /> 

          <Carousel carouselSlider= {this.explorerCarousel} carouselTitle="Travel Photography" carouselButtonTitle="Explore" loadGallery={this.loadGallery} gallery="holiday" /> 

          <Carousel carouselSlider= {this.explorerCarousel} carouselTitle="Travel Photography" carouselButtonTitle="Explore" /> 

      </div>

    );
  }

  loadGallery(gallery) {
    this.setState({selectedGallery: gallery})
  }

}

export default App;
