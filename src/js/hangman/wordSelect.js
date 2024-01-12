import state from "../state.js";
import { takeForm } from "./takeForm.js";
import { tips } from "./tips.js";
import words from "../words.js";

export const wordSelect = () => {

    let word = words[state.randomNumber].value;
    
    word = String(word).toLocaleLowerCase();
    state.word = word

    let wordArray = word.split("");    
    state.wordArray = wordArray;
    state.textInsert = String(state.textInsert).toLocaleLowerCase();


    tips();
    takeForm();
}