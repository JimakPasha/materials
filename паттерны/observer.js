class Subject() {
  constructor() {
    this.observers = [];
  }

  subscribe(observer) {
    this.observers = this.observers.push(observer);
  }

  unsubscribe(observer) {
    this.observers = this.observers.filter(obs => obs !== observer);
  }

  fire(changes) {
    this.observers.forEach(observer => {
      observer.update(changes);
    });
  }
}