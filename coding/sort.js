// let students = [
//     { name: "Yamuna", score: 85 },
//     { name: "Jasmine", score: 75 },
//     { name: "Pavithra", score: 95 }
//   ];
  
//   // Sort by score (low to high)
//   students.sort(function(a, b) {
//     return a.score - b.score;
//   });
  
//   console.log("Sorted by score:");
//   console.log(students);




  
// //   let numbers = [4, 1, 7, 3];

// // numbers.sort(function(a, b) {
// //   return a - b;
// // });

// // console.log(numbers);  // Output: [1, 3, 4, 7]


// let numbers = [4, 1, 7, 3];
// for (let i = 0; i < numbers.length; i++) {
//   console.log(numbers[i]);
// }

// function sortNumbers() {
//   let input = "Software Development";
//   let splitValue = input.split("");
//   let half = input.slice(0, 8);
//   let result = half.concat("Development");
//   let stringValue = splitValue.toString();
//   let replaceValue = stringValue.replaceAll(",","");
//   let sortedLetters = input.split("").sort().join("");
//   console.log(splitValue);
//   console.log(result);
//   console.log(stringValue);
//   console.log(replaceValue);
//   console.log(replaceValue.length);
//   console.log(sortedLetters);
// }
// sortNumbers();

// let students = [3, 8, 1];
// Students.sort();              //outcome: [1, 3, 8]
// Students.sort(function(a, b){
//   return b - a;
// });
let Students = [
  {id: 3, name: "Yamuna"},
  {id: 8, name: "Jasmine"},
  {id: 1, name: "Pavithra"},
]
Students.sort((a, b) => {

  const nameA = a.name.toLowerCase();
  const nameB = b.name.toLowerCase();
  // a < b => -1

  if (nameA < nameB) return -1;
  // a > b => 1
  if (nameA > nameB) return 1
  // a === b => 0
  return 0;
});
console.log(Students);

