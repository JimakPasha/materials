// void когда функция ничего не фозвращает или когда просто return, return null, return undefined

// never когда функция никогда не завершится. т.е. бесконечный цикл или throw new Error(). throw обернуть в условие, и не факт что функция вернёт ошибку, тогда не будет тип never

// =============================================================================================
// =============================================================================================
// =============================================================================================

// отличия unknown от any. Тип unknown был введен в ts Если вы объявите переменную типа unknown , компилятор вынудит сузить ее тип прежде, чем позволит обращаться к ее свойствам, спасая тем самым от возможных сюрпризов в среде выполнения.

type Person123 = { // объявляем псевдоним типа
    address: string;
}

let person1: any; // объявляем переменную типа any

person1 = JSON.parse('{"adress": "25 Brodway"}'); // считываем строку JSON

console.log(person1.address); // выводит в консоль undefined потому что мы допустили ошибку в "address" в строке JSON.
// т.е. чтобы столкнуться с проблемой нам нужно запустить код, на этапе написания ошибки не видно

// теперь попробуем unknown

let person2: unknown;
person2 = JSON.parse('{"adress": "25 Brodway"}');
console.log(person2.address); // попытка использовать переменнуб типа unknown всегда приведёт к ошибке компилиции. Тут мы пытаемся использовать переменную типа unknown не сужая тип

// ts позволяет писать пользовательские защиты типов, которые могут проверять, имеет ли объект конкретный тип. Это будет функция, которая возвращает что-то вроде «this FunctionArg is SomeType» (этот аргумент функции имеет тип...). Давайте напишем защиту типа isPerson() , которая предполагает, что если проверяемый объект имеет свойство address , то это person.

const isPerson = (object: any): object is Person => "address" in object;

// Эта защита типа возвращает true , если передаваемый объект содержит свойство address.
// Можем это применить следующим образом
if (isPerson(person2)) {
    console.log(person2.address);
} else {
    console.log('person2 is not a Person');
}

// В этом коде отсутствуют ошибки компиляции, и он будет работать как ожидалось, пока защита isPerson() не получит в качестве аргумента ложный (вызывающий false ) объект. Например, передача null в isPerson() приведет к ошибке среды выполнения в выражении "address" в объекте. Следующий листинг показывает более безопасный вариант защиты isPerson(). Оператор двойной восклицательный знак !! гарантирует, что переданный объект является верным (возвращает true ).

const isPerson2 = (object: any): object is Person => !!object && "address" in object;

// Вы можете поработать с этим кодом в песочнице: http://mng.bz/eDaV