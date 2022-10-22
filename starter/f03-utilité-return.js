/*****************************
* 020 - Fonctions - Préalable
*/

// 2. FONCTION SANS PARAMÈTRE MAIS AVEC UN RETURN 

// 4°) Utilité du RETURN :

/*
On peut voir le RETRUN comme un MOYEN DE COMMUNCIATION entre la fonction
et le reste du programme :
L'INSTRUCTION RETURN EST UN MOYEN DE FAIRE SORTIR UNE DONNEE D'UNE FONCTION
=> cela permet, par exemple, de récupérer le résultat d'une fonction
pour le réutiliser dans une autre fonction
*/

/* EXERCICE :
Créez deux fonctions : 
- une fonction calcule1() qui
	- stocke dans une variable resultat1 le résultat de 2 + 3 
	- affiche dans la console "Dans calcule1 : resultat1 = " 
	- retourne resultat1
- une fonciton calcule2() qui 
	- stocke dans une variable resultat2 le double de resultat1
	- affiche dans la console "Dans calcule2 : resultat2 = " 
Exécutez les deux fonctions
*/

let resultat1;
let resultat2;

function calcul1(){
  resultat1 = 2+3;
  return resultat1;
}

function calcul2(){
  resultat2 = resultat1 * 2;
  return resultat2;
}

console.log(`${calcul1()}`)
console.log(`${calcul2()}`)