function calc(num1, num2) {
    return (num2/num1) * 100;
}

console.clear()
let prompt = require('prompt-sync')();

let valor1 = parseFloat(prompt("Digite o 1º valor: "));
let valor2 = parseFloat(prompt("Digite o 2º valor: "));

let percent = calc(valor1, valor2);

console.log(`${percent}% de ${valor1} é ${valor2}`);