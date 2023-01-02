const numArr=[1,2,3,4,5];

// map: map returns new array and do not mutates original array
const res = numArr.map((data)=>{return data*2})
console.log(res)
console.log(numArr)

const numArr2=[1,2,3,4,5];
// forEach: forEach do not returns any array insted it mutates original array
const res2 = numArr2.forEach((val,i,arr)=>(arr[i]=val*2))
console.log(res2)
console.log(numArr2)
