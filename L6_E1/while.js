const rl = require("readline-sync");

let alunos = [];
let n = 0;

while (n<3) { 
    alunos[n] = Number(rl.question("Digite um numero: "));
    n++
}

console.log(alunos);

let invertido = []
let j = 0;

while (n>0) {
    n-- 
    invertido[j] = alunos[n];
    j++
}

console.log(invertido);
