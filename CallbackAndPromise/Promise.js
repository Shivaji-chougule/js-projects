
// In JavaScript, a Promise is an object representing the eventual completion or failure of an asynchronous operation.
// It is a powerful and flexible tool for handling asynchronous code, making it easier to write and reason about asynchronous tasks.

// A Promise has three states:

// Pending: The initial state. The promise is neither fulfilled nor rejected.
// Fulfilled: The operation completed successfully, and the promise has a resulting value.
// Rejected: The operation failed, and the promise has a reason for the failure.

    const getEgg = () => {
        return new Promise((resolve,reject)=>{
            setTimeout(()=>{
                const egg = "egg"
                console.log("take two",egg)
                resolve(egg)
            },2000)
        })
       
    }
    const makeDough = (egg) => {
        return new Promise((resolve,reject)=>{
            setTimeout(()=>{
                const dough = egg + 'flour'
                console.log("make addition of",dough)
                resolve(dough)
            },2000)
        })
       
    }
    const bakeCake = (dough) => {
        return new Promise((resolve,reject)=>{
            setTimeout(()=>{
                const cake = dough + "heat"
                console.log("addition of this all",cake)
                    resolve(cake)
            },2000)
        })
       
    }

    // getEgg().then((egg)=>{
    //     console.log("got the",egg)
    //     return makeDough(egg)
    // }).then((dough)=>{
    //     console.log("got the dough of",dough)
    //     return bakeCake(dough)
    // }).then((cake)=>{
    //     console.log("got the cake of",cake)
    // }).catch((err)=>{
    //     console.log('someting went wrong',err)
    // }).finally(()=>{
    //     console.log('process is ended')
    // })

    // if don't want use this .then then we can use async await key words to do so
    // async key word make this function it will return promise and await key word make wait until promise get resolved 
    async function orderCake () {
       try {const egg = await getEgg();
        console.log("got the",egg)
        const dough =await  makeDough(egg);
        console.log("got the dough of",dough)
        const cake = await bakeCake(dough)
        console.log("got the cake of",cake)
    }catch{(err)=>{
        console.log("rejected",err)
    }}
    }

    orderCake();