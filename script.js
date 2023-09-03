let log = console.log;

// JS Array Methods

let arry = [1, 32, 42];

//---------------------------------

// 1. toSting() | Immutable
log(arry.toString()); //1,32,42

//---------------------------------

// 2. join(separator) | Immutable
log(arry.join(" / ")); // 1 / 32 / 42
log(arry.join(" - ")); // 1 - 32 - 42
log(arry.join(" ")); // 1 32 42
log(arry.join(" * ")); // 1 * 32 * 42

//---------------------------------

// 3. pop() | Mutable
// Removes last element | Returns removed element
let removedLastElement = arry.pop();
log(removedLastElement); // 42

//---------------------------------

// 4. push(e1, e2 ... n) | Mutable
// Add new element to end | Returns new length of array
let arryLengthP = arry.push(22, 42);
log(arryLengthP); // 4

//---------------------------------

// 5. shift() | Mutable
// Removes first element | Returns removed element
let removedFirstElement = arry.shift();
log(removedFirstElement); // 1

//---------------------------------

// 6. unshift(e1, e2 ... n) | Mutable
// Add new element to start | Returns new length of array
let arryLengthU = arry.unshift(4, 6, 5);
log(arryLengthU); // 6

//---------------------------------

// 7. concat(ary1, ary2 ... n ) | Immutable
// Returns new joined array
let ary1 = [1, 2, 3];
let ary2 = [4, 5, 6];
let ary3 = [7, 8, 9];

let newArry = ary1.concat(ary2, ary3);
log(newArry); // [1, 2, 3, 4, 5, 6, 7, 8, 9]

//---------------------------------

// 8. sort(compFunc) | Mutable

// #### NUMBER SORT
let nums = [43, 53, 21, 5, 2];

// Ascending Order
log(nums.sort((a, b) => a - b)); //[2, 5, 21, 43, 53]
// Descending Order
log(nums.sort((a, b) => b - a)); //[53, 43, 21, 5, 2]

// #### STRING SORT
let str = ["kite", "apple", "zebra", "cat"];

// Ascending Order
log(str.sort());
// ["apple", "cat", "kite", "zebra"];

// Descending Order
log(str.sort((a, b) => b.localeCompare(a)));
// ['zebra', 'kite', 'cat', 'apple']

//---------------------------------

// 9. splice(index, count, e1, e2..) | Mutable
// For Adding, removing & replacing elements | Returns removed elements (if any)
let arry1 = [1, 2, 3, "a", "b", "c"];

let removedItems = arry1.splice(3, 2, "x");

log(removedItems); // ["a", "b"]
log(arry1); // [1, 2, 3, "x", "c"]

//---------------------------------

// 10. slice(start, end) | Immutable
// Extract and create a new array with selected elements | Returns new array let
let arry2 = [1, 2, 3, "a", "b", "c"];

let newSlicedArry1 = arry2.slice(3); // Without End Index
let newSlicedArry2 = arry2.slice(3, 4); // With End Index

log(newSlicedArry1); // ["a", "b", "c"]
log(newSlicedArry2); // ["a"]

//---------------------------------

// 11. reverse() | Mutable | Reverses order
let arry3 = [1, 2, 3, "a", "b", "c"];
let arry4 = [1, 2, 3, 100];
let arry5 = ["z", "b", "a"];

log(arry3.reverse()); // ['c', 'b', 'a', 3, 2, 1]
log(arry4.reverse()); // [100, 3, 2, 1]
log(arry5.reverse()); // ['a', 'b', 'z']

//---------------------------------

// 12. Array.isArray(array) | Immutable | Returns Boolean
let arr = [1, 2, 4, "a"];
let strg = "CodeBustler";

log(Array.isArray(arr)); // True
log(Array.isArray(strg)); // False

//---------------------------------

// 13. indexOf(Element, Start) | Immutable
// Returns (index) first occurrence of specified value
let arry6 = [1, 2, 3, "a", "c", "b", "c", "d", "e"];
log(arry6.indexOf("c")); // 4 | First occurrence
log(arry6.indexOf("c", 5)); // 6 | With start point

//---------------------------------

// 14. lastIndexOf(Element, Start) | Immutable
// Returns last index of specified value
log(arry6.lastIndexOf("c")); // 6 | last occurrence
log(arry6.lastIndexOf("c", 7)); // 6 | With start point

//---------------------------------

// 15. find(callbackFunc(elem*, index, array)) | Immutable
//  Find the first element in an array that satisfies a given condition
let names = ["anil", "arjun", "mallikarjun"];
let numbers = [32, 53, 25, 78, 32];
let personInfo = [
	{
		name: "arjun",
		age: 27,
	},
	{
		name: "arjun",
		age: 29,
	},
	{
		name: "anil",
		age: 25,
	},
	{
		name: "codebustler",
		age: 26,
	},
];

// Finding Simple value
let findAnil = names.find((elem) => elem === "anil");
log(findAnil); // anil

let findHighestNum = numbers.find((elm) => elm > 70);
log(findHighestNum); // 78

let findHighestNum1 = numbers.find((elm) => elm > 100);
log(findHighestNum1); // undefined | condition not met

// Finding Complex
let findArjunIno = personInfo.find((elem) => elem.name === "arjun");

log(findArjunIno); //{name: 'arjun', age: 27} |
log(findArjunIno.age); // 27

//---------------------------------

// 16. findIndex(elem*, index, array) | Immutable
// Returns the index of the first array element that meets a given condition.
let numbers2 = [33, 63, 88, 22, 99, 634];

let findIndexLeast = numbers2.findIndex((elem) => elem > 90);
log(findIndexLeast); // Index 4 | First occurrence condition met

//---------------------------------

// 17. every(callbackFunc*, thisArg) | Immutable
//  Check if all elements in an array satisfy a given condition | Returns Boolean
let numbers3 = [33, 63, 88, 22, 99, 634];

log(numbers3.every((elem) => elem > 10)); // True
log(numbers3.every((elem) => elem > 1000)); // False

//---------------------------------

// 18. some(callbackFunc*, thisArg) | Immutable
// test whether at least one element passes the condition | Returns Boolean
let numbers4 = [11, 24, 533, 66, 22, 53];

log(numbers4.some((elem) => elem > 600)); // False
log(numbers4.some((elem) => elem > 500)); // True

//---------------------------------

// 19. includes(Element, StartIndex) | Immutable
// Checks whether array includes a certain value | Returns Boolean
let myArry = [423, 53, 632, "dog", 3523, "apple", "ball", "cat"];

log(myArry.includes(423)); // True
log(myArry.includes("cat")); // True
log(myArry.includes("Cat")); // False (Case Sensitive)

log(myArry.includes("dog")); // True
log(myArry.includes("dog", 4)); // False (With Starting Index)

//---------------------------------

// 20. entries() | Immutable
// Returns a Array iterator object with key/value pairs (using for of loop)
let myArr2 = [423, 53, 632, "dog", 3523, "apple", "ball", "cat"];

let entriesArry = myArr2.entries();

for (x of entriesArry) {
	log(x); // Return object with key/value pair (0,Element)
	log(x[0]); // Return Keys
	log(x[1]); // Return Values
}

//---------------------------------

// 21. fill(Value, startIndex, endIndex) | Mutable
// Fills specified elements from specified start to end index | if not specified index fills all
let myArry3 = ["a", "b", "c", "d", "e"];
log(myArry3.fill("x")); // ['x', 'x', 'x', x', 'x']
log(myArry3.fill("z", 2, 4)); //['x', 'x', 'z', 'z', 'x']

//---------------------------------

// 22. copyWithin(target(Place to copy), startIndex, endIndex) | Mutable
// Copies array elements to another position
let myArry4 = [142, 221, 943, 658, "abc", "efg", "xyz"];
log(myArry4.copyWithin(0, 5, 7)); // ["abc", "efg", 943, 658, "abc", "efg", "xyz"]

//---------------------------------

// 23. forEach(callbackFunc(item, index, array)) | Mutable
// Executes provided function for each elements
// - forEach will not return new Array
let nums2 = [2, 4, 3, 5, 6];
nums2.forEach((elem, index, array) => (array[index] = elem * 2));
log(nums2); // [4, 8, 6, 10, 12]

//+++

let doubleNumsWithForEach = []; // Empty Array to push new array

nums2.forEach((elem, index, array) => doubleNumsWithForEach.push(elem * 2));
log(doubleNumsWithForEach); // [8, 16, 12, 20, 24]
log(nums2); // No Overwrites

//---------------------------------

// 24. map(callbackFunc(elem, index, array)) | Immutable
// Creates new array by applying a provided function to each element
// - map will return new Array

let nums3 = [3, 4, 6];
let multipliedArray = nums3.map((elem) => elem * 2);
log(multipliedArray);

//---------------------------------

// 25. filter(callbackFunc(elem, index, array)) | Immutable
// Creates new array filled with elements that pass a test
let num4 = [131, 414, 143, 14, 52];
let filteredArray = num4.filter((elem, index, array) => elem < 150);
log(filteredArray); // [131, 143, 14, 52]; (414 condition not met)

//---------------------------------

// 26. reduce(callbackFunc(accumulator, elem, index, array), initialValue) | Immutable
// Reduce an array to a single value by applying a provided function to each element of the array in a cumulative way.

let num5 = [2, 3, 5];
let sum = num5.reduce((acumm, elem) => {
	log(acumm, elem);
	return acumm + elem;
});

log(sum); // 10

//---------------------------------

// 27. reduceRight(callbackFunc(accumulator, elem, index, array), initialValue)
let words = ["World", " ", "Hello"];

let newWords = words.reduceRight((accum, elem) => {
	log(accum, elem);
	return accum + elem;
});
log(newWords); // "Hello World"

//---------------------------------

// 28. flat([depth/Infinity]) | Immutable
// Flatten a nested array | multidimensional array into single dimensional

const nestedArray1 = [1, [2, [3, 4]], 5];
const nestedArray2 = [1, 2, [3, 4], [5, 6, 7], [8, 9, 10]];

let flatArray = nestedArray1.flat(); // Without depth (flat 1 )
let flatArray2 = nestedArray1.flat(2); // With depth
let flatArray3 = nestedArray2.flat(); //

log(flatArray); // [1, 2, [3, 4], 5]; // Without depth (flat 1 )
log(flatArray2); // [1, 2, 3, 4, 5]; // With depth
log(flatArray3); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

//---------------------------------

// 29. flatMap(callbackFunc(elem, index, array), thisArg) | Immutable
// Combination of flat() & map() functions
let numbersAry = [1, 2, 3];
let strArry = ["one", "two", "three"];

let flatMapArry = numbersAry.flatMap((value, index) => [value, strArry[index]]);
log(flatMapArry); //[1, 'one', 2, 'two', 3, 'three']

//---------------------------------

// 30. Array.from(obj*, mapFunc, thisArg) | Immutable
// Creates a new array from an array-like or iterable object
let stringData = "CodeBustler";
let numData = "12345";

let stringResult = Array.from(stringData);
let numResult = Array.from(numData);

log(stringResult); // ['C', 'o', 'd', 'e', 'B', 'u', 's', 't', 'l', 'e', 'r']
log(numResult); // ['1', '2', '3', '4', '5']

// Now convert this string number array elements to actual number using mapFun

let numResultNumbers = Array.from(numData, mapFunc);
// let numResultNumbers = Array.from(numData, (e) => Number(e)); | Simplest Way
// let numResultNumbers = Array.from(numData, Number); | More Simplest way

// MapFunc
function mapFunc(elem) {
	return Number(elem);
}

log(numResultNumbers); // [1, 2, 3, 4, 5]

//---------------------------------

// 31. Object.keys() | Immutable
// Returns an Array Iterator object with the keys of an array.
let newArrayList = [1, 2, "a", 3, "b"];

// Built-In Object.keys() method
let keys = Object.keys(newArrayList);
for (let x of keys) {
	log(x);
}

// Array Iterator object
let keysList = newArrayList.keys();

for (let x of keysList) {
	log(x);
}

//---------------------------------

// 32. valueOf() | Immutable
// Returns array itself
let array1 = [1, 2, "abc"];
let valueOfArray1 = array1.valueOf();
log(valueOfArray1); // [1, 2, "abc"]

//---------------------------------

// 33. array.length **Operator | Immutable
// Returns length of array

let a1 = ["1", "2", "3", "4", "5"];
log(a1.length); // 5

//---------------------------------

// 34. delete **Operator | Mutable | USE pop() & shift() instead
// Deletes array elements & leaves undefined holes in original array
let a2 = ["1", "2", "3", "4", "5"];
log(delete a2[0]); // True
log(a2); // [empty, '2', '3', '4', '5'] | Original Array

// End Here | JavaScript Array Methods
