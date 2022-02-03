import { DECREMENT, INCREMENT, GET_USERS, ERROR_USERS, DELETE_USERS } from './types';
import { getAllUsers } from '../api/users-api';

export function decrement() {
	return {
		type: DECREMENT,
	};
}

export function increment() {
	return {
		type: INCREMENT,
	};
}

export const getUsers = () => {
	return (dispatch) => {
		getAllUsers()
			.then((users) =>
				dispatch({
					type: GET_USERS,
					payload: users,
				})
			)
			.catch((error) => {
				dispatch({
					type: ERROR_USERS,
					payload: error,
				});
			});
	};
};

export function removeUsers() {
	return {
		type: DELETE_USERS,
	};
}
