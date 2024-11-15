const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");
let [str, q] = input[0].split(" ");

for (let i = 1; i <= q; i++) {
    if (input[i] === "1") {
        str = str.slice(1) + str[0];
    } else if (input[i] === "2") {
        str = str.slice(-1) + str.slice(0, -1);
    } else if (input[i] === "3") {
        const array = str.split("");
        str = array.reverse().join("")
    }
    console.log(str);
}