import {splitWord} from '../generateWord/generateWord.js'


let counterOfAttempts = 1;


export function checkForLosing (){
    const enteredLetter = document.getElementById('user-letter').value;
    const wrongLetter = splitWord.every(function (elem) {return (elem !== enteredLetter)});
    
    
    if (wrongLetter){
        counterOfAttempts++;
        document.getElementById('img').src = `images/${counterOfAttempts}.png`;
        if (counterOfAttempts === 6) {
            outputTextOfLosing();
        }
    } 
}

function outputTextOfLosing () {
    document.querySelector('body').style.backgroundColor = 'red';
    const word = document.getElementsByClassName('word')[0];
    const loseMessage = document.createElement('div');
    loseMessage.textContent = 'YOU LOSE!';
    loseMessage.style.textAlign = 'center';
    loseMessage.style.color = 'black';
    word.replaceWith(loseMessage);
    
    document.getElementById('user-letter').disabled = 'true';
    document.getElementById('btn-ok').disabled = 'true';
}