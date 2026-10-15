import PromptSync from "prompt-sync";

const prompt = PromptSync();

let totalPassos: number = 0;
let passosDoDia: number;

for(let i = 0; i < 7; i++) {
    passosDoDia = parseInt(prompt(`Digite os passos do dia ${i+1}: `));
    totalPassos += passosDoDia;
}

console.log(`Total de Passos realizados na semana: ${totalPassos}`);