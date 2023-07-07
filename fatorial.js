let numero = 7;
let fatorial = numero;
let aux = numero;

while (numero > 1) {
    fatorial = fatorial * (numero - 1);
    numero--;
}

console.log("O FATORIAL DE ", aux, "EH = ", fatorial);