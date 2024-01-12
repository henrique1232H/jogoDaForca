import state from "./state.js"


export const checkLetters = () => {

    console.log(state.word)

    if(state.word === state.textInsert) {
        alert("LO")
        state.attempsBolean = true
    }

    if(state.word !== state.textInsert) {
        state.attempsBolean = false
    }

    console.log(state.attemps)
    console.log(state.wordArray)

}