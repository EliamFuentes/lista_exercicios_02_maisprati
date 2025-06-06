//exercicio 04 - Fatorial Recursivo


function fatorial(n) {
    if (n < 0) {
        return "Erro: o fatorial não é definido para números negativos.";
    }

    if (n === 0) {
        return 1;
    }

    return n * fatorial(n - 1);
}

console.log(fatorial(5));
console.log(fatorial(-2));