"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const algortihms_1 = require("./algortihms");
const ciphers_1 = require("./ciphers");
let stringsForPalindroms = new Array("baba", "dakshbjhhhhhhhha", "anty", "habcdadcg", "alamakotaatokdsdas", "ala", "abba");
for (let i = 0; i < stringsForPalindroms.length; i++) {
    let longestPalindrom = (0, algortihms_1.longestPalindromInString)(stringsForPalindroms[i]);
    console.log(longestPalindrom, longestPalindrom[0].length, (longestPalindrom[0].length === 1 ? "letter" : "letters"));
}
let passwords = new Array("Caesar1230");
for (let i = 0; i < passwords.length; i++) {
    console.log(`Generated password: ` + (0, ciphers_1.caesarCipher)(passwords[i]));
}
