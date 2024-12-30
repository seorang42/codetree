const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");
const n = Number(input[0]);
const arr = input.slice(1).map(el => el.split(" "));
const mapper = {E : 0, W : 1, S : 2, N : 3};
const dx = [1, -1, 0, 0];
const dy = [0, 0, 1, -1];

const commands = [];
arr.forEach(el => {
    const [dir, count] = [el[0], Number(el[1])];
    for (let i = 0; i < count; i++) {
        commands.push(dir);
    }
});

let [x, y] = [0, 0];
let answer = -1;
for (let i = 0; i < commands.length; i++) {
    [x, y] = [x + dx[mapper[commands[i]]], y + dy[mapper[commands[i]]]];
    if (x === 0 && y === 0) {
        answer = i + 1;
        break;
    }
}

console.log(answer);