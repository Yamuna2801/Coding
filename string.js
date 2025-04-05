
// output Web Developer!
function StringManipulator1(){
let input = "Web Development!";
let splitValue = input.split("");// string to array
let half = input.slice(0, 3);
let result = half.concat(" Developer!");
let stringVal = splitValue.toString();// array to string
let replaceVal = stringVal.replaceAll(",", "");
console.log(result);
console.log(splitValue);
console.log(stringVal);
console.log(replaceVal);
console.log(replaceVal.length);
console.log(replaceVal.charCodeAt(2));
}
StringManipulator1();

let nameInput = "pavithra";
for(i=0; i<=nameInput.length-1; i++){
    console.log(nameInput[i]);
    }

function stringManipulator2(){
    let input = "Web Development!";
    let splitValue = input.split("");
    let half = input.slice(0, 3);
    let result = half.concat(" Developer!");
    let stringVal = splitValue.toString();
    let replaceVal = stringVal.replaceAll(",","");
    console.log(splitValue);
    console.log(result);
    console.log(stringVal);
    console.log(replaceVal);
    console.log(replaceVal.length);
    console.log(replaceVal.charCodeAt(2));
}
    stringManipulator2();

function stringManipulator3(){
    let input = "Frontend Development!";
    let splitValue = input.split("");
    let half = input.slice(0, 8);
    let result = half.concat(" Developer!");
    let stringValue = splitValue.toString();
    let replaceValue = stringValue.replaceAll(",","");

    console.log(splitValue);
    console.log(result);
    console.log(stringValue);
    console.log(replaceValue);
    console.log(replaceValue.length);
}

stringManipulator3();















// let nameInput = "Pavithra";
// for (let i = nameInput.length; i >= 0; i--){
//     console.log(nameInput[i]);
// }