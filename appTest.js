let text=document.querySelector('.truc');
let container=document.querySelector('.container')
document.getElementById("myBtn").addEventListener("click", myFunction);

function myFunction() {
  text.innerText=Math.floor(Math.random() * 10100000);
  if ( text.innerText%5==0) {
    text.style.color = "green";
    container.style.boxShadow =" 0px 5px 15px green";
  }else{
    text.style.color = "red";
    container.style.boxShadow =" 0px 5px 15px red";
  }


}

console.log('floflo');

