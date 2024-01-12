
import state from "./state.js"

const form = document.querySelector("form")

export const checkLetters = () => {

    const h2Attemps = document.querySelector(".attemps")

    console.log(state.word)

    if(state.word === state.textInsert) {
        alert("LO")
    }

    if(state.word !== state.textInsert) {
        state.attemps--
        h2Attemps.textContent = `Você tem ${state.attemps} tentativas!`
        
    }

    if(state.attemps === 0) {
        state.attemps = 5;
        form.classList.add("visibility")

    }

    console.log(state.wordArray)

}