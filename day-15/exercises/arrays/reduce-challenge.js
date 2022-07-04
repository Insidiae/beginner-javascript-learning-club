//* Grab all the text from a web page
const text = `
Skip to main content
Skip to search
Skip to select language
MDN Plus now available in your country! Support MDN and make it your own. Learn more ✨


References
Guides
MDN Plus
Search MDN


SEARCH

Theme
Already a subscriber?
Get MDN Plus
References
JavaScript
JavaScript
Standard built-in objects
Array
Array.prototype.reduce()

English (US)
Related Topics
Standard built-in objects
Array
Properties
Array.prototype[@@unscopables]
Array.prototype.length
Methods
Array.prototype[@@iterator]()
get Array[@@species]
Experimental
Array.prototype.at()
Array.prototype.concat()
Array.prototype.copyWithin()
Array.prototype.entries()
Array.prototype.every()
Array.prototype.fill()
Array.prototype.filter()
Array.prototype.find()
Array.prototype.findIndex()
Array.prototype.flat()
Array.prototype.flatMap()
Array.prototype.forEach()
Array.from()
Experimental
Array.prototype.group()
Experimental
Array.prototype.groupToMap()
Array.prototype.includes()
Array.prototype.indexOf()
Array.isArray()
Array.prototype.join()
Array.prototype.keys()
Array.prototype.lastIndexOf()
Array.prototype.map()
Array.of()
Array.prototype.pop()
Array.prototype.push()
Array.prototype.reduce()
Array.prototype.reduceRight()
Array.prototype.reverse()
Array.prototype.shift()
Array.prototype.slice()
Array.prototype.some()
Array.prototype.sort()
Array.prototype.splice()
Array.prototype.toLocaleString()
Non-Standard
Array.prototype.toSource()
Array.prototype.toString()
Array.prototype.unshift()
Array.prototype.values()
Inheritance:
Function
Properties
Methods
Object
Properties
Methods
In this article
Try it
Syntax
Description
Examples
Specifications
Browser compatibility
See also
Array.prototype.reduce()
The reduce() method executes a user-supplied "reducer" callback function on each element of the array, in order, passing in the return value from the calculation on the preceding element. The final result of running the reducer across all elements of the array is a single value.

The first time that the callback is run there is no "return value of the previous calculation". If supplied, an initial value may be used in its place. Otherwise the array element at index 0 is used as the initial value and iteration starts from the next element (index 1 instead of index 0).

Perhaps the easiest-to-understand case for reduce() is to return the sum of all the elements in an array:

Try it

The reducer walks through the array element-by-element, at each step adding the current array value to the result from the previous step (this result is the running sum of all the previous steps) — until there are no more elements to add.

Syntax
// Arrow function
reduce((previousValue, currentValue) => { /* ... */ } )
reduce((previousValue, currentValue, currentIndex) => { /* ... */ } )
reduce((previousValue, currentValue, currentIndex, array) => { /* ... */ } )

reduce((previousValue, currentValue) => { /* ... */ } , initialValue)
reduce((previousValue, currentValue, currentIndex) => { /* ... */ } , initialValue)
reduce((previousValue, currentValue, currentIndex, array) => { /* ... */ }, initialValue)

// Callback function
reduce(callbackFn)
reduce(callbackFn, initialValue)

// Inline callback function
reduce(function(previousValue, currentValue) { /* ... */ })
reduce(function(previousValue, currentValue, currentIndex) { /* ... */ })
reduce(function(previousValue, currentValue, currentIndex, array) { /* ... */ })

reduce(function(previousValue, currentValue) { /* ... */ }, initialValue)
reduce(function(previousValue, currentValue, currentIndex) { /* ... */ }, initialValue)
reduce(function(previousValue, currentValue, currentIndex, array) { /* ... */ }, initialValue)
Copy to Clipboard
Parameters
callbackFn
A "reducer" function.

The function is called with the following arguments:

previousValue: the value resulting from the previous call to callbackFn. On first call, initialValue if specified, otherwise the value of array[0].
currentValue: the value of the current element. On first call, the value of array[0] if an initialValue was specified, otherwise the value of array[1].
currentIndex: the index position of currentValue in the array. On first call, 0 if initialValue was specified, otherwise 1.
array: the array to traverse.
initialValue Optional
A value to which previousValue is initialized the first time the callback is called. If initialValue is specified, that also causes currentValue to be initialized to the first value in the array. If initialValue is not specified, previousValue is initialized to the first value in the array, and currentValue is initialized to the second value in the array.

Return value
The value that results from running the "reducer" callback function to completion over the entire array.

Exceptions
TypeError
The array contains no elements and initialValue is not provided.

Description
The reduce() method takes two arguments: a callback function and an optional initial value. If an initial value is provided, reduce() calls the "reducer" callback function on each element in the array, in order. If no initial value is provided, reduce() calls the callback function on each element in the array after the first element.

reduce() returns the value that is returned from the callback function on the final iteration of the array.

When to not use reduce()
Recursive functions like reduce() can be powerful but sometimes difficult to understand, especially for less experienced JavaScript developers. If code becomes clearer when using other array methods, developers must weigh the readability tradeoff against the other benefits of using reduce(). In cases where reduce() is the best choice, documentation and semantic variable naming can help mitigate readability drawbacks.

Behavior during array mutations
The reduce() method itself does not mutate the array it is used on. However, it is possible for code inside the callback function to mutate the array. These are the possible scenarios of array mutations and how reduce() behaves in these scenarios:

If elements are appended to the array after reduce() begins to iterate over the array, the callback function does not iterate over the appended elements.
If existing elements of the array do get changed, the values passed to the callback function will be the values from the time that reduce() was first called on the array.
Array elements that are deleted after the call to reduce() begins and before being iterated over are not visited by reduce().
Edge cases
If the array only has one element (regardless of position) and no initialValue is provided, or if initialValue is provided but the array is empty, the solo value will be returned without calling callbackFn.

If initialValue is provided and the array is not empty, then the reduce method will always invoke the callback function starting at index 0.

If initialValue is not provided then the reduce method will act differently for arrays with length larger than 1, equal to 1 and 0, as shown in the following example:

const getMax = (a, b) => Math.max(a, b);

// callback is invoked for each element in the array starting at index 0
[1, 100].reduce(getMax, 50); // 100
[    50].reduce(getMax, 10); // 50

// callback is invoked once for element at index 1
[1, 100].reduce(getMax);     // 100

// callback is not invoked
[    50].reduce(getMax);     // 50
[      ].reduce(getMax, 1);  // 1

[      ].reduce(getMax);     // TypeError
Copy to Clipboard
Examples
How reduce() works without an initial value
The code below shows what happens if we call reduce() with an array and no initial value.

const array = [15, 16, 17, 18, 19];

function reducer(previous, current, index, array) {
  const returns = previous + current;
  console.log(\`previous: \${previous}, current: \${current}, index: \${index}, returns: \${returns}\`);
  return returns;
}

array.reduce(reducer);
Copy to Clipboard
The callback would be invoked four times, with the arguments and return values in each call being as follows:

callback iteration	previousValue	currentValue	currentIndex	array	return value
first call	15	16	1	[15, 16, 17, 18, 19]	31
second call	31	17	2	[15, 16, 17, 18, 19]	48
third call	48	18	3	[15, 16, 17, 18, 19]	66
fourth call	66	19	4	[15, 16, 17, 18, 19]	85
The value returned by reduce() would be that of the last callback invocation (85).

How reduce() works with an initial value
Here we reduce the same array using the same algorithm, but with an initialValue of 10 passed the second argument to reduce():

[15, 16, 17, 18, 19].reduce( (previousValue, currentValue, currentIndex, array) => previousValue + currentValue, 10 )
Copy to Clipboard
The callback would be invoked five times, with the arguments and return values in each call being as follows:

callback iteration	previousValue	currentValue	currentIndex	array	return value
first call	10	15	0	[15, 16, 17, 18, 19]	25
second call	25	16	1	[15, 16, 17, 18, 19]	41
third call	41	17	2	[15, 16, 17, 18, 19]	58
fourth call	58	18	3	[15, 16, 17, 18, 19]	76
fifth call	76	19	4	[15, 16, 17, 18, 19]	95
The value returned by reduce() in this case would be 95.

Sum all the values of an array
let sum = [0, 1, 2, 3].reduce(function (previousValue, currentValue) {
  return previousValue + currentValue
}, 0)
// sum is 6
Copy to Clipboard
Alternatively written with an arrow function:

let total = [ 0, 1, 2, 3 ].reduce(
  ( previousValue, currentValue ) => previousValue + currentValue,
  0
)
Copy to Clipboard
Sum of values in an object array
To sum up the values contained in an array of objects, you must supply an initialValue, so that each item passes through your function.

let initialValue = 0
let sum = [{x: 1}, {x: 2}, {x: 3}].reduce(function (previousValue, currentValue) {
    return previousValue + currentValue.x
}, initialValue)

console.log(sum) // logs 6
Copy to Clipboard
Alternatively written with an arrow function:

let initialValue = 0
let sum = [{x: 1}, {x: 2}, {x: 3}].reduce(
    (previousValue, currentValue) => previousValue + currentValue.x
    , initialValue
)

console.log(sum) // logs 6
Copy to Clipboard
Flatten an array of arrays
let flattened = [[0, 1], [2, 3], [4, 5]].reduce(
  function(previousValue, currentValue) {
    return previousValue.concat(currentValue)
  },
  []
)
// flattened is [0, 1, 2, 3, 4, 5]
Copy to Clipboard
Alternatively written with an arrow function:

let flattened = [[0, 1], [2, 3], [4, 5]].reduce(
  ( previousValue, currentValue ) => previousValue.concat(currentValue),
  []
)
Copy to Clipboard
Counting instances of values in an object
const names = ['Alice', 'Bob', 'Tiff', 'Bruce', 'Alice']

let countedNames = names.reduce(function (allNames, name) {
  if (name in allNames) {
    allNames[name]++
  }
  else {
    allNames[name] = 1
  }
  return allNames
}, {})
// countedNames is:
// { 'Alice': 2, 'Bob': 1, 'Tiff': 1, 'Bruce': 1 }
Copy to Clipboard
Grouping objects by a property
const people = [
  { name: 'Alice', age: 21 },
  { name: 'Max', age: 20 },
  { name: 'Jane', age: 20 }
];

function groupBy(objectArray, property) {
  return objectArray.reduce(function (acc, obj) {
    let key = obj[property]
    if (!acc[key]) {
      acc[key] = []
    }
    acc[key].push(obj)
    return acc
  }, {})
}

let groupedPeople = groupBy(people, 'age')
// groupedPeople is:
// {
//   20: [
//     { name: 'Max', age: 20 },
//     { name: 'Jane', age: 20 }
//   ],
//   21: [{ name: 'Alice', age: 21 }]
// }
Copy to Clipboard
Bonding arrays contained in an array of objects using the spread operator and initialValue
// friends - an array of objects
// where object field "books" is a list of favorite books
const friends = [{
  name: 'Anna',
  books: ['Bible', 'Harry Potter'],
  age: 21
}, {
  name: 'Bob',
  books: ['War and peace', 'Romeo and Juliet'],
  age: 26
}, {
  name: 'Alice',
  books: ['The Lord of the Rings', 'The Shining'],
  age: 18
}]

// allbooks - list which will contain all friends' books +
// additional list contained in initialValue
let allbooks = friends.reduce(function(previousValue, currentValue) {
  return [...previousValue, ...currentValue.books]
}, ['Alphabet'])

// allbooks = [
//   'Alphabet', 'Bible', 'Harry Potter', 'War and peace',
//   'Romeo and Juliet', 'The Lord of the Rings',
//   'The Shining'
// ]
Copy to Clipboard
Remove duplicate items in an array
Note: If you are using an environment compatible with Set and Array.from(), you could use let arrayWithNoDuplicates = Array.from(new Set(myArray)) to get an array where duplicate items have been removed.

const myArray = ['a', 'b', 'a', 'b', 'c', 'e', 'e', 'c', 'd', 'd', 'd', 'd']
let myArrayWithNoDuplicates = myArray.reduce(function (previousValue, currentValue) {
  if (previousValue.indexOf(currentValue) === -1) {
    previousValue.push(currentValue)
  }
  return previousValue
}, [])

console.log(myArrayWithNoDuplicates)
Copy to Clipboard
Replace .filter().map() with .reduce()
Using Array.filter() then Array.map() traverses the array twice, but you can achieve the same effect while traversing only once with Array.reduce(), thereby being more efficient. (If you like for loops, you can filter and map while traversing once with Array.forEach().)

const numbers = [-5, 6, 2, 0,];

const doubledPositiveNumbers = numbers.reduce((previousValue, currentValue) => {
  if (currentValue > 0) {
    const doubled = currentValue * 2;
    previousValue.push(doubled);
  }
  return previousValue;
}, []);

console.log(doubledPositiveNumbers); // [12, 4]
Copy to Clipboard
Running Promises in Sequence
/**
 * Runs promises from array of functions that can return promises
 * in chained manner
 *
 * @param {array} arr - promise arr
 * @return {Object} promise object
 */
function runPromiseInSequence(arr, input) {
  return arr.reduce(
    (promiseChain, currentFunction) => promiseChain.then(currentFunction),
    Promise.resolve(input)
  )
}

// promise function 1
function p1(a) {
  return new Promise((resolve, reject) => {
    resolve(a * 5)
  })
}

// promise function 2
function p2(a) {
  return new Promise((resolve, reject) => {
    resolve(a * 2)
  })
}

// function 3  - will be wrapped in a resolved promise by .then()
function f3(a) {
 return a * 3
}

// promise function 4
function p4(a) {
  return new Promise((resolve, reject) => {
    resolve(a * 4)
  })
}

const promiseArr = [p1, p2, f3, p4]
runPromiseInSequence(promiseArr, 10)
  .then(console.log)   // 1200
Copy to Clipboard
Function composition enabling piping
// Building-blocks to use for composition
const double = x => x + x
const triple = x => 3 * x
const quadruple = x => 4 * x

// Function composition enabling pipe functionality
const pipe = (...functions) => initialValue => functions.reduce(
    (acc, fn) => fn(acc),
    initialValue
)

// Composed functions for multiplication of specific values
const multiply6 = pipe(double, triple)
const multiply9 = pipe(triple, triple)
const multiply16 = pipe(quadruple, quadruple)
const multiply24 = pipe(double, triple, quadruple)

// Usage
multiply6(6)   // 36
multiply9(9)   // 81
multiply16(16) // 256
multiply24(10) // 240
Copy to Clipboard
Write map using reduce
if (!Array.prototype.mapUsingReduce) {
  Array.prototype.mapUsingReduce = function(callback, initialValue) {
    return this.reduce(function(mappedArray, currentValue, currentIndex, array) {
      mappedArray[currentIndex] = callback.call(initialValue, currentValue, currentIndex, array)
      return mappedArray
    }, [])
  }
}

[1, 2, , 3].mapUsingReduce(
  (currentValue, currentIndex, array) => currentValue + currentIndex + array.length
) // [5, 7, , 10]
Copy to Clipboard
Specifications
Specification
ECMAScript Language Specification
# sec-array.prototype.reduce
Browser compatibility
Report problems with this compatibility data on GitHub
desktop	mobile	server
Chrome
Edge
Firefox
Internet Explorer
Opera
Safari
Chrome Android
Firefox for Android
Opera Android
Safari on iOS
Samsung Internet
WebView Android
Deno
Node.js
reduce

3
Toggle history	
12
Toggle history	
3
Toggle history	
9
Toggle history	
10.5
Toggle history	
5
Toggle history	
18
Toggle history	
4
Toggle history	
14
Toggle history	
4
Toggle history	
1.0
Toggle history	
37
Toggle history	
1.0
Toggle history	
0.10.0
Toggle history
Legend
Full support
Full support
See also
Polyfill of Array.prototype.reduce in core-js
Array.prototype.reduceRight()
Found a problem with this page?
Edit on GitHub
Source on GitHub
Report a problem with this content on GitHub
Want to fix the problem yourself? See our Contribution guide.
Last modified: Jun 10, 2022, by MDN contributors

Your blueprint for a better internet.

MDN on Twitter
MDN on GitHub
MDN
About
Hacks Blog
Careers
Support
Product help
Report a page issue
Report a site issue
Our communities
MDN Community
MDN Forum
MDN Chat
Developers
Web Technologies
Learn Web Development
MDN Plus
Website Privacy Notice
Cookies
Legal
Community Participation Guidelines
Visit Mozilla Corporation’s not-for-profit parent, the Mozilla Foundation.
Portions of this content are ©1998–2022 by individual mozilla.org contributors. Content available under a Creative Commons license.


`;

//* Count how many times each letter and number occurs
const isValidChar = (letter) => letter.match(/[a-z0-9]/i);
const sortLetterCounts = ([prevLetter, prevCount], [nextLetter, nextCount]) => nextCount - prevCount;

//? With map, filter, and reduce:
const counts = text
  .split("")
  .filter(isValidChar)
  .map((letter) => letter.toLowerCase())
  .reduce((letterCounts, letter) => {
    letterCounts[letter] = letterCounts[letter] + 1 || 1;
    return letterCounts;
  }, {});
const sortedCounts = new Map(Object.entries(counts).sort(sortLetterCounts));
console.log(sortedCounts);

//? With a single reducer function:
const counts2 = text.split("").reduce((letterCounts, letter) => {
  if (isValidChar(letter)) {
    const lowercaseLetter = letter.toLowerCase();
    letterCounts[lowercaseLetter] = letterCounts[lowercaseLetter] + 1 || 1;
  }
  return letterCounts;
}, {});
const sortedCounts2 = new Map(Object.entries(counts2).sort(sortLetterCounts));
console.log(sortedCounts2);

/*
  eslint
    no-unused-vars: "off",
    no-console: "off",
*/
