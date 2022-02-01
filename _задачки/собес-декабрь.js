var value = 2;

function showValue() {
     console.log(`showValue ${value}`);
}

function wrapper() {
     var value = 3;
     console.log(`wrapper ${value}`);
     showValue();
}

wrapper();

//////////////////////////////////////////////
//////////////////////////////////////////////

var a = {
    firstName: ‘Bill’,
    sayName: function() {
        console.log(‘Hi! I am ’ + this.firstName);
    }
};


a.sayName();

var b = a.sayName;

b();

a.sayName.bind({ firstName: ‘Boris’ })();

a.sayName();

//////////////////////////////////////////////////////////////////////////////////////
function foo() {
     console.log(this);
}

function doFoo(fn) {
    fn();
}

var a = {foo: foo};

doFoo(a.foo);
/////////////////////////////////////////////////////////////

console.log(‘start’);

setTimeout(() => console.log(‘timeout’), 0);

new Promise((resolve) => {
    
    console.log(‘promise constructor’);
    
    resolve();
}).then(() => console.log(‘promise’)
.then(() => console.log(‘promise2’)
.then(() => console.log(‘promise3’);

console.log(‘final’);

start
final
promise constructor
p
p2
p3
timeout


////////////////////////////////

async function foo() {
    const a = await fetch('/3332323232');
    const b = await fetch('/ewrewrewrewrwe');
    const c = await fetch('/dfsdfdsfsdfdsfsdf');

    return [a, b, c];
}


/////////////////////////////////////////////////////
////////////////////////////////////////////////////

// Написать полифил для some

// [2, 5, 8, 1, 4].some((element) => element > 10);  // false

// [12, 5, 8, 1, 4].some((element) => element > 10); // true

Array.prototype.some = 












/////////////////////////////////////////////////////
////////////////////////////////////////////////////

function validator(str) {
    const arr = str.split('');
    const stack = [];
    arr.forEach(i => {
        if (i === '(' || i === '[' || i === '{') {
            stack.push(i);
        } else {
            
        }
        
    })
}

((]
validator('()'); // true
validator('()[]'); // true
validator('()[]{}'); // true
validator('()[]{'); // false
validator('{]'); // false
validator('({)}'); // false
validator('([{}])'); // true
validator('(([{}])'); // false





////////////////////////////////////////////////////////
////////////////////////////////////////////////////////
////////////////////////////////////////////////////////
////////////////////////////////////////////////////////
////////////////////////////////////////////////////////
////////////////////////////////////////////////////////
////////////////////////////////////////////////////////
////////////////////////////////////////////////////////
////////////////////////////////////////////////////////
////////////////////////////////////////////////////////
////////////////////////////////////////////////////////
////////////////////////////////////////////////////////
////////////////////////////////////////////////////////
////////////////////////////////////////////////////////
////////////////////////////////////////////////////////
////////////////////////////////////////////////////////


class Foo {
    constructor() {
        this.id = ‘foo’;
        this.print();
    }

    print() {
        console.log(‘foo ’ + this.id);
    }
}

class Bar extends Foo {
    constructor() {
        super();
        this.id = ‘bar’;
        this.print();
        super.print();
    }
    

    print() {
        console.log(‘bar ’ + this.id);
    }
}

new Bar();
///////////////////////////////////////////////////////////////

// Есть две функции left(Быстрая), right(не очень)
// left может вернуть объект {statusCode: 404};
// В этом случае ответ от right уже не нужен

// Как сделать наиболее оптимально вызовы этих функций

async function left() {
     const response = await fetch('http://httpbin.org/status/' + Math.random() > 0.5 ? '200' : '404');

     return response.status;
}


async function right() {
     const response = await fetch('http://httpbin.org/delay/9');

     return response.status;
}
