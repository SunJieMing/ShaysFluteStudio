import React, { Component } from 'react';
import Greeting from './greeting';
import styles from '../styles/carousel.css';
import imageUrl from '../images/fall.jpg';
//const imageUrl = 'https://images-na.ssl-images-amazon.com/images/G/01/poppin/gateway/Dec/121916_GW_H1_generic3_desktop_2x._CB523852253_.jpg';

export default class Carousel extends Component {
	constructor(props) {
		super(props);
	}

	propTypes() {
		return {
			onImageLoad: React.PropTypes.function
		};
	}

	render() {
		return (
			<div className={styles.container}>
				<img 
					className={styles.carousel} 
					src={imageUrl}
					onLoad={this.props.onImageLoad}
					/>
				<Greeting />
			</div>
		);
	}
}