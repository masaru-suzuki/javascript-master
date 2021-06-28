let str = `Hello`;
let name = "Tom";
let greet = `Hello\n    ${name}`;
// console.log(greet);

const tmp = (strings, ...values) => {
	console.log(strings);
	console.log(values);
	return strings.reduce((accu, str, i) => {
		console.log(str);
		console.log(accu);
		let val = values[i] ? `<b>${values[i]}</b>` : "";
		console.log(val);
		console.log(`${accu}${str}${val}`);
		return `${accu}${str}${val}`;
	});
};
const str1 = "Bob";
const str2 = "Tom";
const str3 = "Keven";
const result = tmp`${str1} and ${str2}`;

// console.log(result);
