// 2) Refaça o programa anterior, mas agora pergunte ao usuário quantos 
// números ele deseja inserir no array. Depois, o usuário vai preenchendo 
// elemento por elemento do vetor. Ao final, exiba o array e o array ao 
// contrário.

const rl = require("readline-sync");

let quantidade = parseInt(rl.question("Quantos numeros você deseja inserir?"));
let contagem = []

console.log(`Digite ${quantidade} numeros:`);


for (let n = 0; n<quantidade; n++) {
    contagem [n] = parseInt(rl.question("Digite um numero: ")); 
}

console.log(`Array original: ${contagem}`);

for (let n = quantidade - 1; n>=0; n--) {
    console.log(`Array ao contrario: ${contagem[n]}`)
}
