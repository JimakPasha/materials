// yield порционно выдаёт результат, который мы хотим выдать наружу
// у функции генератора есть метод next()

function* strGenerator() {
  yield 'H';
  yield 'E';
  yield 'L';
  yield 'L';
  yield 'O';
}

const str = strGenerator();

console.log(str.next());
console.log(str.next());
console.log(str.next());
console.log(str.next());
console.log(str.next());
console.log(str.next());
console.log(str.next());

// ---------------------------------------------------

function* numberGen(n = 10) {
  for (let i = 0; i < n; i++) {
    yield i;
  }
}

const num = numberGen(7);

console.log(num.next());
console.log(num.next());
console.log(num.next());
console.log(num.next());
console.log(num.next());
console.log(num.next());
console.log(num.next());
console.log(num.next());

// ---------------------------------------------------

// создадим свой генератор. повторим логику генератора

const iterator = {
  gen(n = 10) {
    let i = 0;

    return {
      next() {
        if (i < n) {
          return { value: ++i, done: false };
        } else {
          return { value: undefined, done: true };
        }
      },
    };
  },
};

const itr = iterator.gen();

console.log(itr.next());
console.log(itr.next());
console.log(itr.next());
console.log(itr.next());
console.log(itr.next());
console.log(itr.next());
console.log(itr.next());
console.log(itr.next());
console.log(itr.next());
console.log(itr.next());
console.log(itr.next());


// ---------------------------------------------------

//for of

// допустм нужен посимвольный вывод

for (let k of 'Hello') {
  console.log(k);
}


for (let k of [1,2,3,4]) {
  console.log(k);
}

// for of работает со специальным типом данных symbol. Т.е. должен быть у вещи которую мы итерируем свойство Symbol.iterator (можно посмотреть в браузере)

// если напишем так, то получим ошибку, т.к. в объекте нет Symbol.iterator

for (let k of iterator) {
  console.log(k);
}

// но мы можем его добавить

const iterator = {
  [Symbol.iterator](n = 10) {
    let i = 0;

    return {
      next() {
        if (i < n) {
          return { value: ++i, done: false };
        } else {
          return { value: undefined, done: true };
        }
      },
    };
  },
};

for (let k of iterator) {
  console.log(k);
}

// и всё заработает


// ---------------------------------------------------

// перепишем логику с использованием генератора (а не иметатора, как мы сделали)

function* iter(n = 10) {
  for (let i = 0; i < n; i++) {
    yield i
  }
}

for (let k of iter(6)) {
  console.log(k);
}