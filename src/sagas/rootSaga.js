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

// это альтернатива, она работает с помощью take и цикла, но с takeEvery более лаконично
// export function* watchClickSaga() {
// 	while (true) {
// 		yield take('CLICK');
// 		yield workerSaga();
// 	}
// }

// ещё есть takeLatest - он вызовет только последнюю функцию, которую мы передали (автомастически отменяет предыдущую задачу саги, запущенную ранее, если она всё ещё выполняется). Т.е. если у нас операция с задержкой, мы будем кликать 5 раз и оно выполнит только последний клик, т.к. первый клик будет произведён, но не будет успевать предыдущий результат прилетать.

// takeLeading работает наоборот, идёт первый клик, и пока он не выполнится, остальные клики не будут учитываться
