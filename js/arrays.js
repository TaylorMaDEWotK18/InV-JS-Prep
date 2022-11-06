const games = ['MGS','God of War','Prodeus','RE']
console.log(games[2]);
console.log(games.length);
games.push('Final Fantasy');
games.unshift('Donkey Kong');

//---------------------------------------------------------

const numbers = [100, 200, 300, 400, 500];

let firstOut = numbers.shift();
let lastIn = numbers.pop();

games.unshift('Ghost Song');
let newGame = games.shift();

numbers.shift(18);

//------ Lets practice the spread operator ----

const middle = ['lettuce','patty','cheese'];
const burger = ['top bun', ...middle, 'bottom bun']

//------- Lets iterate through some elements ---------

const colors = ['blue', 'green', 'red', 'purple']

function callColors(arr) {
	let items = '';
	for (let x = 0; x < arr.length; x++) {
		items += `<li>${arr[x]}</li>`;	
		}
		return items;
	}

document.querySelector('main').innerHTML =
 `<ol>${callColors(colors)}</ol>`;

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