import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';
import styles from '../styles/footer.css';

export default class Footer extends Component {
	render() {
		return (
			<div className={styles.footer}>
				<a className={styles.iconBackground} href='https://www.facebook.com/shaynelsonflute/?fref=ts'>
					<FontAwesome name='facebook' className={styles.icon} />
				</a>
			</div>
		);
	}
}