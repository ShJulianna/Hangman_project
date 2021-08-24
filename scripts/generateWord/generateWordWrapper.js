
import {splitWord} from './generateWord.js'




export function generateWordInSpan (splitWord) {
    const wordWrapper = document.getElementsByClassName('word')[0];
    
    splitWord.forEach(elem => {
        const letter = document.createElement('span'); 
        letter.classList.add('letter');
        letter.textContent = '_';
        wordWrapper.append(letter);
    });
}

