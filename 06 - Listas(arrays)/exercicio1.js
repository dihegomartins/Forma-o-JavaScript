// 1) Create a program that, given a number, prints its multiplication table up to 10.

const number = 2;
const sizeCalculator = 10;


for (let i = 1; i <= sizeCalculator; i++) {
    console.log(`${number} x ${i} = ${i * number}`);
}