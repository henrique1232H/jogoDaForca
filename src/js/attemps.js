import state from "./state.js";

export const attemps = () => {
    const attemps = document.querySelector(".attemps");

    if(state.attempsBolean === false) {
        state.attemps--
    }

    attemps.textContent = ` Você tem ${state.attemps} tentativas!`

}