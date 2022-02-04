const Ajax = require('./async');

describe('Ajax: echo', () => {
	test('should return value async', async () => {
		const result = await Ajax.echo('some data');
		expect(result).toBe('some data');
	});

	test('should catch error with async', async () => {
		try {
			await Ajax.echo();
		} catch (e) {
			expect(e.message).toBe('error');
		}
	});

	test('should return value with promise', () => {
		return Ajax.echo('some data').then((data) => {
			expect(data).toBe('some data');
		});
	}); // без async await, с помощью promise

	test('should catch error with promise', () => {
		return Ajax.echo('some data').catch((err) => {
			expect(err).toBeInstanceOf(Error);
		});
	});
});
