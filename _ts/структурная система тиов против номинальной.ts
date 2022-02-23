// данный код на Java выдаст ошибку, т.к. в Java номинальная система типов

// class Peroson {
//     String name;
// }

// class Customer {
//     String name;
// }

// Customer cust = new Person();



// в Ts структурная система типов и данный код будет валидным (Person и Customer имеют одинаковую структуру)

class Person {
   name: string; 
}

class Customer {
    name: string;
 }

const cust: Customer = new Person();


// но что, если и Person и Customer будут не совсем одинаковыми?

class Person1 {
    name: string; 
    age: number;
 }
 
 class Customer1 {
     name: string;
  }
 
 const cust1: Customer1 = new Person1();

 // тогда тоже всё будет валидно, но если посмотреть свойства cust, то будет доступно только name 

 // но что если Customer11 будет иметь больше свойств, чем в инстансе

 class Person11 {
    name: string; 
}

class Customer11 {
    name: string;
    age: number;
  }
 
 const cust11: Customer11 = new Person11();

 // так как ссылочная переменная cust будет указывать на объект Person11, который даже не выделит память для свойства age


