function quadrado(valor){
    return valor*valor;
}

console.clear()
let prompt = require('prompt-sync')();

let numero = parseInt(prompt(`Digite um número inteiro: `));

console.log(`O quadrado de ${numero} é: ${quadrado(numero)}.`);