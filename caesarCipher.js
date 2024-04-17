export default function caesarCipher (input, key) {
    //loop through letters, building a string with each character 
    // being increased by unicode value of key
    
    let originalUnicode = input.charCodeAt(0);
    let newUnicode = originalUnicode + key;

    const lengthofAlphabet = 26;

    let isUpperCase = false;
    
    if (originalUnicode >= 65 && originalUnicode <= 95) { //uppercase latin alphabet
        isUpperCase = true;
    }

    // uppercase & lowercase wrap
    if ((isUpperCase && newUnicode > 90) || 
    (!isUpperCase && newUnicode > 122)) 
    { 
        newUnicode -= lengthofAlphabet;
    }

    const newChar = String.fromCharCode(newUnicode);

    return newChar;

}