
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

//Lets do the exercise again, no looking

const coolGames = ['Resident Evil 2','God of War','MegaMan','Zelda'];

function games(arr, fn) {
	for (let g = 0; g < arr.length; g++) {
		fn(arr[g]);
	}
}

function sayGames(name) {
	console.log(name + ' is SO SICK!');
}

games(coolGames, sayGames);

// Multiple returns in function

// function isFieldEmpty() {
// 	const field = document.querySelector(`#info`);
// 	if (field.value === '') {
// 		return true
// 	} else {
// 		return false;
// 	}
// }

// const emptyField = isFieldEmpty();

// if (emptyField === true) {
// 	alert('HEY! Write something first fool!');
// } else {
// 	alert('Please spell that correctly');
// }

//Higher order function 

const rePeople = ['Leon','Chris','Claire','Jill']

function reFun(arr, fn) {
	for (let r = 0; r < arr.length; r++) {
		fn(arr[r]);
	}
}

function reMes(name) {
	console.log(`${name} has to be one of the dopest!`);
}
reFun(rePeople, reMes);

// Closure function
let score = 120;

function haveFun(a) {
	return score + a;
}

console.log(haveFun(5));

const colorCode = 16;

function addColors(a) {
	return a * colorCode;
}

console.log(addColors(4));

// Higher order function practice

const apostles = ['James','Luke','John','Matt']

function bosses(arr, fn) {
	for(let x = 0; x < arr.length; x++) {
		fn(arr[x]);
	}
}

function bossMes(name) {
	console.log(`${name} was an amazing man!`);
}

bosses(apostles, bossMes);

function getMyDrank(drink) {
	console.log(`Hey! Your ${drink} is on the way!`);
}

getMyDrank('Raspberry Tea');

function temper(fahrenheit) {
	return console.log((5/9) * (fahrenheit - 32));
}

temper(122);