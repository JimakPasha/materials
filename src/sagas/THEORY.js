import { takeEvery, takeLatest, takeLeading } from 'redux-saga/effects';

const wait = (t) => {
	return new Promise((resolve) => {
		setTimeout(resolve, t);
	});
};

export function* workerSaga() {
	yield wait(1000);
	console.log('asdasd');
}

export function* watchClickSaga() {
	yield takeLeading('CLICK', workerSaga);
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

// эффект put, указывает на то, чтобы отправить действие в store, тоже самое что и сделать dispatch

// call. есть проблема в том, что можно написать так генераторы, что потом это будет невозможно тестировать, не сможем замокать данные. и для этого нам нужен call. например call(getPeople); если функции getPeople нужны какие-то параметры то вторым аргументом передаём например call(getPeople, 1); в call мы можем передать и асинхронную функцию и генератор.

// take и call блокирующие элементы

// fork указывает нашей саге выполнить не блокирующий вызов функции
