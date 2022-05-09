import { longestPalindromInString } from "./algortihms"
import { caesarCipher } from "./ciphers"

let stringsForPalindroms = new Array("baba", "dakshbjhhhhhhhha", "anty", "habcdadcg", "alamakotaatokdsdas", "ala", "abba");
for (let i = 0; i < stringsForPalindroms.length; i++) {
    let longestPalindrom = longestPalindromInString(stringsForPalindroms[i]);
    console.log(longestPalindrom, longestPalindrom[0].length, (longestPalindrom[0].length === 1 ? "letter" : "letters"));
}

let passwords = new Array("Caesar1230")
for (let i = 0 ; i< passwords.length;i++) {
    console.log(`Generated password: ` + caesarCipher(passwords[i]));
}
