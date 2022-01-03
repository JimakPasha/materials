function foo() {
  console.log(this.a);
}

function doFoo(fn) {
  // `fn` — просто еще одна ссылка на `foo`

  fn(); // <-- точка вызова!
}

var obj = {
  a: 2,
  foo: foo,
};

var a = 'ой, глобальная'; // `a` еще и переменная в глобальном объекте

doFoo(obj.foo.call(obj)); // "ой, глобальная"
