

let no1 = 0;
let no2 = 1;
let ans;
let seriesNo = 10;

console.log(no1,no2);
for(let i=1; i<=seriesNo-2;i++){
  ans = no1 + no2 ;
  console.log(ans);
  
  no1 = no2;
  no2 = ans;
  
}
// //////////////////////////////

