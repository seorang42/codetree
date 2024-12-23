const fs = require("fs");
const [Y, M, D] = fs.readFileSync(0).toString().trim().split(" ").map(el => Number(el));

const dates = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]

const checkLeapYear = (year) => {
    if (year % 4 === 0 && year % 100 !== 0) {
        return true;
    }
    if (year % 4 === 0 && year % 100 === 0 && year % 400 === 0) {
        return true;
    }
    return false;
}

const checkSeason = (y, m, d) => {
    if (m === 2) {
        if (checkLeapYear(y)) {
            if (d <= 29) {
                return "Winter";
            } else {
                return -1;
            }
        } else {
            if (d <= 28) {
                return "Winter";
            } else {
                return -1
            }
        }
    }
    if (day[m - 1] >= d) {
        if (m >= 3 && m <= 5) {
            return "Spring";
        } else if (m >= 6 && m <= 8) {
            return "Summer";
        } else if (m >= 9 && m <= 11) {
            return "Fall";
        } else if (m === 12 || m === 1 || m === 2) {
            return "Winter";
        }
    } else {
        return -1;
    }
}

console.log(checkSeason(Y, M, D));