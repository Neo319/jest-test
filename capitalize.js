const capitalize = function (input) {
    let output = input.charAt(0).toUpperCase() 
    return output.concat(input.slice(1)) 
}
module.exports = capitalize;