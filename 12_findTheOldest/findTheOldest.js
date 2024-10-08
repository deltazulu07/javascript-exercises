const findTheOldest = function(arrOfPeople) {
    //Given an array of objects representing people with a birth and death year, return the oldest person object

    const oldest = arrOfPeople.reduce((oldestPerson, currentPerson) => {

        function CalcAge(person) {
            return ('yearOfDeath' in person) ? //ternary operator
                    person.yearOfDeath - person.yearOfBirth :
                    new Date().getFullYear() - person.yearOfBirth;
        }

        if (CalcAge(currentPerson) > CalcAge(oldestPerson)) {
            oldestPerson = currentPerson;
        }
        return oldestPerson;
    }, arrOfPeople[0]);

    return oldest;
}

// Do not edit below this line
module.exports = findTheOldest;
