const rl = require("readline-sync")

let A = []
let B = []
let C = []
let i = 0

 do{
    A[i] = parseInt(rl.question(`Digite um numero para o vetor A:`))
    B[i] = parseInt(rl.question(`Digite um numero para o vetor B:`))
    i++
} while (i<10)
console.log(`vetor A:`, A, `Vetor B:`, B)

i = 0 

 do {
    C[i] = []
    C[i][0] = A[i] *2
    C[i][1] = B[i] *2
    i++
} while (i<10)

console.table(C);

