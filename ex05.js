//exercicio 05 - Debounce

function debounceSimples(fn, delay) {
    let ultimaChamada = 0;

    return function () {
        let agora = Date.now();

        if (agora - ultimaChamada > delay) {
            fn();
            ultimaChamada = agora;
        } else {
            console.log("Ignorado: ainda dentro do intervalo.");
        }
    };
}

function salvar() {
    console.log("Salvando dados...");
}

const salvarComDebounce = debounceSimples(salvar, 2000);


salvarComDebounce();
salvarComDebounce();
setTimeout(() => salvarComDebounce(), 2500);
