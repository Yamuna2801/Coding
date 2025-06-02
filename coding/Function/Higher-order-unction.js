function greet(callback) {
    console.log("Hi Welcome!");
callback();
}
function thankYou() {
    console.log("Thankyou for visiting!");
}
greet(thankYou);