// Необработанная ошибка в Promise (Необработанная ошибка в Promise не влияет на работу программы, т.к. Promise не выпускает ошибку за свои пределы)

Promise.resolve().then(() => {
	throw new Error('Api Error');
});
setTimeout(() => {
	console.log('setTimeout');
}, 1000);

//------------------------------------------------------------------------------------------------------------------------------------

const p = new Promise((res, rej) => {
	asdasdasd;
}).catch(() => console.log('error!')); // 'error!'

const p = new Promise((resolve) => {
	reject();
}).catch(() => console.log('error!')); // 'error!'

const p = new Promise((resolve) => {
	reject('aaa'); // reject is not defined
}).catch((error) => console.log(error));

const p = new Promise((resolve) => {
	asdasd('aaa'); // asdasd is not defined
}).catch((error) => console.log(error));

//------------------------------------------------------------------------------------------------------------------------------------

const p = new Promise((res, rej) => {
	res('data');
})
	.then((data) => {
		console.log(data);
		return data;
	})
	.then((data) => console.log(data));
//------------------------------------------------------------------------------------------------------------------------------------

const p = new Promise((res, rej) => {
	rej('data');
})
	.catch((data) => {
		console.log(data);
		return data;
	})
	.then((data) => console.log(data));
//------------------------------------------------------------------------------------------------------------------------------------

const p = new Promise((res, rej) => {
	res('data');
})
	.then((data) => {
		console.log(data);
		return data;
	})
	.finally((data) => {
		console.log(data); // файнали не может получить данные
		return 222; // не передаёт дальше
	})
	.then((data) => console.log(data)); // сюда данные приходят не из файнали, а из прошлого then
//------------------------------------------------------------------------------------------------------------------------------------

// тоже самое но с catch
const p = new Promise((res, rej) => {
	rej('data');
})
	.catch((data) => {
		console.log(data);
		return data;
	})
	.finally((data) => {
		console.log(data);
		return 222;
	})
	.then((data) => console.log(data));
//------------------------------------------------------------------------------------------------------------------------------------

Promise.resolve()
	.then(() => console.log(1))
	.then(() => console.log(2));

Promise.resolve()
	.then(() => console.log(11))
	.then(() => console.log(12));

// 1 11 2 12
//------------------------------------------------------------------------------------------------------------------------------------
