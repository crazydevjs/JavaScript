# Project related to DOM

## project link
[Click here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

# Solution code

## project 1

```javascript


const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach(function(button) {
    console.log(button);
    button.addEventListener('click', function(e) {
        console.log(e);    
        console.log(e.target);
        if(e.target.id === 'grey'){
            body.style.backgroundColor = e.target.id;
        }
        if(e.target.id === 'white'){
            body.style.backgroundColor = e.target.id;
        }
        if(e.target.id === 'blue'){
            body.style.backgroundColor = e.target.id;
        }
        if(e.target.id === 'yellow'){
            body.style.backgroundColor = e.target.id;
        }
        if(e.target.id === 'purple'){
            body.style.backgroundColor = e.target.id;
        }
    });
})

```

## project 2

```javascript

const form = document.querySelector('form')
form.addEventListener('submit', function (e) {
    e.preventDefault()
    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    const result = document.querySelector('#results')

    if (height === '' || height < 0 || isNaN(height)) {
        result.innerHTML = `Please enter valid height`;
    }
    if (weight === '' || weight < 0 || isNaN(weight)) {
        result.innerHTML = `Please enter valid weight`;
    } else {
        const bmi = (weight / ((height * height) / 10000)).toFixed(2)
        result.innerHTML = `<span>${bmi}</span>`
    }
}); 
```

## project 3

```javascript
const clock = document.getElementById("clock")
// document.querySelector('#clock')



setInterval(function(){
    let date = new Date();
    // console.log(date.toLocaleTimeString());
    clock.innerHTML = date.toLocaleTimeString();
}, 1000);

```

## project 4

```javascript
let randomNumber = parseInt(Math.random * 100 +1);

const submit = document.querySelector('#subt')
const userInput = document.querySelector('#guessField')
const guessSlot = document.querySelector('.guesses')
const remaining = document.querySelector('.lastResult')
const lowOrHi = document.querySelector('.lowOrHi')
const startOver = document.querySelector('.resultParas')

const p = document.createElement('p')

let prevGuess = []
let numGuesses = 1

let playGame = true

if(playGame){
    submit.addEventListener('click', function(e){
        e.preventDefault()
        const guess = parseInt(userInput.value)
        validateGuess(guess)
    
        
    })
}

function validateGuess(guess){
    if(isNaN(guess)){
        alert('Please enter a valid number')
    }else if(guess < 1 || guess > 100){
        alert('Please enter a valid number')
    } else {
        prevGuess.push(guess);
        if(numGuesses === 11){
            displayGuess(guess)
            dispalyMessage(`Game Over! Random Number was ${randomNumber}`)
            endGame()
        } else {
            displayGuess(guess)
            checkGuess(guess)
        }
    }
}

function checkGuess(guess){
    if(guess === randomNumber){
        dispalyMessage('You got it right!')
        endGame()
    } else if(guess < randomNumber){
        dispalyMessage('Last guess was too low!')
    } else if(guess > randomNumber){
        dispalyMessage('Last guess was too High!')
    }
}
function displayGuess(guess){
    userInput.value = ''
    guessSlot.innerHTML += `${guess},  `
    numGuesses++
    remaining.innerHTML = `${11 - numGuesses} guesses left`
}
function dispalyMessage(message){
    lowOrHi.innerHTML = `<h2>${message}</h2>`
}
function endGame(){
    userInput.value = ''
    userInput.setAttribute('disabled', '')
    p.classList.add('button')
    p.innerHTML = '<h2 id="newGame">Start new Game</h2>'
    startOver.appendChild(p)
    playGame = false
    newGame()
}
function newGame(){
    const newGameButton = document.querySelector('#newGame')
    newGameButton.addEventListener('click', function(e){
        randomNumber = parseInt(Math.random * 100 +1)
        prevGuess = []
        numGuesses = 1
        guessSlot.innerHTML = ''
        remaining.innerHTML = `${11 - numGuesses} guesses left`
        userInput.removeAttribute('disabled')
        startOver.removeChild(p)
        playGame = true
    })

}

```

## Project 5

```javascript
const insert = document.getElementById("insert")

window.addEventListener('keydown', (e) => {
    insert.innerHTML = `
    <div class='color'>
    <table>
  <tr>
    <th>Key</th>
    <th>Keycode</th>
    <th>Code</th>
  </tr>
  <tr>
    <td>${e.key === " " ? 'Space' : e.key}</td>
    <td>${e.keyCode}</td>
    <td>${e.code}</td>
  </tr>
</table>
    </div>
    `
})
```
## Project 6

```javascript
// generate a random color

const randomColor = function(){
    const hex = "0123456789ABCDEF"
    let color = '#'
    for(let i = 0; i < 6; i++){
        color += hex[Math.floor(Math.random() * 16)]
    }
    return color;
};
let intervaild
const startChangingColor = function () {
    if(!intervaild){
    intervaild = setInterval(changeBgColor, 1000)}
    function changeBgColor(){
        document.body.style.backgroundColor = randomColor()
    }
};
const stopChangingColor = function () {
    clearInterval(intervaild);
    intervaild = null;
};


document.querySelector("#start").addEventListener('click', startChangingColor)
document.querySelector("#stop").addEventListener('click', stopChangingColor)

```