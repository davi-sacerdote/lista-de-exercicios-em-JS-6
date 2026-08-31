const rl = require ("readline-sync");

let quantidade = parseInt(rl.question("quantos numeros vc quer inserir? "));
let contagem = []
let n = 0
console.log(`Digite ${quantidade} de numeros: `)

do {
    contagem[n] = Number(rl.question("Digite um numero: "))
        n++
} while (n < quantidade);

console.log(`Array original:`, contagem)

let invertido = []
let r = 0

do {
    n--
    invertido[r] = contagem [n];
    r++
} while (r < quantidade)

console.log(`Array invertido`, invertido)