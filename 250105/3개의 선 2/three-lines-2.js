const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");
const N = Number(input[0]);
const arr = input.slice(1).map(el => el.trim().split(" ").map(el => Number(el)));

let answer = 0;
// 전부 가로줄
for (let i = 0; i <= 8; i++) {
    for (let j = i + 1; j <= 9; j++) {
        for (let k = j + 1; k <= 10; k++) {
            for (let l = 0; l < N; l++) {
                const count = arr.filter(el => [i, j, k].includes(el[1]));
                if (count === N) answer = 1;
            }
        }
    }
}
// 전부 세로줄
for (let i = 0; i <= 8; i++) {
    for (let j = i + 1; j <= 9; j++) {
        for (let k = j + 1; k <= 10; k++) {
            for (let l = 0; l < N; l++) {
                const count = arr.filter(el => [i, j, k].includes(el[0]));
                if (count === N) answer = 1;
            }
        }
    }
}
// 2가로 1세로
for (let i = 0; i <= 9; i++) {
    for (let j = i + 1; j <= 10; j++) {
        for (let k = 0; k <= 10; k++) {
            const remain = [...arr].filter(el => [i, j].includes(el[1]));
            const result = [...remain].filter(el => el[0] === k);
            if (result.length === 0) answer = 1;
        }
    }
}
// 2세로 1가로
for (let i = 0; i <= 9; i++) {
    for (let j = i + 1; j <= 10; j++) {
        for (let k = 0; k <= 10; k++) {
            const remain = [...arr].filter(el => [i, j].includes(el[0]));
            const result = [...remain].filter(el => el[1] === k);
            if (result.length === 0) answer = 1;
        }
    }
}

console.log(answer);