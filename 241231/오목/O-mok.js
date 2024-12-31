const fs = require("fs");
const board = fs.readFileSync(0).toString().split("\n").map(el => el.split(" ").map(el => Number(el)));

let [winner, location] = [0, []];
for (let i = 0; i < 19; i++) {
    for (let j = 0; j < 19; j++) {
        if (board[i][j] === 0) {
            continue;
        }

        // 가로로 같을 때
        if (j + 1 < 19) {
            if (winner === 0 && board[i][j] === board[i][j + 1]) {
                for (let k = j + 2; k < j + 5; k++) {
                    if (k > 19) {
                        break;
                    }
                    if (board[i][j] !== board[i][k]) {
                        break;
                    }
                    if (k === j + 4 && board[i][j] === board[i][k]) {
                        winner = board[i][j];
                        location = [i + 1, j + 3];
                    }
                }
            }
        }

        // 세로로 같을 때
        if (i + 1 < 19) {
            if (winner === 0 && board[i][j] === board[i + 1][j]) {
                for (let k = i + 2; k < i + 5; k++) {
                    if (k > 19) {
                        break;
                    }
                    if (board[i][j] !== board[k][j]) {
                        break;
                    }
                    if (k === i + 4 && board[i][j] === board[k][j]) {
                        winner = board[i][j];
                        location = [i + 3, j + 1];
                    }
                }
            }
        }

        // 대각선 오른쪽으로 같을 때
        if (i + 1 < 19 && j + 1 < 19) {
            if (winner === 0 && board[i][j] === board[i + 1][j + 1]) {
                for (let k = 2; k < 5; k++) {
                    if (i + k > 19 || j + k > 19) {
                        break;
                    }
                    if (board[i][j] !== board[i + k][j + k]) {
                        break;
                    }
                    if (k === 4 && board[i][j] === board[i + k][j + k]) {
                        winner = board[i][j];
                        location = [i + 3, j + 3];
                    }
                }
            }
        }

        // 대각선 왼쪽으로 같을 때
        if (i + 1 < 19 && j - 1 >= 0) {
            if (winner === 0 && board[i][j] === board[i + 1][j - 1]) {
                for (let k = 2; k < 5; k++) {
                    if (i + k > 19 || j - k < 0) {
                        break;
                    }
                    if (board[i][j] !== board[i + k][j - k]) {
                        break;
                    }
                    if (k === 4 && board[i][j] === board[i + k][j - k]) {
                        winner = board[i][j];
                        location = [i + 3, j - 1];
                    }
                }
            }
        }

        if (winner !== 0) {
            break;
        }
    }
    if (winner !== 0) {
        break;
    }
}

console.log(winner);
winner !== 0 && console.log(location.join(" "));