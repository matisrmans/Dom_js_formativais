const button = document.querySelector('#button');
const guess = document.getElementById('guess');
const input = document.getElementById('input');

button.addEventListener('click', guessCorrect);

function guessCorrect(){
    let inputGuess = parseInt(input.value);
    let attempts = 0;
    let randomNum = randomGen();
    
    console.log(randomNum);

    if (inputGuess > randomNum){
        guess.textContent = "Too High";
        attempts++;
    }if(inputGuess < randomNum){
        guess.innerHTML = "Too Low";
        attempts++;
    }if(inputGuess == randomNum){
        guess.innerHTML = `Congrats! You guessed the number in ${attempts} attempts`;
    }
    else{
        guess.innerHTML = "input a number between 1 and 100";
    }

}

function randomGen(){
    return Math.floor(Math.random() * 100)+1;
}