// обычная функция
const createPassword0 = (name, age) => `${name}${age}`;
createPassword0('Benjamin', 30);

// мы можем типизировать параметры
const createPassword1 = (name: string, age: number) => `${name}${age}`;
createPassword1('Benjamin', 30);

// можем сделать гибкость для age. Допустим может прийти и number и string. Добавим тип объединения
const createPassword2 = (name: string, age: number | string) => `${name}${age}`;
createPassword2('Benjamin', 30);
createPassword2('Benjamin', '30');

// предположим age должен быть не обязательным
const createPassword3 = (name: string, age?: number | string) => `${name}${age}`;
createPassword3('Benjamin');

// как нам типизировать то, что приходит от rest
const createSkills0 = (name, ...skills) => `${name}, my skills are ${skills.join()}`;

// очень просто. т.к. рест заворачивает в массив пишем что это будет массив строк
const createSkills1 = (name: string, ...skills: Array<string>) => `${name}, my skills are ${skills.join()}`;
createSkills1('Ben', 'HTML', 'CSS', 'JS', 'TS', 'React');

// также мы можем типизировать результаты выполнения. Тут мы ждём, что фн вернёт строку
const createSkills2 = (name: string, ...skills: Array<string>): string => `${name}, my skills are ${skills.join()}`;

// если фн не возвращает ничего, то тип будет void

// если ошибку выкидывает или выполняется постоянно то never

// разбор ситуации, когда у нас есть функция и мы хотим её присвоить в другую переменную
let myFn;

function oldFn(name: string): void {
    console.log('hi');
}

myFn = oldFn;

// типизируем это след. образом
let myFn1: (firstArg: string) => void;

function oldFn1(name: string): void {
    console.log('hi');
}

myFn1 = oldFn1;