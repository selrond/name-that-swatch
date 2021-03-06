import React, { Component } from 'react';
import styled from 'styled-components';

const InfoLayout = styled.div`
	padding: 2.5em;
	background: #fff;
`;

const ColorName = styled.div`
	width: 100%;
	margin-bottom: 1.25em;

	& > * {
		font-size: 2em;
		font-family: 'Raleway';
		font-weight: 900;
		text-transform: uppercase;
		margin: 0;
		padding: 0;
	}
`;

const ColorCode = styled.div`
	font-size: 1.5em;
	font-family: "Roboto Mono";
	text-transform: uppercase;
`;



class ColorInfo extends Component {
	render() {
		return (
			<InfoLayout>
				<ColorName>
					<h2>{this.props.colorName}</h2>
				</ColorName>
				<ColorCode>
					<span>{this.props.colorCode}</span>
				</ColorCode>
			</InfoLayout>
		);
	}
}

export default ColorInfo;
