import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement, getLatestNews } from './redux/actions/actionCreator';

const App = () => {
	const dispatch = useDispatch();
	const count = useSelector((state) => state.counter.count);

	const handleIncrement = () => {
		dispatch(increment());
	};

	const handleDecrement = () => {
		dispatch(decrement());
	};

	const handleNews = () => {
		dispatch(getLatestNews());
	};

	return (
		<div>
			<h4>{count}</h4>
			<button onClick={handleIncrement}>PLUS</button>
			<button onClick={handleDecrement}>MINUS</button>
			<button onClick={handleNews}>Get News</button>
		</div>
	);
};

export default App;
