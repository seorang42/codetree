const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");
const n = Number(input[0]);
const commands = input.slice(1).map(el => el.split(" "));

class Move {
    constructor (start, end, direction) {
        this.start = start;
        this.end = end;
        this.direction = direction;
    }
}

const moveArr = [];
let [current, offset, highest] = [0, 0, 0];
commands.forEach(el => {
    const [amount, direction] = [Number(el[0]), el[1]];
    moveArr.push(new Move(current, direction === "R" ? current + amount - 1 : current - amount + 1, direction));
    current = direction === "R" ? current + amount - 1 : current - amount + 1;
    if (current > highest) highest = current;
    if (current < offset) offset = current;
});

const line = Array(highest - offset + 1).fill(0).map(() => []);
moveArr.forEach(el => {
    const [start, end] = el.direction === "R" ? [el.start - offset, el.end - offset] : [el.end - offset, el.start - offset];
    for (let i = start; i <= end; i++) {
        if (el.direction === "R") {
            line[i].push("B");
        } else if (el.direction === "L") {
            line[i].push("W");
        }
    }
});

const [w, b] = [line.filter(el => el[el.length - 1] === "W").length, line.filter(el => el[el.length - 1] === "B").length];
console.log(`${w} ${b}`);