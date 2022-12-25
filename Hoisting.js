//  Hoisting is a JavaScript mechanism where variables,
//  function declarations and classes are moved to the top 
//  of their scope before code execution. Remember that JavaScript 
//  only hoists declarations, not initialisation. Let's take a simple 
//  example of variable hoisting
 var a=100;
 function getData(){
    console.log("");

 }
 getData();
 console.log(a);
