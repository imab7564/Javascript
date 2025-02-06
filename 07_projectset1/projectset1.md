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