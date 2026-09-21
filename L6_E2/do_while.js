const rl = require ("readline-sync");

const quantidade = parseInt(rl.question("quantos numeros vc quer inserir? "));
let contagem = []
let n = 0
console.log(`Digite ${quantidade} de numeros: `)

do {
    contagem[n] = Number(rl.question("Digite um numero: "))
    n++
} while (n < quantidade);

console.log(`Array original:`, contagem)

let r = 0

do {
    let final = quantidade - 1 - r
    let guardar = contagem[r]
    contagem[r] = contagem[final]
    contagem[final] = guardar
    r++
} while (r < quantidade/2)

console.log(contagem)