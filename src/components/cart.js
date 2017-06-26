import React, { Component } from 'react';

class Cart extends Component {

	constructor(props) {
		super(props)
		this.state = {
			photos: props.photos
		}
	}

	render() {

		return(
			<div>
				<div className="shopping-cart">
					<div className="item-total">{this.state.photos.length}</div>
				</div>
			</div>
			)

	}

}

export default Cart;