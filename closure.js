function first() {
    var num = 1;
    function second() { 
      console.log(num);
    }
    num++;
    return second; 
  }
  const ans = first();
    ans();