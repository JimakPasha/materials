// Generics. Общие типы. Обозначение типов в общем виде. Позволяют создавать компоненты для работы с разными типами. Это позволяет применять такие компоненты и использовать свои типы, другими словами мы сами задём типы и можем контролировать весь процесс.

const getter = (data: any): any => data;

getter(10).length;        // undefined
getter('test').length;    // 4

// проблема в том, что мы хотим, чтобы при входных string, на выходе была string, при входном number - выходной number. Для этого используем T (это может быть другая буква, но чаще T - тайп). Т.е. дженерик тип динамически подставляет типы
const getter2 = <T>(data: T): T => data;
// или
function getter3<T>(data: T): T {
    return data;
}

getter(10).length;        // ошибку получим на этапе написания кода
getter('test').length;    // 4

// мы можем сами явно указывать
getter<number>(10).length;		  // Property 'length' does not exist on type '10'
getter<string>('test').length;	// 4

// generic типы и классы