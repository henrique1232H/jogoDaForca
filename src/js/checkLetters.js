import { changeAttemps } from "./changeAttemps.js"
import state from "./state.js"


export const checkLetters = () => {

    console.log(state.word)

    if(state.word === state.textInsert) {
        alert("LO")
    }

    if(state.word !== state.textInsert) {
        changeAttemps()
    }

    console.log(state.attemps)
    console.log(state.wordArray)

}