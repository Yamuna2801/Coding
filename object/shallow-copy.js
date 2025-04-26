// const obj1 = { name: "Yamuna", address: { city: "Chennai" } }; // pass by value
// const obj2 = { ...obj1 }; // pass by reference

// obj2.address.city = "Madurai";

// console.log(obj1.address.city); // Madurai 


// const arr1 = [1, 2, 3];
// const arr2 = [...arr1]; // shallow copy

// arr2[0] = 99;

// console.log(arr1); // [1, 2, 3]
// console.log(arr2); // [99, 2, 3]


const obj1 = { name: "Yamuna", address: { city: "Chennai"} };
const obj2 = {...obj1 };

obj2.address.city = "Madurai";
console.log(obj1.address.city);
