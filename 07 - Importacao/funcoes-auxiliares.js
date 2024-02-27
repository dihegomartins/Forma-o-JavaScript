const entradas = [10, 50, 10, 98, 23, 51, 40, 96, 87, 25];
let i = 0;


function gets() {
    const valor = entradas[i];
    i++;
    return valor;
}

function print(text) {
    console.log(text);
}

module.exports = { gets, print };