const rl = require("readline-sync")

let i = 0
let elementos = []

while (i <= 7) {
   elementos[i] = parseInt(rl.question("Digite um numero: "))
   i++
}

console.log(`Array dobrado: `, elementos)

let n = 0
let dobrados = []

while (n <= 7) {
    dobrados [n] = elementos [n] * 2
    n++
}

console.log(`Array dobrado: `, dobrados)