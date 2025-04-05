const person = {
    firstName: "John",
    lastName: "Doe",
    age: 50
  };
  
  // Destructuring
  let {firstName, lastName, dept='MCA'} = person;

  console.log(dept);

