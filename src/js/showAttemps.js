import { changeAttemps } from "./changeAttemps.js";
import state from "./state.js";

export const attemps = () => {
    const attemps = document.querySelector(".attemps");



    attemps.textContent = ` Você tem ${state.attemps} tentativas!`
    changeAttemps()

}