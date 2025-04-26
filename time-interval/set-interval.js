
// let count = 0;
// let timer = setInterval(() => {
//   console.log("Repeating...", ++count);
//   if (count === 5) {
//     clearInterval(timer); // Stop it after 5 times
//   }
// }, 1000); // Every 1 second

let count = 0;
let timer = setInterval(() => {
  console.log("Repeating...", ++count);
  if (count === 5) {
    clearInterval(timer);
  }
}, 1000);