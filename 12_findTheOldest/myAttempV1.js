const findTheOldest = function(arrOfPeople) {
    //Given an array of objects representing people with a birth and death year, return the oldest person object

    const today = new Date();
    const thisYear = today.getFullYear();

    const peopleWithAges = arrOfPeople.map(person => {
        let age;

        if (!('yearOfDeath' in person)) {
            age = thisYear - person.yearofBirth;
        }
        else {
            age = person.yearofDeath - person.yearofBirth;
        }

        return {
            ...person,
            age
        };
    });

    peopleWithAges.sort((p1, p2) => (p2.age - p1.age));
    return peopleWithAges[0];

}

// Do not edit below this line
module.exports = findTheOldest;
