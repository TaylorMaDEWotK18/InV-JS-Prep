const belmont = {
	FirstName: "Trevor",
	Weapon: "Whip",
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

// document.querySelector('main').innerHTML = `
// <ol>${vampireHunter(belmont)}</ol>`

// vampireHunter(belmont)

//---------------------------------

const godOfWar = {
	Name: "Kratos",
	Weapon: "Blades of Chaos",
	Age: 47,
	Kin: "Atreus"
}

function loopGod(arr) {
	let items = ""
	for ( let val in arr) {
		items += `<li>${val}: ${arr[val]}</li>`
	}
	return items
}

document.querySelector('main').innerHTML = `<ol>${loopGod(godOfWar)}</ol>
<p>Everything we know about ${godOfWar.Name} is that he leaves a bloody wake with the use of his ${godOfWar.Weapon}. At the ripe age of ${godOfWar.Age}, he passes on his lineage by his son, ${godOfWar.Kin}. Long live the God of War!</p>`