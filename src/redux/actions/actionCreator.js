import { INCREMENT, DECREMENT, GET_LATEST_NEWS, SET_LATEST_NEWS } from '../constants';

export const increment = () => ({
	type: INCREMENT,
});

export const decrement = () => ({
	type: DECREMENT,
});

export const getLatestNews = () => ({
	type: GET_LATEST_NEWS,
});

export const setLatestNews = (data) => ({
	type: SET_LATEST_NEWS,
	payload: data,
});
