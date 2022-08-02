const jsonDados = require('./dados.json');

var valorMaior = 0;
var diaMaior;
var cont = 0;
var soma = 0;
var dias = 0;

function verificaMaior (item) {
    if (item.valor != 0) {
        if (item.valor > valorMaior) {
            valorMaior = item.valor;
            diaMaior = item.dia;
        }
        cont++;
    }
}

jsonDados.forEach(verificaMaior);

var valorMenor = valorMaior;
var diaMenor;

function verificaMenor (item) {
    if (item.valor != 0) {
        if (item.valor < valorMenor) {
            valorMenor = item.valor;
            diaMenor = item.dia;
        }
    }
}

jsonDados.forEach(verificaMenor);

function somaNum (item) {
   soma += item.valor;
}

jsonDados.forEach(somaNum);

var media = soma / cont;

function diasMedia (item) {
    if (item.valor > media) {
        dias++;
    }
}

jsonDados.forEach(diasMedia)


console.log("O dia com maior valor de venda foi: "+diaMaior+" com valor total de: "
+valorMaior.toFixed(2));
console.log("O dia com menor valor de venda foi: "+diaMenor+" com valor total de: "
+valorMenor.toFixed(2));
console.log("A média do faturamento diário foi de "+media.toFixed(2)+ " e somente "+dias+
" dias do mês essa média foi superada.");