const companies=[
    {name:"tata",type:"automobile",start:1895},
    {name:"mahindra",type:"automobile",start:1960},
    {name:"hero",type:"automobile",start:1980},
    {name:"zerodha",type:"fintech",start:2014},
    {name:"tcs",type:"IT",start:1995},
    
]
const ages=[12,54,62,4,,78,12,35,45,65,45,8,6,1,15,46]
// //////////////for
// for(let i=0;i<=companies.length;i++){
//     console.log(companies[i])
// }

// ///////////////////////forEach
companies.forEach((company)=>{
    console.log(company.name)
})

/////////////// Filter
// exampe:1
const age=ages.filter((age)=>{
    if(age >= 20){
        return true;
    }
    
})
// example:2
console.log(age)

const comp=companies.filter((company)=>{
        if(company.type==="automobile"){
            return true;
        }
})
console.log(comp)


// //////////////Map
// example 1
companies.map((company,index)=>{
    console.log(company,index)
})
// example 2
const xyz= companies.map((company1)=>{
    return `${company1.name}`+" "+`${company1.type}`
});
console.log(xyz)

// ////////////////////sort
const sorted=companies.sort((c1,c2)=>{
    return c2.start-c1.start
     
})
console.log(sorted)

// //////////////reduce
