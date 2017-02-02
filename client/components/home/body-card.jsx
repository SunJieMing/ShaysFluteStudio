import React from 'react';
import styles from '../../styles/body-styles.css';

const BodyCard = () => (
	<li className={styles.bodyCard}>
		<h2 className={styles.bodyCardHeader}>Test Header</h2>
		<img className={styles.bodyCardImage} src='https://images.pexels.com/photos/164811/pexels-photo-164811.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb'/>
		<p className={styles.bodyCardCopy}>Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test </p>
	</li>
);

export default BodyCard;