const reverseString = function(input) {
    let reversed = '';
    for (let i = 0; i<input.length; i++)  {
        reversed = input[i] + reversed;
    }
    return reversed;
};

// Do not edit below this line
module.exports = reverseString;
