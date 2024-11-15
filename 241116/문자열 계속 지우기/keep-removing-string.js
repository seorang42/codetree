const fs = require("fs");
let [str, target] = fs.readFileSync(0).toString().trim().split("\n");

while (true) {
    const index = str.indexOf(target);
    if (index === -1) {
        break;
    } else {
        str = str.slice(0, index) + str.slice(index + target.length);
    }
}

console.log(str);