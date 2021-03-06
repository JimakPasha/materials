'use strict';
// 1) forEach - никогда не возвращает новый массив, он просто берёт массив и просто его перебирает 


//остальные методы возвращают новый массив
// 2) filter 
const name = ['Ivan', 'Ksenia', 'Ann', 'Voldemart'];
//допустим нам нужно получить имена, которые меньше 5 символов
const shortNames = name.filter(function(name) {
	return name.length < 5;
});

console.log(shortNames); // и получим новый массив 
console.log(name); // и посмотрим, что в старом массиве всё осталось


// 3) map
// позволяет взять массив и изменить элемент внутри него. в итоге получается новый массив с новыми данными
const answers = ['IvAn', 'AnnA', 'Hello']; // мы получили такой массив от введённых данных юзера, но мы хотим, чтобы они все были нижнего регистра например
const result = answers.map(item => item.toLowerCase());
// или
// const result = answers.map((item) => {
//	return item.toLowerCase();
// }); //более развёрнуто будет выглядеть так
console.log(result);

// а нужно ли нам всегда создавать новый массив? нет. Мы можем какбы переместить наш новый массив в старый. только переменную нужно поменять на let. 
// но с точки зрения имутабельности, лучше создавать новую переменную
let answers2 = ['IvAn', 'AnnA', 'Hello']; 
answers2 = answers2.map(item => item.toLowerCase());
console.log(answers2);

// 4) every/some (каждый/некоторый)
// some - берёт массив, перебирает его, и если хотя бы один элемент подходит по условию, то он нам вернёт true, иначе false
const some = [4, 'fdasfd', 'wer'];
console.log(some.some(item => typeof(item) === 'number')); // помним, что тут есть return, просто в сокращённой записи его нет. // мы спрашиваем, есть ли хоть в одном элементе массива число? и ответ true

// every. Если все элементы подходят под условия, то вернёт true
const every = ['4', 'fdasfd', 'wer'];
console.log(every.every(item => typeof (item) === 'number'));

// 5) reduce. собирает массив воедино
const arr = [4, 5, 1, 3, 2, 6];
const res = arr.reduce((sum, current) => sum + current); // получим сумму массива. Как это происходит?:
											// sum   current
											// 0			 4 // первая строчка не обязательна, она для понимания
											// 4			 5
											// 9			 1
											// 10			 13... и тд

console.log(res);

// методом reduce может работать и с массивом в котором строки

const arr2 = ['apple', 'pear', 'plum'];
const res2 = arr2.reduce((sum, current) => `${sum}, ${current}`);
console.log(res2); // получим одну строку


// reduce принимает ещё один аргумент
const arr3 = [4, 5, 1, 3, 2, 6];
const res3 = arr3.reduce((sum, current) => sum + current, 3); // подставили 3, это значит что эта 3 впихнётся в самое начало. и будет 3+4 и тд...
console.log(res3);




// ---------------------------------------------------------
// ---------------------------------------------------------
// практический пример.
// ---------------------------------------------------------
// ---------------------------------------------------------

// у нас есть объект и нам нужно вытащить имена людей. Предположим, как это часто бывает, мы не знаем на каких позициях что находится в этом объекте
const obj = {
	ivan: 'persone',
	ann: 'persone',
	dog: 'animal',
	cat: 'animal'
};

// есть такой метод объекта entries, который превращает в матрицу, т.е. в массив массивов
// const newArr = Object.entries(obj);

// console.log(newArr); // и в консоле мы получаем структуру данных который содержит массив, а он ещё массивы (это ключ и значение объекта)
// и дальше мы можем использовать чейнинг, когда мы операции записываем в цепочку
const newArr = Object.entries(obj)
.filter(item => item[1] === 'persone')
.map(item => item[0]);

console.log(newArr);


const users = [
  {
    name: 'Jo',
    room: 123
  },
  {
    name: 'Po',
    room: 123
  },
  {
    name: 'aoslidj',
    room: 1
  }
]

const room = 123;

const deleteUsers = (room) => {
  console.log(users.filter((user) => user.room !== room));
};

deleteUsers(room);