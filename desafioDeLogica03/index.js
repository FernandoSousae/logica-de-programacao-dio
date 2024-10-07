class Heroi {
    constructor(nome, idade, tipo, ataque) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
        this.ataque = ataque;
    }
    atacar() {
        console.log(`O ${this.nome} atacou usando ${this.ataque}.`);
    }
}

let guerreiro = new Heroi("Tolsk", "32", "guerreiro", "espada");
let mago = new Heroi("Radis", "58", "mago", "magia");
let monge = new Heroi("Linch", "42", "monge", "artes marciais");
let ninja = new Heroi("Ling", "25", "ninja", "shuriken");

guerreiro.atacar();
mago.atacar();
monge.atacar();
ninja.atacar();