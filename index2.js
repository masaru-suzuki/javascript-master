function greet() {
	let hi = `Hi ${this.name}`;
	// console.log(hi);
	console.log(arguments);
	let slicedArr = [].slice.call(arguments);
	console.log(slicedArr);
}

let obj = { name: "Tom" };

greet.call(obj, 1, 2, 3, "ter");
greet.apply(obj, [1, 2, 3, "ter"]); //引数を配列で管理するならapply

const arr = [1, 6, 6, 16];
console.log(Math.min(...arr));
console.log(Math.min.apply(null, arr)); //第に引数は配列

let myObj = {
	id: 42,
	print() {
		console.log(this);
		setTimeout(
			function () {
				console.log(this);
			}.bind(this),
			1000
		);
	},
};
myObj.print();
