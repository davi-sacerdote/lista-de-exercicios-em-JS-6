/* 6) Criar dois vetores A e B cada um com 10 elementos inteiros. Construir 
uma matriz C de 2 colunas e 10 linhas, na primeira coluna de C teremos os 
valores do vetor A multiplicados por 2, na segunda coluna de C teremos os 
valores de B divididos por 2. Exiba os valores de A, B e C */

const rl = require("readline-sync");
let A = []
let B = []
let C = []

for (let i = 0; i < 10; i++) {
    A[i] = parseInt(rl.question(`Digite o ${i + 1} numero do vetor A: `))
    B[i] = parseInt(rl.question(`Digite o ${i + 1} numero do vetor B: `))
}
console.log (`vetor A:`, A ,`vetor B:`, B);

for (let n = 0; n < 10; n++) {
    C[n] = []
    C[n][0] = A[n] * 2
    C[n][1] = B[n] * 2
}
console.table (C);

