/*
FONCTIONS - PRÉPA 2 : Le minimum de deux nombres
1. En supposant que la fonction JavaScript Math.min()n'existe pas,
	déclarez la fonction calcMin pour qu'elle retroune
	le plus petit des deux nombres passés en paramètres
2. Utilisez ensuite votre fonction pour calculer
	- le minimum entre 4.5 et 5
	- le minimum entre 19 et 9
	- le minimum entre 1 et 1
N.B. Faites deux versions :
	- en utilisant la syntaxe classique
	- en utilisant une arrow function
*/

// synatxe classique

// function takeTheLower(nombre1, nombre2){
//   if (nombre1 > nombre2) {
//     console.log(nombre2);
//   }else {
//     console.log(nombre1);
//   }
// }
//
// takeTheLower(4.5, 5);
// takeTheLower(5, 5);
// takeTheLower(1, 1);

// arrow function

// const takeTheLower = (nombre1, nombre2) => {if (nombre1 > nombre2) { console.log(nombre2); }else { console.log(nombre1);} }
//
// takeTheLower(4.5, 5);
// takeTheLower(5, 5);
// takeTheLower(1, 1);

// arrow function écriture encore plus concise

// const takeTheLower = (nombre1, nombre2) => if (nombre1 > nombre2) { console.lo (nombre2); } else { console.log(nombre1);}

takeTheLower(4.5, 5);
takeTheLower(5, 5);
takeTheLower(1, 1);
