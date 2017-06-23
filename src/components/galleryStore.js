import React, { Component } from 'react';

class GalleryStore extends Component {

	constructor() {
		super();
		this.state = {
			photos: props.photos
			printCount: props.printCount
		}

		this.nextPrint = this.nextPrint.bind(this);
		this.previousPrint = this.previousPrint.bind(this);

	}

	render() {
		return(
				<img src={this.state.photos[this.state.printCount]} />
				<RightArrow nextPrint={this.nextPrint} />
				<LeftArrow previousPrint={this.previousPrint} />
			)
	}

	nextPrint() {
		if (this.state.printCount === this.state.photos.length -1) {
				this.setState({ printCount: 0 })
		}
		else {
				this.setState({ printCount: this.state.printCount +1 })
		}
	}

	previousPrint() {
		if (this.state.printCount === 0) {
			this.setState({ printCount: this.state.photos.length -1 })
		}
		else {
			this.setState({ printCount: this.state.printCount -1 })
		}
	}

}

export default GalleryStore;