const usuario = {
    nome: "Mauricio Moreira",
    idade: 36,
    curso: "Ciência da Computação",
    ehProfessor: true,
    disciplinas: ["POO", "PE", "Algoritmos"],
    calcularNotas: () => {}
};

console.log(usuario);
console.log(usuario.nome);

for (let i = 0; i < 3; i++) {
    console.log(usuario.disciplinas[i]);
}

