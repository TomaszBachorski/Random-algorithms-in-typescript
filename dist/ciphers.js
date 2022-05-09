"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.caesarCipher = void 0;
const alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
function caesarCipher(pass, offset = 3) {
    let hash = "";
    for (let i = 0; i < pass.length; i++) {
        hash += alphabet[(alphabet.indexOf(pass[i]) + offset) % alphabet.length];
    }
    return hash;
}
exports.caesarCipher = caesarCipher;
