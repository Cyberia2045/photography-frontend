import React, { Component } from 'react';

class Gallery extends Component {

	render() {

		var photos = this.props.photos.map( function(photo, index) {

			return(
					<img className="gallery__image" key={index} value={photo} src={photo} />
				)

		})

		return(
				<div>
					<h1 className="gallery__title">{this.props.name}</h1>
					<div className="gallery">	
						<div>{photos}</div>
					</div>	
				</div>	
			)

	}

}

export default Gallery;