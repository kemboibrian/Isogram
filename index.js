function isIsogram(str) {
    // Convert the input string to lowercase to make it case-insensitive
    const lowerCaseStr = str.toLowerCase();

    // Create a set to store unique characters
    const charSet = new Set();

    // iterate through each character in the string
    for (let char of lowerCaseStr) {
        // If the character is already in the set,it means it's not an isogram
        if (charSet.has(char)) {
            return false;
        }

        // Add the character to the set only if it's a letter
        if (char.match(/[a-z]/)) {
            charSet.add(char);
        }
    } 


    // If no repeating characters were found,then the string is an isogram
    return true;
}

// Test cases
console.log(isIsogram("Dermatoglyphics")); // should be  true
console.log(isIsogram("moose")); // should be false
console.log(isIsogram("aba")); // should be false 
