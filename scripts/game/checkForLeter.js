import {splitWord} from '../generateWord/generateWord.js'
import {checkForVictory} from './checkForVictory.js'
import {checkForLosing} from './checkForLosing.js'




export function checkEnteredLetter () {
    const wordWrapper = document.getElementsByClassName('word')[0];
    const enteredLetter = document.getElementById('user-letter').value;
    splitWord.forEach((letter, index) => {
        if (letter === enteredLetter) {
            wordWrapper.children[index].textContent = enteredLetter;
        };
    });
    checkForVictory();
    checkForLosing ()
    document.getElementById('user-letter').value = '';
    
}





function tryAgain () {
    alert('Try again? Reload the page!')   ;
}