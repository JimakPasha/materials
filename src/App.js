import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { decrement, increment, getUsers, removeUsers } from './redux/actions';

function App() {
	const dispatch = useDispatch();
	const count = useSelector((state) => state.count);
	const users = useSelector((state) => state.users);
	const error = useSelector((state) => state.error);

	const handelIncrementClick = () => {
		dispatch(increment());
	};

	const handelDecrementClick = () => {
		dispatch(decrement());
	};

	const handleGetUsersClick = () => {
		dispatch(getUsers());
	};

	const handleRemoveUsersClick = () => {
		dispatch(removeUsers());
	};

	return (
		<div>
			<h4>{count}</h4>
			<button onClick={handelIncrementClick}>+</button>
			<button onClick={handelDecrementClick}>-</button>
			<button onClick={handleGetUsersClick}>get users list</button>
			<ul>
				{users.map(({ id, name, age, isRegistration }) => {
					return (
						<li key={id}>
							<div>{name}</div>
							<div>{age} y.o.</div>
							{isRegistration && <span>reg.</span>}
						</li>
					);
				})}
				{error && <div>Error: {error}</div>}
			</ul>
			<button onClick={handleRemoveUsersClick}>close users</button>
		</div>
	);
}

export default App;
