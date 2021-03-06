//
// This is the client side entry point for the React app.
//
import './styles/base.css';
import './styles/navbar.css';
import './styles/body-styles.css';
import './styles/footer.css';
import './styles/carousel.css';
import './styles/home.css';

import React from 'react';
import { render } from 'react-dom';
import { routes } from './routes';
import { Router, browserHistory, Route } from 'react-router';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import injectTapEventPlugin from "react-tap-event-plugin";

import Home from './components/home';
import About from './components/about/about.jsx';
import Contact from './components/contact/contact';


import rootReducer from './reducers';

// Add the client app start up code to a function as window.webappStart.
// The webapp's full HTML will check and call it once the js-content
// DOM is created.

window.webappStart = () => {
 	injectTapEventPlugin(); // https://github.com/callemall/material-ui/issues/4670
  const initialState = window.__PRELOADED_STATE__;
  const store = createStore(rootReducer, initialState);
  render(
    <Provider store={store}>
      <Router history={browserHistory}>
      	<Route path='/' component={Home} />
      	<Route path='/about' component={About} />
      	<Route path='/contact' component={Contact} />
      </Router>
    </Provider>,
    document.querySelector('.js-content')
  );
};
