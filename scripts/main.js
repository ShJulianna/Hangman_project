// 1. Загадать слово [slovo1, slovo2, slovo3] (сгенерировать спаны согласно количеству букв)
// 2. на ОК навесить обработчик клика
// 3. проверять букву пользователя на наличие в слове
// 4. если совпадение НАШЛИ, то заменить соответствующий спан с прочерком на букву
    // очистить инпут
    // проверка на победу (если нет спанов с прочерками) (победа - зеленый экран)
        // если победа (предложить начать новую игру, заблокировать инпуты)
// 5. если совпадение НЕ НАШЛИ, то меняем изображение (kartinka.src = `${counter}.png`;)
    // очистить инпут
    // проверка на проигрыш
        // если каунтер 6 значит проиграли
            // вывести сообщение, поменять фон на красный, заблочить инпуты 


import {splitWord} from './generateWord/generateWord.js'
import {checkEnteredLetter} from './game/checkForLeter.js';
import {generateWordInSpan} from './generateWord/generateWordWrapper.js'


generateWordInSpan(splitWord);

const button = document.getElementById('btn-ok');
button.addEventListener('click', checkEnteredLetter);

