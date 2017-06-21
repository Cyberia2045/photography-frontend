import React, { Component } from 'react';
import Carousel from './carousel';
import Gallery from './gallery'
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

    this.gallery = {
      
      "travel": ["http://nordictravel.com.au/image/type:galleryFullImage/id:4643/filename:c.+Jiang+Ping+Visit+Finland+72464_000_04.jpg", "http://cdni.condenast.co.uk/1920x1280/a_c/aerial-view-of-Helsinki-finland-conde-nast-traveller-18march16-visit-helsinki-Jussi-Hellsten.jpg", "http://static1.bestie.vn/Mlog/ImageContent/201606/2thumba-20160622111110.jpg"],
      
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
        
          <Carousel carouselSlider= {this.travelPhotos} carouselTitle="Travel Photography" carouselButtonTitle="Explore" />   
        
          <Carousel carouselSlider= {this.travelPhotos} carouselTitle="Travel Photography" carouselButtonTitle="Explore" loadGallery={this.loadGallery} gallery="travel" /> 

          <Carousel carouselSlider= {this.travelPhotos} carouselTitle="Travel Photography" carouselButtonTitle="Explore" loadGallery={this.loadGallery} gallery="holiday" /> 

          <Carousel carouselSlider= {this.travelPhotos} carouselTitle="Travel Photography" carouselButtonTitle="Explore" /> 

      </div>

    );
  }

  loadGallery(gallery) {
    this.setState({selectedGallery: gallery})
  }

}

export default App;
