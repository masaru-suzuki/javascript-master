let myObj = {
	id: 2,
	printId() {
		console.log(this.id);
		console.log(this);
	},
};
myObj.printId();

const sayFoo = () => {
	console.log(this["foo"]);
};

foo = "foo";

const mySecondObj = {
	foo: "I am inthe obj",
	sayFoo,
};
sayFoo();

function MyObj(id) {
	this.id = id;
}

const newInstans = new MyObj(5);

MyObj.prototype.printId = function (id) {
	console.log(this.id);
};
// インスタンス化されたオブジェクトを指す

const outer = {
	func1: function () {
		console.log(this);

		const func2 = (function () {
			console.log(this);

			const func3 = (function () {
				console.log(this);
			})();
		})();
	},
};
outer.func1();
