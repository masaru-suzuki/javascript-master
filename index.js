const data = [1, 4, 2, 5, 6];
const fruits = { banana: "バナナ", apple: "りんご", orange: "オレンジ" };

let keyFruits = Object.keys(fruits);
// console.log(keyFruits);
for (let i = 0; i < keyFruits.length; i++) {
	// console.log(i, fruits[keyFruits[i]]);
}

Object.prototype.additinalFn = function () {};
// console.log(fruits);
for (let i in data) {
	if (data.hasOwnProperty(i)) {
		// console.log(i, data[i]);
	}
}
for (let i in fruits) {
	if (fruits.hasOwnProperty(i)) {
		// console.log(i, fruits[i]);
	}
}

for (let i of data) {
	// console.log(i);
}

// console.log(keyFruits);
for (let i of keyFruits) {
	// console.log(i, fruits[i]);
}
const arr = Object.entries(fruits);
// console.log(arr);
for (let [key, val] of arr) {
	console.log(key);
	console.log(val);
}
