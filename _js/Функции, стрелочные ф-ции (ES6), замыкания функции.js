'use strict';

// Функции

// Функции это действия в js, содержит разные типы данных
// Они сокращают код


// как правило первое слово в функции - глагол
// в скобках пишется аргумент функции (параметры ф). их может быть много

function showFirstMessage(text, arg, text2) {
  console.log(text);
  let num = 20; //переменная let и const видна только внутри функции. Она называется локальная функция
}

showFirstMessage('Hello!'); //это вызывает функцию, без этого она не будет работать



let num2 = 10; // но если задать переменную перед функцией, то в функции она будет видна. Это глобальная переменная
console.log(num2);

function showFirstMessage() {
  console.log('Hi');
  num2 = 5;
}

showFirstMessage('Hi');
console.log(num2);


// Замыкание функции - это сама функция вместе со всеми внешними переменными, которые ей доступны.
// Если мы попросим вывести переменную в самой функции, то функция будет искать сначала переменную внутри себя, и выведет её, но если внутри её нету, то она пойдёт искать внешне


function calc(a, b) {
  return (a + b); //return позволяет вернуть значение внутри во внешний мир. Код в функции ПОСЛЕ ретёрна не будет выполняться
}

console.log(calc(4, 3));
console.log(calc(3, 7));
console.log(calc(9, 1));
console.log(calc(5, 3));
console.log(calc(1, 8));


// ещё одно применение функции

function ret() {
  let num = 50;

  // и внутри может выполняться какой-то огромный код и в конце ретёрном возвращается уже результат работы этой функции

  return num;
}

const anotherNum = ret();
console.log(anotherNum);

// Виды функций

// 1) function declaration(объявление функции). Она существует до того, как код запустится. Т.е. до того как запуститься наш скрипт, js пробегается по всему коду и находит все функции деклорейшены и фиксирует их, а уже потом начинает читать код с самого верха.

function foo() {
  // код
}

// 2) function expression(функциональное выражение). создаётся, по мере чтения кода

let foo2 = function {
  // код
}; // а тут уже точку с запятой ставим!


// 3) Стрелочные функции () =>
// У неё есть свои особенности, о них позже
// Она не имеет своего контекста (this)

const calc2 = (a, b) => { return a + b }; 

const calc3 = (a, b) => a + b ; // Если одна строчка после стрелки, то можно так писать  

const calc4 = a => a + b; // А если один аргумент, то можно так



// --------------------------------------------------------------------------------
// Про замыкания от Владилена Минина
// Замыкание это функция внутри другой функции

// пример 1

function createCalcFunction(n) {
	return function () {
		console.log(1000 * n);
	}
}

const calc = createCalcFunction(42);
calc();

// пример 2

function createIncremantor(n) {
	return function (num) {
		return n + num;
	}
}

const addOne = createIncremantor(1);
const addTen = createIncremantor(10);

console.log(addOne(10));
console.log(addOne(41));

console.log(addTen(10));
console.log(addTen(41));

// пример 3

function urlGenerator(domain) {
	return function (url) {
		return `https://${url}.${domain}`;
	}
}

const comUrl = urlGenerator('com');
const ruUrl = urlGenerator('ru');

console.log(comUrl('google'));
console.log(comUrl('vk'));

console.log(ruUrl('yandex'));
console.log(ruUrl('eurosport'));
