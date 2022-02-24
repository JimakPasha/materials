import { take } from '@redux-saga/core/effects';
import { INCREMENT, DECREMENT } from '../constants';

export function* workerSaga() {}

export function* watchClickSaga() {
	yield take(INCREMENT);
	console.log('req 1');
	yield take(DECREMENT);
	console.log('req 2');
}

export default function* rootSaga() {
	yield watchClickSaga();
}
