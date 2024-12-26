const fs = require("fs");
const [id, level] = fs.readFileSync(0).toString().trim().split(" ");

class UserInfo {
    constructor (id = "codetree", level = 10) {
        this.id = id;
        this.level = level;
    }
}

const user1 = new UserInfo();
const user2 = new UserInfo(id, Number(level));

const printUserInfo = (userInfo) => {
    return `user ${userInfo.id} lv ${userInfo.level}`;
}

console.log(printUserInfo(user1));
console.log(printUserInfo(user2));