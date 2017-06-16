import React, { Component } from 'react';

class App extends Component {

  constructor() {
    super();
    this.state = {
      travelPhotos: [
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
    this.GalleryContainer = {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "space-around"
    }
    this.GalleryStyle = {
      width: "30%",
      borderRadius: "10px"
    }
  }

  render() {

    let travelGallery = this.state.travelPhotos.map(function(travelPhoto, index) {
        return(
            <div style={this.GalleryStyle}><img style={{width: "100%"}} src={travelPhoto.url} /></div>
          )
    }.bind(this))

    return (
      <div className="App">
        <div style={this.GalleryContainer}>{travelGallery}</div>
      </div>
    );
  }
}

export default App;
