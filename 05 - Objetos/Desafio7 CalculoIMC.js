/*
2 - Cria uma classe para representar pessoas.
Para cada pessoa teremos os atributos nome, peso e altura.
As pessoas devem ter a capacidade de dizer o valor do seu IMC (IMC = peso / (altura * altura));
Instancia uma pessoa chamada José que tenha 70KG de peso e 1,75 de altura 
e peça ao José para dizer o valor do seu IMC.
*/

class Pessoa {
    nome;
    peso;
    altura;

    constructor(nome, peso, altura) {
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    }

    calculoIMC() {
        return this.peso / Math.pow(this.altura, 2);
    }

    classificarIMC() {
        const imc = this.calculoIMC();
        if (imc < 18.5) {
            return 'Abaixo do peso';
        } else if (imc >= 18.5 && imc < 25) {
            return 'Peso normal';
        } else if(imc >= 25 && imc < 30) {
            return 'Acima do peso';
        }else if(imc >= 30 && imc < 40) {
            return 'Obeso';
        } else {
            return 'Obesidade Grave';
        }
    }
}

const jose = new Pessoa('Jose Souza', 70, 1.75);
const valorIMC = jose.calculoIMC();

console.log(`O imc do ${jose.nome} e de ${valorIMC.toFixed(2)}`)
console.log(jose.classificarIMC());
