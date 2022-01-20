


function array(){
var Arr = [1,2,3,4,5,6]
 for(let i =0; i<Arr.length; i++){
 
  var Java  = document.createElement('li')
  document.getElementById('root').append(Java)
   
  Java.innerHTML = Arr[i]

    if( i % 2 === 0){


      Java.classList.toggle('green')
    }
    else{
      Java.classList.toggle('red')

    }
  
 }
 for(let i=0; i<Arr.length-1;i++){


         let lastNumber  = Arr[Arr.length-1];
         let span = document.createElement('span')
         span.innerText = lastNumber
         document.getElementById('root').append(Java)    
      
    if(Arr.length-1){
      Java.classList.toggle('yellow') 
    }

 }
}
array()



