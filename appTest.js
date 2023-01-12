let text=document.querySelector('.truc');
let container=document.querySelector('.container');
let msg=document.querySelector('.msg');
document.getElementById("myBtn").addEventListener("click", myFunction);

function myFunction() {
  text.innerText=Math.floor(Math.random() * 10100000);
  if ( text.innerText%5==0) {
    text.style.color = "green";
    container.style.boxShadow =" 0px 5px 15px green";
    msg.innerText="Modulo 5";
    
  }else if ( text.innerText%3==0) {
    text.style.color = "blue";
    container.style.boxShadow =" 0px 5px 15px blue";
    msg.innerText="Modulo 3";
    //alert('blue');
  } 
  else{
    text.style.color = "red";
    container.style.boxShadow =" 0px 5px 15px red";
    msg.innerText="";
  }

}



