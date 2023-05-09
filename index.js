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

function Character(data) {
    this.id = data.id;
    this.name = data.name;
    this.avatar = data.avatar;
    this.health = data.health;
    this.diceCount = data.diceCount;
    this.getCharacterHtml = function() {
        const {id, name, avatar, health, diceCount} = this    
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
}





function getDiceRollArray(diceCount) {
    return new Array(diceCount).fill(0).map(function(){
        return Math.floor(Math.random() * 6 + 1) 
    })
}

function getDiceHtml(diceCount) {
    return getDiceRollArray(diceCount).map(function(num) {
        return `<div class="dice">${num}</div>`
        
    }).join('')    
}

const winnie = new Character(hero)
const squirrel = new Character(monster)
console.log(winnie)
winnie.getCharacterHtml()
squirrel.getCharacterHtml()
