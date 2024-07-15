


function createGamePage() {
    let app = document.getElementById('app');
    let main = document.createElement('main');

    main.id = 'gamePage';


    app.innerHTML = '';

    app.appendChild(main);

    let boxWord = createWordToGuess();
    let keyboard = createKeyboard();
    let chances = createChances();


    main.appendChild(boxWord);
    main.appendChild(keyboard);
    boxWord.appendChild(chances);
    addMakeGuessEvent();










}











const words = ['javascript', 'html', 'css'];
var chances = 6;

function getRandomWord() {
    let randomIndex = Math.floor(Math.random() * words.length);
    return words[randomIndex];
}

var word = getRandomWord();



function createChances() {
    let box = document.createElement('div');
    box.id = 'boxChances';
    box.classList.add('chances');
    box.textContent = `Chances: ${chances}`;
    return box;
}

function restartGame() {
    let restart = confirm('You lost! Do you want to play again?');
    if (restart) {
        word = getRandomWord();
        chances = 6;
        createGamePage();
    }
}



function createWordToGuess() {
    let box = document.createElement('div');
    box.id = 'boxWord';

    let hideWord = word.replace(/[a-z]/g, ' ');
    box.textContent = '';

    for (let i = 0; i < word.length; i++) {
        let span = document.createElement('span');
        span.className = 'letter';
        span.id = `letter-${i}`;
        span.textContent = hideWord[i];
        box.appendChild(span);

    }

    return box

}



function createKeyboard() {
    let keyboard = document.createElement('keyboard');
    let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
    keyboard.classList.add('keyboard');

    for (let letter of alphabet) {
        let button = document.createElement('button');
        button.textContent = letter;
        button.id = `key-${letter}`;
        button.classList.add('key');
        keyboard.appendChild(button);
    }

    return keyboard;
}

function makeGuess() {
    let buttons = document.querySelectorAll('.key');
    
    buttons.forEach(button => {
        if (button === this) {
            button.disabled = true;
            button.classList.toggle("guessed");
            let letter = button.textContent;
            let wordArray = word.split('');

            let wordLetters = document.querySelectorAll('.letter');
            let isLetterInWord = false;

            for (let i = 0; i < wordArray.length; i++) {
                if (letter === wordArray[i]) {
                    wordLetters[i].textContent = letter;
                    isLetterInWord = true;
                    wordLetters[i].classList.toggle("correct");

                    

                }
            }

            if (!isLetterInWord) {
                chances--;
                let boxChances = document.getElementById('boxChances');
                boxChances.textContent = `Chances: ${chances}`;
        
                if (chances === 0) {
                    restartGame();
                }
            }
            if (isWordGuessed()) {
                alert('You won!');
                restartGame();
            }
        }
    });
}

function addMakeGuessEvent() {
    let buttons = document.querySelectorAll('.key');
    for (let button of buttons) {
        button.addEventListener('click', makeGuess);
    }
}

function isWordGuessed() {
    let wordLetters = document.querySelectorAll('.letter');
    for (let letter of wordLetters) {
        if (letter.textContent === ' ') {
            return false;
        }
    }
    return true;
}








export { createGamePage };