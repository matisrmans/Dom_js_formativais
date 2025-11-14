const button = document.querySelector('#button');
const guess = document.getElementById('guess');
const input = document.getElementById('input');

button.addEventListener('click', guessCorrect);

function guessCorrect(){
    let inputGuess = parseInt(input.value);
    let attempts = 0;
    let randomNum = randomNumGen();
    if (inputGuess > randomNum){
        guess.textContent = "Too High";
        attempts++;
    }if(inputGuess < randomNum){
        guess.textContent = "Too Low";
        attempts++;
    }if(){
        
    }
    else{
        guess.textContent = "input a number between 1 and 100";
    }

}

function randomNumGen(){
    max = 101;
    Math.floor(Math.random() * max);
}