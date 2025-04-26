function palindrome() {
    let word = "madam";
    let clean = word.toLowerCase().replace(/\s+/g, '');
    let reversed = clean.split('').reverse().join('');
    console.log(clean);
    console.log(reversed);

    if (clean === reversed) {
        console.log("This is a palindrome");
    }else{
        console.log("This is not a palindrome");
    }
}
palindrome();