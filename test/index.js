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

const f = [234, 24545, 5, 654, 23423].map((i) => +i.toString().padEnd(15, '1'));

console.log(f);
