# Projects related to DOM
## project link
[Click here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=1-colorChanger%2Findex.html)

# Solution code

## project1
```javascript
const buttons=document.querySelectorAll('.button')
const body=document.querySelector('body')

buttons.forEach(function(button){
  console.log(button)
  button.addEventListener('click',function(event){
    console.log(event)
    console.log(event.target)//ye event aa kaha se raha h
    
    if(event.target.id==='grey')
    {
      body.style.backgroundColor=event.target.id
    }
    if(event.target.id==='white')
    {
      body.style.backgroundColor=event.target.id
    }
    if(event.target.id==='blue')
    {
      body.style.backgroundColor=event.target.id
    }
    if(event.target.id==='yellow')
    {
      body.style.backgroundColor=event.target.id
    }
  })
})
```

## project2
``` Javascript
  const form=document.querySelector('form');

//const height =parseInt(document.querySelector('#height').value)
//This will give you empty value
form.addEventListener('submit',function(e){
  e.preventDefault();

  //form k andar event aayega then hmlog value ko select karenge
  const height =parseInt(document.querySelector('#height').value);
  const weight =parseInt(document.querySelector('#weight').value);
  const results =document.querySelector('#results')

  if(height==='' ||height<0 ||isNaN(height))
  {
    results.innerHTML='please give a valid height';
  }
  else if(weight==='' ||weight<0 ||isNaN(weight))
  {
    results.innerHTML='please give a valid weight';
  }
  else
  {
    const bmi=(weight/((height*height)/10000)).toFixed(2)

    // show the result
    if(bmi<18.6)
    {
      results.innerHTML=`<span>${bmi} </span><br> Under Weight`
    }
    else if(bmi>=18.6 && bmi<=24.9)
    {
      results.innerHTML=`<span> ${bmi} </span><br> Normal Range`
    }
    else
    results.innerHTML=`<span>${bmi}</span> <br> Overweight`
  }
})  
```

## project3
```Javascript
const clock=document.getElementById('clock')
//document.querySelector('#clock')

setInterval(function(){
    let date=new Date()
    clock.innerHTML=date.toLocaleTimeString();
},1000)
```
## project4
```Javascript
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

```