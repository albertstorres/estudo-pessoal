let menor = undefined;
let numeros = [5, 6, 9, 63, 2, -4, 78];

menor = numeros[0];

for (let i = 0; i < 7; i++) {
    if (menor > numeros[i]) {
        menor = numeros[i];
    }
}

console.log("O MENOR NUMERO EH: ", menor);