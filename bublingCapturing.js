//  Through this example we can see that events are get called randomaly but 
// get exicuted as bubling


// var div=document.querySelector("div");
// var button=document.querySelector("button");
// var li=document.querySelector("li");


// div.addEventListener("click",()=>{
//     console.log("div")
// })
// button.addEventListener("click",()=>{
//     console.log("button")
// })
// li.addEventListener("click",()=>{
//     console.log("li")
// })

// ///////////////event capturing happaning because of true
var div=document.querySelector("div");
var button=document.querySelector("button");
var li=document.querySelector("li");


div.addEventListener("click",()=>{
    console.log("div")
},true)
button.addEventListener("click",()=>{
    console.log("button")
},true)
li.addEventListener("click",()=>{
    console.log("li")
},true)