import { attemps } from "./showAttemps.js";
import { checkLetters } from "./checkLetters.js";
import state from "./state.js"
import { changeAttemps } from "./changeAttemps.js";

const form = document.querySelector("form");


export const takeForm = () => {
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        let value = document.querySelector("form input").value;
        
        if(value === "") return;

        state.textInsert = `${value}`;

        checkLetters()
    })
}