const fs = require("fs");
const [n, input] = fs.readFileSync(0).toString().trim().split("\n");
const str = input.split(" ").join("");

for (let i = 1; i <= Math.ceil(str.length / 5); i++) {
    console.log(str.slice(5 * (i - 1), 5 + 5 * (i - 1)));
}