export default function caesarCipher (input, key) {
    //loop through letters, building a string with each character 
    // being increased by unicode value of key
    
 

    const lengthofAlphabet = 26;

    let output = '';

    for (let i = 0; i < input.length; i++) {
        const originalUnicode = input.charCodeAt(i);

        let isUpperCase = false;
        let newUnicode;

        //check for spaces, punctuation, symbols
        if (originalUnicode > 64) {
            newUnicode = originalUnicode + key;
        } else {
            newUnicode = originalUnicode
        }
    
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
        output = output.concat(newChar)

    }

    return output;

}