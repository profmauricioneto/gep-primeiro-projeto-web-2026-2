interface Usuario {
    nome: string,
    idade: number,
    ativo: boolean
};

const usuarioCadastrado: Usuario = {
    nome: "Mauricio Moreira",
    idade: 36,
    ativo: true
};

console.log(usuarioCadastrado);
console.log(usuarioCadastrado.nome);

interface Produto {
    nome: string,
    preco: number
};

function exibir(p: Produto): void {
    console.log(`[produto: ${p.nome} - preço: ${p.preco}]`);
}

const chinela: Produto = {
    nome: "Chinela Havianas",
    preco: 89.5
}

exibir(chinela);

interface Endereco {
    logradouro: string,
    nome: string,
    numero: number,
    bairro: string,
    cep?: string
};

const endereco: Endereco = {
    logradouro: "Rua",
    nome: "Monsenhor Bruno",
    numero: 600,
    bairro: "meireles",
    // cep: "6010011"
}

console.log(endereco);
