const removeFromArray = function(list, argument) {
    let indexOfarg = 0;
    while (indexOfarg !== -1) {
        indexOfarg = list.indexOf(argument);
        list.splice(indexOfarg, 1);
    }
    return list;

};

// Do not edit below this line
module.exports = removeFromArray;
