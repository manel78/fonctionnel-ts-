//1 : fonctions pures / impures

let counter = 0 // variable globale

export function add(a: number, b: number): number {
  return a + b // fonction pure
}

// fonction non pure (modifie counter)
export function increment(): number {
  counter++
  return counter
}

console.log("add(2,3) =", add(2, 3))
console.log("increment =", increment())
console.log("increment encore =", increment())

// addrésultat toujours identique
// increment dépend du compteur



//2  immutabilité

export type Student = { name: string; grade: number }

export const student: Student = { name: "Léo", grade: 14 }

// copie de l'objet avec nouvelle valeur
export function updateGrade(s: Student, newGrade: number): Student {
  return { ...s, grade: newGrade }
}

const stu2 = updateGrade(student, 18)

console.log("student original :", student)
console.log("student modifié :", stu2)



//3  fonction d’ordre supérieur

export function applyNTimes(
  f: (x: number) => number,
  n: number,
  x: number
): number {
  if (n <= 0) return x
  return applyNTimes(f, n - 1, f(x)) // récursion
}

const double = (x: number) => x * 2

console.log("double x3 =", applyNTimes(double, 3, 1))



//4 : map / filter / reduce

export const nums = [1, 2, 3, 4, 5, 6]

// pairs fois2 → somme
const res = nums
  .filter(n => n % 2 === 0)
  .map(n => n * 2)
  .reduce((acc, v) => acc + v, 0)

console.log("pairs*2 puis somme =", res)


// reduce
export const sum = (arr: number[]) =>
  arr.reduce((acc, x) => acc + x, 0)

export const avg = (arr: number[]) =>
  arr.length === 0 ? 0 : sum(arr) / arr.length

export const product = (arr: number[]) =>
  arr.reduce((acc, x) => acc * x, 1)

console.log("sum:", sum(nums))
console.log("avg:", avg(nums))
console.log("prod:", product(nums))



//5 

export const userList = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 15 },
  { name: "Charlie", age: 30 },
  { name: "Diana", age: 17 },
]

// find 
const firstAdult = userList.find(u => u.age >= 18)
console.log("1er majeur :", firsAdult)


const hasMinor = userList.some(u => u.age < 18)
const allAbove10 = userList.every(u => u.age > 10)

console.log("mineur ?", hasMinor)
console.log("tous > 10 ?", allAbove10)



const names = userList.map(u => u.name)

console.log("noms :", names)
console.log("Alice ?", names.includes("Alice"))
console.log("Eve ?", names.includes("Eve"))


// flatMap 
const userHobbies = [
  { name: "Alice", hobbies: ["climbing", "yoga"] },
  { name: "Bob", hobbies: ["gaming"] },
  { name: "Charlie", hobbies: ["reading", "hiking"] },
]

const hobbies = userHobbies.flatMap(u => u.hobbies)
console.log("hobbies:", hobbies)


// tri 
const sortedByAge = [...userList].sort((a, b) => a.age - b.age)
const twoYoung = sortedByAge.slice(0, 2)

console.log("trié:", sortedByAge)
console.log("2 plus jeunes:", twoYoung)
console.log("origine:", userList)
