// link for original document:
// https://enlear.academy/difference-between-arrow-function-and-normal-function-ab849dcee121
//1) Syntax:
// A programmer can get the same result as regular functions
// by writing a few lines of code using arrow functions.

// Curly brackets are not required if only one expression is present.
// Regular function ES5:
// var add = function(a, b) {  return a + b;};
// // Arrow function ES6
// let add = (a, b) => { return a + b};
// //or
// let add = (a, b) => a + b;
// //////////////////////////////////////////////////////////////////////
// 2)Arguments binding
// arguments object inside the regular functions contains the list of arguments.

// // Object with Regular function
// let showData = {
//     showArg: function(){
//       console.log(arguments);
//     }  
// }
// showData.showArg(1,2,3); // output {0:1,1:2,2:3}

// The arrow function, on the opposite, doesn’t define arguments i.e.
//  they do not have arguments binding.
// Object with Arrow function

// let showData = {
//   showArg: ()=>console.log(arguments);
// }
// showData.showArg(1,2,3); 
// // Uncaught ReferenceError: arguments is not defined

// But you can easily access the arrow function arguments using a rest parameter ...args.

// // using rest parameters
// let showData = {
//   showArg: (...args)=>console.log(args);
// }
// myFunc.showArgs(1, 2, 3, 4); // [1, 2, 3, 4]
// /////////////////////////////////////////////////////////////////////////
// 3)Handling oof "this" key word
var obj1 = {
  valueOfThis: function(){
    return this;
  }
}
var obj2 = {
  valueOfThis: ()=>{
    return this;
  }
}

obj1.valueOfThis(); // Will return the object obj1
obj2.valueOfThis(); // Will return window/global object]

// The biggest difference between the traditional function expression and the arrow
// function is the handling of this keyword. By general definition,
//  this keyword always refers to the object that is calling the function. 
//  As you can see in the code above, obj1.valueOfThis() returns obj1 since 
//  this keyword refers to the object calling the function.

// In the arrow functions, there is no binding of this keyword.
//  This keyword inside an arrow function does not refer to the object calling it.
//  It rather inherits its value from the parent scope which is the window object 
//  in this case. Therefore, in the code above, obj2.valueOfThis() returns
//  the window object.

