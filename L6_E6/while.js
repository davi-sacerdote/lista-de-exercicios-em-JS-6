const rl = require("readline-sync")

let A = []
let B = []
let C = []
let i = 0

while (i<10) {
    A[i] = parseInt(rl.question(`Digite um numero para o vetor A:`))
    B[i] = parseInt(rl.question(`Digite um numero para o vetor B:`))
    i++
}
console.log(`vetor A:`, A, `Vetor B:`, B)

i = 0

while (i<10) {
    C[i] = []
    C[i][0] = A[i] *2
    C[i][1] = B[i] *2
    i++
}

console.table(C);

