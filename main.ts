import { longestPalindromInString } from "./algortihms"
import { caesarCipher, monoalphabeticCipher , polyalphabeticCipher} from "./ciphers"

let stringsForPalindroms = new Array("baba", "dakshbjhhhhhhhha", "anty", "habcdadcg", "alamakotaatokdsdas", "ala", "abba");
for (let i = 0; i < stringsForPalindroms.length; i++) {
    let longestPalindrom = longestPalindromInString(stringsForPalindroms[i]);
    // console.log(longestPalindrom, longestPalindrom[0].length, (longestPalindrom[0].length === 1 ? "letter" : "letters"));
}

let passwords = new Array("Caesar1230", "beM0n04lph4b3t1c", "vi3gn3rCoolGuy")
for (let i = 0 ; i< passwords.length;i++) {
    // Caesar cipher
    // console.log("Generated password: (caesar)", caesarCipher(passwords[i]));
    // Monoalphabetical cipher
    // console.log("Generated password: (monoalphabetic)", monoalphabeticCipher(passwords[i]));
    // Polyalphabetical cipher (Viegenere)
    console.log("Generated password: (polyalphabetic)", polyalphabeticCipher(passwords[i]));
}
