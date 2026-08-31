/*
1) Crie um programa que receba 3 números do usuário, coloque-os em um 
array, depois exiba tal array. Modifique os elementos do array de modo a 
sequência de números ficar do contrário. 
Ou seja, se digitou: 1,2,3 
Vai aparecer: 3,2,1 */

const rl = require('readline-sync');

let alunos = []

for (let n = 0; n <=2; n++) {
    alunos [n] = Number(rl.question("Digite um numero: "))
}

console.log (alunos)

for (let n=2; n >=0; n--) {
   console.table(alunos[n]);
}

