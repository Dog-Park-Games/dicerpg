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

    Object.assign(this, data)

    this.getCharacterHtml = function() {

        const {id, name, avatar, health, diceCount} = this    
        const diceHtml = this.getDiceHtml(diceCount)

	    return `
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

    this.getDiceHtml = function(diceCount) {
        return getDiceRollArray(diceCount).map(function(num) {
            return `<div class="dice">${num}</div>`
            
        }).join('')  
        
    }
}

function getDiceRollArray(diceCount) {
    return new Array(diceCount).fill(0).map(function(){
        return Math.floor(Math.random() * 6 + 1) 
    })
}

function render() {
    const winnie = new Character(hero)
    const squirrel = new Character(monster)
    
    document.getElementById(winnie.id).innerHTML = winnie.getCharacterHtml()
    document.getElementById(squirrel.id).innerHTML =  squirrel.getCharacterHtml()

}
render()



