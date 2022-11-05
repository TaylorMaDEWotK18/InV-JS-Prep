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

const whoIsBatman = ['Batman is in the'];
const wheresBat = ['the BatCave'];

const batsLocation = [ `${whoIsBatman} ${wheresBat}`];