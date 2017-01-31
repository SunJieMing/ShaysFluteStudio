/* eslint-disable no-unused-vars */
import React from 'react';
import { Route } from 'react-router';
/* eslint-enable no-unused-vars */

import Home from './components/home';
import About from './components/about';
import Contact from './components/contact';

export const routes = (
  <Route path='/' component={Home}>
    <Route path='about' component={About} />
  	<Route path='contact' component={Contact} />
  </Route>
);
