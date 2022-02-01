// keyof

interface Person {
    name: string
    age: number
}

type PersonKeys = keyof Person // 'name' | 'age'

let key: PersonKeys = 'name';
key = 'age';

// Exclude, Pick

type User = {
    _id: number
    name: string
    email: string
    createdAt: Date
}

// допустим нам нужно сделать такой же тайп только без полей _id и createdAt
// 1) способ (в Exclude мы пишем какие поля нужно исключить)
type UserKeysNoMeta1 = Exclude<keyof User, '_id' | 'createdAt'>
// и теперь у нас тут доступны 'name' | 'email'
// 2) способ (но тут в Pick мы пишем какие поля должны быть)
type UserKeysNoMeta2 = Pick<User, 'name' | 'email'>

// пример
let u1: UserKeysNoMeta1 = 'name'
u1 = '_id' // будет ошибка, т.к. _id мы исключили