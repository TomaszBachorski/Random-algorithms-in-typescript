import { longestPalindromInAString } from "./algortihms"

let test = new Array("baba", "dakshbjhhhhhhhha", "anty", "habcdadcg", "alamakotaatokdsdas", "ala", "abba");
for (let i = 0; i < test.length; i++) {
    let longestPalindrom = longestPalindromInAString(test[i]);
    console.log(longestPalindrom, longestPalindrom[0].length, ( longestPalindrom[0].length===1? "letter" : "letters"));
}

