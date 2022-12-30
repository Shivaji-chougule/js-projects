//  Hoisting is a JavaScript mechanism where variables,
//  function declarations are moved to the top 
//  of their scope before code execution. Remember that JavaScript 
//  only hoists declarations, not initialisation. Let's take a simple 
//  example of variable hoisting

 function getData(){
    console.log(a);
    var a=100;
 }
 getData();
 console.log(a);

 // Hoisting

// console.log(msg);
// var msg="the king is back"

// console.log(msg);
// let msg="the king is back"

// console.log(msg);
// const msg="the king is back"