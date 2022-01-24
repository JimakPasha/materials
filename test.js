function moveTen(string) {
	const newArr = string.split('').map((i) => {
		const number = i.charCodeAt() + 9;
		if (number > 122) {
			return number - 122 + 97;
		}
		return number + 1;
	});
	return String.fromCharCode(...newArr);
}
console.log(moveTen('testcase'));

console.log('z'.charCodeAt());
