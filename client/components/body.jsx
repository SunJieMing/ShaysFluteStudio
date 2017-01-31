import React, { Component } from 'react';
import BodyCard from './body-card';

export default class Body extends Component {
	render() {
		return (
			<div>
				<ul>
					<BodyCard />
					<BodyCard />
					<BodyCard />
				</ul>
			</div>
		);
	}
}