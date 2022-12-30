// // call why we use it?
// // case 1 function inside object then we can call it this way
// // because this points directly to the object in which it present
// let obj1={
//     name:"shivaji",
//     age:26,
//     user(){
//         return "hello"+" "+this.name+" "+this.age;
//     }
// }
// console.log(obj1.user(obj1));
// // // ////////////////////////////////////////////
// // // case 2 if function is out side then this cant point to the object directly 
// // // then we need to use call to point the object
// let obj2={
//     name:"shivaji"
// }
// let objx={
//     name:"king"
// }
// function user(age,skill){
//     return "hello"+" "+this.name+" "+age+" "+skill;
// }
// console.log(user.call(objx,26,"software engineer"));
// // // //////////////////////////////////////////////////
// // // ////////////apply
// // // by using apply we can pass multiple arguments through single array
// let obj3={
//     name:"shivaji"
// }
// function user(age,profession){
//     return "hello"+" "+this.name+" "+age+" "+profession;
// }
// console.log(user.apply(obj3,[26,"software engineer"]));
// // // ///////////////////////////////////////////////////
// // // ////////////bind
// // // by using bind first store function in new one and use it whenever we want
// let obj4={
//     name:"shivaji"
// }
// function user(age,profession){
//     return "hello"+" "+this.name+" "+age+" "+profession;
// }
// let bindfunc=user.bind(obj4);
// console.log(bindfunc(26,"software engineer"));

// /////////////////////////////////////////////////////////////////////////////////
// ///////////////////////////////////////////////////////////////////////////////////////

let user1={
    name:"shivaji",
    age:26,
    skill:"software engineer",
}

function printDetail(state,country){
    console.log(this.name+" "+state+" "+country);
}
printDetail.call(user1,"karnataka","India");

let user2={
    name:"shubham",
    age:35,
    skill:"software engineer",
    printDetail:function(){
        console.log(this)
    }
}
// ////by using call we can borrow function 
printDetail.call(user2,"maharastra","India")
// ////by using apply we can pass multiple arguments through single array
printDetail.apply(user2,["maharastra","India"])
// ////by using bind first store function in new one and use it whenever we want
let newfunc=printDetail.bind(user1,"karnataka","India");
newfunc();


