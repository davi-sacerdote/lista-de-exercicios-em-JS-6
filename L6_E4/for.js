/* Crie um programa capaz de armazenar números em uma matriz de 4
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
        valor = Number(rl.question(`Digite o número para a [${Ndalinha}] linha e para a [${Ndacoluna}] coluna: `))
        matriz[linha][coluna] = valor
    }
}

let menor = matriz[0][0]
let menorNdaLinha = 0
let menorNdaColuna = 0

for (let linha = 0; linha < 4; linha++) {
    for (let coluna = 0; coluna < 4; coluna++) {
        if (matriz[linha][coluna] < menor) {
            menor = matriz[linha][coluna]
            menorNdaLinha = linha
            menorNdaColuna = coluna
        }
    }
}

console.log(`O menor número é ${menor} e está na linha ${menorNdaLinha} e coluna ${menorNdaColuna}`)

/* perguntar ao giovani porque podemos usar o const dentro do for, porque eu pesquisei e vi que pode, mas na minha cabeca nao faz sentido,
porque o const nao pode ser reatribuido, mas dentro do for ele é reatribuido a cada iteração, entao nao faz sentido, mas eu vi que pode, entao quero entender o porque 
poruque no meu caso eu poderia usar const na linha 14 e 15, so que na minha cabeca ela tem a mesma forma de incremento de uma variavel let do for
o gemini falou que pode usar const, porque ela é reatribuida a cada iteração, mas meio que em um escopo diferente, mas pq isso nao acontece com o let tambem */