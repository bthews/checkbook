import React from 'react';

class AddFishForm extends React.Component {
	constructor() {
		super();
		this.createFish = this.createFish.bind(this);
	}

	createFish(event) {
		event.preventDefault();
		const fish = {
			name: this.fishName.value,
			price: parseInt(this.fishPrice.value),
			status: this.fishStatus.value,
			description: this.fishDescription.value,
			image: this.fishImage.value,
		}
		this.props.addFish(fish);
		this.fishForm.reset();
	}

	render() {
		return (
			<form ref={(input) => {this.fishForm = input}} className="fish-edit" onSubmit={this.createFish}>
				<input ref={(input) => {this.fishName = input}} type="text" placeholder="Fish Name" />
				<input ref={(input) => {this.fishPrice = input}} type="text" placeholder="Fish Price" />
				<select ref={(input) => {this.fishStatus = input}}>
					<option value="available">Fresh!</option>
					<option value="unavailable">Sold Out!</option>
				</select>
				<textarea ref={(input) => {this.fishDescription = input}} type="text" placeholder="Fish Description"></textarea>
				<input ref={(input) => {this.fishImage = input}} type="text" placeholder="Fish Image" />
				<button type="submit">+ Add Item</button>
			</form>
		)
	}
}

AddFishForm.propTypes = {
	addFish: React.PropTypes.func.isRequired
};


export default AddFishForm;