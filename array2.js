var myArray = new Array();
//Generate random three digit number between 100 and 999
for (var i = 0; i < 10; i++) {
    myArray[i] = Math.floor(Math.random() * 900) + 100;
}
//Sort the array
myArray.sort();
myArray.forEach(i => console.log(i));
//Maximum is the last element
var max = myArray[9];
//Minimum is the first element
var min = myArray[0];
//Remove the max and min
for (var i = 0; i < myArray.length; i++) {
    if (myArray[i] == max || myArray[i] == min) {
        myArray.splice(i, 1);
        i--;
    }
}
//Store the next max and min
var max = myArray[myArray.length - 1];
var min = myArray[0];
//Print the max and min
console.log("Second largest element is : " + max);
console.log("Second smallest element is : " + min);