import  {splitWord} from '../generateWord/generateWord.js'




export function checkForVictory () {
    const containerOfSpan = [...document.getElementsByClassName('word')[0].children];
    const checkForSpace = containerOfSpan.every(function (elem) { return (elem.textContent !== '_')});
    
    if (checkForSpace) {
        outputTextOfVictory();
    };
   
    
    
};

function outputTextOfVictory () {
    document.querySelector('body').style.backgroundColor = 'green';
    const word = document.getElementsByClassName('word')[0];
    const winMessage = document.createElement('div');
    winMessage.textContent = 'YOU WON!';
    winMessage.style.textAlign = 'center';
    winMessage.style.color = 'red';
    word.replaceWith(winMessage);
    
    document.getElementById('user-letter').disabled = 'true';
    document.getElementById('btn-ok').disabled = 'true';    
}

