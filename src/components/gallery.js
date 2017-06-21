import React, { Component } from 'react';

class Gallery extends Component {

	constructor(props) {
		super(props)
		this.state;

	}

	render() {

		var photoStyling = {
			width: "100vw",
			maxWidth: "300px",
			height: "100vw",
			maxHeight: "300px",
			borderRadius: "10px",
			margin: "0 auto",
			margin: "10px"
		}

		var photos = this.props.photos.map( function(photo, index) {

			return(
						<img key={index} value={photo}style={photoStyling} src={photo} />
				)

		})

		var photoContainer = {
			width: "100%",
			display: "flex",
			justifyContent: "space-around",
			flexWrap: "wrap"
		}

		return(
				<div>
					<div>{this.props.name}</div>
					<div style={photoContainer}>	
						<div>{photos}</div>
					</div>	
				</div>	
			)

	}

}

export default Gallery;