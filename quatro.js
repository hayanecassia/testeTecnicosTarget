var estado = [
    {
        estado: 'SP', valor: 67836.43,
    },
    {
        estado: 'RJ', valor: 36678.66,
    },
    {
        estado: 'MG', valor: 29229.88,
    },
    {
        estado: 'ES', valor: 27165.48,
    },
    {
        estado: 'Outro', valor: 19849.53,
    }
];
var soma = 0;

function somaItem (item) {
    soma += item.valor;
};

estado.forEach(somaItem);

function calculaPorcentagem (valor) {
    var x = (valor.valor * 100)/soma;
    console.log(valor.estado + " teve dentro do valor total mensal de distribuição "
    +x.toFixed(2) + "%");
}

estado.forEach(calculaPorcentagem);