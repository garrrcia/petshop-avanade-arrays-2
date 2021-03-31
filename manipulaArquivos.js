//fs: modulo para a manipulação de arquivos - módulo nativo 
let fs = require('fs');

//transforma oconteudo do arquivo e converte para utf-8

let bancoDados = fs.readFileSync('bancoDados.json', 'utf-8');

//converte o conteudo de string para object
bancoDados = JSON.parse(bancoDados);

bancoDados.pets.push({
    "nome": "Chiquinha",
    "tipo": "pássaro",
    "idade": 5,
    "raca": "Periquito",
    "peso": 1,
    "tutor": "Fernando",
    "contato": "(81)9944-5536",
    "vacinado": false,
    "servicos": []
});

console.log(bancoDados);

//Armazena o bancoDados reconvertido em JSON 
let petsAtualizado = JSON.stringify(bancoDados);

//Atualiza o arquivo. Recebe os parâmetros: o arquivo que vai receber atualização, 
//o que vai mudar no arquivo e a forma de codificação
fs.writeFileSync('bancoDados.json', petsAtualizado, 'utf-8');

//ir no index.js e verificar se o novo animal foi adicionado



