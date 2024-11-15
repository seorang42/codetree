const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");
const [n, m] = input[0].split(" ").map(el => Number(el));
const [arr1, arr2] = [[], []];
input.forEach((el, index) => {
    if (index >= 1 && index <= n) {
        arr1.push(el);
    } else if (index >= n + 1) {
        arr2.push(el);
    }
})
const firstArr = arr1.map(el => el.split(" ").map(el => Number(el)));
const secondArr = arr2.map(el => el.split(" ").map(el => Number(el)));

for (let i = 0; i < n; i++) {
    const line = [];
    for (let j = 0; j < m; j++) {
        if (firstArr[i][j] === secondArr[i][j]) {
            line.push(0);
        } else {
            line.push(1);
        }
    }
    console.log(line.join(" "));
}