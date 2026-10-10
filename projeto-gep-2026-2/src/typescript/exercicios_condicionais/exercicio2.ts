import PromptSync from "prompt-sync";

const prompt = PromptSync();

const valorCompra: number = parseFloat(prompt('Valor da compra: '));

let desconto: number;

if (valorCompra > 100 && valorCompra <= 500) {
    desconto = valorCompra*0.1
} else if (valorCompra > 500) {
    desconto = valorCompra*0.2
} else {
    desconto = 0;
}

const valorTotal = valorCompra - desconto;
console.log(`
    ------------- NOTA FISCAL DA COMPRA ----------
    Valor da compra: R$: ${valorCompra.toFixed(2)}
    Desconto: R$:${desconto.toFixed(2)}
    Valor total a ser pago:  R$:${valorTotal.toFixed(2)}
    ----------------------------------------------
    `);
