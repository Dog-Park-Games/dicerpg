import characterData from './data.js'
import { Character } from './character.js'



function render() {
    const winnie = new Character(characterData.hero)
    const squirrel = new Character(characterData.monster)
    
    document.getElementById("hero").innerHTML = winnie.getCharacterHtml()
    document.getElementById("monster").innerHTML =  squirrel.getCharacterHtml()

}
render()