function palindromes(str) {
    //Write a function that determines whether or not a given string is a palindrome, without considering punctuation or word breaks

    // remove non letter/number characters from string
    let AlphaNumeric = [];
    for (let char of str) {
        // console.log(/\w/.test(char));
        if (/\w/.test(char) && char !== '_') {
            AlphaNumeric.push(char.toLowerCase());
        }
    }
    console.log(AlphaNumeric);

    //compare elements from front and back by index
    for (let i = 0; i < AlphaNumeric.length / 2 + 1; i ++) {
        console.log('compare ' + AlphaNumeric[i] + ' & ' + AlphaNumeric[AlphaNumeric.length - i - 1]);
        if (AlphaNumeric[i] !== AlphaNumeric[AlphaNumeric.length - i - 1]) {
            return false;
        }
    }
    return true;
}

// console.log(palindromes('racecar')); // true
// console.log(palindromes('tacos')); // false
// console.log(palindromes('racecar!')); //true
// console.log(palindromes('Racecar!')); //true
console.log(palindromes('r3ace3car')); //false