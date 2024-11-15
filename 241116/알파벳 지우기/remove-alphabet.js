const fs = require("fs");
const [a, b] = fs.readFileSync(0).toString().trim().split("\n");

let [newA, newB] = ["", ""]
for (let i = 0; i < a.length; i++) {
    if (isNaN(a[i]) === false) {
        newA += a[i];
    }
}
for (let i = 0; i < b.length; i++) {
    if (isNaN(b[i]) === false) {
        newB += b[i];
    }
}

console.log(Number(newA) + Number(newB));