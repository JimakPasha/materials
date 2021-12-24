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
