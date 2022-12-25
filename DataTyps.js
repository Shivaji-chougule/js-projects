/*Primitive Data Types
Primitive data types in JavaScript include:

Numbers - Integers, floats
Strings - Any data under single quote, double quote or backtick quote
Booleans - true or false value
Null - empty value or no value
Undefined - a declared variable without a value
Symbol - A unique value that can be generated by Symbol constructor
Non-primitive data types in JavaScript includes:

Objects
Arrays*/


let word = 'JavaScript'
word[0] = 'Y'
console.log(word)
// This expression does not change the string stored in the variable word. 
// So, we can say that strings are not modifiable or in other words immutable. 

let nums = [1, 2, 3]
nums[0] = 10

console.log(nums)
// As you can see, an array, which is a non-primitive data type is mutable.