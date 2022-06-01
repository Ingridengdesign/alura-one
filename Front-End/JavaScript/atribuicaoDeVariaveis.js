console.log("Atribuição de variáveis");

let nome = "Ingrid";
let sobrenome = "Emanuelle";

//console.log(nome + " " + sobrenome);
console.log(nome, sobrenome);
console.log(`Meu nome é ${nome} ${sobrenome}`);

nome = nome + sobrenome; 
//erro pq foi declarado como const, mudar para let

console.log(nome);

let idade;
idade = 22;
idade = idade + 1;

