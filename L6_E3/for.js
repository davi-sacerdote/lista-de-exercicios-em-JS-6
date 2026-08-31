
/* ) Criar um vetor A com 8 elementos inteiros. Construir um vetor B de 
mesmo tipo e tamanho e com os elementos do vetor A multiplicados por 2, 
ou seja: B[i] = A[i] * 2. */    

const rl = require('readline-sync');

let elementos = []

for (i = 0; i <= 7; i++) {
    elementos[i] = parseInt(rl.question("Digite um numero: "));
}

console.log(`Array original: `, elementos)

/*
 quando eu for mexer no codigo dnv, lembrar de tentar achar um jeito de simplificar a linha 20-28
*/
let dobrados = []

for (i = 0; i <= 7; i++) {
  dobrados[i] = elementos[i] * 2
}


console.log(`Array original dobrado:`, dobrados)

