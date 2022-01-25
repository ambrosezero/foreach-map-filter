/*
Write a function called doubleValues which accepts an array and returns a new array with 
all the values in the array passed to the function doubled

Examples:
    doubleValues([1,2,3]) // [2,4,6]
    doubleValues([5,1,2,3,10]) // [10,2,4,6,20]

*/

function doubleValues(arr) {
    const doubledArray = [];
    arr.forEach(value => {
        doubledArray.push(doubleValue(value));
    });
    return doubledArray
}

const doubleValue = function (number) {
    return number * 2;
}

/*
Write a function called onlyEvenValues which accepts an array and returns a new array with 
only the even values in the array passed to the function

Examples:
    onlyEvenValues([1,2,3]) // [2]
    onlyEvenValues([5,1,2,3,10]) // [2,10]

*/



function onlyEvenValues(arr) {
    const evenArray = [];
    arr.forEach(value => {
        if (value % 2 == 0) {
            evenArray.push(value);
        }
    });
    return evenArray
}

/*
Write a function called showFirstAndLast which accepts an array of strings and returns a new 
array with only the first and last character of each string.

Examples:
    showFirstAndLast(['colt','matt', 'tim', 'test']) // ["ct", "mt", "tm", "tt"]
    showFirstAndLast(['hi', 'goodbye', 'smile']) // ['hi', 'ge', 'se']

*/



function showFirstAndLast(arr) {
    const firstAndLastArray = [];
    arr.forEach(value => {
        let firstAndLastLetters = "";
        firstAndLastLetters += value[0];
        firstAndLastLetters += value[value.length - 1];
        firstAndLastArray.push(firstAndLastLetters)
    });
    return firstAndLastArray
}

/*
Write a function called addKeyAndValue which accepts an array of objects, a key, and a value 
and returns the array passed to the function with the new key and value added for each object 

Examples:
    addKeyAndValue([{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}], 'title', 'instructor') 
    
    // [{name: 'Elie', title:'instructor'}, {name: 'Tim', title:'instructor'}, 
    {name: 'Matt', title:'instructor'}, {name: 'Colt', title:'instructor'}]

*/



function addKeyAndValue(arr, key, value) {
    let keyAndValueArray = arr;
    keyAndValueArray.forEach(lettersInvowles => {
        lettersInvowles[key] = value;
    });
    return keyAndValueArray
}



/*
Write a function called vowelCount which accepts a string and returns an object with the keys 
as the vowel and the values as the number of times the vowel appears in the string. This 
function should be case insensitive so a lowercase letter and uppercase letter should count

Examples:
    vowelCount('Elie') // {e:2,i:1};
    vowelCount('Tim') // {i:1};
    vowelCount('Matt') // {a:1})
    vowelCount('hmmm') // {};
    vowelCount('I Am awesome and so are you') // {i: 1, a: 4, e: 3, o: 3, u: 1};
*/

// ???? test 5 returns the correct object, except the items are out of order
// ????({i: 1, a: 4, e: 3, o: 3, u: 1} vs {a: 4, e: 3, i: 1, o: 3, u: 1} )
// ???? why does this not throw an error?



function vowelCount(str) {
    let vowels = ["a", "e", "i", "o", "u"];
    let strArray = Array.from(str)
    const returnArray = {};
    vowels.forEach(lettersInvowles => {
        if (strArray.includes(lettersInvowles)) {
            let count = 0
            strArray.forEach(letterInstrArray => {
                if (lettersInvowles == letterInstrArray)
                    count++;
            });
            returnArray[lettersInvowles] = count
        }
    })
    return returnArray;
}

/*
Write a function called doubleValuesWithMap which accepts an array and returns a new array 
with all the values in the array passed to the function doubled

Examples:
    doubleValuesWithMap([1,2,3]) // [2,4,6]
    doubleValuesWithMap([1,-2,-3]) // [2,-4,-6]
*/



function doubleValuesWithMap(arr) {
    return arr.map(function (input) {
        return input * 2;
    })
}

/*
Write a function called valTimesIndex which accepts an array and returns a new array with each 
value multiplied by the index it is currently at in the array.

Examples:
    valTimesIndex([1,2,3]) // [0,2,6]
    valTimesIndex([1,-2,-3]) // [0,-2,-6]
*/




function valTimesIndex(arr) {
    return arr.map(function (value, index) {
        return value * index;
    })
}

/*
Write a function called extractKey which accepts an array of objects and some key and returns a 
new array with the value of that key in each object.

Examples:
    extractKey([{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}], 'name') // 
    ['Elie', 'Tim', 'Matt', 'Colt']
*/


function extractKey(arr, key) {
    return arr.map(function (obj) {
        if (obj[key]) return obj[key]
    })
}

/*
Write a function called extractFullName which accepts an array of objects and returns a new array 
with the value of the key with a name of "first" and the value of a key with the name of  "last" 
in each object, concatenated together with a space. 

Examples:
    extractFullName([{first: 'Elie', last:"Schoppik"}, {first: 'Tim', last:"Garcia"}, 
    {first: 'Matt', last:"Lane"}, {first: 'Colt', last:"Steele"}]) // 
    ['Elie Schoppik', 'Tim Garcia', 'Matt Lane', 'Colt Steele']
*/

function extractFullName(arr) {
    return arr.map(function (obj) {
        return `${obj.first} ${obj.last}`
    })
}

/*
Write a function called filterByValue which accepts an array of objects and a key and returns a 
new array with all the objects that contain that key.

Examples:
    filterByValue([{first: 'Elie', last:"Schoppik"}, {first: 'Tim', last:"Garcia", isCatOwner: true}, 
    {first: 'Matt', last:"Lane"}, {first: 'Colt', last:"Steele", isCatOwner: true}], 'isCatOwner') // 
    [{first: 'Tim', last:"Garcia", isCatOwner: true}, {first: 'Colt', last:"Steele", isCatOwner: true}]
*/



function filterByValue(arr, key) {
    return arr.filter(function (obj) {
        if (obj[key]) return obj;
    })
}

/*
Write a function called find which accepts an array and a value and returns the first lettersInvowles in 
the array that has the same value as the second parameter or undefined if the value is not found in 
the array.

Examples:
    find([1,2,3,4,5], 3) // 3
    find([1,2,3,4,5], 10) // undefined
*/

function find(arr, searchValue) {
    let list = arr.filter(function (value) {
        if (value == searchValue) return true;
    })
    return list[0]
}



/*
Write a function called findInObj which accepts an array of objects, a key, and some value to search 
for and returns the first found value in the array.

Examples:
    findInObj([{first: 'Elie', last:"Schoppik"}, {first: 'Tim', last:"Garcia", isCatOwner: true}, 
    {first: 'Matt', last:"Lane"}, {first: 'Colt', last:"Steele", isCatOwner: true}], 'isCatOwner',true) //
     {first: 'Tim', last:"Garcia", isCatOwner: true}
*/
function findInObj(arr, key, searchValue) {
    let newObj = arr.filter(function (obj) {
        if (obj[key] == searchValue) return true;
    })
    return newObj[0];
}

/*
Write a function called removeVowels which accepts a string and returns a new string with all of the 
vowels (both uppercased and lowercased) removed. Every character in the new string should be lowercased.

Examples:
    removeVowels('Elie') // ('l')
    removeVowels('TIM') // ('tm')
    removeVowels('ZZZZZZ') // ('zzzzzz')
*/
// ????? simpler way to handle the logic?????
function removeVowels(str) {
    let newArray = [...str.toLowerCase()]
    newArray = newArray.filter(function (letter) {
        if (letter != 'e' && letter != 'a' && letter != 'i' && letter != 'o' && letter != 'u') return true;
    })
    return newArray.join("");
}

/*
Write a function called doubleOddNumbers which accepts an array and returns a new array with all of the 
odd numbers doubled (HINT - you can use map and filter to double and then filter the odd numbers).

Examples:
    doubleOddNumbers([1,2,3,4,5]) // [2,6,10]
    doubleOddNumbers([4,4,4,4,4]) // []
*/


// ?????? how could i do this as a filter nested within map
function doubleOddNumbers(arr) {
    let oddNums = arr.filter(function (num) {
        return num % 2 != 0 && num != 0
    }
    )
    console.log(oddNums)
    return oddNums.map(function (oddNum) {
        return oddNum * 2;
    })
}
