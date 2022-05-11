"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.longestPalindromInString = void 0;
function longestPalindromInString(element) {
    let text = element.children[1].value || "";
    if (element.children[element.children.length - 1].id !== "palindromResult") {
        var p = document.createElement("p");
        p.setAttribute("id", "palindromResult");
        element.appendChild(p);
    }
    if (!text) {
        element.children[element.children.length - 1].textContent = "Tried to check palindroms in empty text";
        return false;
    }
    let longestPalindroms = new Array();
    let longestStringLength = 0;
    for (let i = 0; i < text.length; i++) {
        let maxWidth = Math.min(i, text.length - i);
        let tempString = text[i];
        for (let j = 1; j <= maxWidth; j++) {
            if (text[i - j] === text[i + j]) {
                tempString = text[i - j] + tempString + text[i + j];
                continue;
            }
            else {
                break;
            }
        }
        let tempStringForEven = "";
        if (text[i] === text[i + 1]) {
            tempStringForEven = text[i] + text[i + 1];
            for (let j = 1; j <= maxWidth; j++) {
                if (text[i - j] === text[i + j + 1]) {
                    tempStringForEven = text[i - j] + tempStringForEven + text[i + j + 1];
                    continue;
                }
                else {
                    break;
                }
            }
        }
        if (longestPalindroms.length === 0 || (longestPalindroms[0].length <= tempString.length)) {
            if (longestPalindroms[0] && longestPalindroms[0].length < tempString.length)
                longestPalindroms = new Array();
            longestPalindroms.push(tempString);
        }
        if (longestPalindroms.length === 0 || (longestPalindroms[0].length <= tempStringForEven.length)) {
            if (longestPalindroms[0] && longestPalindroms[0].length < tempStringForEven.length)
                longestPalindroms = new Array();
            longestPalindroms.push(tempStringForEven);
        }
        if (tempString.length > longestStringLength)
            longestStringLength = tempString.length;
        if (tempStringForEven.length > longestStringLength)
            longestStringLength = tempStringForEven.length;
    }
    element.children[element.children.length - 1].textContent = `${longestPalindroms.join(", ")} - ${longestStringLength} ${longestStringLength === 1 ? "letter" : "letters"}`;
    return true;
}
exports.longestPalindromInString = longestPalindromInString;
