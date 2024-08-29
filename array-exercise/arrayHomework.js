//translate border-left-width to borderLeftWidth

function camelize(str) {
    const arr = str.split('-');
    console.log(arr);
    const arrCap = arr.map((element, index) => {
        if (index === 0) {
            return element;
        }
        return element.charAt(0).toUpperCase() + element.substring(1);
    })
    const strCamel = arrCap.join('');
    return strCamel;

}

// console.log(camelize('background-color'));
// console.log(camelize('list-style-image'));
// console.log(camelize('-webkit-transition'));


// filter range
//gets an array arr, looks for elements with values higher or equal to a and lower or equal to b and return a result as an array. The function should not modify the array. It should return the new array.

function filterRange(arr, a, b) {
    const filteredArr = arr.filter(item => item >= a && item <=b);
    return filteredArr;
}

// let arr = [5, 3, 8, 1];
// let filtered = filterRange(arr, 1, 4);

// console.log( filtered ); // 3,1 (matching values)
// console.log( arr ); // 5,3,8,1 (not modified)

//filter range "in place"
//gets an array, removes from it all values except those that are between a and b. The function should only modify the array. It should not return anything.

function filterRangeInPlace(arr, a, b) {
    arr.forEach(item => {
        if (!(item >= a && item <= b)) {
            index = arr.indexOf(item);
            arr.splice(index, 1);
        }
    })
}

// let arr2 = [5, 3, 8, 1];
// filterRangeInPlace(arr2, 1, 4); // removed the numbers except from 1 to 4
// console.log( arr2 ); // [3, 1]


//sort in decreasing order
// let arr = [5, 2, 1, -10, 8];
// arr.sort((a, b) => b - a);
// console.log( arr ); // 8, 5, 2, 1, -10


// copy and sort array
//We have an array of strings arr. We’d like to have a sorted copy of it, but keep arr unmodified.
// Create a function copySorted(arr) that returns such a copy.

function copySorted(arr) {
    const copy = arr.slice();
    const sortedCopy = copy.sort();
    return sortedCopy;
}

// let arr = ["HTML", "JavaScript", "CSS"];
// let sorted = copySorted(arr);
// console.log( sorted ); // CSS, HTML, JavaScript
// console.log( arr ); // HTML, JavaScript, CSS (no changes)

//Map to names
//You have an array of user objects, each one has user.name. Write the code that converts it into an array of names.

// let john = { name: "John", age: 25 };
// let pete = { name: "Pete", age: 30 };
// let mary = { name: "Mary", age: 28 };

// let users = [ john, pete, mary ];

// let names = users.map(user => user.name);

// console.log( names ); // John, Pete, Mary


//Map to objects
//You have an array of user objects, each one has name, surname and id.
//Write the code to create another array from it, of objects with id and fullName, where fullName is generated from name and surname.

// let john = { name: "John", surname: "Smith", id: 1 };
// let pete = { name: "Pete", surname: "Hunt", id: 2 };
// let mary = { name: "Mary", surname: "Key", id: 3 };

// let users = [ john, pete, mary ];

function mapName(user) {
    return {fullName: user.name + ' ' + user.surname, 
            id: user.id};
}

// // let usersMapped = users.map(mapName);
// let usersMapped = users.map(user => {
//     return {fullName: user.name + ' ' + user.surname, 
//     id: user.id}}
// );

// /*
// usersMapped = [
//   { fullName: "John Smith", id: 1 },
//   { fullName: "Pete Hunt", id: 2 },
//   { fullName: "Mary Key", id: 3 }
// ]
// */

// console.log( usersMapped[0].id ) // 1
// console.log( usersMapped[0].fullName ) // John Smith

//sort users by age
//Write the function sortByAge(users) that gets an array of objects with the age property and sorts them by age.

// let john = { name: "John", age: 25 };
// let pete = { name: "Pete", age: 30 };
// let mary = { name: "Mary", age: 28 };

// let arr = [ pete, john, mary ];

function sortByAge(array) {
    //sort array in place by age
    array.sort((userA, userB) => (userA.age - userB.age));
};


// sortByAge(arr);

// // now: [john, mary, pete]
// console.log(arr[0].name); // John
// console.log(arr[1].name); // Mary
// console.log(arr[2].name); // Pete

//shuffle an array
// Write the function shuffle(array) that shuffles (randomly reorders) elements of the array.
//All element orders should have an equal probability. For instance, [1,2,3] can be reordered as [1,2,3] or [1,3,2] or [3,1,2] etc, with equal probability of each case.
// Multiple runs of shuffle may lead to different orders of elements. For instance:

function shuffle(array) {
    let randomArray = [];
    let chosenIndexArray = [];
    const minIndex = 0;
    const maxIndex = array.length - 1;
    while (randomArray.length !== array.length) {
        const randomIndex = Math.floor(Math.random() * (maxIndex - minIndex + 1)) + minIndex;
        if (!(chosenIndexArray.includes(randomIndex))) {
            const val = array[randomIndex];
            randomArray.push(val);
            chosenIndexArray.push(randomIndex);
        }
    }
    return randomArray;
}


// let arr = [2, 4, 6, 8, 10];

// console.log(shuffle(arr));
// console.log(shuffle(arr));
// console.log(shuffle(arr));
// console.log(shuffle(arr));
// console.log(shuffle(arr));
// console.log(shuffle(arr));

// get average age
//Write the function getAverageAge(users) that gets an array of objects with property age and returns the average age.
// The formula for the average is (age1 + age2 + ... + ageN) / N.

function getAverageAge(users) {
    return users.reduce((total, user) => total + user.age, 0) / users.length;
}

// let john = { name: "John", age: 25 };
// let pete = { name: "Pete", age: 30 };
// let mary = { name: "Mary", age: 29 };

// let arr = [ john, pete, mary ];

// console.log( getAverageAge(arr) ); // (25 + 30 + 29) / 3 = 28


//filter unique array members
//Let arr be an array.
// Create a function unique(arr) that should return an array with unique items of arr.

function unique(arr) {
    let uniqueArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (i === arr.findLastIndex(element => element === arr[i])) {
            uniqueArr.push(arr[i]);
        }
    }
    return uniqueArr;

  }
  
//   let strings = ["Hare", "Krishna", "Hare", "Krishna",
//     "Krishna", "Krishna", "Hare", "Hare", ":-O"];
  
//   console.log( unique(strings) ); // Hare, Krishna, :-O

  // create keyed object from array
//Let’s say we received an array of users in the form {id:..., name:..., age:... }.
// Create a function groupById(arr) that creates an object from it, with id as the key, and array items as values.

function groupById(arr) {
    let mapped = {};
    for (let i in arr) {
        mapped[arr[i].id] = arr[i];
    }
    return mapped;
}

// function groupById(array) {
//     return array.reduce((obj, value) => {
//         obj[value.id] = value;
//         return obj;
//     }, {})
// }


let users = [
    {id: 'john', name: "John Smith", age: 20},
    {id: 'ann', name: "Ann Smith", age: 24},
    {id: 'pete', name: "Pete Peterson", age: 31},
  ];
  
  let usersById = groupById(users);
  console.log(usersById);
  
  /*
  // after the call we should have:
  
  usersById = {
    john: {id: 'john', name: "John Smith", age: 20},
    ann: {id: 'ann', name: "Ann Smith", age: 24},
    pete: {id: 'pete', name: "Pete Peterson", age: 31},
  }
  */
 