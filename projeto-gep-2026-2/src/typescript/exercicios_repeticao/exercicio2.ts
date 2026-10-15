import PromptSync from "prompt-sync";

const prompt = PromptSync();

let inicio: number = parseInt(prompt(`Digite o valor de início: `));
let fim: number = parseInt(prompt(`Digite o valor de final: `));

const aux: number = fim;
if (inicio > fim) {
     fim = inicio;
     inicio = aux;
}

for (let i = inicio; i <= fim; i++) {
    if (i % 2 === 0) {
        console.log(`Par encontrado: ${i}`);
    }
}