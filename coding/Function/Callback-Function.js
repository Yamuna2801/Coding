function greetUser(callback) {
  console.log("Hi, welcome!");
  callback(); // calling another function inside
}
function thankYou() {
  console.log("Thanks for visiting!");
}
greetUser(thankYou);
