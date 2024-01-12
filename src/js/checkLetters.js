
import state from "./state.js"

const form = document.querySelector("form");
const button = document.querySelector(".startGame")

export const checkLetters = () => {

    const h2Attemps = document.querySelector(".attemps");
    const span = document.querySelector(".letters");

    const textInsertSplit = state.textInsert.split("")

    if(state.word === state.textInsert) {
        alert("LO")
    }

    if(state.word !== state.textInsert) {
        state.attemps--

        // for(let i = textInsertSplit; i < state.wordArray.length;i++) {
        //     if(textInsertSplit.includes([i]) === state.wordArray.includes([i])) {
        //         console.log("Existe esse", i)
        //     }
        // }


        h2Attemps.textContent = `Você tem ${state.attemps} tentativas!`
        
    }

    if(state.attemps < 0) {
        state.attemps = 5;
        h2Attemps.textContent = `Você tem 5 tentativas!`;
        form.classList.add("visibility");
        button.classList.remove("visibility");

    }


}