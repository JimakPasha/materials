// Защита типа in действует как сужающее выражение для типов.

interface A { a: number };
interface B { b: string };

function foo(x: A | B) {
    if ("a" in x) {
        return x.a;
    }
    return x.b;
}

foo({a: 1}); // 1