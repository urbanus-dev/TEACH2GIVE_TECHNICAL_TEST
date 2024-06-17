// Design a function that reverses the digits of an integer. For example, 50
// should become 5 and -12 should become -21.

function reverseInt(n) {
    var NumStr= n.toString();
    var reversedNumStr = NumStr.split('').reverse().join('');
    var reversedNum = parseInt(reversedNumStr);
    return reversedNum*Math.sign(n);                           
}
console.log(reverseInt(50));
console.log(reverseInt(-12));