import React from 'react';
import styled, { css } from 'styled-components';

const StyledButton = styled.button`
	width: 200px;
	height: 50px;
	font-size: 24px;
	padding: 0;
	margin: 0;
	&:focus {
		outline: none;
	}

	${(props) =>
		props.primary &&
		css`
        color: ${(props) => props.color || 'white'}
        background: ${(props) => props.background || 'white'}
    `}

	${(props) =>
		props.outlined &&
		css`
        color: ${(props) => props.color || 'white'}
        background: ${(props) => props.background || 'white'}
    `}
`;

const LargeButton = styled(StyledButton)`
	font-size: 52px;
`;

function Button(props) {
	return <StyledButton {...props} />;
}

export default Button;
