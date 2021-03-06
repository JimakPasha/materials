// основной принцип ts - проверка типов основаная на типе значений (иногда называется структурным подтипированием или утиной типизацией)
// Статическая типизация даёт много преимуществ на этапе разработки и предотвращает возможные потенциальные ошибки. 
// - Можем изначально определить типы данных
// - Пользоваться автокомплитом и знать какие поля есть у объекта и если какое-то вложенное поле будет null, то TS нас об этом предупредит
// - типизация пропсов(избавляемся от пропТайпс) и напрямую можем указывать типы
// - типизация хуков, реакт-роутер-дом

// появляются новые типы данных:
// - все данные JS 
// - number[] или Array<number>
// - tuple : 
let x: [string, number]; // сначала описывает типы, которые будут храниться
x = ['hello', 10]; // а затем уже присваиваем
// - any когда огромнная портянка типов в массиве например. но если есть возможность описать типы, то лучше это сделать
// - enum это более удобный способ, который можно использовать для задания понятных имён, набору численных значений (своеобразная смесь объекта с массивом)
enum Directions {
    Up,
    Down,
    Left,
    Right
}
Directions.Up; // 0
Directions.Down; // 1
Directions.Left; // 2
Directions.Right; // 3
// можно путём переопределения задать индекс для всех или для каждого

enum Directions {
    Up = 2,
    Down = 4,
    Left = 6,
    Right
}
Directions.Up; // 2
Directions.Down; // 4
Directions.Left; // 6
Directions.Right; // 7
// - never когда возвращает ошибку и не заканчивает своё выполнение либо когда функция работает без остановки и результата мы не получим
// - o object для определение объекта, не примитива (либо null, ведь null объект)
// тип объединения | (т.е. мы можем написать или такой тип или такой)
// type - пользовательские типы