const fs = require("fs");
const month = Number(fs.readFileSync(0).toString().trim());

let season = "";
if (month >= 3 && month <= 5) {
    season = "Spring";
} else if (month >= 6 && month <= 8) {
    season = "Summer";
} else if (month >= 9 && month <= 11) {
    season = "Fall";
} else {
    season = "Winter";
}

console.log(season);