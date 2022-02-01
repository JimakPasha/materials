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

// -----------------------------------------------------------------------------
// -----------------------------------------------------------------------------
// -----------------------------------------------------------------------------
// -----------------------------------------------------------------------------
// -----------------------------------------------------------------------------

// Нужно выдавать запрошенную сумму купюрами в рублях начиная от более мелких к более крупным. Доступные купюры в банкомате 100, 500, 1000, 5000 ₽

function bank(x) {
	const noteA = 100;
	const noteB = 500;
	const noteC = 1000;
	const noteD = 5000;

	let sum = x;
	const result = {
		100: 0,
		500: 0,
		1000: 0,
		5000: 0,
		remainder: 0,
	};

	if (sum / noteD >= 1) {
		result[noteD] = Math.floor(sum / noteD);
		sum = sum % noteD;
	}
	if (sum / noteC >= 1) {
		result[noteC] = Math.floor(sum / noteC);
		sum = sum % noteC;
	}
	if (sum / noteB >= 1) {
		result[noteB] = Math.floor(sum / noteB);
		sum = sum % noteB;
	}
	if (sum / noteA >= 1) {
		result[noteA] = Math.floor(sum / noteA);
		sum = sum % noteA;
	}
	if (sum < noteA) {
		result['remainder'] = sum;
	}

	return result;
}

console.log(bank(5630));

// -----------------------------------------------------------------------------
// -----------------------------------------------------------------------------
// -----------------------------------------------------------------------------
// -----------------------------------------------------------------------------
// -----------------------------------------------------------------------------
// есть массив, вернуть массив уникальных и отсортированных. Сортировка в таком порядке:
// которые встречаются чаще в начале, которые меньше в конце
// ['banana', 'grapefruit', 'orange']
let words = ['banana', 'grapefruit', 'banana', 'grapefruit', 'banana', 'orange'];

let words2 = [
	'banana',
	'grapefruit',
	'banana',
	'grapefruit',
	'banana',
	'orange',
	'banana',
	'orange',
	'orange',
	'orange',
	'orange',
	'orange',
];

function sortArr(arrWords) {
	const arrObjects = arrWords.reduce((acc, current, ix, array) => {
		const obj = {};
		if (acc.find((i) => i.name === current)) {
			const index = acc.findIndex((i) => i.name === current);
			++acc[index].count;
		} else {
			obj.name = current;
			obj.count = 1;
			acc.push(obj);
		}
		return acc;
	}, []);
	const sortArr = arrObjects.sort((a, b) => b.count - a.count);
	const newArr = [];
	sortArr.map((i) => {
		newArr.push(i.name);
	});
	return newArr;
}

console.log(sortArr(words2));

// -----------------------------------------------------------------------------
// -----------------------------------------------------------------------------
// -----------------------------------------------------------------------------
// -----------------------------------------------------------------------------
// -----------------------------------------------------------------------------
