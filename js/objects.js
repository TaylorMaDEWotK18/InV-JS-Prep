const belmont = {
	FirstName: "Trevor",
	Weapon: "whip",
	Secondary: ["Cross Boomerang", "Holy Water", "Dagger"],
	Age: 24,
}
belmont.Clan = "Brotherhood of Light"

console.log(belmont)

//========== Looping through an Object (for in)=======================
function vampireHunter(ob) {
	let items = ''
	for ( let val in ob) {
		items += `<li>${val}: ${ob[val]}</li> `
	}
	return items
}

document.querySelector('main').innerHTML = `
<ol>${vampireHunter(belmont)}</ol>`

// vampireHunter(belmont)