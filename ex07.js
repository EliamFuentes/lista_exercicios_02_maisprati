//exercicio 07 - Mapeamento e Ordenação

const produtos = [
    { nome: "Mouse", preco: 50 },
    { nome: "Teclado", preco: 80 },
    { nome: "Monitor", preco: 300 },
    { nome: "Cadeira", preco: 250 },
    { nome: "Caixa de som", preco: 65 },
    { nome: "Webcam", preco: 30 },
    { nome: "Microfone", preco: 80 },
];


function nomesOrdenadosPorPreco(produtos) {
    return produtos
        .slice()
        .sort((a, b) => a.preco - b.preco)
        .map(produto => produto.nome);
}

console.log(nomesOrdenadosPorPreco(produtos));
