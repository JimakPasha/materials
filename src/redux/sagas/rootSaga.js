import { takeEvery, put, call } from 'redux-saga/effects';

async function swapiGet(pattern) {
	const request = await fetch(`https://swapi.dev/api/${pattern}`);
	const data = await request.json();
	return data;
}

export function* workerSaga() {
	const people = yield call(swapiGet, 'people');
	console.log('people', people);

	const planets = yield call(swapiGet, 'planets');
	console.log('planets', planets);

	yield put({ type: 'SET_PEOPLE', payload: people.results });
	yield put({ type: 'SET_PLANETS', payload: planets.results });
}

export function* watchClickSaga() {
	yield takeEvery('LOAD_DATA', workerSaga);
}

export default function* rootSaga() {
	yield watchClickSaga();
}
