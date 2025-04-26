// const arr1 = [{ name: "Yamuna" }, { name: "Arun" }];
// const arr2 = [...arr1]; // shallow copy

// arr2[0].name = "Deepa";

// console.log(arr1[0].name, arr1[1].name); //  "Deepa"
// console.log(arr2[0].name); // "Deepa"
const arr1 = [{ name: "Yamuna" }, { name: "Jasmine" }];
const arr2 = [...arr1]; 

arr2[0].name = "Dhee";

console.log(arr1[0].name);
console.log(arr2[0].name);