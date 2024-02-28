const nota = [-5.5];
let i = 0;

function gets() {
    const value = nota[i];
    i++;
    return value;
}

function print(text) {
    console.log(text);
}

function situation() {
    if (nota >= 0 && nota < 5) {
        return print('Disapproved');
    } else if (nota >= 5 && nota < 7) {
        return print('Recovery');
    } else if(nota >= 7){
        return print('Approved');
    } else {
        return print('Invalid number');
    }
}

module.exports = { gets, print, situation };