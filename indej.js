class MensagemRobo  {
    constructor (robo1, robo2,robo3){
        this.robo1 = robo1;
        this.robo2 = robo2;
        this.robo3 = robo3;
    }
}


class Robo20 extends MensagemRobo{
    constructor(robo1, robo2, robo3, robo4) {
        super(robo1, robo2, robo3)
        this.robo4 = robo4;
    }
}



const Robo220 = new Robo20 ('Bem vindo a nossa central!' , 'Olá, seja bem vindo', 'Venha nos conhecer', 'sempre estaremos com voce')

console.log(Robo220)


document.getElementById("pokemonmensagem").innerHTML = `<p>${Robo220.robo2}</p>`;




function starwars () { 

const starwarspes = document.getElementById("star").value.toLowerCase();
const URL = `https://swapi.py4e.com/api/people/?search=${starwarspes}`;

fetch(URL)

.then(function(response) {
    // Verifica se a resposta foi bem-sucedida e converte para JSON
    if (!response.ok) {
        throw new Error('Erro na resposta da API');
    }
    return response.json();
})
.then(function(jsondata){
    console.log(jsondata);


    if (jsondata.results.length > 0) {
        const personagem = jsondata.results[0];
        document.getElementById("result").innerHTML = `<h2>${personagem.name}</h2>
        <p><strong>Altura:</strong> ${personagem.height} cm</p>`
        ;   
    } else {
        document.getElementById("result ").innerHTML = `<p>Personagem não encontrado!</p>`;
    }
})

.catch(function(error) {
    // Exibe mensagens de erro
    console.error('Erro:', error);
    document.getElementById("result").innerHTML = `<p>Ocorreu um erro ao buscar os dados. Tente novamente.</p>`;
}); 

 }

