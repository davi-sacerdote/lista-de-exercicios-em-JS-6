const rl = require("readline-sync"); 

const quantidade = parseInt(rl.question("Quantos numeros vc quer inserir? "));
let contagem = [];
let n = 0 ;
console.log(`Digite ${quantidade} de numeros: `);

while (n < quantidade) {
    contagem[n] = Number(rl.question("Digite um numero: "))
    n++
};

console.log(`Array original: `, contagem);

let r = 0 ;
while (r < quantidade/2) {
    let final = quantidade - 1 - r;

    let guardar =  contagem[r];
    contagem[r] = contagem[final];
    contagem[final] = guardar;
    r++;
}

console.log(`Array invertido`, contagem);