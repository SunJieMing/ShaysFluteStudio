import React, { Component } from 'react';
import styles from '../styles/navbar.css';

export default class ButtonBar extends Component {
	constructor(props) {
		super(props);
	}

	propTypes() {
		return {
			pathname: React.PropTypes.string.isRequired
		};
	}

	render() {
		console.log('current path', this.props.pathname === '/');

		return (
			<div className={styles.buttonBar}>
				<ul className={styles.buttonContainer}>
					<li className={styles.button}>
						<a className={this.props.pathname === '/' ? styles.currentRoute : null} href='/'>HOME</a>
					</li>
					<li className={styles.button}>
						<a className={this.props.pathname === '/about' ? styles.currentRoute : null} href='/about'>ABOUT</a>
					</li>
					<li className={styles.button}>
						<a className={this.props.pathname === '/contact' ? styles.currentRoute : null} href='/contact'>CONTACT</a>
					</li>
				</ul>
			</div>
		);
	}
}