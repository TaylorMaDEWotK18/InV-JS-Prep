const belmont = {
	firstName: "Trevor",
	weapon: "whip",
	secondaryW: ["Cross Boomerang", "Holy Water", "Dagger"],
	age: "unknown",
}
belmont.clan = "Brotherhood of Light"

// console.log(belmont)

//========== Looping through an Object (for in)=======================
function vampireHunter(ob) {
	let items = ''
	for ( let traits in ob) {
		items += `<li>Here are all the values: ${ob[traits]}</li> `
	}
	return items
}

document.querySelector('main').innerHTML = `
<ol>${vampireHunter(belmont)}</ol>`

// vampireHunter(belmont)