// triangle,
//     *
//    ***
//   *****
//  *******
// rectangle,
// *********
// *********
// *********
// square
// *****
// *****
// *****


for(i=0; i<4; i++){
    if(i==0){
console.log("    *")
    }
    if(i==1){
        console.log("   ***")  
    }
    if(i==2){
        console.log("  *****")  
    }
    if(i==2){
        console.log(" *******")  
    }
}


let row = 4;  

for (let i = 0; i < row; i++) {  
    let line = "";  
    for (let j = 0; j < row - i - 1; j++) {  
        line += " ";  
    }
    for (let j = 0; j < (2 * i) + 1; j++) {  
        line += "*";  
    }
    console.log(line);  
}

let row = 5;

for(let i = 0; i < row; i++){
    let line = "";
for (let j = 0; j < row -i -1; j++){
    line += " ";
}
for (let j = 0; j < (2 * i) + 1; j++){
    line += "*";
}
console.log(line);
}

//Square shape:
let size = 5; // Define the size of the square

for (let i = 0; i < size; i++) { 
    let row = "*".repeat(size); // Create a row of stars
    console.log(row); // Print the row
}


