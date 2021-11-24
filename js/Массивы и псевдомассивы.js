'use strict'

// Массивы и псевдомассивы (основные методы и свойства работы)

const arr = [1, 2, 3, 6, 8];

arr.pop(); // удаляет последний элемент массива

arr.push(10); // добавляет элемент в конец массива

arr.shift(); // удаляет элемент в начало массива (более медленный и реже используемый, т.к. удаляя эл в начале, js необходимо всем элементам поменять индексы)

arr.unshift(); // добовляет первый элемент массива (более медленный и реже используемый, т.к. добовляя эл в начале, js необходимо всем элементам поменять индексы)

// чтобы перебрать массив
// 1)
const arr1 = [1, 2, 3, 6, 8];

for (let i = 0; i < arr1.length; i++) {
  console.log(arr1[i]);
}

// 2) конструкция for of - работает только с массивоподобными сущностями (массивы, псевдомассивы, строки, мэп, сет). В основном все пользуются методом forEach (см. ниже), но у этого способа есть плюс, это возможность использовать брейк и контьньё
const arr2 = [1, 2, 3, 6, 8];
for (let value of arr2) {
  console.log(value);
}

// мы можем записать в массив на любую позицию
const arr3 = [1, 2, 3, 6, 8];
arr3[99] = 0;
console.log(arr.length); // тут мы сформулируем правило. консоль нам выводит 100 элементов. но у нас их не 100. это значит что свойство length это скорее не колличество эл в массиве, а индекс последнего элемента + 1


// Метод forEach. Он тоже перебирает массив. Но мы его можем подробнее настроить. И тут понадобятся знания про колбеки (функция внутри форИч колбэк)
const arr4 = [1, 2, 3, 6, 8];
arr4.forEach(function(item, i, arr4) {
  console.log(`${i}: ${item} внутри массива ${arr4}`);
});

// есть ещё другие методы перебоа


// Метод split 

// на основании введённых юзером данных формируем массив
const str = prompt('Впишите через запятую ваши любимые цвета', '');
const products = str.split(', '); // внутри скобок разделитель, который нужно писать в промпт юзеру для того
console.log(products);


// тут мы засплитовали в массив, а потом склеили в строку
const str2 = prompt('Впишите через запятую ваши любимые цвета', '');
const products2 = str2.split(', ');
console.log(products2.join('; ')); 


// метод сортировки sort. сортирует элементы внутри массива, как строки по алфавиту.
const str3 = prompt('Впишите через запятую ваши любимые цвета', '');
const products3 = str3.split(', ');
products3.sort();
console.log(products3.join('; '));



// а вот числа он отсортирует не првильно, он их отсортирует как строки, но этого можно избежать(см.ниже)
const arr5 = [2, 13, 26, 8, 10];
arr5.sort();
console.log(arr5);


// написав функцию ниже можно избежать непонятки сортировки чисел метода sort
const arr6 = [2, 13, 26, 8, 10];
arr6.sort(compareNum);
console.log(arr);

function compareNum(a, b) {
  return a - b;
}



// Псевдомассивы
// Это объект структура которого совпадает со структурой массива. (Он будет выглядеть как массив) Но у таких псевдомассивов не будет никаких методов. Это просто структура, которая хранит данные по порядку