const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");
const N = Number(input[0]);
const arr = input.slice(1).map(el => el.split(" ").map(el => Number(el)));

let answer = 0;
for (let i = 0; i < N - 2; i++) {
    for (let j = i + 1; j < N - 1; j++) {
        for (let k = j + 1; k < N; k++) {
            const [x1, y1] = arr[i];
            const [x2, y2] = arr[j];
            const [x3, y3] = arr[k];
            let [width, height] = [0, 0];
            if (x1 === x2) {
                height = Math.abs(y1 - y2);
                if (y2 === y3) {
                    width = Math.abs(x2 - x3);
                }
                else if (y3 === y1) {
                    width = Math.abs(x3 - x1);
                }
            }
            else if (x2 === x3) {
                height = Math.abs(y2 - y3);
                if (y3 === y1) {
                    width = Math.abs(x3 - x1);
                }
                else if (y1 === y2) {
                    width = Math.abs(x1 - x2);
                }
            }
            else if (x3 === x1) {
                height = Math.abs(y3 - y1);
                if (y1 === y2) {
                    width = Math.abs(x1 - x2);
                }
                else if (y2 === y3) {
                    width = Math.abs(x2 - x3);
                }
            }

            if (width !== 0 && height !== 0) {
                const area = width * height;
                if (area > answer) {
                    answer = area;
                }
            }
        }
    }
}

console.log(answer);