// Если этот тип не нужен для инстанцирования объектов в среде выполнения, используйте interface или type . В противном случае используйте class . Другими словами, используйте class для создания пользовательского типа, если
// он будет задействоваться в качестве значения.
// Например, если вы объявите интерфейс Person и при этом у вас будет функция, получающая аргумент типа Person , то вы не сможете применить к этому аргументу оператор instanceof.
// Ни интерфейсы, ни типы, объявленные с ключевым словом type , не имеют представления в генерируемом JavaScript-коде, что уменьшает размер кода среды выполнения (байтовый). Если же для объявления типов вы используете классы, то они оставят свой след в итоговом JS.

// Отличия type и interface (нельзя interface для объединения)
interface User {
    name: string;
    age: number;
}

interface Dog {
   nickname: string;
   age: number;
}

type Common = User | Dog; // можно
// interface Common = User | Dog; нельзя