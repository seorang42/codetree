const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");
const array = [];
input.forEach(line => {
    array.push(line.split(" ").map(el => Number(el)));
});

const vertAvg = [];
for (let i = 0; i < 2; i++) {
    let sum = 0;
    array[i].forEach(el => sum += el);
    vertAvg.push((sum / 4).toFixed(1));
}
console.log(vertAvg.join(" "));

const horiAvg = [];
for (let i = 0; i < 4; i++) {
    let sum = 0;
    for (let j = 0; j < 2; j++) {
        sum += array[j][i];
    }
    horiAvg.push((sum / 2).toFixed(1));
}
console.log(horiAvg.join(" "));

const totalAvg = [];
let sum = 0;
for (let i = 0; i < 2; i++) {
    for (let j = 0; j < 4; j++) {
        sum += array[i][j];
    }
}
console.log((sum / 8).toFixed(1));