const fs = require("fs");
const n = Number(fs.readFileSync(0).toString().trim());

const result = [];
const check369 = (i) => {
    const target = ["3", "6", "9"];
    let check = false;
    target.forEach(el => {
        if (String(i).includes(el)) check = true;
    })
}

for (let i = 1; i <= n; i++) {
    result.push(i % 3 === 0 || check369(i) ? 0 : i);
}

console.log(result.join(" "));