import state from "../state.js"


const divLetters = document.querySelector(".letters");
let span;
let array = []



export const createSpanForWords = () => {
    
    for(let i = 0; i < state.wordArray.length; i++){
        
        array.push(span = document.createElement("span"));
        span.textContent = "_";
        
        
        divLetters.appendChild(array[i])
        
        
    }
    state.arraySpan = array;
}


export const removeSpanForWords = () => {
    for(let i = 0; i < state.wordArray.length; i++){
        state.arraySpan.pop([i]);
        divLetters.innerHTML = "";
    }
}
