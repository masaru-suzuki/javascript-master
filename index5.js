let a = [[1], [2], [3]];
let b = [...a];
console.log(a);
console.log(b);
b.shift().shift();
console.log(a);
console.log(b);

// Rest Parameters
const sum = (...theArgs) => {
	return theArgs.reduce((pre, crr) => {
		return pre + crr;
	});
};

// normal
function f(a, ...args) {
	// let args = Array.prototype.slice.call(arguments, f.length);
	console.log(args);
}
console.log(sum(1, 2, 3, 4, 5));
f(1, 2, 3);
