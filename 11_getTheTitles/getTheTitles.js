const getTheTitles = function(arrOfObj) {
    //given an array of objects that represent books with an author and a title
    //write a function that takes the array and returns an array of titles
    return arrOfObj.map(obj => obj.title);

};

// Do not edit below this line
module.exports = getTheTitles;
