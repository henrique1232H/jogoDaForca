import state from "../state.js"


export const bodyOfHangman = (hangmanArray) => {
    if(state.attemps === 5) {
        hangmanArray[0].classList.remove("visibility")
    }

    if(state.attemps === 4) {
        hangmanArray[1].classList.remove("visibility")
    }

    if(state.attemps === 3) {
        hangmanArray[2].classList.remove("visibility")
    }

    if(state.attemps === 2) {
        hangmanArray[3].classList.remove("visibility")
    }

    if(state.attemps === 1) {
        hangmanArray[4].classList.remove("visibility")
    }

    if(state.attemps === 0) {
        hangmanArray[5].classList.remove("visibility")
    }

}

export const removeBodyForHangman = () => {
    console.log(state.bodyOfHangman)

    for(let i = 0; i < state.bodyOfHangman.length; i++) {
        state.bodyOfHangman[i].classList.add("visibility")
    }
}