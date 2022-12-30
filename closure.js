// Closure is get created when function and its lexical scope bunddled 
// together, which makes inner function capable to always access the 
// variable declaired in the outer function, even after the outer function is
// returned.
// it will work in var let and const cases
function first() {
    let v = 18;
    function second() { 
      console.log(v);
    }
   ;
    return second; 
  }
  // first()();
  // OR
  const ans = first();
    ans();