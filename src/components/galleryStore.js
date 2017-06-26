import React, { Component } from 'react';

class GalleryStore extends Component {

	constructor(props) {
		super(props);
		this.state = {
			photo: props.photo,
			imageClass: "poster-image",
			price: "55.00",
			total: this.total
		}

		this.smallImage = this.smallImage.bind(this)
		this.mediumImage = this.mediumImage.bind(this)
		this.largeImage = this.largeImage.bind(this)
		this.posterImage = this.posterImage.bind(this)
		this.addToCart = this.addToCart.bind(this)
		this.homeButton = this.homeButton.bind(this)
		this.total = this.total.bind(this)

	}

	render() {

		return(

			<div>

					<div className="galleryStore">

						<div className="image-size-panel">
							<div onClick={this.smallImage} className="image-size-panel__item">11x14</div>
							<div onClick={this.mediumImage} className="image-size-panel__item">11x17</div>
							<div onClick={this.largeImage} className="image-size-panel__item">16x20</div>
							<div onClick={this.posterImage} className="image-size-panel__item">18x24</div>
						</div>

						<img className={this.state.imageClass} src={this.state.photo.url} alt={this.state.photo.alt} />
						<p className="image-cost">${this.state.price}</p>
						<h2 className="galleryStore__title">{this.state.photo.name}</h2>
						<p className="galleryStore__description">{this.state.photo.description}</p>
						<div onClick={this.addToCart} className="purchase-button">Add to the Collection</div>
					</div>

			<div onClick={this.homeButton} className="homeButton">Home</div>
			
			</div>
			)
	}

	posterImage() {
		this.setState({ imageClass: "poster-image",
		 price: "55.00" })
	}

	largeImage() {
		this.setState({ imageClass: "large-image",
		 price: "50.00" })
	}

	mediumImage() {
		this.setState({ imageClass: "medium-image",
		 price: "45.00" })
	}

	smallImage() {
		this.setState({ imageClass: "small-image",
		 price: "40.00" })
	}

	addToCart() {
		console.log(this.state.price)
		console.log(this.state.photo.url)
	}

	total() {
		this.setState({  })
	}

	homeButton() {

	}

}

export default GalleryStore;