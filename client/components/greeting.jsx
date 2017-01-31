import React, { Component } from 'react';
import styles from '../styles/carousel.css';

export default class Greeting extends Component {
	constructor(props) {
		super(props);
	}

	propTypes() {
		return {
			header: React.PropTypes.string.isRequired,
			mainCopy: React.PropTypes.string.isRequired
		}
	}
	
	render() {
		return (
			<div className={styles.greeting}>
				<h2 className={styles.welcomeHeader}>{this.props.header}</h2>
				<p>{this.props.mainCopy}</p>
			</div>
		);
	}
}

