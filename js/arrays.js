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

function callColors() {
for (let x = 0; x < colors.length; x++) {
	console.log(colors[x]);	
	}
}

callColors(colors.push('teal'), colors.unshift('black'));