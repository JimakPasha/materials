export const getAllUsers = () => {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve([
				{ id: 345, name: 'Rick', age: 15, isRegistration: true },
				{ id: 17, name: 'Martin', age: 30, isRegistration: false },
				{ id: 6, name: 'Kim', age: 65, isRegistration: true },
				{ id: 134, name: 'Viktor', age: 25, isRegistration: true },
				{ id: 7, name: 'Jack', age: 25, isRegistration: true },
				{ id: 34, name: 'Kim', age: 16, isRegistration: false },
			]);
		}, 1000);
	});
};
