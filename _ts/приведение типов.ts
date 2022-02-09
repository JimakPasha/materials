// чтобы получить доступ к length которое есть у строки сделаем приведение типа
let str: any = 'String 1';
let strLength: number = (<string>str).length;
console.log(strLength);

// есть альтернативная запись с помощью as
let str2: any = 'String 2';
let strLength2: number = (str as string).length;
console.log(strLength2);