// https://learn.javascript.ru/bind#tasks

function sayHi() {
	alert(this.name);
}
sayHi.test = 5;

let bound = sayHi.bind({
	name: 'Вася',
});

alert(bound.test); // что выведет? почему?

// -----

function askPassword(ok, fail) {
	let password = prompt('Password?', '');
	if (password == 'rockstar') ok();
	else fail();
}

let user = {
	name: 'Вася',

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

function extraPerfect(n) {
	let arr = [];
	for (let a = 0; a <= n; a++) {
		if (a % 2 !== 0) {
			arr.push(a);
		}
	}
	return arr;
}

console.log(extraPerfect(3)); // [1,3]
console.log(extraPerfect(5)); // [1,3,5]
console.log(extraPerfect(7)); // [1,3,5,7]
console.log(extraPerfect(28)); // [1,3,5,7,9,11,13,15,17,19,21,23,25,27]
console.log(extraPerfect(39)); // [1,3,5,7,9,11,13,15,17,19,21,23,25,27,29,31,33,35,37,39]
