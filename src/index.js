// let's go!
import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter} from 'react-router-dom'
import './css/style.css';
import ThemedApp from './components/ThemedApp'

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