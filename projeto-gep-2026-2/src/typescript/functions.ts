function somar(value1: number, value2: number): number {
    return value1 + value2;
}

console.log(somar(2, 3));
// somar(2, "3");

function aviso(mensagem: string, tipo?: string): void {
    if (typeof(tipo) === "undefined") {
        console.log(`[ AVISO ]: ${mensagem}`); // template string   
    } else {
        console.log(`[ ${tipo?.toUpperCase()} ]: ${mensagem}`); // template string 
    }
    console.log(typeof(tipo));
}

aviso("Estou usando a funcao em typescript!");

const avisoPersonalizado = (msg: string): void => {
    console.log(`${msg.toUpperCase()}`);
}

avisoPersonalizado("Usando Arrow Functions!")

const parOuImpar = (valor: number): string => {
    if (valor % 2 === 0) {
        return "par";
    } else {
        return "ímpar";
    }
}

console.log(parOuImpar(7));
