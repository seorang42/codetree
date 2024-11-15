const fs = require("fs");
const n = Number(fs.readFileSync(0).toString().trim());

const array = [];
for (let i = 1; i <= n; i++) {
    const line = [];
    for (let j = 1; j <= i; j++) {
        line.push(1);
    }
    array.push(line);
}

for (let i = 0; i < n; i++) {
    for (let j = 0; j < i; j++) {
        if (!(array[i - 1][j - 1])) {
            continue;
        } else {
            array[i][j] = array[i - 1][j - 1] + array[i - 1][j];
        }
    }
}

array.forEach(el => console.log(el.join(" ")));