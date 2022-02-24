import { useDispatch, useSelector } from 'react-redux';

const App = () => {
	const store = useSelector((store) => store);
	const dispatch = useDispatch();

	console.log(store);

	return (
		<div>
			App
			<button onClick={() => dispatch({ type: 'LOAD_DATA' })}>click me</button>
		</div>
	);
};

export default App;
