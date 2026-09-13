const rl = require("readline-sync");

let matriz = [];
let linha = 0;

while (linha < 4) {
    matriz[linha] = [];

    let coluna = 0;

    while (coluna < 4) {
        let Numdalinha = linha + 1;
        let Numdacoluna = coluna + 1;

        let valor = Number(
            rl.question(
                `Digite o numero para a ${Numdalinha} linha e para a ${Numdacoluna} coluna: `
            )
        );

        matriz[linha][coluna] = valor;

        coluna++;
    }

    linha++;
}
    


let menorNum = matriz[0][0];
let menorNumdalinha = 0;
let menorNumdaColuna = 0;
linha = 0;

while (linha < 4) {
    let coluna = 0;

    while (coluna < 4) {

        if (matriz[linha][coluna] < menorNum) {
            menorNum = matriz[linha][coluna];
            menorNumdalinha = linha;
            menorNumdaColuna = coluna;
        }

        coluna++;
    }

    linha++;
}

console.log(`O menor número é ${menorNum.toFixed(6)} e está na linha ${menorNumdalinha} e coluna ${menorNumdaColuna}`);

