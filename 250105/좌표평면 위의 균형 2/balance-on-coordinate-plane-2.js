const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");
const N = Number(input[0]);
const arr = input.slice(1).map(el => el.split(" ").map(el => Number(el)));

let answer = Infinity;
for (let i = 2; i <= 100; i += 2) {
    for (let j = 2; j <= 100; j += 2) {
        let [dim1, dim2, dim3, dim4] = [0, 0, 0, 0];
        for (let k = 0; k < N; k++) {
            const [x, y] = arr[k];
            if (x > i && y > j) {
                dim1++;
            } else if (x < i && y > j) {
                dim2++;
            } else if (x < i && y < j) {
                dim3++;
            } else if (x > i && y < j) {
                dim4++;
            }
        }
        const max = Math.max(dim1, dim2, dim3, dim4);
        if (max < answer) answer = max;
    }
}

console.log(answer);