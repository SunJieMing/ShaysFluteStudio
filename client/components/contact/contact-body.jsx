import React, { Component } from 'react';
import styles from '../../styles/home.css';

export default class Body extends Component {
	render() {
		return (
			<div>
				<ul className={styles.container, styles.contactBody}>
					<h2>Contact Info:</h2>
				</ul>
			</div>
		);
	}
}