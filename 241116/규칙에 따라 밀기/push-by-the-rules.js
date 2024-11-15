const fs = require("fs");
let [str, command] = fs.readFileSync(0).toString().trim().split("\n");

for (let i = 0; i < command.length; i++) {
    if (command[i] === "L") {
        str = str.slice(1) + str[0];
    } else if (command[i] === "R") {
        str = str.slice(-1) + str.slice(0, -1);
    }
}

console.log(str);