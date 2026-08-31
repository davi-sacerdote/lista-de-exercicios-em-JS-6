const rl = require("readline-sync"); 

let quantidade = parseInt(rl.question("Quantos numeros vc quer inserir? "));
let contagem = []
let n = 0
console.log(`Digite ${quantidade} de numeros: `)

while (n < quantidade) {
    contagem[n] = Number(rl.question("Digite um numero: "))
    n++
}+

console.log(`Array original: `, contagem)

let invertido = [];
let r = 0 ;

while (r < quantidade) {
    n--
    invertido[r] = contagem [n];
    r++
}

console.log(`Array invertido`, invertido);