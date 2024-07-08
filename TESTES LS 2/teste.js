const app = document.querySelector('#app');
const h1 = document.createElement('h1');
const guessing = document.createElement('div');
const keyboard = document.createElement('div');
const remainingGuesses = document.createElement('div');
const startButton = document.createElement('button');
const restartButton = document.createElement('button');

document.body.onload = createPage;






function createPage() {
  guessing.innerHTML = '';
  keyboard.innerHTML = '';
  remainingGuesses.innerHTML = '';



  h1.textContent = 'Hangman Game';
  startButton.textContent = 'Start Game';
  restartButton.textContent = 'Restart Game';


  guessing.id = 'guessing';
  keyboard.id = 'keyboard';
  remainingGuesses.id = 'remaining-guesses';



  app.appendChild(h1);
  app.appendChild(startButton);
  app.appendChild(restartButton);
  app.appendChild(guessing);
  app.appendChild(keyboard);
  app.appendChild(remainingGuesses);




  startButton.addEventListener('click', () => {
    hangman();
  });







}

function hangman() {


  const words = ['apple', 'banana', 'cherry', 'date', 'elderberry', 'fig', 'grape'];

  let word = chooseWord(words);

  let remainingLetters = word.length;

  encryptWord(word);
  createKeyboard();
  
  checkGuess(guess);






}



// functions to be implemented
function encryptWord(word) {
  let guessing = document.querySelector('#guessing');

  let hideWord = word.replace(/[a-z]/g, '*');

  guessing.innerHTML = '';
  for (let i = 0; i < word.length; i++) {
    let span = document.createElement('span');
    span.className = 'letter';
    span.id = `letter-${i}`;
    span.textContent = hideWord[i];
    guessing.appendChild(span);
  }

}

function createKeyboard() {
  let keyboard = document.querySelector('#keyboard');
  keyboard.innerHTML = '';
  for (let i = 0; i < 26; i++) {
    const button = document.createElement('button');
    button.textContent = String.fromCharCode(i + 65);
    button.addEventListener('click', () => {
      makeGuess(button.textContent.toLowerCase(), word);

    });
    keyboard.appendChild(button);
  }
}

function makeGuess(letter, word, remainingChances = 6) {

    if (word.includes(letter)) {
      for (let i = 0; i < word.length; i++) {
        if (word[i] === letter) {
          document.querySelector(`#letter-${i}`).textContent = letter;
        }
      }
    } else {
      remainingChances--;
      document.querySelector('#remaining-guesses').textContent = `Remaining Guesses: ${remainingChances}`;
    }
}

function chooseWord(words) {

  word = words[Math.floor(Math.random() * words.length)];
  return word;

}





