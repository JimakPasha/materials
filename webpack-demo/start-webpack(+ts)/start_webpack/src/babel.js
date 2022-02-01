async function start() {
	await Promise.resolve('async is working');	
}

console.log(start().then());
