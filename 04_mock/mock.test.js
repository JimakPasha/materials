const { map } = require('./mock');

describe('Map function', () => {
	let array;
	let fn;

	beforeEach(() => {
		array = [1, 2, 3, 5];
		fn = jest.fn((x) => x ** 2); // псевдофункция с помощью jest
		map(array, fn);
	});

	test('should call callback', () => {
		expect(fn).toBeCalled();
	});

	test('should call callback 4 times', () => {
		expect(fn).toBeCalledTimes(4);
		expect(fn.mock.calls.length).toBe(4); // тоже самое что и код строчкой выше
	});

	test('should pow each element', () => {
		console.log(fn.mock);
		expect(fn.mock.results[0].value).toBe(1);
		expect(fn.mock.results[1].value).toBe(4);
		expect(fn.mock.results[2].value).toBe(9);
		expect(fn.mock.results[3].value).toBe(25);
	});

	test('should fn work', () => {
		fn.mockReturnValueOnce(100).mockReturnValueOnce(200).mockReturnValue('32'); // при первом вызове 100, втором 200, при остальных 32
		expect(fn()).toBe(100);
		expect(fn()).toBe(200);
		expect(fn()).toBe('32');
		expect(fn()).toBe('32');
	});
});
