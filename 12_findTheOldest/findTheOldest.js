const findTheOldest = function(arrOfPeople) {
    //Given an array of objects representing people with a birth and death year, return the oldest person object

    return arrOfPeople.reduce((oldestPerson, currentPerson) => {

        const CalcAge = function (person) {
            return ('yearOfDeath' in person) ? //ternary operator
                    person.yearOfDeath - person.yearOfBirth :
                    new Date().getFullYear() - person.yearOfBirth;
        }

        return CalcAge(currentPerson) > CalcAge(oldestPerson) ? currentPerson : oldestPerson;
    });
}

// Do not edit below this line
module.exports = findTheOldest;
