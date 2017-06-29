import React, { Component } from 'react';

class Checkout extends Component {

	constructor(props) {
		super(props);
		this.state = {
			
		}
	}

	render() {
		let photos = this.props.photos.map (function(photo, index) {
				
				return (
					<div className="checkout" key={index} value={photo} >
						<div className="checkout__title">{photo.photo.name}</div>
						<img className="checkout__photo" src={photo.photo.url} />
						<div className="checkout__price">{photo.price}</div>
					</div>
					)

		})

		return(
				<div>
					<div>{photos}</div>
				</div>
			)
	}

}

export default Checkout;