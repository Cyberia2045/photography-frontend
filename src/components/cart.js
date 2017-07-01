import React, { Component } from 'react';

class Cart extends Component {

	constructor(props) {
		super(props)
		this.state = {
			photos: props.photos			
		}

		this.handleRenderCart = this.handleRenderCart.bind(this)

	}

	render() {

			return (
					<div onClick={this.handleRenderCart} className="shopping-cart">
						<div className="item-total">{this.state.photos.length}</div>
					</div>
				)
		}

	handleRenderCart() {
		this.props.renderCart(this.props.photos)
	}

}

export default Cart;