import { longestPalindromInAString } from "./algortihms"

let test = new Array("baba", "dakshbjhhhhhhhha", "dupa", "habcdadcg");
for (let i = 0; i < test.length; i++) {
    let longestPalindrom = longestPalindromInAString(test[i]);
    console.log(longestPalindrom, longestPalindrom.length);
}

