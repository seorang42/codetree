const fs = require("fs");
const [x1, x2, x3, x4] = fs.readFileSync(0).toString().trim().split(" ").map(el => Number(el));

if (x2 >= x3 || x1 >= x4 || (x1 <= x3 && x4 <= x2) || (x3 <= x1 && x2 <= x4)) {
    console.log("intersecting");
} else {
    console.log("nonintersecting");
}