import PromptSync from "prompt-sync";

const prompt = PromptSync();

let acumuladorNotas: number = 0.0;
let notas: number;
let contadorAprovados: number = 0;

for (let i = 0; i < 8; i++) {
    notas = parseFloat(prompt(`Digite a nota do aluno ${i + 1}: `));
    acumuladorNotas += notas;
    if (notas >= 7) {
        contadorAprovados += 1;
        console.log(`Aluno ${i + 1} - APROVADO`);
    } else {
        console.log(`Aluno ${i + 1} - REPROVADO`);
    }
}

const media = acumuladorNotas/8;
console.log(`Media da turma = ${media.toFixed(1)}`);
console.log(`Quantidade de alunos aprovados =  ${contadorAprovados}`);

