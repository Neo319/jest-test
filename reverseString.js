const reverseString = function (input) {
    //loop through the string, take new array and build
    let output = '';
    for (let i = input.length -1; i >= 0; i--) {
        let newChar = input.charAt(i);
        output = output.concat(newChar);
    }
    return output;
}
module.exports = reverseString 