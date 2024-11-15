const fs = require("fs");
const input = fs.readFileSync(0).toString().trim();

let [ee, eb] = [0, 0];
for (let i = 0; i < input.length - 1; i++) {
    const str = input.slice(i, i + 2);
    if (str === "ee") {
        ee++;
    } else if (str === "eb") {
        eb++;
    }
}

console.log(ee, eb);