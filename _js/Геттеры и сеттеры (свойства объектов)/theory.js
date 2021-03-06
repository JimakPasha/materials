// Свойства акцессоры. Гетторы и Сетторы.

// Объект состоит из свойств и методов. 
// Свойства описывают характеристик, данные
// Умения наших объектов

// Свойства делятся ещё на две категории:
// 1) Свойства данные - просто описывают объект
// 2) Свойства акцессоры - позволяют, как присваивать, так и получать объект

// --- СВОЙСТВА АКЦЕССОРЫ --- ///
// Они делятся на гетторы и сетторы.
// Гетторы позволяют получать значения свойства, а сетторы устанавливать

const persone = {
	name: 'Alex',
	age: 26,

	get userAge() {
		return this.age;
	},

	// можно установить геттор. Он обязательноо принимает в себя аргументы
	set userAge(num) {
		this.age = num;
	}
};

console.log(persone.userAge); // когда используем геттор, то не ставим круглые скобки 

// с помощью сеттора, мы можем присвоить, и значение изменится
console.log(persone.userAge = 30);
console.log(persone.userAge);