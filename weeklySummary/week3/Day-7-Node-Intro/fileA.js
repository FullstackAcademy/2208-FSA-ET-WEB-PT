const firstVariable = "Hello";
const secondVariable = "World!";

const toBeExported = {
    firstVariable,
    secondVariable
}

for (var i = 0; i < 10; i++) {
    console.log(i);

    toBeExported[i] = `Value is: ${i}`;
}

module.exports = toBeExported;
