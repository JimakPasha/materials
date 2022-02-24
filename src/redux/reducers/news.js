import { SET_LATEST_NEWS } from '../constants';

const initialState = {
	latestNews: [],
};

const news = (state = initialState, action) => {
	switch (action.type) {
		case SET_LATEST_NEWS:
			return { ...state, latestNews: [...state.latestNews, action.payload] };
		default:
			return state;
	}
};

export default news;
