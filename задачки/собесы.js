function validator(str) {}

validator('()'); // true
validator('()[]'); // true
validator('()[]{}'); // true
validator('()[]{'); // false
validator('{]'); // false
validator('({)}'); // false
validator('([{}])'); // true
validator('(([{}])'); // false

// -------------------------------------
// решение 1

function validator(str) {
  const arr = str.split('');
  const stack = [];

  arr.forEach((i) => {
    if (i === '(' || i === '[' || i === '{') {
      stack.push(i);
    } else if (
      (i === ')' && stack[stack.length - 1] === '(') ||
      (i === '}' && stack[stack.length - 1] === '{') ||
      (i === ']' && stack[stack.length - 1] === '[')
    ) {
      stack.pop();
    } else return;
  });

  if (stack.length > 0) {
    return false;
  } else {
    return true;
  }
}

console.log(validator('()')); // true
console.log(validator('()[]')); // true
console.log(validator('()[]{}')); // true
console.log(validator('()[]{')); // false
console.log(validator('{]')); // false
console.log(validator('({)}')); // false
console.log(validator('([{}])')); // true
console.log(validator('(([{}])')); // false

// -----------------------------------------------------------------------------
// -----------------------------------------------------------------------------
// -----------------------------------------------------------------------------
// -----------------------------------------------------------------------------
// -----------------------------------------------------------------------------

// Есть массив операций.
// Необходимо операции отсортировать по дате и сгруппировать их по году, а в качестве
// значений представить массивы c датами в формате MM-DD.
// Пример результата:
// result = {
//   "2017": [
//     "07-31",
//     "08-22"
//   ],
//   "2018": [
//     "01-01"
//     "02-22"
//   ]
// }

// -------------------------------------------1

const operations = [
  { date: '2017-07-31', amount: '5422' },
  { date: '2017-06-30', amount: '5220' },
  { date: '2017-05-31', amount: '5365' },
  { date: '2017-08-31', amount: '5451' },
  { date: '2017-09-30', amount: '5303' },
  { date: '2018-03-31', amount: '5654' },
  { date: '2017-10-31', amount: '5509' },
  { date: '2017-12-31', amount: '5567' },
  { date: '2018-01-31', amount: '5597' },
  { date: '2017-11-30', amount: '5359' },
  { date: '2018-02-28', amount: '5082' },
  { date: '2018-04-14', amount: '2567' },
];

function sortOperations(operations) {
  return operations.reduce((acc, curr) => {
    const year = curr.date.slice(0, 4);
    const mmdd = curr.date.slice(5, 10);
    acc[year] ? acc[year].push(mmdd) : (acc[year] = [mmdd]);
    return acc;
  }, {});
}

console.log(sortOperations(operations));

// -------------------------------------------2

const operations = [
  { date: '2017-07-31', amount: '5422' },
  { date: '2017-06-30', amount: '5220' },
  { date: '2017-05-31', amount: '5365' },
  { date: '2017-08-31', amount: '5451' },
  { date: '2017-09-30', amount: '5303' },
  { date: '2018-03-31', amount: '5654' },
  { date: '2017-10-31', amount: '5509' },
  { date: '2017-12-31', amount: '5567' },
  { date: '2018-01-31', amount: '5597' },
  { date: '2017-11-30', amount: '5359' },
  { date: '2018-02-28', amount: '5082' },
  { date: '2018-04-14', amount: '2567' },
];

function sortOperations(operations) {
  const obj = {};
  operations.map((item) => {
    const year = item.date.slice(0, 4);
    const mmdd = item.date.slice(5, 10);
    obj[year] ? obj[year].push(mmdd) : (obj[year] = [mmdd]);
  });
  return obj;
}

console.log(sortOperations(operations));

// -------------------------------------------
// -------------------------------------------
// -------------------------------------------
// -------------------------------------------
// -------------------------------------------
