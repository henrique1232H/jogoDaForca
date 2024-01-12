import { attemps } from "./showAttemps.js";
import { createSpanForWords, removeSpanForWords } from "./createSpanForWords.js";
import { randomNumber } from "./randomNumber.js"
import state from "./state.js";
import { wordSelect } from "./wordSelect.js"

export const start = () => {
    const button = document.querySelector(".startGame");
    const form = document.querySelector("form")

    button.addEventListener("click", (e) => {

        form.classList.remove('visibility')
        
        wordSelect()
        randomNumber();
        removeSpanForWords();
        createSpanForWords();
        attemps()
    })

}