import React, { Component } from 'react';
import Overlay from './overlay';
import Navbar from './navbar';
import ButtonBar from './button-bar';
import Carousel from './carousel';
import styles from '../styles/home.css';
import copy from '../copy/about-copy';

export default class About extends Component {
	constructor(props) {
	  super(props);
	}

	render() {
		return (
			<div className={styles.mainColumn}>
				<Navbar />
				<ButtonBar pathname={this.props.location.pathname} />
			</div>
		);
	}
}