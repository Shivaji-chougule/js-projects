// A callback function is a function passed into another function 
// as an argument, which is then invoked inside the outer function 
// to complete some kind of routine or action.


const calculate = (a,b,operation) =>{
    return operation(a,b);
}


const add = calculate(10,20, function (a,b){ return a + b })
console.log(add)

const substraction = (a,b)=>{
    return a - b
}
const sub = calculate(10,20,substraction)
console.log(sub)

const multi = calculate(10,20,operation=(a,b)=>{
    return a * b
})



console.log(multi)