// It is a technique in functional programming, transformation
//  of the function of multiple arguments into several functions of a single argument in sequence. 

//  ////////1st example shows that Normally how we pass the value to the arguments

// function firstfunc(a,b,c){
//    return a+b+c;
// }
// let x=firstfunc(5,5,5);
// console.log(x)

// /////////2nd how we pass value when there is so much nesting 

// function one(a){
//    return function two(b){
//       return function three(c){
//          return a+b+c;
//       }
//    }
// }
// let arg1=one(5);
// let arg2=arg1(5);
// let arg3=arg2(5);
// console.log(arg3)

////////////// now by using currying we pass values like this
function four(length){
   return function five(breadth){
      return function six(height){
         return length+breadth+height;
      }
   }
}
let arg=four(5)(5)(5);
console.log(arg)

// useCase of currying
const userObj={
   name:"shiva",
   age:"26"
}
function userData(obj){
   return function(userInfo){
         return obj[userInfo]
   }
}
let res=userData(userObj)('name')
console.log(res)