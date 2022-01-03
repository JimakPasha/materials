// Условия

'use strict';

//условия превращают тип данных в булевой

if (4 == 9){   
  console.log('ok');
} else {
  console.log('no');
}

if (1) {
  console.log('ok');
} else {
  console.log('no');
}


//разветвления условий

const num = 50;

if (num < 49){   
  console.log('Error');
} else if (num > 100){
  console.log('yes');
} else {
  console.log('no');
}

// тернарный оператор. он позволяет экономить место и сокращать код. но в начале его лучше особо часто не юзать
// Он называется тернарным, потому что участвует 3 аргумента.

(num === 50) ? console.log('ok') : console.log('Error');

// бинарный аргумент
4 + 4

// унарный аргумент
+ '4';


// Конструкция switch
// !!!!!!!!!!!!!!!!!! Всегда идёт на строгое сравнение (в отличии от обычного условия)
// break; обязателен.Если не остановить, то он будет все кейсы прогонять, даже если условие соответствует.Так вот, если условие соответствует, то он остановится благодаря break;
// default: для того, если ни один из кейсов не пройдёт, тогда будет дефолтное

const num2 = 55;

switch (num2) {
  case 54: // case это дериктива
    console.log('YES!!!');
    break;
  case 100:
    console.log('yes!');
    break;
  case 56:
    console.log('yes');
    break;
    default:
      console.log('NoNoNo:(');
}