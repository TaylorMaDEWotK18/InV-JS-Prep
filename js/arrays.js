const games = ['MGS','God of War','Prodeus','RE']
console.log(games[2]);
console.log(games.length);
games.push('Final Fantasy');
games.unshift('Donkey Kong');

//---------------------------------------------------------

const numbers = [100, 200, 300, 400, 500];

let firstOut = numbers.unshift();
let lastIn = numbers.pop();

games.unshift('Ghost Song');
let newGame = games.shift();

//------ Lets practice the spread operator ----

const middle = ['lettuce','patty','cheese'];
const burger = ['top bun', ...middle, 'bottom bun']

//------- Lets iterate through some elements ---------

// const colors = ['blue', 'green', 'red', 'purple']

// function callColors(arr) {
// 	let items = '';
// 	for (let x = 0; x < arr.length; x++) {
// 		items += `<li>${arr[x]}</li>`;	
// 		}
// 		return items;
// 	}

// document.querySelector('main').innerHTML =
//  `<ol>${callColors(colors)}</ol>`;

//--------- I want to build a loop to display in ordered list on the page -----

// const reCharacters = ['Leon','Chris','Wesker','Jill','Claire']

// function createReList(arr) {
// 	let items = '';
// 	for (let x = 0; x < arr.length; x++) {
// 		items += `<li>${arr[x]}</li>`;
// 	}
// 	return items;
// }

// document.querySelector('main').innerHTML =
// `<ol>${createReList(reCharacters)}</ol>`;

//===========================

const systems = ['SNES','Sega','PS1','Dreamcast']

// function sickSystems(arr) {
// 	let items = '';
// 	for(let x = 0; x < arr.length; x++) {
// 		items += `<li>${arr[x]} is one of the sickest systems EVER!</li>`;
// 	}
// 	return items;
// }

// document.querySelector('main').innerHTML = `
// 	<ol>${sickSystems(systems)}
// 	</ol>
// `

//==========
// const moreVanias = ['Sundered','BloodStained']
// const vanias = ['Castlevania','Metroid', ...moreVanias, 'Hollow Knight','Ghost Song']

// function loopVanias(arr) {
// 	let arrObjects = '';
// 	for (let x = 0; x < arr.length; x++ ) {
// 		arrObjects += `<li>${arr[x]} is one of the best!</li>`
// 	}
// 	return arrObjects;
// }

// vanias.unshift('BroForce')
// document.querySelector('main').innerHTML = `
// <ol>${loopVanias(vanias)}</ol>`

//----------------------------------------------

const turtles = ['Mikey','Raph','Leo','Donni']

//===== FUNCTION DECLARATION VERSION ====

// function shellShock(arr) {
// 	let items = '';
// 	for (let x = 0; x < arr.length; x++) {
// 		items += `<li> ${turtles[x]} is the most radical!`
// 	}
// 	return items;
// }

//====== ARROW VERSION ==========

// const shellShock = arr => {
// 	let items = ``;
// 	for ( let x = 0; x < arr.length; x++) {
// 		items += `<li>${turtles[x]} is the sickest turtle!</li>`
// 	}
// 	return items;
// }

// document.querySelector('main').innerHTML = `
// <ol>${shellShock(turtles)}</ol>`;

function shellShock(arr) {
	items = '';
	for (let x = 0; x < arr.length; x++) {
		items += `<li>${arr[x]} is the greatest turtle!</li>`
	}
	return items;
}

// function turtlePower(name) {
// 	items += ` ${name} is the greatest turtle!`
// }

document.querySelector('main').innerHTML = `
<ol>${shellShock(turtles)}</ol>`;

const planets = ['Earth','Mars','Saturn','Mercury','Jupiter','Venus','Uranus','Neptune'];

planets.join(', ');

// console.log(planets);

// ======= Search list challenge ==========

const inStock = ['grapes','peaches','strawberries','kiwi','mango','blackberries']

const ask = prompt('Which fruit would you like?');

let message;

if ( inStock.includes(ask)) {
	return message = `YES! That's in stock!`
} else {
	return message = `No sorry, we're fresh out of that!`
}