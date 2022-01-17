// создается с помощью ключевого слова interface.
// interface похож на type, но принципиальное отличие, что type задаёт псевдоним для любой разновидности типа включая примитивы, т.е. это механизм создания псевдонима для любого типа, а interface это именованный тип объекта и это мощный способ определения сущностей, он может наследоваться и расширяться другими интерфейсами (способностей у interface больше, чем у type)

// создадим интерф для объекта
interface User {
    name: string,
    age: number,
}

const yauhen: User = {
    name: 'Yauhen',
    age: 31,
}

// одна из возможностей интерф - опциональные типы

interface User {
    name: string,
    age?: number,
}

const yauhen2: User = {
    name: 'Yauhen',
}

// тут ошибка, т.к. name обязательное свойство
const max: User = {
    age: 20,
}

// readonly - для блокировки изменений
// ещё фича на лишние свойства. Т.е. свойства которые не описаны в интерфейсе, но прописаны в объекте, будут выкидывать exception

// но что делать если нам всё же нужно расширение интерф
// можно так сделать
interface User {
    name: string,
    age: number,
    [propName: string]: any; // типы и кол-во свойств могут быть другими
}

const yauhen3: User = {
    name: 'Yauhen',
    age: 31,
    nickName: 'webDev',
    justTest: 'test',
}

// типы классов можес описывать
// тут фишка в том, что в интерф мы описываем минимальный набор свойств, но в классе мы можем писать значительно больше всего, и это будет валидно
interface User {
    name: string,
    age: number,
    getPass(): string,
}

class Yauhen implements User {
    name: string = 'Yauhen';
    age: number = 31;
    nickName: string = 'webDev';

    getPass() {
        return `${this.name}${this.age}`;
    }
}

// можно создавать классы на основе нескольких интерфейсов
interface User {
    name: string,
    age: number,
}

interface Pass {
    getPass(): string,
} 

class Yauhen10 implements User, Pass {
    name: string = 'Yauhen';
    age: number = 31;

    getPass() {
        return `${this.name}${this.age}`;
    }
}

// расширяем интерфейсы
interface User {
    name: string,
    age: number,
}

interface Admin extends User {
    getPass(): string,
}

class Yauhen1111 implements Admin {
    name: string = 'Yauhen';
    age: number = 31;

    getPass() {
        return `${this.name}${this.age}`;
    }
}