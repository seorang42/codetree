const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");
const n = Number(input[0]);
const commandArr = input.slice(1).map(el => el.split(" "));

let [current, highest, offset] = [0, 0, 0];
const arr = [];
commandArr.forEach(el => {
    if (el[1] === "R") {
        arr.push([current, current + Number(el[0]) - 1, "R"]);
        current = current + Number(el[0]) - 1;
        if (current > highest) {
            highest = current;
        }
    } else {
        arr.push([current, current - Number(el[0]) + 1, "L"]);
        current = current - Number(el[0]) + 1;
        if (current < offset) {
            offset = current;
        }
    }
})

const tiles = Array(highest - offset + 1).fill(0).map(() => []);
arr.forEach(el => {
    if (el[2] === "R") {
        for (let i = el[0] - offset; i <= el[1] - offset; i++) {
            if (tiles[i][0] === "G") {
                continue;
            }
            if (tiles[i].filter(el => el === "B").length < 2) {
                tiles[i].push("B");
                if (tiles[i].length === 4) {
                    tiles[i] = ["G"];
                }
            }
        }
    } else if (el[2] === "L") {
        for (let i = el[1] - offset; i <= el[0] - offset; i++) {
            if (tiles[i][0] === "G") {
                continue;
            }
            if (tiles[i].filter(el => el === "W").length < 2) {
                tiles[i].push("W");
                if (tiles[i].length === 4) {
                    tiles[i] = ["G"];
                }
            }
        }
    }
});

let [w, b, g] = [0, 0, 0];
tiles.forEach(el => {
    const result = el[el.length - 1];
    if (result === "W") {
        w++;
    } else if (result === "B") {
        b++;
    } else if (result === "G") {
        g++;
    }
})

console.log(w, b, g);