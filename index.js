import characterData from "./data.js";
import Character from "./character.js";

document.getElementById("attack-button").addEventListener("click", attack);
const winnie = new Character(characterData.hero);
const squirrel = new Character(characterData.monster);

function attack() {
	winnie.getDiceHtml();
	squirrel.getDiceHtml();
	winnie.takeDamage(squirrel.currentDiceScore);
	squirrel.takeDamage(winnie.currentDiceScore);
	render();
	if (winnie.isDead || squirrel.isDead) {
		endGame();
	}
}

function render() {
	document.getElementById("hero").innerHTML = winnie.getCharacterHtml();
	document.getElementById("monster").innerHTML = squirrel.getCharacterHtml();
}

function endGame() {
	const endMessage =
		winnie.health === 0 && squirrel.health === 0
			? "Everyone died!"
			: squirrel.health > 0
			? "Squirrel wins!"
			: "Winnie wins!";

	const endEmoji = winnie.health > squirrel.health ? "🐶" : "☠️";

	document.body.innerHTML = `
        <div class="end-game">
            <h2>Game Over</h2>
            <h3>${endMessage}</h3>
            <p class="end-emoji">${endEmoji}</p>
        </div>
        `;
}

render();
