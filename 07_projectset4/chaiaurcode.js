let randomNumber=parseInt(Math.random()*100+1)
const submit=document.querySelector('#subt')
const userInput=document.querySelector('#guessField')
const guessSlot=document.querySelector('.guesses')
const remaining=document.querySelector('.lastResult')
const lowOrHi=document.querySelector('.lowOrHi')
const startOver=document.querySelector('.resultParas')

const p=document.createElement('p')

let prevGuess=[]
let numGuess=1;
let playGame=true

if(playGame)
{
    submit.addEventListener('click',function(e){
        e.preventDefault()
        const guess=parseInt(userInput.value)
        validateGuess(guess)
    })
}
function validateGuess(guess)
{
    //ye check karne k liye ki guess valid h ki nahi
    if(isNaN(guess))
        alert('Please Enter a valid number')
    else if(guess<1)
        alert('Please Enter a number greater than 1')
    else if(guess>100)
        alert('Please Enter a number less than 100')
    else{
        prevGuess.push(guess)
        if(numGuess===10)
        {
            displayGuess(guess)
            if(guess===randomNumber)
            {
                displayMessage(`Yes You Guessed It right!`)
            }
            else
            {displayMessage(`Game Over.Random number was ${randomNumber}`)}
            endGame()
        }
        else
        {
            displayGuess(guess)
            checkGuess(guess)
        }
    }
}
function checkGuess(guess)
{
    //low h high or equal to h
    if(guess===randomNumber)
    {
        displayMessage(`You Guessed it right`)
        endGame()
    }
    else if(guess<randomNumber)
    {
        displayMessage(`Number is too low`)
    }
    else if(guess>randomNumber)
    {
        displayMessage(`Number is too high`)
    }
}
function displayGuess(guess)
{
    //clean up method
    userInput.value=''
    guessSlot.innerHTML+=`${guess} `
    numGuess++;
    remaining.innerHTML=`${11-numGuess}`
}
function displayMessage(message)
{
    //display karega
    lowOrHi.innerHTML=`<h2>${message}</h2>` 
}
function endGame()
{
    userInput.value=''
    userInput.setAttribute('disabled','')//it takes key value pair
    p.classList.add('button')
    p.innerHTML=`<h2 id="newGame">Start New Game</h2>`
    startOver.appendChild(p)
    playGame=false;
    newGame()
}
function newGame()
{
    const newGameButton=document.querySelector('#newGame')
    newGameButton.addEventListener('click',function(e){
        randomNumber=parseInt(Math.random()*100+1)
        prevGuess=[]
        numGuess=1
        guessSlot.innerHTML=''
        remaining.innerHTML=`${11-numGuess}`
        userInput.removeAttribute('disabled')
        startOver.removeChild(p)
        playGame=true
    })
}
