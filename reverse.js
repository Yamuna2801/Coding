function reverseFunction(input){
    let reverse = '';
  for(let i=input.length - 1; i>=0; i--){
    reverse += input[i];
  }
  if(input == reverse){
    console.log("Given user input is a Palindrome");
  }else{
    console.log("Given user input is not a Palindrome");
  }
  console.log(reverse);
  return reverse;
}
reverseFunction("Pavithra");

//input - pavithra input[0] = p
//output - arhtivap
// amma - amma
//mom - mom
//dad - dad

