import {  error } from '@pnotify/core';
import '@pnotify/core/dist/BrightTheme.css';


const keyEl = document.querySelector('.key')
console.log(keyEl);
const keys = [
    "q",
    "l",
    "c",
    "m",
    "i",
    "o",
]

let currentKeyIndex = Math.floor(Math.random() * keys.length)
let keyText = keys[currentKeyIndex] 
keyEl.textContent = keyText

document.addEventListener("keydown", onKeyDown)

function onKeyDown(event) {
    
    if(event.key === keys[currentKeyIndex]) {
        currentKeyIndex += 1;
        keyEl.textContent = keys[currentKeyIndex];

    } else {
        error({
            text: "Ви натиснули не вірну клавішу"
          });
    }
}
