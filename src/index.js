import {  error } from '@pnotify/core';
import '@pnotify/core/dist/BrightTheme.css';


const keyEl = document.getElementById("#key")
const keys = [
    "q",
    "w",
    "e",
    "r",
    "t",
    "y",
]

let currentKeyIndex = Math.floor(Math.random() * keys.length)
keyEl.textContent = keys[currentKeyIndex]

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