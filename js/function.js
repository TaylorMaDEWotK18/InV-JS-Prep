
let x = dadsFunc(18, 2);

function dadsFunc(a, b) {
		return a * b;
}

function toCelsius(fahrenheit) {
	return (5/9) * (fahrenheit - 32);
}
let temp = `It's currently is ${toCelsius(86)} degrees outside!`;

if (toCelsius() <= 100) {
	alert('DAMN its cold outside!');
} else {
	alert('Its feelin suuuper nice out!');
}

toCelsius(200);