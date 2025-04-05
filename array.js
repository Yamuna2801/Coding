function arrayManipulator(){
    let iceCream = ['Black current', 'Vannila', 'Strawberry', 'Butterscotch', 'Chocolate'];
    console.log(iceCream.length);
    console.log(iceCream.slice(2));
    console.log("-------- Welcome to cream shop! ---------");
    for (let i = 0; i < iceCream.length; i++){
        if (iceCream[i] === 'Vannila'){
            console.log("Right now Black current not available");
        }else{
            console.log(i + 1 + ". " + iceCream[i]);
        }
    }
}
arrayManipulator();

// function arrayManipulator2(){
//     let iceCream = ['Black current', 'Vannila', 'Strawberry', 'ButterScotch', 'Chocolate'];
//     iceCream.forEach((data, index)=>{
//     console.log(index + 1 + ". " + data);
//     })
//     iceCream.map((data, index)=>{
//         console.log(index + 1 + ". " + data + " Ice cream");
//     })

// }
// arrayManipulator2();

function pricing(input) {
    let output = input.map(price => price + 50); 
    console.log(output); 

    let greaterThan400 = input.find(price => price > 200);
    let filter = input.filter(price => price > 200);
    console.log(filter);
    if (greaterThan400 !== undefined) {
        console.log("First price greater than 200:", greaterThan400);
    } else {
        console.log("No price greater than 400 found.");
    }
}

pricing([100, 200, 300, 400, 500]);
