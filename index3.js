normalFn = {
	id: 42,
	counter: function () {
		console.log(this);
		setTimeout(() => {
			console.log(this);
		}, 1000);
	},
};
normalFn.counter();
