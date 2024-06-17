3.//Design a function that takes a string or sequence of characters as input and
//returns the character that appears most frequently.
//Eg 11189 => '1'
//hello => l

function mostFrequentChar(str) {
    var charMap = {};
    var maxChar = '';
    var max = 0;
    for (var char of str) {
        if (charMap[char]) {
            charMap[char]++; 
        } else {
            charMap[char] = 1;
        }
    }
    for (var char in charMap) {
        if (charMap[char] > max) {
            max = charMap[char];
            maxChar = char;
        }
    }
    return maxChar;
}
console.log(mostFrequentChar('11189'));
console.log(mostFrequentChar('hello'));