// В JS переменные делятся на глобальные и локальные
// чтобы не засорять переменными глобальную область в JS используют IIFE...
// в TS для этого придумали namespace, но используют это оч редко, сейчас в основном всё решается модулями
// тем самым это инкапсулирует своё пространство имён, к которым можно обратиться
namespace Utils {
    const SECRET: string = '123321';
    const PI: number = 3.14;

    const getPass = (name: string, age: number): string => `${name}${age}`;

    const isEmpty = <T>(data: T): boolean => !data;
};

const myPass = Utils.getPass('Yauhen', 31); // получим ошибку, т.к. достучаться не сможем
console.log(myPass);

// чтобы получить доступ, нужно экспортнуть переменные внутри namespace
namespace Utils2 {
    export const SECRET: string = '123321';
    const PI: number = 3.14;

    export const getPass = (name: string, age: number): string => `${name}${age}`;

    export const isEmpty = <T>(data: T): boolean => !data;
};

const myPass2 = Utils2.getPass('Yauhen', 31);		// "Yauhen31"
const isSecret = Utils2.isEmpty(Utils.SECRET);	// "false"
// но константу PI не сможем получить, т.к. мы её не экспортнули

// мы можем также экспортировать (обязательно три слеша перед reference)
/// <reference path="Utils.ts" /> 