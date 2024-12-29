const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");
const [n, m] = input[0].split(" ").map(el => Number(el));
const A = input.slice(1, n + 1).map(el => el.split(" "));
const B = input.slice(n + 1).map(el => el.split(" "));

const [newA, newB] = [[], []];
A.forEach(el => {
    for (let i = 0; i < Number(el[0]); i++) {
        newA.push(el[1]);
    }
});
B.forEach(el => {
    for (let i = 0; i < Number(el[0]); i++) {
        newB.push(el[1]);
    }
});

let count = 0;
let [a, b] = [0, 0];
for (let i = 0; i < Math.max(newA.length, newB.length); i++) {
    const [prevA, prevB] = [a, b];
    if (newA[i]) a = a + (newA[i] === "R" ? 1 : -1);
    if (newB[i]) b = b + (newB[i] === "R" ? 1 : -1);
    if (a === b && prevA !== prevB) {
        count++
    }
}

console.log(count);