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
		return (
			<div className={styles.buttonBar}>
				<ul className={styles.buttonContainer}>
					<li className={styles.button}>
						<a className={this.props.pathname === '/' ? styles.currentRoute : null} href='/'>Home</a>
					</li>
					<li className={styles.button}>
						<a className={this.props.pathname === '/about' ? styles.currentRoute : null} href='/about'>About</a>
					</li>
					<li className={styles.button}>
						<a className={this.props.pathname === '/contact' ? styles.currentRoute : null} href='/contact'>Contact</a>
					</li>
				</ul>
			</div>
		);
	}
}