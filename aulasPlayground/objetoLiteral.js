let carro = {
    nome:"Pálio",
    marca:"fiat",
    ano: 2015,
    modelo:"sapao",
    cor: "branco",
    ligar: function(){
        console.log("O carro " + this.nome + " está ligado")
    }
};

console.log(carro);
console.log(carro.nome);//dotnotation
console.log(carro.nome +" e seu ano é " + carro.ano);
carro.ligar();

//instanciar

function Carro (nomeCarro , anoCarro){
    this.nome = nomeCarro;
    this.ano = anoCarro;
} 

let civic = new Carro("Civic" , 2019);
let gol = new Carro("Gol" , 2017)

console.log(civic);
console.log(gol);
