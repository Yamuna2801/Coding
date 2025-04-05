// function pricing(input) {
//     let output = input.map(price => price + 50); 
//     console.log(output); 

//     let greaterThan400 = input.find(price => price > 200);
//     let filter = input.filter(price => price > 200);
//     console.log(filter);
//     if (greaterThan400 !== undefined) {
//         console.log("First price greater than 200:", greaterThan400);
//     } else {
//         console.log("No price greater than 400 found.");
//     }
// }

// pricing([100, 200, 300, 400, 500]);
function pricing(input) {
    let output = input.map(price => price + 50);
    console.log(output);

    let greaterThan400 = input.find(price => price > 200);
    let filter = input.filter(price => price > 200);
    console.log(filter);
    if (greaterThan400 !== undefined) {
        console.log("First price greater than 200:", greaterThan400);
    }else{
        console.log("No price greater than 400 found.");
    }

}
pricing([100, 200, 300, 400, 500]);