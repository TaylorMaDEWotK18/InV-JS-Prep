
let x = dadsFunc(18, 2);

function dadsFunc(a, b) {
		return a * b;
}

function toCelsius(fahrenheit) {
	return (5/9) * (fahrenheit - 32);
}
let temp = `It's currently is ${toCelsius(86)} degrees outside!`;

// if (toCelsius() <= 100) {
// 	alert('DAMN its cold outside!');
// } else {
// 	alert('Its feelin suuuper nice out!');
// }

toCelsius(200);

//Exercising Higher Order Functions

const consoles = ['SNES', 'PS', 'N64', 'PS5'];

function conFun(arr, fn) {
	for (let i = 0; i<arr.length; i++) {
		fn(arr[i]);
	}
}

function addCon(name) {
	console.log("COOL! a " + name);
}

conFun(consoles, addCon);