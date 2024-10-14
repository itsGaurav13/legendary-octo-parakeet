
# project 1

```javascript


<!-- console.log( "gaurav") -->


let btn=document.querySelectorAll('.button')
console.log(btn)
let bodys= document.querySelector("body")

btn.forEach((button)=>{
  console.log(btn)
  button.addEventListener("click",function(event){
    console.log(event)
    console.log(event.target)
    if(event.target.id ==="grey"){
      bodys.style.backgroundColor=/*"grey"*/event.target.id

    }
    if(event.target.id==="white"){
    bodys.style.backgroundColor= event.target.id;
  }
  if(event.target.id=== "yellow"){
    bodys.style.backgroundColor=event.target.id
  }
  
  if(event.target.id==="blue"){
    bodys.style.backgroundColor=event.target.id

  }

  })
});

```