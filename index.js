const hero = {
	id: "hero",
	name: "Winnie",
	avatar: "images/winnie.png",
	health: "60",
    diceCount: 3
};

const monster = {
	id: "monster",
	name: "Squirrel",
	avatar: "images/squirrel.jpg",
	health: "10",
    diceCount: 1
};

function renderCharecter(data) {
	const { id, name, avatar, health, diceCount } = data;
    
    const diceHtml = getDiceHtml(diceCount)

	document.getElementById(id).innerHTML = `
        <div class="character-card">
            <h4 class="name"> ${name} </h4>
            <img class="avatar" src="${avatar}" />
            <div class="health">health: <b> ${health} </b></div>
            <div class="dice-container">
                 ${diceHtml}
             </div>
        </div>
        `;
}

function getDiceRollArray(diceCount) {
    let newDiceRolls = []
    for (let i = 0; i < diceCount; i ++) {        
        newDiceRolls.push(Math.floor(Math.random() * 6 + 1))        
    }
    return newDiceRolls;

}

function getDiceHtml(diceCount) {
    return getDiceRollArray(diceCount).map(function(num) {
        return `<div class="dice">${num}</div>`
        
    }).join('')    
}

renderCharecter(hero);
renderCharecter(monster);
