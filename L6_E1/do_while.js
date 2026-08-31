const rl = require("readline-sync");

let alunos = [];
let i = 0;

do {
    alunos[i] = Number(rl.question("Digite um numero: "));
    i++
} while (i<3)

console.log(alunos);

let invertido = []
let j = 0;
do {
    i-- 
    invertido[j] = alunos[i];
    j++
} while (i>0)

console.log(invertido);