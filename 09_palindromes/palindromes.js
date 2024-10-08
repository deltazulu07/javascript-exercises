const palindromes = function (str) {
    //Write a function that determines whether or not a given string is a palindrome, without considering punctuation or word breaks

    // remove non letter/number characters from string
    let AlphaNumeric = [];
    for (let char of str) {
        if (/\w/.test(char) && char !== '_') {
            AlphaNumeric.push(char.toLowerCase());
        }
    }

    //compare elements from front and back by index
    for (let i = 0; i < AlphaNumeric.length / 2 + 1; i ++) {
        if (AlphaNumeric[i] !== AlphaNumeric[AlphaNumeric.length - i - 1]) {
            return false;
        }
    }
    return true;
}

// Do not edit below this line
module.exports = palindromes;
