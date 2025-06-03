function fibonacci(input) {
    let a = 0, b = 1;

    for (let i = 0; i < input; i++) {
        console.log(a);
        let next = a + b;
        a = b;
        b = next;
    }
}
fibonacci(10);

// function fibonacci(input){
//     let a = 0;

//     for (let i = 0; i < input; i++) {
//         console.log(input[a]);
//     }
// }
// fibonacci(3);
 