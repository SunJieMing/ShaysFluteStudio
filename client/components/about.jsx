import React, { Component } from 'react';
import Overlay from './overlay';
import Navbar from './navbar';
import ButtonBar from './button-bar';
import Carousel from './carousel';
import Footer from './footer';
import styles from '../styles/home.css';
import copy from '../copy/about-copy';

export default class About extends Component {
	constructor(props) {
	  super(props);
	  this.state = {
	    showOverlay: true
	  };

	  this.onImageLoad = this.onImageLoad.bind(this);
	}

	onImageLoad() {
	  this.setState({ showOverlay: false });
	}

	render() {
		return (
			<div className={styles.mainColumn}>
				{ this.state.showOverlay ? <Overlay /> : null }
				<Navbar />
				<ButtonBar pathname={this.props.location.pathname} />
				<Carousel 
					onImageLoad={this.onImageLoad}
					header={copy.aboutHeader}
					mainCopy={copy.aboutCopy}
					/>
				<Footer />
			</div>
		);
	}
}