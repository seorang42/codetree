const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n")
const [N, M] = input[0].split(" ").map(el => Number(el));
const board = input.slice(1).map(el => el.split(""));

const [dx, dy] = [[1, 1, 0, -1, -1, -1, 0, 1], [0, 1, 1, 1, 0, -1, -1, -1]];

const inRange = (x, y) => {
    return x >= 0 && x < M && y >= 0 && y < N ? true : false;
}

let answer = 0;
for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
        if (board[i][j] === "L") {
            for (let k = 0; k < 8; k++) {
                if (inRange(j + dx[k], i + dy[k]) && board[i + dy[k]][j + dx[k]] === "E") {
                    if (inRange(j + 2 * dx[k], i + 2 * dy[k]) && board[i + 2 * dy[k]][j + 2 * dx[k]] === "E") {
                        answer++;
                    }
                }
            }
        }
    }
}

console.log(answer);