import React, { Component } from 'react';
import Carousel from './carousel';
import Gallery from './gallery';
import Checkout from './checkout';
import Cart from "./cart";
import '../css/styles.css';

class App extends Component {

  constructor() {
    super();
    this.state = {
      cartPhotos: [],
      cartRendered: false
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
      description: "Lorem ipsum dolor sit amet, erant conceptam accommodare vim an. Duo persius eruditi deserunt eu, et eirmod cetero pri, mel dicit labores pertinax ne. Usu putant platonem torquatos eu, eos malis vocibus apeirian te, per ferri ubique in. Mei eleifend scriptorem at. Cu mel populo accumsan, eius movet epicurei nec ei. Pri virtute detraxit perpetua et, ut decore graecis est."
    },

    {
      name: "Trekking through a Terrestrial Martian Landscape",
      url: "https://farm4.staticflickr.com/3754/32593897024_096c77a8e6_h.jpg",
      alt: "Arches National Park",
      description: "Lorem ipsum dolor sit amet, erant conceptam accommodare vim an. Duo persius eruditi deserunt eu, et eirmod cetero pri, mel dicit labores pertinax ne. Usu putant platonem torquatos eu, eos malis vocibus apeirian te, per ferri ubique in. Mei eleifend scriptorem at. Cu mel populo accumsan, eius movet epicurei nec ei. Pri virtute detraxit perpetua et, ut decore graecis est."
    },

    {
      name: "On the Rails at the Edge of Prairie Country",
      url: "https://farm4.staticflickr.com/3869/33404262086_331e34fe33_h.jpg",
      alt: "Grain Elevator Beside Railroad Tracks in West Kansas",
      description: "Lorem ipsum dolor sit amet, erant conceptam accommodare vim an. Duo persius eruditi deserunt eu, et eirmod cetero pri, mel dicit labores pertinax ne. Usu putant platonem torquatos eu, eos malis vocibus apeirian te, per ferri ubique in. Mei eleifend scriptorem at. Cu mel populo accumsan, eius movet epicurei nec ei. Pri virtute detraxit perpetua et, ut decore graecis est."
    },

    {
      name: "Detritus in a West Jersey Classroom",
      url: "https://farm1.staticflickr.com/596/33395830686_42e36bb25c_h.jpg",
      alt: "Abandonned Classroom inside Lambertville High School",
      description: "Lorem ipsum dolor sit amet, erant conceptam accommodare vim an. Duo persius eruditi deserunt eu, et eirmod cetero pri, mel dicit labores pertinax ne. Usu putant platonem torquatos eu, eos malis vocibus apeirian te, per ferri ubique in. Mei eleifend scriptorem at. Cu mel populo accumsan, eius movet epicurei nec ei. Pri virtute detraxit perpetua et, ut decore graecis est."
    },

    {
      name: "Forgotten in the Western Plains",
      url: "https://farm3.staticflickr.com/2950/32611838324_c64a17be8c_h.jpg",
      alt: "Abandonned house in a West Kansas Hayfield",
      description: "Lorem ipsum dolor sit amet, erant conceptam accommodare vim an. Duo persius eruditi deserunt eu, et eirmod cetero pri, mel dicit labores pertinax ne. Usu putant platonem torquatos eu, eos malis vocibus apeirian te, per ferri ubique in. Mei eleifend scriptorem at. Cu mel populo accumsan, eius movet epicurei nec ei. Pri virtute detraxit perpetua et, ut decore graecis est."
    },

    {
      name: "The Dark March Down Death Row",
      url: "https://farm4.staticflickr.com/3679/32639670253_0fdee7ebf2_h.jpg",
      alt: "The hallways of Eastern State Penitentiary",
      description: "Lorem ipsum dolor sit amet, erant conceptam accommodare vim an. Duo persius eruditi deserunt eu, et eirmod cetero pri, mel dicit labores pertinax ne. Usu putant platonem torquatos eu, eos malis vocibus apeirian te, per ferri ubique in. Mei eleifend scriptorem at. Cu mel populo accumsan, eius movet epicurei nec ei. Pri virtute detraxit perpetua et, ut decore graecis est."
    }

      ],
      
      "Capturing the Human Form": [],
      
      "Moments Frozen in Time": []
    }

    this.loadGallery = this.loadGallery.bind(this)
    this.updateCart = this.updateCart.bind(this)
    this.renderHome = this.renderHome.bind(this)
    this.renderCart = this.renderCart.bind(this)
  }

  render() {

    let renderedComponent;

    if (this.state.selectedGallery) {
      
      renderedComponent = (
        <div>

          <div onClick={this.renderHome} className="homeButton">Home</div>

          <Gallery name={this.state.selectedGallery} photos={this.gallery[this.state.selectedGallery]} updateCart={this.updateCart} />

        </div>
        )

    }

    else if (this.state.cartRendered) {
      renderedComponent = (
          <div>
            <Checkout photos={this.state.cartPhotos} />
          </div>
        )
    }

    else {
      renderedComponent = (

        <span>
          <Carousel carouselSlider= {this.explorerCarousel} carouselTitle="Photography By Michael Nagy" scrollText="Explore" />   
        
          <Carousel carouselSlider= {this.explorerCarousel} carouselTitle="Exploring the World Through Light and Glass" carouselButtonTitle="Explore" loadGallery={this.loadGallery} gallery="Exploring the World Through Light and Glass" /> 

          <Carousel carouselSlider= {this.explorerCarousel} carouselTitle="Capturing the Human Form" carouselButtonTitle="Explore" loadGallery={this.loadGallery} gallery="holiday" /> 

          <Carousel carouselSlider= {this.explorerCarousel} carouselTitle="Moments Frozen in Time" carouselButtonTitle="Explore" /> 

          </span>
        )
    }

    return (

      <div className="App">

          <Cart photos={this.state.cartPhotos} renderCart={this.renderCart} />

          {renderedComponent}

      </div>

    );
  }

  loadGallery(gallery) {
    this.setState({selectedGallery: gallery})
  }

  updateCart(cartPhoto) {
    let updatedCart = this.state.cartPhotos
    updatedCart.push(cartPhoto)
    this.setState({ cartPhotos: updatedCart})
  }

  renderHome() {
    this.setState({ selectedGallery: null })
    this.setState({ cartRendered: false })
  }

  renderCart() {
    this.setState({ cartRendered: true })
  }

}

export default App;
