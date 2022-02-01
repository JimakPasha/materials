import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment, addTodos, removeLastTodo } from './redux/toolkitSlice';

const addAsyncTodo = () => {
	return async (dispatch) => {
		setTimeout(() => {
			dispatch(addTodos({ text: 'ASYNC TODO' }));
		}, 2000);
	};
};

function App() {
	const count = useSelector((state) => state.toolkit.count);
	const todoList = useSelector((state) => state.toolkit.todos);
	const dispatch = useDispatch();

	const incrementFn = () => {
		dispatch(increment());
	};

	const decrementFn = () => {
		dispatch(decrement());
	};

	const addTask = () => {
		const newTask = prompt();
		dispatch(addTodos({ text: newTask }));
	};

	const remooveLastTask = () => {
		dispatch(removeLastTodo());
	};

	return (
		<div className='App'>
			<h2>Hi, react-toolkit</h2>
			<div>
				<h4>COUNTER</h4>
				<button onClick={incrementFn}>increment++</button>
				<div>{count}</div>
				<button onClick={decrementFn}>decrement--</button>
			</div>
			<div>
				<h4>TO DO LIST</h4>
				<button onClick={addTask}>ADD TASK</button>
				<button onClick={() => dispatch(addAsyncTodo())}>ADD ASYNC TODO</button>
				<h5>TASKS</h5>
				<ul>
					{todoList.map((i, index) => {
						return (
							<li key={index}>
								{index + 1} {i.text}
							</li>
						);
					})}
				</ul>
				<button onClick={remooveLastTask}>DELETE LAST TASK</button>
			</div>
		</div>
	);
}

export default App;
