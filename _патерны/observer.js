// Observer
// Формирует зависимости 1 к многим.
// Суть в том, что у нас есть один объект, в котором мы можем затрегерить вызов изменений и дальше все другие объекты, которые подписаны на изменения они получают обновления и делают свой функционал.

class Subject {
	constructor() {
		this.observers = [];
	}

	subscribe(observer) {
		this.observers = this.observers.push(observer);
	}

	unsubscribe(observer) {
		this.observers = this.observers.filter((obs) => obs !== observer);
	}

	fire(changes) {
		this.observers.forEach((observer) => {
			observer.update(changes);
		});
	}
}
