const datas=[
  {name:"shiva",age:"26"},
  {name:"ajit",age:"28"}
];
////////////////////////////////////////
function getDatas(){
  setTimeout(()=>{
    let output="";
    datas.forEach((data,index)=>{
      output+=`<li>${data.name}</li>`
    })
    document.body.innerHTML=output
  },1000);
0}
//  ////////////////////////////////////Callback
function pushData(newdata,callback){
    
  setTimeout(()=>{
    datas.push(newdata)
    callback()
  },5000)
}
getDatas()
// pushData({name:"king",age:"33"},getDatas )

// ////////////////////////////////////////////Promise

// function pushData(newdata){
//   return new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//       datas.push(newdata);
//       let error=false;
//       if(!error){
//         resolve();

//       }else{
//         reject("something went wrong")
//       } 
//     },2000)
//   })
// }
// pushData({name:"king",age:"33"})
// .then(getDatas)
// .catch(err=>console.log(err))

// // //////////////////////////////////////////////////Async & await
// async function start(){
//   await pushData({name:"king",age:"33"})
//   getDatas();
// }
// start()
// // ///////////////////////////////////////////////////////////////
// const data= new Promise((resolve,reject)=>{
//       setTimeout(()=>{
//         let error=false;
//         if(!error){
//           resolve(10);
//         }else{
//           reject("got err")
//         }
//       },2000)
// })
// data.then((item)=>{   //  promise chaining
//   console.log("1st",item)
//   return item*10
// })
// .then((item)=>{
//   console.log("2nd",item)
//   return item*100
// })
// .then((item)=>{
//   console.log("3ed",item)
//   return item*1000
// })
// .catch((err)=>{
//   console.log("error catched",err)
// })

// // ///////////////////////////////////////////API fetching by promise

// const data1=fetch("https://swapi.dev/api/films/")
// data1.then((item)=>{
//   return item.json()
// }).then((result)=>{
//    console.log("output",result.results[0])
// })
// // //////////////////////////////////////////////promise.all,allSettled,race

// const data2 = Promise.all([
//       new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//           resolve("1 second")
//         },2000)
//       }),
//       new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//           reject("2 second")
//         },2000)
//       }),
//       new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//           resolve("3 second")
//         },2000)
//       })
// ])
// data2.then((item)=>{
//   console.log(item)
// })
// .catch((result)=>{
//   console.log("error in promise all",result)
// })