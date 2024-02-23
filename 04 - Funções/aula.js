function sayMyName(name) {
    console.log('Your name is ' + name);
}

function calculoIMC(peso, altura) {
    return peso / Math.pow(altura, 2);
}

function classificarIMC(imc) {
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

function calcularMedia(nota1, nota2) {
    const media = (nota1 + nota2) / 2;
}

function incrementarJuros(valor, percentualDeJuros) {
    const incremento = (percentualDeJuros / 100) * valor;
    return valor + incremento;
}


//Main
(function () {
    let peso = 65;
    let altura = 1.70;
    let name =  'Dihêgo Pires Martins'
    console.log(calcularMedia(5, 5));

    sayMyName(name);
    let imc = calculoIMC(peso, altura);
    console.log(classificarIMC(imc));
})();




