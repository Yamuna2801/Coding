// Update, redeclare, hoisted

//console.log(a);   // undefined
var a = 5;
var a =10;


var a1;       // hoisted
//console.log(a1); // undefined
a1 = 5;

//update, not able to redeclare, not hoisted
//console.log(b);  // ❌ ReferenceError
let b = 10;

//not update, not redeclare, not hoisted
//console.log(b1);  // ❌ ReferenceError
const b1 = 10;


greet(); // Hello

function greet() {
  console.log("Hello");
}


//sayHi(); // ❌ TypeError: sayHi is not a function


var sayHi = function() {
   // console.log("Hi");
  };

  var x = 1;

function test() {
  console.log(x); // undefined
  var x = 2;
}

test();

console.log(name);
var name = "Yamuna";
