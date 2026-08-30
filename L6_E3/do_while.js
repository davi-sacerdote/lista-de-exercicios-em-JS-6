const rl = require("readline-sync")

let elementos = []
let i = 0

do {
    elementos[i] = parseInt(rl.question("Digite um numero inteiro: "))
    i++
} while (i<8)

console.log(`Array original: `, elementos)

let dobrados = []
let n = 0

do {
    dobrados[n] = elementos [n] *2
    n++
} while (n<8)

console.log(`Array dobrado:`, dobrados);

console.log(`Aiaiaiaiaaaaaaa`);