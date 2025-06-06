//exercicio 3 - Palavras Únicas

const frase = "olá olá mundo mundo bem vindo mundo";
let palavras = [];
let palavraAtual = "";

for (let i = 0; i < frase.length; i++) {
    const letra = frase[i]; //armazena uma letra da frase na variavel letra

    if (letra !== " ") {
        palavraAtual += letra;
    } //verifica se a letra é diferente de espaço e adiciona uma letra por vez na variavel palavra atual até formar a palavra e chegar no espaço    
    else {
        if (palavraAtual !== "") {
            palavras.push(palavraAtual);
            palavraAtual = "";
        } //verificar se a palavraAtual é vazio, adiciona no array e zera a variavel
    }
}

let unicas = [];

for (let i = 0; i < palavras.length; i++) {
    let contador = 0;

    for (let j = 0; j < palavras.length; j++) {
        if (palavras[i] === palavras[j]) {
            contador++;
        }
    }

    if (contador === 1) {
        unicas.push(palavras[i]);
    }
}

console.log(unicas);