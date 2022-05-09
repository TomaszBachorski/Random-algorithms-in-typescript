"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.polyalphabeticCipher = exports.monoalphabeticCipher = exports.caesarCipher = void 0;
const alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
function caesarCipher(pass, offset = 3) {
    let hash = "";
    for (let i = 0; i < pass.length; i++) {
        hash += alphabet[(alphabet.indexOf(pass[i]) + offset) % alphabet.length];
    }
    return hash;
}
exports.caesarCipher = caesarCipher;
function monoalphabeticCipher(pass) {
    const key = "k3yb04rd";
    let newAlphabet = "";
    let hash = "";
    newAlphabet = [...new Set(key.split(""))].join(""); //Get only unique letters
    for (let i = 0; i < alphabet.length; i++) {
        if (!newAlphabet.includes(alphabet[i]))
            newAlphabet += alphabet[i];
    }
    for (let i = 0; i < pass.length; i++) {
        hash += newAlphabet[alphabet.indexOf(pass[i])];
    }
    return hash;
}
exports.monoalphabeticCipher = monoalphabeticCipher;
function polyalphabeticCipher(pass) {
    let hash = "";
    const key = "k3yb04rd";
    for (let i = 0; i < pass.length; i++) {
        let currentAlphabet = alphabet.slice(alphabet.indexOf(key[i % key.length])) + alphabet.slice(0, alphabet.indexOf(key[i % key.length]));
        hash += currentAlphabet[alphabet.indexOf(pass[i])];
    }
    return hash;
}
exports.polyalphabeticCipher = polyalphabeticCipher;
