import React, { Component } from 'react';

class Checkout extends Component {

	constructor(props) {
		super(props);
		this.state = {
			total: 0.00
		}

	}

	render() {

		var photos = this.props.photos.map (function(photo, index) {
				this.state.total += parseFloat(photo.price)
				return (
							<div className="checkout" key={index} value={photo} >
								<div className="checkout__title">{photo.photo.name}</div>
								<img className="checkout__photo" src={photo.photo.url} />
								<div className="checkout__price">{photo.price}</div>
								<div onClick={handleRemoveItem.bind(this)}>Remove Item</div>
							</div>
					)

			function handleRemoveItem() {
				this.props.removeItem(index)
			}

		}.bind(this))

		return(
				<div>
					<div>{photos}</div>
					<div>Total: {this.state.total}</div>
				</div>
			)
	}

}

export default Checkout;