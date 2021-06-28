let a, b, rest;
[a, b] = [10, 20];
// console.log(a);
// console.log(b);

[a, b, ...rest] = [10, 20, 30, 40, 50];
console.log(a);
console.log(b);
console.log(rest);

[a, , , b] = [10, 20, 30, 40, 50];
console.log(a);
console.log(b);

const drawES2015Chart = ({
	size = "big",
	coords = { x: 0, y: 0 },
	radius = 25,
} = {}) => {
	console.log(size, coords, radius);
};
drawES2015Chart();
drawES2015Chart({ coords: { x: 18, y: 30 }, radius: 30 });
