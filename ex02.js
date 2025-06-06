//exercicio 2 - Jogo de Advinhação

const prompt = require('prompt-sync')();

const numeroSecreto = Math.floor(Math.random() * 100) + 1;

let tentativas = 0;
let acertou = false;

console.log("Advinhe o número secreto (entre 1 e 100)");

while (!acertou) {
    const palpite = parseInt(prompt("Digite seu palpite: "));
    tentativas++;

    if (isNaN(palpite)) {
        console.log("Por favor, digite um número válido.");
        continue;
    }

    if (palpite < numeroSecreto) {
        console.log("Mais alto!");
    } else if (palpite > numeroSecreto) {
        console.log("Mais baixo!");
    } else {
        console.log(`Parabéns! Você acertou o número ${numeroSecreto} em ${tentativas} tentativa(s)!`);
        acertou = true;
    }
}