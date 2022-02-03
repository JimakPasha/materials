import { DECREMENT, INCREMENT, GET_USERS, ERROR_USERS, DELETE_USERS } from './types';

const initialState = {
	count: 0,
	users: [],
	error: null,
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case INCREMENT:
			return { ...state, count: state.count + 1 };
		case DECREMENT:
			return { ...state, count: state.count - 1 };
		case GET_USERS:
			return { ...state, users: action.payload, error: null };
		case ERROR_USERS:
			return { ...state, error: action.payload };
		case DELETE_USERS:
			return { ...state, users: [], error: null };
		default:
			return state;
	}
};

export default reducer;
