"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.longestPalindromInAString = void 0;
function longestPalindromInAString(text) {
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
        if (text[i] === text[i + 1])
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
    return longestPalindroms;
}
exports.longestPalindromInAString = longestPalindromInAString;
