const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");
const [N, M] = input[0].split(" ").map(el => Number(el));
const A = input.slice(1, N + 1).map(el => el.split(" "));
const B = input.slice(N + 1).map(el => el.split(" "));

const [newA, newB] = [[], []];
A.forEach(el => {
    for (let i = 0; i < Number(el[1]); i++) {
        newA.push(el[0]);
    }
});
B.forEach(el => {
    for (let i = 0; i < Number(el[1]); i++) {
        newB.push(el[0]);
    }
})

let [a, b] = [0, 0];
let answer = -1;
for (let i = 0; i < Math.max(newA.length, newB.length); i++) {
    if (newA[i]) a = a + (newA[i] === "R" ? 1 : -1);
    if (newB[i]) b = b + (newB[i] === "R" ? 1 : -1);
    if (a === b && answer === -1) answer = i + 1;
}

console.log(answer);