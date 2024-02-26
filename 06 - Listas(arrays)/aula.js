
const notas = [];

notas.push(5);
notas.push(7);
notas.push(8);
notas.push(5);
notas.push(8);
notas.push(8);

let media = 0;

for (let i = 0; i < notas.length; i++) {
    media = media + notas[i];
}

media = media / notas.length;

console.log(`Sua média foi de: ${media.toFixed(2)}`);

// Pop remove o último do arrays and shift remove o primeiro do array
// console.log(alunos.pop());
// console.log(alunos.shift());