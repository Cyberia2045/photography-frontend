import React, { Component } from 'react';

class Gallery extends Component {

constructor() {
	super();
	this.openGalleryStore = this.openGalleryStore.bind(this)
}

	render() {

		var photos = this.props.photos.map( function(photo, index) {

			return(
					<img onClick={this.openGalleryStore} className="gallery__image" key={index} value={photo} src={photo} />
				)
		}.bind(this))

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

	openGalleryStore() {
		console.log("Hello World")
	}

}

export default Gallery;