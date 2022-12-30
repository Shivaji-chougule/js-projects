// Both  call  and  apply  invoke a function. 
// Their only difference is that  call  accepts arguments in a comma-separated
//  fashion while  apply  requires arguments to be passed as an array or an 
//  array-like object.

// When and why should I use them?
// To borrow another object’s methods or
// To create a custom value of this


// 1)Call:The  call()  allows for a function/method belonging to one 
// object to be assigned and called for a different object. by mdn
// Example of call without args
const theFirm = {
  title: 'The Firm',
  author: 'John Grisham',
  yearOfRelease: 1991,
  getYearOfRelease() {
    return this.yearOfRelease;
  },
  introduceAuthor(message) {
    return `${this.author} ${message}`;
  },
};

console.log(theFirm.getYearOfRelease()); // prints 1991

const theDaVinciCode = {
  title: 'The Da Vinci Code',
  author: 'Dan Brown',
  yearOfRelease: 2003,
};
// here we are using grtYearOfRelease function from theFirm to call the values from
//other  object theDaVinciCode, that is function borrowing or Borrowing another object’s methods
console.log(theFirm.getYearOfRelease.call(theDaVinciCode)); // prints 2003

// Example of call with args

console.log(theFirm.introduceAuthor('has written a total of 100 books'));

console.log(theFirm.introduceAuthor.call(theDaVinciCode, 'is an American author best known for this thriller novels'))

// ///////////////////////////////////////////////////////////////////////
// ////////////////apply
// //////////////////////////////////////////////////////////////////////////////
// Example of apply without args
const theFirm2 = {
    title: 'The Firm',
    author: 'John Grisham',
    yearOfRelease: 1991,
    getYearOfRelease() {
      return this.yearOfRelease;
    },
    introduceAuthor(message) {
      return `${this.author} ${message}`;
    },
  };
  
  console.log(theFirm2.getYearOfRelease()); // prints 1991
  
  const theDaVinciCode2 = {
    title: 'The Da Vinci Code',
    author: 'Dan Brown',
    yearOfRelease: 2003,
  };
  
  console.log(theFirm2.getYearOfRelease.apply(theDaVinciCode)); // prints 2003
  
  // Example of apply with args
  
  console.log(theFirm2.introduceAuthor('has written a total of 100 books'));
  console.log(theFirm2.introduceAuthor.apply(theDaVinciCode, ['is an American author best known for this thriller novels']));

  // ///////////////////////////////////////////////////////////////////////
// ////////////////bind bind  returns a function
// //////////////////////////////////////////////////////////////////////////////

const theFirm3 = {
    title: 'The Firm',
    author: 'John Grisham',
    yearOfRelease: 1991,
    getYearOfRelease() {
      return this.yearOfRelease;
    },
    introduceAuthor(message) {
      return `${this.author} ${message}`;
    },
  };
  
  const theDaVinciCode3 = {
    title: 'The Da Vinci Code',
    author: 'Dan Brown',
    yearOfRelease: 2003,
  };
  
  // using bind
  const boundFunction = theFirm3.getYearOfRelease.bind(theDaVinciCode3);
  
  boundFunction(); // prints 2003
console.log(boundFunction())