const removeFromArray = function(SourceArray, ...theArgs) {
    let result = [];
    for (let i = 0; i < SourceArray.length; i++) {
        let element = SourceArray[i];
        if (! theArgs.includes(element)) {
            result.push(element);
        }
    }
    return result;

};

// Do not edit below this line
module.exports = removeFromArray;
