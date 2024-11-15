const fs = require("fs");
const [a, b] = fs.readFileSync(0).toString().trim().split(" ");

let [newA, newB] = ["", ""];
for (let i = 0; i < a.length; i++) {
    if (isNaN(a[i]) === false) {
        newA += a[i];
    } else {
        break;
    }
}
for (let i = 0; i < b.length; i++) {
    if (isNaN(b[i]) === false) {
        newB += b[i];
    } else {
        break;
    }
}

console.log(Number(newA) + Number(newB));