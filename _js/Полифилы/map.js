Array.prototype.myMap = function (callback) {
	const newArr = [];
	for (let i = 0; i < this.length; i++) {
		newArr.push(callback(this[i], i, this));
	}
	return newArr;
};

console.log([1, 2, 3, 4].myMap((i) => i * 2));
