const bt = document.querySelector("#bt");
let chaine = document.querySelector("#chaine");
let result = document.querySelector("#result");

bt.addEventListener("click", () => {
  //parcour de la chaine
  if (reverseString(chaine.value)) {
    result.textContent = "la chaine est un palindrome";
  } else {
    result.textContent = "la chaine n'est pas un palindrome";
  }
});

//version inversion de la chaine
function reverseString(str) {
  let tab = str.split("");
  let reverseTab = [];
  //parcour de la chaine transformée en tableau
  for (let i = tab.length - 1; i > -1; i--) {
    reverseTab.push(tab[i]);
  }
  //test si les 2 chaines sont identiques
  if (reverseTab.join("") == str) {
    return true;
  } else {
    return false;
  }
}
