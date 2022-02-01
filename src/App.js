import React from 'react';
import styled from 'styled-components';
import Title from './components/Title';
import Flex from './components/Flex';
import Console from './components/Console';
import Button from './components/Button';

const AppWrapper = styled.div`
	width: 100%;
	min-height: 100vh;
	padding: 2rem;
	background: black;
`;

function App() {
	return (
		<AppWrapper>
			<Flex justify='center'>
				<Title color='green'>This console is made with styled components</Title>
			</Flex>
			<Flex align='center' direction='column'>
				<Console color='green' />
				<Button outlined color='green'>
					Отправить
				</Button>
				<Button primary>Отправить2</Button>
			</Flex>
		</AppWrapper>
	);
}

export default App;
