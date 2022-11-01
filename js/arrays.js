const games = ['MGS','God of War','Prodeus','RE']
console.log(games[2]);
console.log(games.length);
games.push('Final Fantasy');
games.unshift('Donkey Kong');

const main = document.querySelector('main');
const randomNumber = getRandomNumber(10);
let guess;

function getRandomNumber(upper) {
	return Math.floor(Math.random() * upper) + 1;
}

for (let x = 0; x <= 10; x++) {

}


//main.innerHTML = guess;