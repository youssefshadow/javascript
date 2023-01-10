let text=document.querySelector('.truc');
document.getElementById("myBtn").addEventListener("click", myFunction);

function myFunction() {
  text.innerHTML=Math.floor(Math.random() * 10100000);


}

console.log('floflo');