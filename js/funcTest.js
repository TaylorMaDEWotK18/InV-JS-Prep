const main = document.querySelector('main');
const randomNumber = getRandomNumber(10);
let guess = '';
let counter = 0;


function getRandomNumber(upper) {
	return Math.floor(Math.random() * upper) + 1;
}

for (let x = 0; x <= 10; x++) {
	guess = prompt(`Pick a number between 1 and 10`);
	counter ++;
	if (parseInt(guess) === randomNumber) {
		break;
	}
}
const congrat = `Awesome! You guessed the right number of ${randomNumber} and it took you ${counter} tries to get it!`;


main.innerHTML = congrat;