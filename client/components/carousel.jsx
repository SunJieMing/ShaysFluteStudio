import React from 'react';
import styles from '../styles/carousel.css';

const imageUrl = 'https://images-na.ssl-images-amazon.com/images/G/01/poppin/gateway/Dec/121916_GW_H1_generic3_desktop_2x._CB523852253_.jpg';

const Carousel = () => (
	<div>
		<img className={styles.carousel} src={imageUrl} />
	</div>
);

export default Carousel;