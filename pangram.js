// Design a function that determines whether a given string is a pangram. A
// pangram is a sentence or phrase containing every letter of the alphabet at
// least once. Punctuation and case are typically ignored. For example, the
// string "The quick brown fox jumps over the lazy dog" is a pangram, while
// "Hello, world!" is not.

function isPangram(str){
    str=str.toLowerCase();
    var pangramMap={};
    for(var pangram of str){
        if(pangram>='a' && pangram<='z'){
            pangramMap[pangram]=1;
        }
    }
return Object.keys(pangramMap).length===26;
}
console.log(isPangram('The quick brown fox jumps over the lazy DOG'));
console.log(isPangram('Hello, world!'));
