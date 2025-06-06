//exercicio 06 - Memoization

function memoize(fn) {
    const cache = {}; // objeto para guardar os resultados

    return function (...args) {
        const chave = JSON.stringify(args); // transforma os argumentos em string para usar como chave

        if (cache[chave]) {
            console.log("Resultado do cache");
            return cache[chave];
        }

        const resultado = fn(...args);
        cache[chave] = resultado;
        return resultado;
    };
}

function somaLenta(a, b) {
    console.log("Executando soma...");
    return a + b;
}

const somaMemoizada = memoize(somaLenta);

console.log(somaMemoizada(2, 3));
console.log(somaMemoizada(2, 3));
console.log(somaMemoizada(5, 1));
console.log(somaMemoizada(5, 1)); 
