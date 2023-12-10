                                                                                                                                                                                

// Callback function case 1 why we use it

// const getName = () => {
//     setTimeout(()=>{
//       const name = "shivaji"
//       console.log('here is your name',name)
//     },2000)
//   }
//   console.log(getName()) //here we can see because of setTimeout is asynchronous, so first we got undfined
                            // so we need to use callback function to solve this

/////////////////////////////// case 2 here we have used callback function 

const getEgg = (callback) => {
    setTimeout(()=>{
      const egg = "egg"
      console.log('take two',egg)
      callback(egg)
    },2000)
  }
  
const makeDough = (egg,callback) => {
    setTimeout(()=>{
      const dough = egg + "flour"
      console.log('make addition of',dough)
      callback(dough)
    },2000)
  }

const bakeCake = (dough,callback) => {
    setTimeout(()=>{
      const cake = dough + "heat"
      console.log('addition of this all',cake)
      callback(cake)
    },2000)
  }

  
  getEgg((egg)=>{
    console.log("got the", egg)
    makeDough(egg,(dough)=>{
      console.log("got the dough of",dough)
      bakeCake(dough,(cake)=>{
        console.log('got the cake of',cake)
      })
    })
  })

  //so this is callback hell 
  //it makes deficult to debug and complecate to track the state