// Главное теория:

// функции-генераторы создаются с помощью *
// 1 function* generateSequence() (чаще этот юзают)
// 2 function *generateSequence()

// вызов не даёт результат, он даёт нам [object Generator]
// Основным методом генератора является next();

// Композиция генераторов – естественный способ вставлять вывод одного генератора в поток другого. Она не использует дополнительную память для хранения промежуточных результатов.

// Так как генераторы являются перебираемыми объектами, мы можем использовать всю связанную с ними функциональность, например оператор расширения ...: (перебор игнорирует те объекты у которы done: true, поэтому он не будет итерируемым)

// -------------------------------------------------------------------------------------------------
// функции-генераторы создаются с помощью *
// 1 function* generateSequence() (чаще этот юзают)
// 2 function *generateSequence()
function* generateSequence() {
	yield 1;
	yield 2;
	return 3;
}

const generator = generateSequence();
console.log(generator); // вызов не даёт результат, он даёт нам [object Generator]
// Основным методом генератора является next();

const one = generator.next();
console.log(one); // { value: 1, done: false } т.е. значение и done, существует ли следующее значение
let two = generator.next();
console.log(two); // { value: 2, done: false }
let three = generator.next();
console.log(three); // { value: 3, done: true }

// если мы продолжим дальше вызывать, ошибки не будет, но будет возвращён один и тот же объект
let four = generator.next();
console.log(four); // { value: undefined, done: true }

// Перебор генераторов --------------------------------------------------------------------------------
// Генераторы являются перебираемыми объектами.

const generator2 = generateSequence();

for (let value of generator2) {
	console.log(value); // 1, 2 (перебор игнорирует те объекты у которы done: true, поэтому он не будет итерируемым)
}

// Так как генераторы являются перебираемыми объектами, мы можем использовать всю связанную с ними функциональность, например оператор расширения ...:

function* generateSequence2() {
	yield 1;
	yield 2;
	yield 3;
}

let sequence2 = [0, ...generateSequence2()];

console.log(sequence2); // 0, 1, 2, 3

// Композиция генераторов --------------------------------------------------------------------------------
// Для генераторов есть особый синтаксис yield*, который позволяет «вкладывать» генераторы один в другой (осуществлять их композицию).

function* generateSequence(start, end) {
	for (let i = start; i <= end; i++) yield i;
}

function* generatePasswordCodes() {
	// 0..9
	yield* generateSequence(48, 57);

	// A..Z
	yield* generateSequence(65, 90);

	// a..z
	yield* generateSequence(97, 122);
}

let str = '';

for (let code of generatePasswordCodes()) {
	str += String.fromCharCode(code);
}

console.log(str); // 0..9A..Za..z

// Композиция генераторов – естественный способ вставлять вывод одного генератора в поток другого. Она не использует дополнительную память для хранения промежуточных результатов.
