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
								<div className="removeItem" onClick={handleRemoveItem.bind(this)}>Remove Item</div>
							</div>
					)

			function handleRemoveItem() {
				this.props.removeItem(index)
			}

		}.bind(this))

		var tax = (this.state.total * .065).toFixed(2);
		var total = (this.state.total * 1.065).toFixed(2);

		return(
				<div>
					<div>{photos}</div>
					<div className="checkout__total-container">
						<div className="checkout__total">SubTotal: ${this.state.total}.00</div>
						<div className="checkout__total">KS Sales Tax (6.5%): ${tax}</div>
						<div className="checkout__total">Total: ${total}</div>
					</div>	
				</div>
			)
	}

}

export default Checkout;