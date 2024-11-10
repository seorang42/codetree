const fs = require("fs");
let [[aAge, aGender], [bAge, bGender]] = fs.readFileSync(0).toString().trim().split("\n").map(el => el.split(" "));

[aAge, bAge] = [Number(aAge), Number(bAge)];

if (aAge >= 19 && aGender === "M" || bAge >= 19 && bGender === "M") {
    console.log(1);
} else {
    console.log(0);
}