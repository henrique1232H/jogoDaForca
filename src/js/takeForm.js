import { checkLetters } from "./checkLetters.js";
import state from "./state.js"
const form = document.querySelector("form");


export const takeForm = () => {
    form.addEventListener("submit", (e) => {
        e.preventDefault();

        clearTimeout(state.timeout)
        
        let value = document.querySelector("form input").value;
        
        if(value === "") return;

        state.textInsert = `${value}`;

        state.timeout = setTimeout(() => {checkLetters()}, 50);
    })
}