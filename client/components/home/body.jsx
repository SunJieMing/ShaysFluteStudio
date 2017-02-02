import React, { Component } from 'react';
import BodyCard from './body-card';
import styles from '../../styles/home.css';

export default class Body extends Component {
	render() {
		return (
			<div>
				<ul className={styles.container}>
					<BodyCard />
					<BodyCard />
					<BodyCard />
				</ul>
			</div>
		);
	}
}