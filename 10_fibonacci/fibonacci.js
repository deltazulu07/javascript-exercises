const fibonacci = function(input) {
    //Create a function that returns a specific member of the Fibonacci sequence
    
    let num = Number(input);

    if (num < 0 ) return "OOPS";
    if (num === 0) return 0;
    if (num === 1 || num === 2) return 1;
    
    else {
        return fibonacci(num - 1) + fibonacci(num - 2);
    }
};

// Do not edit below this line
module.exports = fibonacci;
