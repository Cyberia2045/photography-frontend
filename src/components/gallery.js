import React, { Component } from 'react';
import GalleryStore from './galleryStore';

class Gallery extends Component {

	constructor() {
		super();
		this.state = {
			photoSelected: false
		}

		this.updateCart = this.updateCart.bind(this);

	}

		render() {

			var photos = this.props.photos.map( function(photo, index) {

				return(
							<img onClick={openGalleryStore.bind(this)} className="gallery__image" key={index} value={index} src={photo.url} alt={photo.alt} />
					)
				function openGalleryStore() {
					this.setState({photoSelected: true, selectedPhoto: photo})
				}

			}.bind(this))

		if (this.state.photoSelected) {
			return (
					<div>
						<GalleryStore photo={this.state.selectedPhoto} updateCart={this.updateCart} />
					</div>
				)
		}	

		return(
				<div>
					<h1 className="gallery__title">{this.props.name}</h1>
					<div className="gallery">	
						<div>{photos}</div>
						<div className="gallery__store"></div>
					</div>	
				</div>	
			)

	}

	updateCart(cartPhoto) {
		this.props.updateCart(cartPhoto)
	}

}

export default Gallery;