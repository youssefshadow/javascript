

const date1 = prompt("Entrez la première date au format AAA-MM-JJ :");


const date2 = prompt("Entrez la deuxième date au format AAA-MM-JJ:");


const d1 = new Date(date1);
const d2 = new Date(date2);


const diff = Math.abs(d2 - d1);


const diffDays = Math.round(diff / (1000 * 60 * 60 * 24));


if (diffDays === 0) {
  alert("Les dates sont identiques.");
} else {
  alert(`Il y a ${diffDays} jours entre les deux dates.`);
}

