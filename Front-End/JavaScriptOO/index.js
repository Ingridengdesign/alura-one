import { Cliente } from "./Cliente.js";
import { Gerente } from "./Funcionario/Gerente.js";
import { Diretor } from "./Funcionario/Diretor.js";
import { SistemaAutenticacao } from "./SistemaAutenticacao.js";

const diretor =  new Diretor("Ingrid", 10000, 12345678912);
diretor.cadastrarSenha("12345")

const gerente =  new Gerente("Prince", 5000, 98765432112);
gerente.cadastrarSenha("123");

const cliente = new Cliente("Andrews", 78945612379, "1001");
const gerenteEstaLogado = SistemaAutenticacao.login(gerente, "123");
const diretorEstaLogado = SistemaAutenticacao.login(diretor, "12345");


const clienteEstaLogado = SistemaAutenticacao.login(cliente, "1001");

console.log(gerenteEstaLogado, diretorEstaLogado, clienteEstaLogado);
