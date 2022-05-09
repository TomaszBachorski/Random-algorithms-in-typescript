"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const algortihms_1 = require("./algortihms");
const ciphers_1 = require("./ciphers");
let stringsForPalindroms = new Array("baba", "dakshbjhhhhhhhha", "anty", "habcdadcg", "alamakotaatokdsdas", "ala", "abba");
for (let i = 0; i < stringsForPalindroms.length; i++) {
    let longestPalindrom = (0, algortihms_1.longestPalindromInString)(stringsForPalindroms[i]);
    // console.log(longestPalindrom, longestPalindrom[0].length, (longestPalindrom[0].length === 1 ? "letter" : "letters"));
}
let passwords = new Array("Caesar1230", "beM0n04lph4b3t1c", "vi3gn3rCoolGuy");
for (let i = 0; i < passwords.length; i++) {
    // Caesar cipher
    // console.log("Generated password: (caesar)", caesarCipher(passwords[i]));
    // Monoalphabetical cipher
    // console.log("Generated password: (monoalphabetic)", monoalphabeticCipher(passwords[i]));
    // Polyalphabetical cipher (Viegenere)
    console.log("Generated password: (polyalphabetic)", (0, ciphers_1.polyalphabeticCipher)(passwords[i]));
}
