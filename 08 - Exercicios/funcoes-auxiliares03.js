const entrada = [2000, 250];
let i = 0;

function gets() {
    const value = entrada[i];
    i++;
    return value;
}

function print(text) {
    console.log(text);
}

module.exports = { gets, print };