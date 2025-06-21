let word = "Hello";
let vowels = 0;
let consonants = 0;

for (let i = 0; i < word.length; i++) {
  let ch = word[i];

  if (ch === 'a' || ch ==='e' || ch === 'i' || ch === 'o' || ch === 'u') {
    vowels++;
  }else{
    consonants++;
  }
}

console.log("Vowels: " + vowels);
console.log("Consonants: " + consonants);

    