// const person = {
//     firstName: "John",
//     lastName: "Doe",
//     age: 50
//   };
  
//   // Destructuring
//   let {firstName, lastName, dept='MCA'} = person;

//   console.log(dept);

let person = {
  firstName: "Yam",
  lastName: "Jas",
  age: 22
};

// Destructuring
let {firstName, lastName, dept= 'MCA'} = person;
console.log(firstName + lastName, dept);