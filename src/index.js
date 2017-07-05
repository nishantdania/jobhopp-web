import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import { BrowserRouter, Route, Switch} from 'react-router-dom'
import App from './App';
import Manager from './components/Manager';
import registerServiceWorker from './registerServiceWorker';
import configureStore from './configureStore';
import './index.css';

const store = configureStore();

render(
		<Provider store={store}>
			<BrowserRouter>
				<Switch>
					<Route exact path="/" component={App} />
					<Route path="/manager" component={Manager} />
				</Switch>
			</BrowserRouter>
	</Provider>, 
	document.getElementById('root')
);
registerServiceWorker();
