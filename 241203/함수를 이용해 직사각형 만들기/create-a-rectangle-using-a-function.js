const fs = require("fs");
const [n, m] = fs.readFileSync(0).toString().trim().split(" ").map(el => Number(el));

const printRectangle = (n, m) => {
    for (let i = 0; i < n; i++) {
        let str = "";
        for (let j = 0; j < m; j++) {
            str += 1;
        }
        console.log(str);
    }
}

printRectangle(n, m);