import { createSpanForWords, removeSpanForWords } from "./hangman/createSpanForWords.js";
import state from "./state.js";
import {randomNumber} from "./randomNumber.js"
import { wordSelect } from "./hangman/wordSelect.js"
import { spanClick } from "./hangman/spanclick.js";
import { removeBodyForHangman } from "./hangman/bodyOfHangman.js";

export const start = () => {
    const button = document.querySelector(".startGame");
    const form = document.querySelector("form");
    const h2Attemps = document.querySelector(".attemps")

    button.addEventListener("click", (e) => {

        form.classList.remove('visibility');
        button.classList.add("visibility")
        h2Attemps.classList.remove("visibility")
        
        h2Attemps.textContent = `Você tem ${state.attemps} tentativas!`


        removeBodyForHangman()
        wordSelect()
        removeSpanForWords();
        createSpanForWords();
        spanClick();
        randomNumber()
    })

}