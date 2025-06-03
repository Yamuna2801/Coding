// // requirement - give number is prime or not
// //if user need prime less than 100
// // prime number - 2, 3, 5, 7,11,13, 17....
// // num > 1
// //num % 2 === 0           ->false

// // function reverseFunction(Student){
// //     let reverse = '';
// //    for (let i=Student.length -1; i>=0; i-- ){
// //     reverse += Student[i];
// //    }
// //    if (Student == reverse){
// //     console.log("Given user Student is a palindrome");
// //    }else{
// //     console.log("Given user Student is not a palindrome");
// //    }
// //    console.log(reverse);
// //    return reverse;
// // }
// // reverseFunction("Yamuna")

// // function primeOrNot(num){
// //         if(num % 2 !==0){
// //             console.log("Given user input is a Prime Number" + num);
// //         }else{
// //             console.log("Given user input is not a Prime Number" + num);
// //         }     
// // }
// // primeOrNot(5);

// //Arrayy methods
// //String methods

function primeOrNot(num) {
    let arrPrime = [];
    let arrNotPrime = [];
    for (let i = 0; i < num; i++) {
        if (i % 2 !==0) {
            arrPrime.push(i);
        }else{
            arrNotPrime.push(i);
        }
    }
    console.log(arrPrime + "Prime");
    console.log(arrNotPrime + "Not Prime");
}
primeOrNot(10);


