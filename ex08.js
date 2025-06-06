//Exercicio 8 - Agrupamento por Propriedade

const vendas = [
    { cliente: "Ana", total: 100 },
    { cliente: "João", total: 200 },
    { cliente: "Ana", total: 150 },
    { cliente: "Maria", total: 300 },
    { cliente: "João", total: 100 }
];


function somarPorCliente(vendas) {
    return vendas.reduce((acumulador, venda) => {
        const { cliente, total } = venda;

        if (!acumulador[cliente]) {
            acumulador[cliente] = 0;
        }

        acumulador[cliente] += total;

        return acumulador;
    }, {});
}


const resultado = somarPorCliente(vendas);
console.log(resultado);

