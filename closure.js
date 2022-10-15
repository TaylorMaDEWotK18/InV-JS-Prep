let num = 500;
function cllnum() {
	console.log(num);
}
cllnum();

let son = 'I love my baby boy who is not such a baby anymore (sad face)';
function sonLove() {
	console.log(son);
}
sonLove();

//I wanted to create an example of how closure will and won't work
function innScp() {
	let exNum = 18;
	console.log(exNum);
}
innScp();
// console.log(exNum);

//Lets have some fun with closures with some math 
function makeAdder(x) {
	return function(y) {
		return x + y;
	}
}
const add3 = makeAdder(3);
console.log(add3(10));

function makeSubby(x) {
	return function(y) {
		return x - y;
	}
}
const sub7 = makeSubby(7);
console.log(sub7(5));

function makeMulti(x) {
	return function(y) {
		return x * y;
	}
}
const mul12 = makeMulti(12);
console.log(mul12(6));