var myArray = new Array();
//Generate random three digit numbers from 100 to 999
for (var i = 0; i < 10; i++) {
    myArray[i] = Math.floor(Math.random() * 900) + 100;
}
myArray.forEach(i => console.log(i));
//Maximum
var max = Math.max(...myArray);
//Minimum
var min = Math.min(...myArray);
//Remove maximum and minimum
for (var i = 0; i < myArray.length; i++) {
    if (myArray[i] == max || myArray[i] == min) {
        myArray.splice(i, 1);
        i--;
    }
}
//Next maximum and minimum
var max = Math.max(...myArray);
var min = Math.min(...myArray);
//Print maximum and minimum
console.log("Second largest element is : " + max);
console.log("Second smallest element is : " + min);