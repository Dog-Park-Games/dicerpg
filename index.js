import characterData from "./data.js";
import Character from "./character.js";

document.getElementById("attack-button").addEventListener("click", attack);
const winnie = new Character(characterData.hero);
const squirrel = new Character(characterData.monster);

function attack() {
    winnie.getDiceHtml()
    squirrel.getDiceHtml()
    render()
}

function render() {
	document.getElementById("hero").innerHTML = winnie.getCharacterHtml();
	document.getElementById("monster").innerHTML = squirrel.getCharacterHtml();
}

render();
