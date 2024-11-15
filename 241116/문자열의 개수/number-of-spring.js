const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

let [index, count] = [0, 0];
const array = [];
while (true) {
    if (input[index] === "0") {
        break;
    } else {
        if (index % 2 === 0) {
            array.push(input[index]);
        }
    }
    index++;
    count++;
}

console.log(count);
array.forEach(el => console.log(el));