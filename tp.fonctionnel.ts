/**
  tp-fonctionnel.ts
  fonctions PURES:
 */

let counter = 0; // vavariable pour tout le fichier 

export function add(a: number, b: number): number {
  return a + b;
}

/**
  IMPURE:
 *  lit et modifie counter 
 * nbr d'appel précédent 
 */
export function increment(): number {
  counter++;
  return counter;
}

 // CONSOLE 
console.log("[P1] add(2,3) =", add(2, 3)); // ne change pas 
console.log("[P1] increment() =", increment()); // counter
console.log("[P1] increment() =", increment()); // counter
// Réponses aux questions 
// 1 / résultat déterminé par les entrées pas d'effet externe.
// 2 / increment ne l'est pas car impure elle modifie un état global (counter) ⇒ dépend de l'historique.




// immutabilité, mettre a jour sans muter 

export type Student = { name: string; grade: number };
export const student: Student = { name: "Léo", grade: 14 };

export function updateGrade(s: Student, newGrade: number): Student {
  return {...s, grade: newGrade };
}

// CONSOLE 
const updatedStudent = updateGrade(student, 18);
console.log( student);         //NIVEAU TOUJOURS 14
console.log( updatedStudent); // NIVEAU 18


// FONCTIONS D'ORDRE SUPÉRIEUR
// récursive 


export function applyNtimes(f: ( x: number)=> number, n: number, x:number) : number {
    if (n <= 0) return x; 
    return applyNtimes(f, 
        n-1, f(x));
}


// CONSOLE 
const double = (x: number) => x * 2;
console.log(applyNTimes(double, 3, 1)); // 8-4 


// Map, filter, reduce 
// jeu dee données 
// filtrer et transformer  

export const numbers = [1.2.3.4.5.6];

const resultat = numbers 
.filter(n => % 2 === 0)
.map(n => n * 2)
.reduce ((acc, val) => acc + val, 0); 

console log(resultat); 


// somme moyenne et produit 

export const sum (arr: number[]): number => {
    return arr.reduce((accumulator, currentValue )=> accumulotar + currentValue , 0 )
}

