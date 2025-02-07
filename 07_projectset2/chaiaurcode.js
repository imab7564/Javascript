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