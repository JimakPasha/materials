import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	count: 0,
	todos: [{ text: 'Это первая задача' }, { text: 'Это вторая задача' }],
};

const toolkitSlice = createSlice({
	name: 'toolkit',
	initialState,
	reducers: {
		increment(state) {
			state.count = state.count + 1;
		},
		decrement(state) {
			state.count = state.count - 1;
		},
		addTodos(state, action) {
			state.todos.push(action.payload);
		},
		removeLastTodo(state) {
			state.todos.pop();
		},
	},
});

export default toolkitSlice.reducer;
export const { increment, decrement, addTodos, removeLastTodo } = toolkitSlice.actions;
