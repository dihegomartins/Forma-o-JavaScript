// 2) Create a program that is capable of going through a list of numbers and printing each even number found.
let listNumber = [];

listNumber.push(1);
listNumber.push(2);
listNumber.push(3);
listNumber.push(4);
listNumber.push(5);
listNumber.push(6);
listNumber.push(7);
listNumber.push(8);
listNumber.push(9);
listNumber.push(10);

for (let i = 0; i < listNumber.length; i++) {
    if (listNumber[i] % 2 === 0) {
        console.log(`${listNumber[i]}`);
    }
}