const initialState = {
	people: [],
	planets: [],
};

export default function reducer(state = initialState, { type, payload }) {
	switch (type) {
		case 'SET_PEOPLE': {
			return { ...state, people: [...state.people, ...payload] };
		}
		case 'SET_PLANETS': {
			return { ...state, planets: [...state.planets, ...payload] };
		}
		default:
			return state;
	}
}
