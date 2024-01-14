
import state from "../state.js"
import { bodyOfHangman } from "./bodyOfHangman.js";
import { removeSpanForWords } from "./createSpanForWords.js";


const form = document.querySelector("form");
const inputForm = form.querySelector("input");

export const checkLetters = () => {
    const body = []

    const h2Attemps = document.querySelector(".attemps");
    const span = document.querySelector(".letters");
    const button = document.querySelector(".startGame");
    const hangman = document.querySelectorAll(".hangman span");
    const hangmanArray = Array.from(hangman);
    state.bodyOfHangman = hangmanArray

    const textInsertSplit = state.textInsert.split("")

    if(state.word === state.textInsert) {
        alert("Acertou")
        button.classList.remove("visibility")
        button.textContent = "Recomeçar"
        form.classList.add("visibility");
    }

    if(state.word !== state.textInsert) {
        state.attemps--

        // for(let i = textInsertSplit; i < state.wordArray.length;i++) {
        //     if(textInsertSplit.includes([i]) === state.wordArray.includes([i])) {
        //         console.log("Existe esse", i)
        //     }
  
        h2Attemps.textContent = `Você tem ${state.attemps} tentativas!`
        
    }


    bodyOfHangman(hangmanArray)

    if(state.attemps <= 0) {


        state.attemps = 5;

        removeSpanForWords()
        
        span.innerHTML = `A resposta é ${state.word}`
        h2Attemps.textContent = `Que pena, não vou dessa vez!`;
        button.textContent = "Recomeçar";
        inputForm.value = ""
        
        form.classList.add("visibility");
        button.classList.remove("visibility");

    }


}