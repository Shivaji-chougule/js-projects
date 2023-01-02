// The JavaScript ES6 has introduced two new data structures, i.e Map and WeakMap.

// Map is similar to objects in JavaScript that allows us to store
//  elements in a key/value pair.
// The elements in a Map are inserted in an insertion order.
//  However, unlike an object, a map can contain objects, 
//  functions and other data types as key.

//  link to learn more:
// https://www.programiz.com/javascript/map-weakmap

// create a Map
const map1 = new Map(); // an empty map
console.log(map1); // Map {}
// insert key-value pair
map1.set('info', {name: 'Jack', age: 26});
console.log(map1); // Map {"info" => {name: "Jack", age: 26}}

// ////////////////////////////////////////////////////////////////////

// Map with object key
let map2 = new Map();

let obj = {};
map2.set(obj, {name: 'Jack', age: "26"});

console.log(map2); // Map {{} => {name: "Jack", age: "26"}}
// ///////////////////////////////////
// Access Map Elements
let map3 = new Map();
map1.set('info', {name: 'Jack', age: "26"});

// access the elements of a Map
console.log(map3.get('info')); // {name: "Jack", age: "26"}
// ///////////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////
// Set
// The JavaScript ES6 has introduced two new data structures, i.e Set and WeakSet.

// Set is similar to an array that allows us to store multiple items like numbers,
//  strings, objects, etc. However, unlike an array, a set cannot contain duplicate
//   values.
// to learn more:
// https://www.programiz.com/javascript/set-weakset

// create Set
const set1 = new Set(); // an empty set
console.log(set1); // Set {}

// Set with multiple types of value
const set2 = new Set([1, 'hello', {count : true}]);
console.log(set2); // Set {1, "hello", {count: true}}
// ////////////////////////////////////////////
// Set with duplicate values
const set3 = new Set([1, 1, 2, 2]);
console.log(set3); // Set {1, 2}

// Access Set Elements
const set4 = new Set([1, 2, 3]);

// access the elements of a Set
console.log(set4.values()); // Set Iterator [1, 2, 3]
////////////////////////////////////
// Adding New Element
const set = new Set([1, 2]);
console.log(set.values());

// adding new elements
set.add(3);
console.log(set.values());

// adding duplicate elements
// does not add to Set
set.add(1);
console.log(set.values());
// /////////////////////////////////////
// Removing Elements
const set5 = new Set([1, 2, 3]);
console.log(set5.values()); // Set Iterator [1, 2, 3]

// removing a particular element
set5.delete(2);
console.log(set5.values()); // Set Iterator [1, 3]
// /////////////////////////////////////////
// Iterate Sets
const set7 = new Set([1, 2, 3]);

// looping through Set
for (let i of set7) {
    console.log(i);
}