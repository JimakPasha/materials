// Интерполяция
// Когда внутрь строки вставляем переменную
// интерполяция используется с бэктиками

'use strict';

const category = 'toys';

console.log('https://about:blank/' + category); // сайт написал для примера. мы к строке приклеили ещё строку но если у нас будет намного больше, чего добавить, то это более запаристо, см ниже

console.log('https://about:blank/' + category + '/' + '4');
// это оч запаристо

console.log(`https://about:blank/${category}/4`);  
// с помощью бэктиков используем интерполяцию


// ещё пример

const user = prompt('Напишите ваше имя!', '');

alert(`Привет, ${user}`);