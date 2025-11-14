const button = document.querySelector('#button');
const guess = document.getElementById('guess');
const input = document.getElementById('number');
const history = document.getElementById('history');

button.addEventListener('click', guessCorrect);

function guessCorrect(){
    let inputGuess = parseInt(input.value);
    let attempts = 0;
    let randomNum = randomGen();
    
    console.log(randomNum);

    if (inputGuess > randomNum){
        guess.textContent = `too High`;
        attempts++;
    }if(inputGuess < randomNum){
        guess.innerHTML = `Too Low`;
        attempts++;
    }if(inputGuess == randomNum){
        guess.innerHTML = `Congrats! You guessed the number in ${attempts} attempts`;
    }
    if(inputGuess > 100){
        guess.innerHTML = "input a number between 1 and 100";
    }


}

function randomGen(){
    return Math.floor(Math.random() * 100)+1;
}

function saveHistory(){
    
}