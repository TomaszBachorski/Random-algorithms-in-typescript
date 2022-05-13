"use strict";
const alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
function activateCaesar(text, offset) {
    let resultField = document.getElementById("ceasarCipherResult");
    if (!text.value) {
        resultField.textContent = "Not given any text to cipher";
        return false;
    }
    if (offset.value && !Number(offset.value)) {
        resultField.textContent = "Offset is type number";
        return false;
    }
    if (!offset.value)
        offset.value = "3";
    resultField.textContent = `Hashed password: ${caesarCipher(text.value, Number(offset.value))}`;
    return true;
}
function caesarCipher(pass, offset = 3) {
    let hash = "";
    for (let i = 0; i < pass.length; i++) {
        if (!alphabet.includes(pass[i]))
            hash += pass[i];
        else
            hash += alphabet[(alphabet.indexOf(pass[i]) + offset) % alphabet.length];
    }
    return hash;
}
function activateMonoalphabeticCipher(text, keyword) {
    let resultField = document.getElementById("monoalphabeticResult");
    if (!text.value || !keyword.value) {
        resultField.textContent = "Plaintext and the key cannot be empty!";
        return false;
    }
    resultField.textContent = `Hashed password: ${monoalphabeticCipher(text.value, keyword.value)}`;
    return true;
}
function monoalphabeticCipher(pass, key) {
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
function activatePolyalphabeticCipher(text, keyword) {
    let resultField = document.getElementById("polyalphabeticResult");
    if (!text.value || !keyword.value) {
        resultField.textContent = "Plaintext and the key cannot be empty!";
        return false;
    }
    resultField.textContent = `Hashed password: ${polyalphabeticCipher(text.value, keyword.value)}`;
    return true;
}
function polyalphabeticCipher(pass, key) {
    let hash = "";
    for (let i = 0; i < pass.length; i++) {
        let currentAlphabet = alphabet.slice(alphabet.indexOf(key[i % key.length])) + alphabet.slice(0, alphabet.indexOf(key[i % key.length]));
        hash += currentAlphabet[alphabet.indexOf(pass[i])];
    }
    return hash;
}
