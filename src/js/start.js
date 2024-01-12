import { attemps } from "./attemps.js";
import { createSpanForWords, removeSpanForWords } from "./createSpanForWords.js";
import { randomNumber } from "./randomNumber.js"
import state from "./state.js";
import { wordSelect } from "./wordSelect.js"

export const start = () => {
    const button = document.querySelector(".startGame")

    button.addEventListener("click", (e) => {
        
        wordSelect()
        randomNumber();
        removeSpanForWords();
        createSpanForWords();
        attemps()
    })

}