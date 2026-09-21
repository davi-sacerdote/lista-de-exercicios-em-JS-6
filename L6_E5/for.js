/*Crie um programa capaz de armazenar números em uma matriz de 4
linhas por 4 colunas. Ao final da criação da matriz o programa deverá 
imprimir o número da linha e da coluna que contém o menor dentre todos 
os números lidos */

const rl = require("readline-sync");
let matriz = []

for (let linha = 0; linha < 4; linha++) {
    matriz[linha] = []
    for (let coluna = 0; coluna < 4; coluna++) {
        let Ndalinha = linha + 1;
        let Ndacoluna = coluna + 1;
        valor = Number(rl.question(`Digite o numero para a [${Ndalinha}] linha e para a [${Ndacoluna}] coluna: `))
        matriz[linha][coluna] = valor
    }
}

let menor = matriz[0][0]
let LinhadoMenor = 0
let ColunadoMenor = 0

for (let L = 0; L < 4; L++) {
    for (let C = 0; C < 4; C++) {
        if (matriz[L][C] < menor) {
            menor = matriz[L][C]
            LinhadoMenor++
            ColunadoMenor++
            
        }
    }
}
console.log(`O menor número é ${menor} e está na linha ${LinhadoMenor + 1} e coluna ${ColunadoMenor + 1}`);
