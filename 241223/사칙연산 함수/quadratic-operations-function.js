const fs = require("fs");
const [a, o, c] = fs.readFileSync(0).toString().trim().split(" ");
const [numA, numC] = [Number(a), Number(c)];

const calculator = (a, o, c) => {
    if (o === "+") {
        console.log(`${a} + ${c} = ${a + c}`);
    } else if (o === "-") {
        console.log(`${a} - ${c} = ${a - c}`);
    } else if (o === "*") {
        console.log(`${a} * ${c} = ${a * c}`);
    } else if (o === "/") {
        console.log(`${a} / ${c} = ${parseInt(a / c)}`);
    } else {
        console.log("False");
    }
}

calculator(numA, o, numC);