// let word = "Computer";
// let vowels = 0;
// let consonants = 0;

// word = word.toLowerCase(); // convert to small letters

// for (let letter of word) {
//   if ("aeiou".includes(letter)) {
//     vowels++; // it's a vowel
//   } else if (letter >= 'a' && letter <= 'z') {
//     consonants++; // it's a consonant
//   }
// }

// console.log("Vowels: " + vowels);
// console.log("Consonants: " + consonants);

  let word = "Pavithra";
  let vowels = "";
  let consonants = "";

  word = word.toLowerCase();

  for (let letter of word) {
    if ("aeiou".includes(letter)) {
      vowels++;
    }else{
      if (letter >= 'a' && letter <= 'z') {
        consonants++;
      }
    }
  }
console.log("Vowels: " + vowels);
console.log("Consonants: " + consonants);