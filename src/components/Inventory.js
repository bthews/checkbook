import React from 'react';
import AddFishForm from './AddFishForm';

class Inventory extends React.Component {
	constructor() {
		super();
		
		this.renderInventory 	= this.renderInventory.bind(this);
		this.handleChange 		= this.handleChange.bind(this);
	}

	handleChange(e, key) {
		const fish = this.props.fishes[key];
		const updatedFish = {
			...fish,
			[e.target.name]: e.target.value
		}
		this.props.updateFish(key, updatedFish);
	}

	renderInventory(key) {
		const fish = this.props.fishes[key];
		return (
			<div className="fish-edit" key={key}>
				<input value={fish.name} name="name" type="text" placeholder="Fish Name" onChange={(e) => this.handleChange(e, key)} />
				<input value={fish.price} name="price" type="text" placeholder="Fish Price" onChange={(e) => this.handleChange(e, key)} />
				<select value={fish.status} name="status" onChange={(e) => this.handleChange(e, key)} >
					<option value="available">Fresh!</option>
					<option value="unavailable">Sold Out!</option>
				</select>
				<textarea value={fish.desc} name="desc"  type="text" placeholder="Fish Description" onChange={(e) => this.handleChange(e, key)} ></textarea>
				<input value={fish.image} name="image" type="text" placeholder="Fish Image" onChange={(e) => this.handleChange(e, key)} />
				<button onClick={() => this.props.removeFish(key)}>Remove Item</button>
			</div>
		)
	}

	render() {
		return (
			<div>
				<h2>Inventory</h2>
				{Object.keys(this.props.fishes).map(this.renderInventory)}
				<AddFishForm addFish={this.props.addFish} />
				<button onClick={this.props.loadSamples}>Load Sample Fishes</button>
				<button onClick={this.props.increasePricer}>Increase Pricer</button>
			</div>
		)
	}
}

Inventory.propTypes = {
	fishes: React.PropTypes.object.isRequired,
	addFish: React.PropTypes.func.isRequired,
	updateFish: React.PropTypes.func.isRequired,
	removeFish: React.PropTypes.func.isRequired,
	loadSamples: React.PropTypes.func.isRequired
};

export default Inventory;