//だめパターン
let num = 0;
const increment = () => {
	num += 1;
	console.log(num);
};
// increment();
// increment();
// num = 10;
// increment();

// OKパターン

let inc = (function () {
	let counter = 0;
	return function () {
		counter += 1;
		console.log(counter);
	};
})();
inc();
inc();
inc.counter = 20;
inc();

const addStirngFactory = (tail) => {
	function concat(str) {
		return str + tail;
	}
	return concat;
};

let addAs = addStirngFactory("AAAA");
let addBs = addStirngFactory("BBBB");

let str = "Tom";
str = addAs(str);
console.log(str);
