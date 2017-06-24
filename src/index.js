// let's go!
import React from 'react';
import { render } from 'react-dom';
//import { BrowserRouter, Match, Miss } from 'react-router';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import './css/style.css';
import ThemedApp from './components/ThemedApp'
import App from './components/App'
import NotFound from './components/NotFound'

const Root = () => {
	return (
		<BrowserRouter>
			<div>
				<ThemedApp />
			</div>
		</BrowserRouter>
	)
}

render(<Root/>, document.querySelector('#main'));