
/* 
 ) Criar um vetor A com 8 elementos inteiros. Construir um vetor B de 
mesmo tipo e tamanho e com os elementos do vetor A multiplicados por 2, 
ou seja: B[i] = A[i] * 2.   
*/    

const rl = require('readline-sync');

let elementos = []

for (let i = 0; i <= 7; i++) {
    elementos[i] = parseInt(rl.question("Digite um numero: "));
}

console.log(`Array original: `, elementos)


let dobrados = []

for (let i = 0; i <= 7; i++) {
  dobrados[i] = elementos[i] * 2
}

console.log(`Array original dobrado:`, dobrados)

