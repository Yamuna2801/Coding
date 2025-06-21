// let i = 1;

//   for (let i = 1; i <= 5; i++) {
//     result = "0";

//   for (let j = 1; j <= i; j++) {
//     result = result += "0";
//   }
// }
// console.log(result);

let size = 5;
for (let i=11; i>=0; i--) {
  let row1 = '';
  for (let j=6; j>=0; j--) {
    if (i <=j) {
      row1 += '*';
    }else{
      row1 += ' ';
    }
  }
  console.log(row1);
}
for (let i=1; i<11; i++) {
  let row2 = '';
  for (let j=1; j<=6; j++) {
    if (i <=j) {
      row2 += '*';
    }else{
      row2 += '';
    }
  }
  console.log(row2);
}
