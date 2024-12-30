const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");
const [dx, dy] = [{E : 1, W : -1, S : 0, N : 0}, {E : 0, W : 0, S : -1, N : 1}];
const N = Number(input[0]);
const arr = input.slice(1).map(el => el.split(" "));

let start = [0, 0];
arr.forEach(el => {
    const [dir, dis] = [el[0], Number(el[1])];
    start = [start[0] + dx[dir] * dis, start[1] + dy[dir] * dis];
});

console.log(start.join(" "));