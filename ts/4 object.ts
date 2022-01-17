// типизация объектов
const user0: {name: string, age: number} = {
    name: 'Ben',
    age: 32,
}

// но допустим у нас несколько объектов и у них одинаковые типы, но это повторение кода, нарушает принципы DRY
const user1: {name: string, age: number} = {
    name: 'Ben',
    age: 32,
}

const admin: {name: string, age: number} = {
    name: 'Ben',
    age: 32,
}

// исправим это с помощью типа type

type Person0 = {
    name: string,
    age: number
}

const user2: Person0 = {
    name: 'Ben',
    age: 32,
}

const admin0: Person0 = {
    name: 'Ben',
    age: 32,
}


// но что делать если структура в целом похожая, но есть некоторые отличия. Можно конечно создать 2 разных типа, но лучше сделать один и сделать поля которые не подходят для всех не обязательными

type Person1 = {
    name: string,
    age: number,
    surName?: string,
    postBlank?: () => string,
}

const user3: Person1 = {
    name: 'Ben',
    age: 32,
    surName: 'Smith',
}

const admin1: Person1 = {
    name: 'Ben',
    age: 32,
    postBlank(): string {
        return 'asdasdasd';
    } 
}