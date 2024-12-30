const fs = require("fs");
const arr = fs.readFileSync(0).toString().trim().split("");
const [dx, dy] = [[1, 0, -1, 0], [0, -1, 0, 1]];

let dir = 3;
let location = [0, 0];
arr.forEach(el => {
    if (el === "R") {
        dir = (dir + 1) % 4;
    } else if (el === "L") {
        dir = (dir + 3) % 4;
    } else if (el === "F") {
        location = [location[0] + dx[dir], location[1] + dy[dir]];
    }
});

console.log(location.join(" "));