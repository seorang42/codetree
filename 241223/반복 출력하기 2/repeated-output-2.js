const fs = require("fs");
const N = Number(fs.readFileSync(0).toString().trim());

const printHelloWorld = (n) => {
    if (n === 0) {
        return;
    }
    console.log("HelloWorld");
    printHelloWorld(n - 1);
}

printHelloWorld(N);