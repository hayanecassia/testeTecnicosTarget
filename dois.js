var fibonacci = [];
fibonacci[0] = 0;
fibonacci[1] = 1;
for (var i = 2; i < 15; i++) {
  fibonacci[i] = fibonacci[i - 2] + fibonacci[i - 1];
}

var numero = 56;

for (var i=0; i <= fibonacci.length; i++) {
    if (fibonacci[i] == numero) {
        console.log("Número informado pertence a sequência de Fibonacci");
        break;
    } else if (i == fibonacci.length && fibonacci[i] != numero) {
        console.log(("Número informado não pertence a sequência de Fibonacci"));
    };
};
