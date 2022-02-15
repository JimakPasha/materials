'use strict';

// ПРОМИСЫ
// Промисы - обещания. Эта технология позволяет хорошо работать с асинхронным кодом. (Человек пошёл в магаз, мы не знаем через сколько он вернётся, но мы его не ждём, а продолжаем работаем - это асинхронно, а когда ждём это синхронный код).
// Очень часто в коде мы иcпользуем условие, если мы что-то сделали, то что-то продолжает работать и что-то происходит и так по цепочке. Если мы сделали что-то, то мы обещаем выполнить следующее действие.
// по событию мы используем колбэки, однако часто мы можем встретить много действий, которые идут один за другим, после выполнения предыдущего.
// например ещё мы можем запрашивать что-то у сервера, мы получаем данные, потом выполняем какие-то действия и снова делаем запрос на сервер, и снова что-то получаем - мы можем написать куча нечитабельного кода (коллбэк-хэлл).

console.log('Запрос данных...');

setTimeout(() => {
	console.log('Подготовка данных...');

	const product = {
		name: 'TV',
		price: 2000,
	};

	setTimeout(() => {
		product.status = 'order';
		console.log(product);
	}, 2000);
}, 2000); // представим что вместо сетТаймаутов там другие асинхронные операции, например работа с сервером. Этот код может сильно разрастаться и таких действий мб туча. И получится злополучный коллбэк-хэлл. Чтобы этого не было нам нужен промис. Смотрим ниже

// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
console.log('Запрос данных...');

//когда создаём промис, то в функции промиса помещаем 2 аргумента. по факту это аргументы вместо которых будут подставляться функции. Если всё пошло как надо будем вызывать resolve, иначе reject
const req = new Promise(function (resolve, reject) {
	setTimeout(() => {
		console.log('Подготовка данных...');

		const product = {
			name: 'TV',
			price: 2000,
		};

		// setTimeout(() => {
		// 	product.status = 'order';
		// 	console.log(product);
		// }, 2000); // этот код у нас будет выполняться, если до него всё будет ок и вместо неё мы вставим аргумент
		resolve(product);
	}, 2000);
});

// then обрабатывает положительный результат
req.then((product) => {
	setTimeout(() => {
		product.status = 'order'; // но у нас тут product неизвестное, и мы можем заретёрнить эти данные/ Как? в аргумент resolve передать product. и подставить в аргумент функции then, как мы уже и сделали
		console.log(product);
	}, 2000);
});

// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// ок, но представим, что надо ещё манипуляции сделать
console.log('Запрос данных...');

const req = new Promise(function (resolve, reject) {
	setTimeout(() => {
		console.log('Подготовка данных...');

		const product = {
			name: 'TV',
			price: 2000,
		};
		resolve(product);
	}, 2000);
});

// then обрабатывает положительный результат
req.then((product) => {
	const req2 = new Promise((resolve, reject) => {
		// можно стрелочную
		setTimeout(() => {
			product.status = 'order';
			resolve(product);
		}, 2000);
	});

	req2.then((data) => {
		console.log(data);
	});
});

// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// но какое преимущество у промисов?
console.log('Запрос данных...');

const req = new Promise(function (resolve, reject) {
	setTimeout(() => {
		console.log('Подготовка данных...');

		const product = {
			name: 'TV',
			price: 2000,
		};
		resolve(product);
	}, 2000);
});

req
	.then((product) => {
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				product.status = 'order';
				resolve(product);
			}, 2000);
		});
	})
	.then((data) => {
		data.modify = true; // модифицируем и добовляем
		return data;
	})
	.then(() => {
		console.log(data);
	});

// мы можем заменить ретёрном и сделать так!

// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// а теперь немного про reject

console.log('Запрос данных...');

const req = new Promise(function (resolve, reject) {
	setTimeout(() => {
		console.log('Подготовка данных...');

		const product = {
			name: 'TV',
			price: 2000,
		};
		resolve(product);
	}, 2000);
});

req
	.then((product) => {
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				product.status = 'order';
				reject(); // заменим тут на reject. эта функция будет выполняться, когда произошла ошибка. и чтобы обработать её нам понадобится catch
			}, 2000);
		});
	})
	.then((data) => {
		data.modify = true;
		return data;
	})
	.then(() => {
		console.log(data);
	})
	.catch(() => {
		console.error('Произошла ошибка');
	});

// т.е. если что-то пойдёт не так, то тогда будут пропущены все then и переёдт на catch

// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// есть ещё такая штука, как finaly. А зачем? В пример возьмём форму. В этот участок кода мы можем поместить то, что будет очищать нашу форму

console.log('Запрос данных...');

const req = new Promise(function (resolve, reject) {
	setTimeout(() => {
		console.log('Подготовка данных...');

		const product = {
			name: 'TV',
			price: 2000,
		};
		resolve(product);
	}, 2000);
});

req
	.then((product) => {
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				product.status = 'order';
				resolve(product);
			}, 2000);
		});
	})
	.then((data) => {
		data.modify = true;
		return data;
	})
	.then(() => {
		console.log(data);
	})
	.catch(() => {
		console.error('Произошла ошибка');
	})
	.finaly(() => {
		// добовляем finaly
		console.log('Finaly');
	});

// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// метод all

const test = (time) => {
	// очень редко, но межет такое быть, что наш второй аргумент не нужен
	return new Promise((resolve) => {
		setTimeout(() => resolve(), time);
	});
};

// test(1000).then(() => console.log('1000 ms'));
// test(2000).then(() => console.log('1000 ms'));

// метод all служит для того, чтобы убедиться что наши промисы все уже выполнились. Если практический пример: мы можем делать запросы на разные сервера, что бы получить определённые изображение, и эти сервера отвечают по разному (с разным промежутком времени). И при этом мы хотим, что бы на сайте у нас использовались сразу все изображения, т.е. мы должны подождать загрузки наших промисов и только потом что-то делать. Для этого нам понадобится метод all.

Promise.all([test(1000), test(2000)]).then(() => {
	console.log('All');
});

// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// метод race
// этот метод обратный методу all. Он определяет, кто выполнился первым и сразу что-то делает, не ждёт всех.

const test = (time) => {
	return new Promise((resolve) => {
		setTimeout(() => resolve(), time);
	});
};

// test(1000).then(() => console.log('1000 ms'));
// test(2000).then(() => console.log('1000 ms'));

Promise.race([test(1000), test(2000)]).then(() => {
	console.log('All');
});

function delay(ms) {
	return new Promise((resolve) => setTimeout(resolve, ms));
}

delay(3000).then(() => console.log('выполнилось через 3 секунды'));
