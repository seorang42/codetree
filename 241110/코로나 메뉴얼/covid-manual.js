const fs = require("fs");
let lines = fs.readFileSync(0).toString().trim().split("\n").map(el => el.split(" ").map((el, index) => index === 1 ? Number(el) : el));

let a = 0;

lines.forEach(el => {
    const [cold, temp] = [el[0], el[1]];
    if (cold === "Y" && temp >= 37) {
        a += 1;
    }
})

console.log(a >= 2 ? "E" : "N");