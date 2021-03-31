/*let petObj = {
    nome:'Doug',
    idade:4,
    tipo:'Cachorro'
}

console.log(JSON.stringify(petObj)
)

let pet = '{"nome":"Doug","idade":4,"tipo":"Cachorro"}'

console.log(JSON.parse(pet))*/

let dadosPet = require('./bancoDados.json')

console.log(dadosPet)

/*Desafio : A função atenderCliente(pet, servico)
 deve dar boas vindas e se despedir do cliente.*/

let pets = dadosPet.pets;

const atenderCliente = (pet, servico) => {
    console.log(`Olá senhor ${pet.nome}`);

    // opção 1: 
    //servico();
    //console.log('Tchau, até logo!');   
    
    //opção 2 com if ternario:
    (servico) ? servico() : console.log('Só vim ver se está tudo ok!');
}

const darBanho = () => {
    console.log('Dando banho no pet...');
}

const apararUnhas = () => {
    console.log('Cortando unhas do pet...');
}

atenderCliente(pets[0], darBanho);

console.log('-------------------');

atenderCliente(pets[2], apararUnhas);

console.log('-------------------');

atenderCliente(pets[1]);
