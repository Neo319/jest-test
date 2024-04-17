export default function caesarCipher (input, key) {
    //loop through letters, building a string with each character 
    // being increased by unicode value of key
    
    let newUnicode = input.charCodeAt(0);
    newUnicode += key;
    const newChar = String.fromCharCode(newUnicode);

    return newChar;

}