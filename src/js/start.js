import { createSpanForWords, removeSpanForWords } from "./createSpanForWords.js";
import { randomNumber } from "./randomNumber.js"
import state from "./state.js";
import { wordSelect } from "./wordSelect.js"

export const start = () => {
    const button = document.querySelector(".startGame");
    const form = document.querySelector("form");
    const h2Attemps = document.querySelector(".attemps")

    button.addEventListener("click", (e) => {

        state.attemps = 5

        form.classList.remove('visibility');
        button.classList.add("visibility")
        h2Attemps.classList.remove("visibility")

        wordSelect()
        randomNumber();
        removeSpanForWords();
        createSpanForWords();
    })

}