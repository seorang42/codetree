const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");
const [N, M] = input[0].split(" ").map(el => Number(el));

const A = input.slice(1, N + 1).map(el => el.split(" ").map(el => Number(el)));
const B = input.slice(N + 1).map(el => el.split(" ").map(el => Number(el)));
const [newA, newB] = [[], []];
A.forEach(el => {
    for (let i = 0; i < el[1]; i++) {
        newA.push(el[0]);
    }
})
B.forEach(el => {
    for (let i = 0; i < el[1]; i++) {
        newB.push(el[0]);
    }
})

let [a, b] = [0, 0];
let [count, farther] = [0, ""];
for (let i = 0; i < newA.length; i++) {
    a += newA[i];
    b += newB[i];
    const currentFarther = a > b ? "A" : a < b ? "B" : farther;
    if (farther === "") {
        farther = currentFarther;
    } else if (farther !== currentFarther) {
        farther = currentFarther;
        count++;
    }
}

console.log(count);