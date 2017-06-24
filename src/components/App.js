import React from 'react';
import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';
import sampleFishes from '../sample-fishes';
import Fish from './Fish';
import base from '../base';
//var database = require('firebase/database');

class App extends React.Component {
	constructor() {
		super();
		this.state = {
			fishes: {},
			order: {},
			pricer: 1000
		};
		this.addFish = this.addFish.bind(this);
		this.updateFish = this.updateFish.bind(this);
		this.removeFish = this.removeFish.bind(this);
		this.loadSamples = this.loadSamples.bind(this);
		this.addToOrder = this.addToOrder.bind(this);
		this.removeFromOrder = this.removeFromOrder.bind(this);
		this.syncWithFirebase = this.syncWithFirebase.bind(this);
		this.increasePricer = this.increasePricer.bind(this);
	}

	syncWithFirebase() {
		this.ref = base.syncState(`${this.props.match.params.storeId}/fishes`,
			{
				context: this,
				state: 'fishes',
				queries: {
			    //orderByChild: 'price',
			    //endAt: this.state.pricer
			    //orderByChild: 'price',
			    startAt: 1466171497190,
			    endAt: 9999999999999
			  }
			});
	}

	componentWillMount() {
		// this runs right before the <App> is rendered
		this.ref = base.syncState(`${this.props.match.params.storeId}/fishes`,
			{
				context: this,
				state: 'fishes',
				queries: {
			    //orderByChild: 'price',
			    //startAt: 1466171497190,
			    //endAt: 9999999999999
			  }
			});

		//check if there is any order in localStorage
		const localStorageRef = localStorage.getItem(`order-${this.props.match.params.storeId}`);
		if(localStorageRef) {
			//update our app component's order state
			this.setState({
				order: JSON.parse(localStorageRef)
			});
		}
	}

	componentWillUnmount() {
		base.removeBinding(this.ref);
	}

	componentWillUpdate(nextProps, nextState) {
		localStorage.setItem(`order-${this.props.match.params.storeId}`,
			JSON.stringify(nextState.order));
	}

	loadSamples() {
		// console.log(sampleFishes);
		// let immediatelyAvailableReference = base.push(`${this.props.match.params.storeId}/fishes`, {
	 //    data: {name: sampleFishes['fish1'].name, desc: sampleFishes['fish1'].desc, price: sampleFishes['fish1'].price},
	 //    ".priority": 0 - Date.now(),
	 //    then(err){
	 //      if(!err){
	 //        //Router.transitionTo('dashboard');
	 //      }
	 //    }
	 //  });
		this.setState({
			fishes: sampleFishes
		});
	}

	increasePricer() {
		let pricer = this.state.pricer;
		pricer += 1000
		//parseInt(this.state.pricer)
		this.setState({ pricer: pricer });
		this.syncWithFirebase();
	}

	addFish(fish) {
		const fishes = {...this.state.fishes};
		const timestamp = Date.now();
		fishes[`fish-${timestamp}`] = fish;
		this.setState({ fishes: fishes });
	}

	updateFish(key, updatedFish) {
		const fishes = {...this.state.fishes};
		fishes[key] = updatedFish;
		this.setState({ fishes: fishes });
	}

	removeFish(key) {
		const fishes = {...this.state.fishes};
		fishes[key] = null;
		this.setState({ fishes: fishes });
	}

	addToOrder(key) {
		const order = {...this.state.order};
		order[key] = order[key] + 1 || 1;
		this.setState({ order });
	}

	removeFromOrder(key) {
		const order = {...this.state.order};
		delete order[key];
		this.setState({ order });
	}

	render() {
		return (
			<div className="catch-of-the-day">
				<div className="menu">
					<Header tagline="Fresh Seafood Market" />
					<ul className="list-of-fishes">
						{Object
							.keys(this.state.fishes)
							.map(key => <Fish key={key} index={key} details={this.state.fishes[key]} addToOrder={this.addToOrder}/>)}
					</ul>
				</div>
				<Order 
					fishes={this.state.fishes} 
					order={this.state.order}
					removeFromOrder={this.removeFromOrder}
					params={this.props.params} 
				/>
				<Inventory 
					addFish={this.addFish}
					removeFish={this.removeFish}
					updateFish={this.updateFish}
					loadSamples={this.loadSamples} 
					fishes={this.state.fishes}
					increasePricer={this.increasePricer}
				/>
			</div>
		)
	}
}

App.propTypes = {
	params: React.PropTypes.object,
	pricer: React.PropTypes.string
};

export default App;