function map(array, callback) {
	let result = [];
	for (let i = 0; i < array.length; i++) {
		result.push(callback(array[i]));
	}
	return result;
}

module.exports = { map };
