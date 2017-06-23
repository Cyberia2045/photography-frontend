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
      
      // Abandonned Castle
      "https://farm3.staticflickr.com/2916/33308008471_b86068af0f_h.jpg",

      // Delicate Arch (Utah)
      "https://farm3.staticflickr.com/2813/32622133573_cb63740701_h.jpg",  
      
      // South Portland Lighthouse (Maine)
      "https://farm4.staticflickr.com/3798/33326809421_600e90e109_h.jpg"        

    ]

    this.gallery = {
      
      "Exploring the World Through Light and Glass": [

    {
      name: "Abandonned in a Sea of Grass",
      url: "https://farm1.staticflickr.com/603/32622170683_43a329fdb0_h.jpg",
      alt: "Abandonned Kansas Farm House",
      description: ""
    },

    {
      name: "Trekking through a Terrestrial Martian Landscape",
      url: "https://farm4.staticflickr.com/3754/32593897024_096c77a8e6_h.jpg",
      alt: "Arches National Park",
      description: ""
    },

    {
      name: "On the Rails at the Edge of Prarie Country",
      url: "https://farm4.staticflickr.com/3869/33404262086_331e34fe33_h.jpg",
      alt: "Grain Elevator Beside Railroad Tracks in West Kansas",
      description: ""
    },

    {
      name: "Detritus in a West Jersey Classroom",
      url: "https://farm1.staticflickr.com/596/33395830686_42e36bb25c_h.jpg",
      alt: "Abandonned Classroom inside Lambertville High School",
      description: ""
    },

    {
      name: "Forgotten in the Western Plains",
      url: "https://farm3.staticflickr.com/2950/32611838324_c64a17be8c_h.jpg",
      alt: "Abandonned house in a West Kansas Hayfield",
      description: ""
    },

    {
      name: "The Dark March Down Death Row",
      url: "https://farm4.staticflickr.com/3679/32639670253_0fdee7ebf2_h.jpg",
      alt: "The hallways of Eastern State Penitentiary",
      description: ""
    }

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
