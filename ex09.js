//exercicio 9 - Conversão Entre Formatos

function paresParaObjeto(pares) {
    const obj = {};
    for (const [chave, valor] of pares) {
        obj[chave] = valor;
    }
    return obj;
}

function objetoParaPares(obj) {
    const pares = [];
    for (const chave in obj) {
        pares.push([chave, obj[chave]]);
    }
    return pares;
}

const pares = [["nome", "João"], ["idade", 25]];
const obj = paresParaObjeto(pares);
console.log("Objeto:", obj);

const paresDeNovo = objetoParaPares(obj);
console.log("Array de pares:", paresDeNovo);

