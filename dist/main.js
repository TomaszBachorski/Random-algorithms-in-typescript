"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const algorithms = __importStar(require("./algorithms"));
let stringsForPalindroms = new Array("baba", "dakshbjhhhhhhhha", "anty", "habcdadcg", "alamakotaatokdsdas", "ala", "abba", "dasdaa");
for (let i = 0; i < stringsForPalindroms.length; i++) {
    let longestPalindrom = algorithms.longestPalindromInString(stringsForPalindroms[i]);
    console.log(longestPalindrom, longestPalindrom[0].length, (longestPalindrom[0].length === 1 ? "letter" : "letters"));
}
let passwords = new Array("Caesar1230", "beM0n04lph4b3t1c", "vi3gn3rCoolGuy");
for (let i = 0; i < passwords.length; i++) {
    // Caesar cipher
    // console.log("Generated password: (caesar)", caesarCipher(passwords[i]));
    // Monoalphabetical cipher
    // console.log("Generated password: (monoalphabetic)", monoalphabeticCipher(passwords[i]));
    // Polyalphabetical cipher (Viegenere)
    console.log("Generated password: (polyalphabetic)", polyalphabeticCipher(passwords[i]));
}
