// Classe e a definição
class Pessoa {
    name;
    age;

    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.anoDeNascimento = 2024 - age;
    }
    toDescribe() {
        console.log(`My name is ${this.name} and my age is ${this.age}`);
    }
}

function compararPessoas(p1, p2) {
    if (p1.age > p2.age) {
        console.log(`${p1.name} é mais velho que ${p2.name}`);
    } else if (p2.age > p1.age){
        console.log(`${p2.name} é mais velho que ${p1.name}`);
    } else {
        console.log(`${p1.name} e ${p2.name} tem a mesma idade`);
    }
}


const dihego = new Pessoa('Dihego', 25);
const joao = new Pessoa('João', 35);

compararPessoas(dihego, joao);


/*Instacia e a ocorrencia

const dihego = new Pessoa('Dihego', 25);
console.log(dihego)
const joao = new Pessoa('João', 35);



console.log(dihego);
dihego.toDescribe();
console.log(joao);
joao.toDescribe();

*/











// Dinamico pessoa['name'] = 'test'; 
// Acesso direto pessoa.name = 'test'; 

