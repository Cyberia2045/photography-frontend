import React, { Component } from 'react';

class GalleryStore extends Component {

	constructor(props) {
		super(props);
		this.state = {
			photo: props.photo
		}
	}

	render() {
		return(
			<div className="galleryStore">
				<div className="image-size-panel">
					<div className="image-size-panel__item">11x14</div>
					<div className="image-size-panel__item">11x17</div>
					<div className="image-size-panel__item">16x20</div>
					<div className="image-size-panel__item">18x24</div>
				</div>
				<img className="galleryStore__image" src={this.state.photo.url} alt={this.state.photo.alt} />
				<h2 className="galleryStore__title">{this.state.photo.name}</h2>
				<p className="galleryStore__description">{this.state.photo.description}</p>
			</div>
			)
	}
}

export default GalleryStore;