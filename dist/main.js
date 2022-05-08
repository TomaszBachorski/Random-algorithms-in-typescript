"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const algortihms_1 = require("./algortihms");
let test = new Array("baba", "dakshbjhhhhhhhha", "dupa", "habcdadcg");
for (let i = 0; i < test.length; i++) {
    let longestPalindrom = (0, algortihms_1.longestPalindromInAString)(test[i]);
    console.log(longestPalindrom, longestPalindrom.length);
}
