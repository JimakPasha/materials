const { sum, nativeNull } = require('./intro');

describe('Sum function: ', () => {
	test('should return sum of two values', () => {
		expect(sum(1, 3)).toBe(4); // toBe характерен для примитивов
		expect(sum(1, 3)).toEqual(4); // toEqual характерен для объектов
	});

	test('should return value correctly comparing to other values', () => {
		expect(sum(2, 3)).toBeGreaterThan(4); // больше чем
		expect(sum(2, 3)).toBeGreaterThanOrEqual(5); // больше чем + сравниваем на равенство
		expect(sum(2, 3)).toBeLessThan(10); // меньше чем
		expect(sum(2, 3)).toBeLessThanOrEqual(5); // меньше чем + сравниваем на равенство
	});

	// не совсем корректно работает с float значениями поэтому:
	test('should sum 2 float values correctly', () => {
		expect(sum(0.1, 0.2)).toBeCloseTo(0.3);
	});
});

describe('Native null function: ', () => {
	test('should return false value null', () => {
		expect(nativeNull()).toBe(null);
		expect(nativeNull()).toBeNull();
		expect(nativeNull()).toBeFalsy(); // должно быть фолси
		expect(nativeNull()).toBeDefined(); // должно быть определено значением каки-то (быть не undefined)
		expect(nativeNull()).not.toBeTruthy();
		expect(nativeNull()).not.toBeUndefined();
	});
});
