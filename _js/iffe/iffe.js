IIFE (Immediately Invoked Function Expression) это JS функция, которая выполняется сразу же после того, как она была определена.

(function () {
  statements
})();

Переменные внутри функции не могут быть использованы за пределами её области видимости.
Переменная, которой присвоено IIFE, хранит в себе результат выполнения функции, но не саму функцию.