import characterData from "./data.js";
import Character from "./character.js";

let monstersArray = ["squirrel", "bird", "tractor"];
let isWaiting = false;
const winnie = new Character(characterData.hero);

function getNewMonster() {
	const nextMonsterData = characterData[monstersArray.shift()];
	return nextMonsterData ? new Character(nextMonsterData) : {};
}

function attack() {
	if (!isWaiting) {
		winnie.setDiceHtml();
		monster.setDiceHtml();
		winnie.takeDamage(monster.currentDiceScore);
		monster.takeDamage(winnie.currentDiceScore);
		render();

		if (winnie.isDead) {
			endGame();
		} else if (monster.isDead) {
			isWaiting = true;
			if (monstersArray.length > 0) {
				setTimeout(() => {
					monster = getNewMonster();
					render();
					isWaiting = false;
				}, 1500);
			} else {
				endGame();
			}
		}
	}
}

function render() {
	document.getElementById("hero").innerHTML = winnie.getCharacterHtml();
	document.getElementById("monster").innerHTML = monster.getCharacterHtml();
}

function endGame() {
	isWaiting = true;
	const endMessage =
		winnie.health === 0 && monster.health === 0
			? "Everyone died!"
			: monster.health > 0
			? `${monster.name} wins!`
			: "Winnie wins!";

	const endEmoji = winnie.health > monster.health ? "🐶" : "☠️";
	setTimeout(() => {
		document.body.innerHTML = `
			<div class="end-game">
				<h2>Game Over</h2> 
				<h3>${endMessage}</h3>
				<p class="end-emoji">${endEmoji}</p>
			</div>
		`;
	}, 1500);
}

document.getElementById("attack-button").addEventListener("click", attack);

let monster = getNewMonster();

render();
