function longestPalindromInAString(text: string): string[] {
    let longestPalindroms: string[] = new Array();
    let longestStringLength: number = 0;
    for (let i = 0; i < text.length; i++) {
        let maxWidth = Math.min(i, text.length - i);
        let tempString: string = text[i];
        for (let j = 1; j <= maxWidth; j++) {
            if (text[i - j] === text[i + j]) {
                tempString = text[i - j] + tempString + text[i + j];
                continue;
            } else {
                break
            }
        }
        let tempStringForEven: string = "";
        if (text[i] === text[i + 1]) tempStringForEven = text[i] + text[i + 1];
        for (let j = 1; j <= maxWidth; j++) {
            if (text[i - j] === text[i + j + 1]) {
                tempStringForEven = text[i - j] + tempStringForEven + text[i + j + 1];
                continue;
            } else {
                break
            }
        }
        if (longestPalindroms.length===0 || (longestPalindroms[0].length<=tempString.length)) {
            if (longestPalindroms[0] && longestPalindroms[0].length<tempString.length) longestPalindroms = new Array();
            longestPalindroms.push(tempString);
        }
        if (longestPalindroms.length===0 || (longestPalindroms[0].length<=tempStringForEven.length)) {
            if (longestPalindroms[0] && longestPalindroms[0].length<tempStringForEven.length) longestPalindroms = new Array();
            longestPalindroms.push(tempStringForEven);
        }
        if (tempString.length > longestStringLength) longestStringLength = tempString.length;
        if (tempStringForEven.length > longestStringLength) longestStringLength = tempStringForEven.length;

    }
    return longestPalindroms;
}

export { longestPalindromInAString }