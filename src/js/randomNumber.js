import words from "./words.js";
import state from "./state.js"

export const randomNumber = () => {
    const random = Math.round(Math.random() * (words.length - 1) - 0);
    state.randomNumber = random;
    console.log(state.randomNumber)

}