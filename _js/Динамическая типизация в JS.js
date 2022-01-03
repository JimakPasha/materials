'use strict';

// Динамическая типизация это возможность превращения из однорго типа данных в другой

// to string----------------------------------------

// 1) старый дедовский метод

console.log(typeof(String(null))); // он просто обернёт кавычками null и мы получим строку
console.log(String(null));


// 2) конкатенация - сложение строки с чем-то

console.log(typeof(5 + '')); // при сложении со строкой, мы получаем строку


const num = 5;
console.log('http://vk.com/catalog/' + num); //староватая запись, но встречать будет часто. в новой больше юзают бэктики

const fontSize = 26 + 'px';

// to Number------------------------------------

// 1) Оч редко юзают этот способ 
console.log(typeof (Number('4')));
console.log(Number('4'));

// 2)  
console.log(typeof (+'4')); // просто подставляем плюс
console.log(+'4');

// 3)
console.log(typeof(parseInt('15px', 10)));
console.log(parseInt('15px', 10));


let answ = +prompt('Hello', ''); // поставив плюсик у промпт, мы преобразовываем строку в числовой тип данных

// Всё что мы получаем от пользователей, это всё строки! И их можно преобразовывать



// to Boolean

// 0, '', null, undefined, NaN  - всё это false 
// 1)
let switcher = null;

if (switcher) {
  console.log('Working...');
} // работать не будет, т.к. switcher это null, a null это false


switcher = 1;

if (switcher) {
  console.log('Working...');
} // а тут сработает, т.к. 1 это true


// 2)
console.log(typeof(Boolean('4')));

// 3) Оч оч редко
console.log(typeof (!!'4')); // превратится в булевое значение


// ---------------------------------------------------------------------------------

// интересные штуки типизации JS

console.log(typeof null) // object, это неточность js, на самом делел null это null
console.log(typeof function(){}) // function, но на самом деле это object
console.log(typeof NaN)// number, так и есть

console.log(Boolean([], {}, function(){})) // true
console.log('' + 1 + 0); // строка 10
console.log('' - 1 + 0); // число -1
console.log('3' * '2'); // число  6
console.log('42' - 40); // число  2
console.log('42px' - 40); // число Nan
console.log(null + 2); // число 2 (null преобразуется к числу 0)
console.log(undefined + 2); // число Nan (undefined не преобразуется к числу)

console.log('0' == false); // true. т.к. интерпритатор приводит это всё к числу. 0 это 0, false это 0

// неодночзначные
console.log(false == ''); // t
console.log(false == []); // t
console.log(false == {}); // f
console.log('' == 0); // t
console.log('' == []); // t
console.log('' == {}); // f
console.log(0 == []); // t
console.log(0 == {}); // f
console.log(0 == null); // f
