// типизируем классы

class User {
    name: string;
    age: number;
    nickName: string;

    constructor(name: string, age: number, nickName: string) {
        this.name = name;
        this.age = age;
        this.nickName = nickName;
    }
}

const ben = new User('Ben', 30, 'beeeen');

console.log(ben);

// основные ключевые слова которые ввёл ts для работы с классами
// для определения к свойствам и методам классов используют (4 модификатора доступа) public, private, protected, readonly (public пр умолчанию)
// - public публичный, и доступ получается свободно
// - private не имеет доступ за пределами класса. Ни наследники ни кто-либо ещё не может получить доступ
// - protected доступ могут получить только наследники
// - readonly становится доступным только для чтения

class User2 {
    public name: string;
    private age: number;
    protected nickName: string;
    readonly pass: number;

    constructor(name: string, age: number, nickName: string, pass: number) {
        this.name = name;
        this.age = age;
        this.nickName = nickName;
        this.pass = pass;
    }
}

const ben2 = new User2('Ben', 30, 'beeeen', 12312);

// можно задавать дефолтные значения
class User3 {
    name: string;
    age: number = 20;
    nickName: string = 'Nick';

    constructor(name: string) {
        this.name = name;
    }
}

const ben3 = new User3('Ben');

// сокращение кода (модификатор указывать обязательно)
class User4 {
    constructor (
        public name: string,
        public age: number,
        public nickName: string
    ) {}
}

