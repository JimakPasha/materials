// Сущность которая позволяет лучше структурировать однотипные элементы

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

enum Directions1 {
    Up = 2,
    Down = 4,
    Left = 6,
    Right
}
Directions.Up; // 2
Directions.Down; // 4
Directions.Left; // 6
Directions.Right; // 7

но данные мы можем получить и по ключу

enum Directions2 {
    Up
    Down
    Left
    Right
}
Directions[0] // 'Up'
Directions[1] // 'Down'
Directions[2] // 'Left'
Directions[3] // 'Right'

enum Directions3 {
    Up = 2
    Down = 4
    Left = 5
    Right
}
Directions[2] // 'Up'
Directions[4] // 'Down'
Directions[5] // 'Left'
Directions[6] // 'Right'