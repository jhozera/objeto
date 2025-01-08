class MensagemRobo {
    constructor(mensagem1, mensagem2, mensagem3){
        this.mensagem1 = mensagem1;
        this.mensagem2 = mensagem2;
        this.mensagem3 = mensagem3; 
    } 

}

class MensagemRobo2 extends MensagemRobo{
    constructor(mensagem1, mensagem2, mensagem3, mensagemespecial) {
        super(mensagem1, mensagem2, mensagem3);
        this.mensagemespecial = mensagemespecial;
    }
}    

const mensagem = new MensagemRobo2 ('Olá, bem vindo a nossa central de renegociação', 'Venha conhecer nossas opções especias para sua renegociação', 'Um de nossos especialistas vai passar todas proposta disponiveis', 'Emitir boleto');

console.log(mensagem);
document.getElementById("Resultado").innerHTML ="<p>Resultado:</p>" + 
"<p>" + mensagem.mensagem1 + "</p>" + 
"<p>" + mensagem.mensagem2 + "</p>" + 
"<p>" + mensagem.mensagemespecial + "</p>" + 
"<p>" + mensagem.mensagem3 + "</p>";

document.getElementById("button").onclick = function () {
    let Resultado = document.getElementById("Resultado")

    if(Resultado.style.display == "none"){
        Resultado.style.display = "block";

    } else {
        Resultado.style.display = "none";
    }
      
}



async function starwars () {
    const wars = await fetch ('https://swapi.py4e.com/api/people/?search').then((res) => res.json())
    console.log(wars)

    
    try {
        
        if (wars.results.length > 0) {
            const personagem = wars.results[0];
            document.getElementById("result").innerHTML = `
                <h2>${personagem.name}</h2>
                <p><strong>Altura:</strong> ${personagem.height} cm</p>
            `;
        } else {
            document.getElementById("result").innerHTML = `<p>Personagem não encontrado!</p>`;
        }
    } catch (error) {
        console.error("Erro ao buscar dados:", error);
        document.getElementById("result").innerHTML = `<p>Ocorreu um erro ao buscar os dados.</p>`;
    }
}

starwars()