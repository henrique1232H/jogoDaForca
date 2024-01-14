import state from "../state.js";
import { createSpanForWords } from "./createSpanForWords.js";

export const spanClick = () => {
    const div = document.querySelector(".letters");
    div.setAttribute("contenteditable", true)
    
    div.addEventListener("focus", () => {
        div.innerHTML = "";
    })


    div.addEventListener("blur", () => {
        const array = div.textContent.split("");
        
        if(array.length > state.arraySpan.length) {
            return;
        }
        
        div.innerHTML = "";
        createSpanForWords();
        

    })
}