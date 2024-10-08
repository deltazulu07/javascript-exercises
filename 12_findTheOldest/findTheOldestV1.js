const findTheOldest = function(arrOfPeople) {
    //Given an array of objects representing people with a birth and death year, return the oldest person object

    //map array of people to array of age
    const arrayOfAge = arrOfPeople.map((person) => {
        return ('yearOfDeath' in person) ? //ternary operator
                person.yearOfDeath - person.yearOfBirth :
                new Date().getFullYear() - person.yearOfBirth;
    });

    //find largest num in age array and its corresponding index
    const indexOfOldest = arrayOfAge.indexOf(Math.max(...arrayOfAge));

    //return person by that index
    return arrOfPeople[indexOfOldest];
}

// Do not edit below this line
module.exports = findTheOldest;
