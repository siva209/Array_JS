const prompt = require('prompt-sync')();
let num = prompt("Please Number : ");
var factors = new Array();
while (num % 2 == 0) {
    factors.push(2);
    num = num / 2;
}
for (var i = 3; i <= num * num; i = i + 2) {
    while (num % i == 0) {
        num = num / i;
        factors.push(i);
    }
}
if (num > 2) {
    factors.push(2);
}
//Print the factors
console.log("The factors are :");
for (var i = 0; i < factors.length; i++) {
    console.log(factors[i]);
}