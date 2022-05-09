const alphabet: string = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";

function caesarCipher(pass: string, offset: number = 3): string {
    let hash: string = "";
    for (let i = 0; i < pass.length; i++) {
        hash += alphabet[(alphabet.indexOf(pass[i])+offset) % alphabet.length];
    }
    return hash;
}

export { caesarCipher } 