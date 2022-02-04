const Lodash = require('./sync');

let _ = new Lodash();

describe('Lodash: compact: ', () => {
	let array;

	// const array = [false, 1, 'Kim', 0, '', true, null]; почему не можем определить так? Сами кейсы должны быть чистыми функциями, которые никак не взаимодействуют с глобальным скоупом. Почему чистые? Посмотрим на кейс который называется 'should working array be editable'. Мы там изменяем массив. И если мы будем изменять массив и он будет в глобальном скоупе, то там изменятся значения, и они дальше будут изменённые тестится.

	beforeEach(() => {
		array = [false, 1, 'Kim', 0, '', true, null];
	}); // вызывается перед каждым тестом

	test('should be defined', () => {
		// одного кейса достаточно, просто тут для примера второй
		expect(_.compact).toBeDefined();
		expect(_.compact).not.toBeUndefined();
	});

	test('should remove falsy values from array', () => {
		const result = [1, 'Kim', true];
		expect(_.compact(array)).toEqual(result);
	});

	test('should not contain falsy values', () => {
		const array = [false, 1, 'Kim', 0, '', true, null];
		const result = [1, 'Kim', true];
		expect(_.compact(array)).not.toContain(false);
		expect(_.compact(array)).not.toContain('');
		expect(_.compact(array)).not.toContain(0);
		expect(_.compact(array)).not.toContain(null);
	});

	test('should working array be editable', () => {
		// т.е. нам нужно проверить, что массив должен позволять себя редактировать
		array.push(...['one', 'two']);
		expect(array).toContain('one');
		expect(array).toContain('two');
	});
});

describe('Lodash: groupBy: ', () => {
	test('should be defined', () => {
		expect(_.groupBy).toBeDefined();
	});

	test('should group array items by Math.floor', () => {
		const array = [2.2, 2.4, 4.2, 3.1];
		const result = {
			2: [2.2, 2.4],
			4: [4.2],
			3: [3.1],
		};
		expect(_.groupBy(array, Math.floor)).toEqual(result);
	});

	test('should group array items by length', () => {
		const array = ['one', 'two', 'three'];
		const result = {
			3: ['one', 'two'],
			5: ['three'],
		};
		expect(_.groupBy(array, 'length')).toEqual(result);
	});

	test('should not return array', () => {
		expect(_.groupBy([], Math.trunc)).not.toBeInstanceOf(Array); // не должно быть инстансом класса Array
	});
});

// чтобы запустить только этот файл можно напсиать jest 0_2sync/sync.spec.js
// но для этого jest должен быть установлен глобально или написать npx jest 0_2sync/sync.spec.js
