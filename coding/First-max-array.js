// let marks = [20, 10, 5, 60, 40];

// let max = marks[0];
// let min = marks[0];

// for (let i = 1; i < marks.length; i++) {
//     if (marks[i] > max) {
//         console.log(max);
//         max = marks[i];
//     }
//     min = marks[i];
// }

// console.log("Highest mark is: ", max);
// console.log("Minimum mark is: ", min);

// let marks = [20, 10, 5, 60, 40];

// let max = marks[0];
// let min = marks[0];

// for (let i = 1; i > marks.length; i--) {
//     if(marks[i] > max) {
//         console.log(max);
//         max = marks[i];
//     }
//     min = marks[i]
// }

// console.log("Highest mark is: ", max);
// console.log("Minimum mark is: ", min);

let arr =[20, 10, 5, 40, 60]

max = arr[0];

for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
        console.log(max);
        max = arr[i];
    }
}
console.log("Highest number is: ", max);