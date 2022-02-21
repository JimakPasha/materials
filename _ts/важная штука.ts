// ------------------------------------------

interface Obj1 {
    name: string;
}

interface Obj2 {
    name: string;
    age: number;
}

const obj: Obj1 = {
    name: 'asdasd',
}

const obj2: Obj2 = {
    name: 'asdasd',
    age: 1,
}

// если мы в аргументах напишем тип через или, что произойдёт? У нас тс найдёт только общие поля, и оставит только их. т.е. уберёт age. Как бы то что нужно, хорошо. Но допустим у нас появится куча объектов и мы будем каждый добовлять через оператор или, это не очень хорошо,(т.е. у нас прямая зависимость) что же делать? смотрите ниже после черты
function foo(o: Obj1 | Obj2): void {
    console.log(1);
}

foo(obj2);

// ------------------------------------------

interface Obj11 {
    name: string;
}

interface Obj22 {
    name: string;
    age: number;
}

const objj: Obj11 = {
    name: 'asdasd',
}

const obj22: Obj22 = {
    name: 'asdasd',
    age: 1,
}

// просто добавим общий интерфейс
interface U {
    name: string;
}

// и будет шшшшасце!
function foo2(o: U): void {
    console.log(2);
}

foo2(obj22);