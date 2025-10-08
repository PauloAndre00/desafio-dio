class Heroi {
  constructor(nome, idade, tipo) {
    this.nome = nome;
    this.idade = idade;
    this.tipo = tipo;
  }

  atacar() {
    let ataque;

    switch (this.tipo.toLowerCase()) {
      case "mago":
        ataque = "magia";
        break;
      case "guerreiro":
        ataque = "espada";
        break;
      case "monge":
        ataque = "artes marciais";
        break;
      case "ninja":
        ataque = "shuriken";
        break;
      default:
        ataque = "um ataque desconhecido";
    }

    return `O ${this.tipo} atacou usando ${ataque}`;
  }
}

// Criando um herói de exemplo
const heroiExemplo = new Heroi("Merlin", 150, "mago");

// Exibindo o resultado no console
console.log(heroiExemplo.atacar());

