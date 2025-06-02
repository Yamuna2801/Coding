let shoppingList = ["milk", "bread", "milk", "eggs", "bread"];

let uniqueItems = [...new Set(shoppingList)];

console.log("Shopping List (No Duplicates):", uniqueItems); // ['milk', 'bread', 'eggs']
