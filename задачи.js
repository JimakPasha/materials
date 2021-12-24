// https://learn.javascript.ru/bind#tasks

function sayHi() {
  alert( this.name );
}
sayHi.test = 5;

let bound = sayHi.bind({
  name: "Вася"
});

alert( bound.test ); // что выведет? почему?


// -----

function askPassword(ok, fail) {
  let password = prompt("Password?", "");
  if (password == "rockstar") ok();
  else fail();
}

let user = {
  name: "Вася",

  loginOk() {
    alert(`${this.name} logged in`);
  },

  loginFail() {
    alert(`${this.name} failed to log in`);
  },
};

askPassword(user.loginOk, user.loginFail);



askPassword(user.login.bind(user, result)); // ?

// -----















+1. use strict *****
+2. this *****
+3. bind *****
4. for in, for of  ****
+5. Массив от объекта отличить несколько способов  **
  Array.isArray();
  console.log(Object.prototype.toString.call([]) == '[object Array]');

6.  массивов  ****
+7. hasOwnProperty, instanceof, .isPrototypeOf(), in ****
  Метод hasOwnProperty() возвращает логическое значение, указывающее, содержит ли объект указанное свойство.
  Этот метод не проверяет существование свойств в цепочке прототипов объекта, в отличие от оператора in.
  Как пройтись с помощью for in, не затрагивая наследуемые свойства
  const obj = {
    name: 'lol',
    surname: 'lol2',
    age: 'lol3'
  };

  for (value in obj) {
    if (obj.hasOwnProperty(value)) {
      console.log(value);
    }
  }

  Оператор in возвращает true, если свойство содержится в указанном объекте или в его цепочке прототипов.
  Вы должны указать индекс элемента в массиве, а не значение в этом индексе

  Оператор instanceof проверяет, принадлежит ли объект к определённому классу.
  Другими словами, object instanceof constructor проверяет, присутствует ли объект constructor.prototype в цепочке прототипов object.

  Метод isPrototypeOf() проверяет, входит ли объект в цепочку прототипов другого объекта.

+8. propertyDescriptors  ***
  writable - можно ли изменять свойство, enumerable - свойство перечисляется в циклах, configurable - можно ли удалять свойство
  Метод Object.getOwnPropertyDescriptor позволяет получить полную информацию о свойстве - Object.getOwnPropertyDescriptor(obj, 'propertyName');
  Метод который может менять дескриптор Object.defineProperty(user, "name", {value: "John"}); или defineProperties(там есколько значений name, surname и тд...) Если не уазать тут дескрипторов, то будет false

+9. Promise then, catch, finally   *****
+10. throw new Error(), обработка ошибок ****
+11. DOM, preventDefault, stopPropagation, stopImmideatePropagation  **
12. currentTarget, target, this разница  **
+13. стрелочные функции отличие function от стрелочной ****
  - this у стрелки эквивалентно значению this внешней функции
  - Если ты попытаешься вызвать стрелочную функцию с использованием ключевого слова new, JS кинет исключение:
  - точно так же, как и со значение this массив arguments для стрелочных функций будет браться из внешней функции.
  - return можно не писать у стрелки, если функция содержит в теле одну инструкцию, фигурные скобки опущены

  // https://vc.ru/dev/133379-5-otlichiy-mezhdu-obychnymi-i-strelochnymi-funkciyami

14. вызов функции чз new что происходит (почитать про return) ****
+15. iife (function(){})() зачем мы так оборачиваем ***
+16. boxing, unboxing **
+17. Object.create(); *****
  Метод Object.create() создаёт новый объект с указанным прототипом и свойствами.
  Object.create(proto[, propertiesObject])
  proto - Объект, который станет прототипом вновь созданного объекта.
  propertiesObject - Необязательный параметр. Если указан и не равен undefined, должен быть объектом, чьи собственные перечисляемые свойства (то есть такие, которые определены на самом объекте, а не унаследованы по цепочке прототипов) указывают дескрипторы свойств, добавляемых в новый объект. Имена добавляемых свойств совпадают с именами свойств в этом объекте. Эти свойства соответствуют второму аргументу метода Object.defineProperties().

+18. Живая неживая коллекция *
+19. карирование ****
+20. AJAX *****
+21. get post в чем разница *****
+22. put patch ****
+23. websocket, long polling ****
+24. REST *****
+25. swager, postman
+26. CI CD
+27. CDN







/**
  Есть массив операций.
  Необходимо операции отсортировать по дате и сгруппировать их по году, а в качестве 
  значений представить массивы c датами в формате MM-DD.
  Пример результата:
  result = {
    "2017": [
      "07-31",
      "08-22"
    ],
    "2018": [
      "01-01"
      "02-22"
    ]
  }
*/

const operations = [
  { "date": "2017-07-31", "amount": "5422" },
  // { "date": "2017-06-30", "amount": "5220" },
  // { "date": "2017-05-31", "amount": "5365" },
  // { "date": "2017-08-31", "amount": "5451" },
  // { "date": "2017-09-30", "amount": "5303" },
  // { "date": "2018-03-31", "amount": "5654" },
  // { "date": "2017-10-31", "amount": "5509" },
  // { "date": "2017-12-31", "amount": "5567" },
  // { "date": "2018-01-31", "amount": "5597" },
  // { "date": "2017-11-30", "amount": "5359" },
  // { "date": "2018-02-28", "amount": "5082" },
  // { "date": "2018-04-14", "amount": "2567" }
];

function sortOperations(operations) {
  operations.map((item) => {
    const d = item.date.split('-');
    const newArr = d.map((i) => {
      return +i + 30;
    });
    const superNewArr = newArr.reduce((acc, curr) => {
      return acc + curr;
    }, []);
    console.log(superNewArr);
  });
}

console.log(sortOperations(operations));