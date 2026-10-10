import PromptSync from "prompt-sync";

const prompt = PromptSync();

const idade: number = parseInt(prompt('Digite sua idade: '));

const acesso: string = (idade >= 18) ? 'acesso permitido' : 'acesso negado';

console.log(`O usuario com ${acesso}`);
