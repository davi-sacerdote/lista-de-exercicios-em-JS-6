// Criar dois vetores A e B cada um com 10 elementos inteiros. Construir um 
// vetor C, onde cada elemento de C é a soma dos respectivos elementos em A 
// e B, ou seja: C[i] = A[i] + B[i].

// entrada -> receber 20 numeros com dois Arrays (10 em cada); -> e depois somar cada indice respectivo em um indice no array C
const rl = require("readline-sync");

let elementos = []
let elementosb = []

for (let i = 0; i <= 9; i++) {
    elementos[i] = parseInt(rl.question("Digite um numero para o vetor A: "))
    elementosb[i] = parseInt(rl.question("Digite um numero para o vetor B: "))
}

console.log(`Array A original: `, elementos)
console.log(`Array B original: `, elementosb)

// processamento -> e depois somar cada indice respectivo em um indice no array C

let somaC = []

for (let i  = 0; i <=9; i++) {
    somaC[i] = elementos[i] + elementosb[i]
}
// saida 
console.log(`Arrays somados: `)
console.table(somaC)