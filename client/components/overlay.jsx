import React from 'react';

const styles = {
	backgroundColor: '#f0f0f0',
	position: 'absolute',
	top: '0px',
	left: '0px',
	width: '100%',
	height: '100%',
	zIndex: 2000,
	position: 'fixed'
};

const Overlay = () => (
	<div className="loadOverlay" style={styles}></div>
);

export default Overlay;