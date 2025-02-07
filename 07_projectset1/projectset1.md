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