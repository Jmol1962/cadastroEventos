//CADASTRO DE EVENTOS - José Moreira de Oliveira.

let readlineSync = require('readline-sync');

var evento;
const dataAtual = new Date();
const dataEvento = new Date('2021-09-30');
var qtdInscritos = 0;
var idade;
var nomeParticipante;

evento = readlineSync.question("Informe o nome do evento: ");
console.log("Evento: " + evento);

idade = readlineSync.question("Informe a idade: ");
console.log("A idade é: " + idade + " anos.");

if (dataAtual.getTime() < dataEvento.getTime())
{    
    if (qtdInscritos < 100)
    {
        if (idade > 18)
        {
            nomeParticipante = readlineSync.question("Informe o nome do participante: ");            
            console.log("Nome do participante: " + nomeParticipante);
            console.log("Participante cadastrado com sucesso!!!");
            qtdInscritos = qtdInscritos + 1;
            console.log("Quantidade de inscritos: " + qtdInscritos);
        }
        else if (idade < 18)
        {
            console.log("Participante menor de 18 anos. Cadastro não permitido.");
        }
       
    }    
    else if (qtdInscritos >= 100)
    {
        console.log("Limite máximo de inscritos atingido. Cadastro não permitido.");
    }
}
else if (dataEvento < dataAtual)
{
    console.log("Evento já realizado. Cadastro não permitido.");
}

