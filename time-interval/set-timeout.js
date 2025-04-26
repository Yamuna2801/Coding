// setTimeout(() => console.log("setTimeout"), 0);
// Promise.resolve().then(() => console.log("promise"));
// console.log("end");

// console.log("end") – synchronous

// promise.then() – microtask queue

// setTimeout() – macrotask queue

// setTimeout(() => {
//     console.log("Hello after 5 seconds");
//   }, 5000); // 5000ms = 5 seconds
  
setTimeout(function() {
  console.log("Hi!");
}, 3000); // Waits 3 seconds, then prints Hi!
