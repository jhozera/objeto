class MensagemPokemon  {
    constructor (mensagem1, mensagem2, mensagem3) { 
        this.mensagem1 = mensagem1;
        this.mensagem2 = mensagem2;
        this.mensagem3 = mensagem3;
 }
}

class MensagemPokemon1 extends MensagemPokemon {
    constructor (mensagem1, mensagem2, mensagem3, mensagem4) {
        super(mensagem1, mensagem2, mensagem3 );
        this.mensagem4 = mensagem4;
    }
}



const MensagemPokemon12 = new MensagemPokemon1 ('Parabens pelo escolha', 'otima opçao de pokemon', 'a melhor escolha de pokemon','parabens pelo pokemon');



document.getElementById("pokemonmensagem").innerHTML = `<p>${MensagemPokemon12.mensagem3}</p>`;



function  buscarpokemon() { 

const nomePokemon = document.getElementById("pokemonName").value.toLowerCase(); // Nome do Pokémon em minúsculas
            const url = `https://pokeapi.co/api/v2/pokemon/${nomePokemon}`; // URL da API para buscar o Pokémon

fetch(url)


    .then(function(pokedexdata){
        return pokedexdata.json(); 
    })
    .then(function(jsondata){
        console.log(jsondata);
    

        document.getElementById("pokemonInfo").innerHTML = `
        <h2>${jsondata.name.toUpperCase()}</h2>
        <img src="${jsondata.sprites.front_default}" alt="${jsondata.name}" />
        <p><strong>Altura:</strong> ${jsondata.height / 10} metros</p>
        <p><strong>Peso:</strong> ${jsondata.weight / 10} kg</p>
        <p><strong>Tipos:</strong> ${jsondata.types.map(t => t.type.name).join(", ")}</p>
    `;
})


    .catch (function (e) {
        console.log('deu erro');
    });
 }