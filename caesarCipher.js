export default function caesarCipher (input, key) {
    //loop through letters, building a string with each character 
    // being increased by unicode value of key
    
    let newUnicode = input.charCodeAt(0);
    newUnicode += key;

    const lengthofAlphabet = 26;
    


    // if greater in the unicode index than 'z': wrap around to 'a'
    if (newUnicode > 122) { 
        newUnicode -= lengthofAlphabet
    }

    const newChar = String.fromCharCode(newUnicode);

    return newChar;

}