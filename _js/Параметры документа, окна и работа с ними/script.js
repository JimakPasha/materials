'use strict';
// В этом уроке поговорим о нашем браузере.Какие глобальные сущности в нём есть и как они работают

// 	- С document мы знакомы - это по сути объект, который содержит всю хтмл структуру, только в более сложном виде

// 		- window это окно в котором показывается документ.Это именно область окна браузера

// 			- screen.экран.используется оч оч оч редко.Это вообще весь экран, именно монитор.


const box = document.querySelector('.box');

const width = box.clientWidth; 
const height = box.clientHeight;
console.log(width, height);
// мы можем получить высоту этого элемента и ширину. Это свойство даёт ширину с padding, но без border и margin и без скролла-ползунка! Но со свойством box-sizing: border-box; оно будет другое значение иметь, т.к. паддинги и бордер наши уже будут включаться в ширину. Получать значения мы будем в пикселях несмотря на то, как они заданы в css.
// Получается благодаря этим свойствам, мы можем получаить размер напрмиер модального окна и что-то с ним сделать
// ---------------------------------------------------

const widthOffset = box.offsetWidth; 
const heightOffset = box.offsetHeight;
console.log(widthOffset, heightOffset);
// тут мы получим ширину с учётом всего и padding и border и margin и даже скролла-ползунка
// ---------------------------------------------------
const widthScroll = box.scrollWidth;
const heightScroll = box.scrollHeight;
console.log(widthScroll, heightScroll);
// это используется с учётом скролла. Т.е. с учётом того сколько у нас там контетнта и сколько оно скролится(чаще по высоте).
// ширина будет без учёта сролла-ползунка
// ---------------------------------------------------


// Поставим задачу. При клике на кнопку нужно раскрыть весь контент. и сделать его без скролла

const btn = document.querySelector('button');

btn.addEventListener('click', () => {
	// box.style.height = heightScroll + 'px'; // px ставим, потому что от свойства scrollHeight нам приходит просто число
	// box.style.height = box.scrollHeight + 'px'; // если бы не запихнули в переменную, то можно так
	console.log(box.scrollTop); // тут нам покажет сколько мы уже проскролили
});

console.log(box.getBoundingClientRect()); // этот метод получает все координаты бокса. Но стоит учесть, что тут система координат отличается от координат css. когда мы в цсс 400 пх райт, то это значит 400 от права до элемента. а тут в этом методе от лева, до правой границы элемента. Тоже самое с bottom и top
console.log(box.getBoundingClientRect().top); // если напишу так, то значит получу только значение топа


const style = window.getComputedStyle(box); // если нам нужно прочесть стили которые уже применены к элементу на странице. В аргументе указываем интересующий нас элемент
console.log(style);
console.log(style.display); // если конкретно какое-то свойство интересуюет, то ставим точку и свойство

// getComputedStyle может получать стили псевдоэлемента, прописав его во второй аргумент

// ---------------------------------------------------
// следует знать что у документа нет свойства scrollTop и других таких
console.log(document.scrollTop); // если мы пропишем так, то ничего не будет 
console.log(document.documentElement.scrollTop); // надо написать так
console.log(document.documentElement.clientWidth); // например так

// ---------------------------------------------------
// у window есть метод scrollBy(); он принимает в себя 2 аргумента - координаты x и y

window.scrollBy(0, 200); // т.е. от текущего положения проскролится на 200px вниз
