class Ajax {
	static echo(data) {
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				if (data) {
					resolve(data);
				} else {
					reject(new Error('error'));
				}
			}, 500);
		});
	}
}

module.exports = Ajax;
