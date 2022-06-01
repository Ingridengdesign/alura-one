console.log(`Trabalhando com listas`);

const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`,
)

const idadeComprador = 15;
const estaAcompanhada = true;

console.log("Destinos possíveis: ")
console.log(listaDeDestinos);

if(idadeComprador >=18 || estaAcompanhada == true){
    console.log("Comprador maior de idade");
    listaDeDestinos.splice(2,1);
}else{
    console.log("Comprador menor de idade")
}

console.log(listaDeDestinos);

