import words from "./words.js"
import state from "./state.js";

export const tips = () => {
    const h2Tips = document.querySelector("h2");
    h2Tips.textContent = words[state.randomNumber].tips;
}