const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");
const N = Number(input[0]);
const arr = input.slice(1).map(el => el.split(" "));
const line = Array(101).fill("");

arr.forEach(el => {
    line[Number(el[0])] = el[1];
});

let answer = 0;
for (let i = 0; i <= 100; i++) {
    if (line[i] !== "") {
        for (let j = i; j <= 100; j++) {
            if (line[j] !== "") {
                let [G, H] = [0, 0];
                let [start, end] = [0, 0];
                for (let k = i; k <= j; k++) {
                    if (line[k] === "G") {
                        G++;
                    } else if (line[k] === "H") {
                        H++;
                    }
                }
                if ((G >= 1 && H >= 1 && G === H) || (G === 0 && H > 1) || (G > 1 && H === 0)) {
                    [start, end] = [i, j];
                    if (end - start > answer) {
                        answer = end - start;
                    }
                }
            }
        }
    }
}

console.log(answer);