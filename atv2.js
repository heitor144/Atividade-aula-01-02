function calcularImovel(qtd_quartos, lv_metragem){ //lv é um identificador para "local variable" que usei
    switch(qtd_quartos){ //Não usei break no switch pois o return já quebrava a estrutura.
        case 1:
            return 1*lv_metragem;
        case 2:
            return 1.2*lv_metragem;
        case 3:
            return 1.5*lv_metragem;
        default:
            return "Quantidade de quartos inválida."
    } //Não usei o "default" do switch pois é impossível o código chegar com a variável qtd_quartos com um valor fora dos casos.
}

console.clear()
let prompt = require('prompt-sync')();

let metragem = parseFloat(prompt(`Digite a metragem: `)); //Metragem do quarto
let num_quartos = 0;
while(num_quartos > 3 || num_quartos <= 0){
    num_quartos = parseInt(prompt(`Digite a quantidade de quartos: `));
    if (num_quartos > 3 || num_quartos <= 0){
        console.log("Valor inválido.");
    }
}

const preco = calcularImovel(num_quartos, metragem);

console.log(`A custa custa: ${preco}`);