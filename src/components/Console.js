import React from 'react';
import styled from 'styled-components';

const StyledConsole = styled.textarea`
	width: 100%;
	height: 70vh;
	background: black;
	border: none;
	font-size: 24px;
	resize: none;
	color: ${({ color }) => color || 'white'};
	&:focus {
		outline: none;
	}
`;

function Console(props) {
	return <StyledConsole {...props} />;
}

export default Console;
